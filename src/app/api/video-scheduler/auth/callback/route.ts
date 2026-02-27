import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getOrCreateUser, generateUserId, saveUserData, StoredChannel as PersistentChannel } from "@/lib/storage";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/api/video-scheduler/auth/callback";

interface GoogleAccount {
    email: string;
    name: string;
    picture?: string;
}

interface StoredChannel {
    id: string;
    title: string;
    thumbnailUrl: string;
    subscriberCount: number;
    videoCount: number;
    accessToken: string;
    refreshToken?: string;
    connectedAt: string;
    // Account info
    accountEmail: string;
    accountName: string;
    isBrandAccount: boolean;
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    // Handle OAuth errors
    if (error) {
        console.error("OAuth error:", error);
        return NextResponse.redirect(new URL("/video-scheduler?error=auth_denied", req.url));
    }

    if (!code) {
        return NextResponse.redirect(new URL("/video-scheduler?error=no_code", req.url));
    }

    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
        console.error("Missing OAuth credentials");
        return NextResponse.redirect(new URL("/video-scheduler?error=config_error", req.url));
    }

    try {
        // Exchange code for tokens
        const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                code,
                client_id: GOOGLE_CLIENT_ID,
                client_secret: GOOGLE_CLIENT_SECRET,
                redirect_uri: REDIRECT_URI,
                grant_type: "authorization_code",
            }),
        });

        if (!tokenResponse.ok) {
            const errorData = await tokenResponse.json();
            console.error("Token exchange error:", errorData);
            return NextResponse.redirect(new URL("/video-scheduler?error=token_error", req.url));
        }

        const tokens = await tokenResponse.json();

        // Get Google account info (email, name)
        let accountInfo: GoogleAccount = { email: "", name: "" };
        try {
            const userInfoResponse = await fetch(
                "https://www.googleapis.com/oauth2/v2/userinfo",
                {
                    headers: {
                        Authorization: `Bearer ${tokens.access_token}`,
                    },
                }
            );
            if (userInfoResponse.ok) {
                const userInfo = await userInfoResponse.json();
                accountInfo = {
                    email: userInfo.email || "",
                    name: userInfo.name || userInfo.email || "",
                    picture: userInfo.picture,
                };
            }
        } catch (e) {
            console.warn("Failed to get user info:", e);
        }

        // Get user's personal channel (mine=true)
        const channelResponse = await fetch(
            "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&mine=true",
            {
                headers: {
                    Authorization: `Bearer ${tokens.access_token}`,
                },
            }
        );

        const newChannels: StoredChannel[] = [];

        if (channelResponse.ok) {
            const channelResult = await channelResponse.json();
            if (channelResult.items && channelResult.items.length > 0) {
                for (const channel of channelResult.items) {
                    // Get best available thumbnail (high > medium > default)
                    const thumbnails = channel.snippet.thumbnails;
                    const thumbnailUrl = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || "";
                    
                    newChannels.push({
                        id: channel.id,
                        title: channel.snippet.title,
                        thumbnailUrl: thumbnailUrl,
                        subscriberCount: parseInt(channel.statistics?.subscriberCount || "0"),
                        videoCount: parseInt(channel.statistics?.videoCount || "0"),
                        accessToken: tokens.access_token,
                        refreshToken: tokens.refresh_token,
                        connectedAt: new Date().toISOString(),
                        accountEmail: accountInfo.email,
                        accountName: accountInfo.name,
                        isBrandAccount: channel.snippet.title !== accountInfo.name,
                    });
                }
            }
        }

        // Also try to get brand/managed channels
        try {
            const managedResponse = await fetch(
                "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&managedByMe=true&maxResults=50",
                {
                    headers: {
                        Authorization: `Bearer ${tokens.access_token}`,
                    },
                }
            );

            if (managedResponse.ok) {
                const managedResult = await managedResponse.json();
                if (managedResult.items && managedResult.items.length > 0) {
                    for (const channel of managedResult.items) {
                        // Avoid duplicates
                        if (!newChannels.some(c => c.id === channel.id)) {
                            // Get best available thumbnail
                            const thumbnails = channel.snippet.thumbnails;
                            const thumbnailUrl = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || "";
                            
                            newChannels.push({
                                id: channel.id,
                                title: channel.snippet.title,
                                thumbnailUrl: thumbnailUrl,
                                subscriberCount: parseInt(channel.statistics?.subscriberCount || "0"),
                                videoCount: parseInt(channel.statistics?.videoCount || "0"),
                                accessToken: tokens.access_token,
                                refreshToken: tokens.refresh_token,
                                connectedAt: new Date().toISOString(),
                                accountEmail: accountInfo.email,
                                accountName: accountInfo.name,
                                isBrandAccount: true,
                            });
                        }
                    }
                }
            }
        } catch (e) {
            console.warn("Failed to get managed channels:", e);
        }

        if (newChannels.length === 0) {
            return NextResponse.redirect(new URL("/video-scheduler?error=no_channel", req.url));
        }

        // Get existing channels from cookies
        const cookieStore = await cookies();
        const existingChannelsData = cookieStore.get("yt_channels")?.value;
        let channels: StoredChannel[] = [];

        if (existingChannelsData) {
            try {
                channels = JSON.parse(existingChannelsData);
            } catch {
                channels = [];
            }
        }

        // Add or update channels
        for (const newChannel of newChannels) {
            const existingIndex = channels.findIndex(c => c.id === newChannel.id);
            if (existingIndex >= 0) {
                // Update existing channel with new tokens
                channels[existingIndex] = newChannel;
            } else {
                // Add new channel
                channels.push(newChannel);
            }
        }

        // ════════════════════════════════════════════════════════════
        // PERSIST USER DATA TO FILE STORAGE
        // ════════════════════════════════════════════════════════════
        const userData = await getOrCreateUser(accountInfo.email);
        const userId = userData.id; // Use database ID, not hash
        
        // Update channels in persistent storage
        for (const newChannel of newChannels) {
            const existingIdx = userData.channels.findIndex(c => c.id === newChannel.id);
            const persistentChannel: PersistentChannel = {
                id: newChannel.id,
                title: newChannel.title,
                thumbnailUrl: newChannel.thumbnailUrl,
                subscriberCount: newChannel.subscriberCount,
                videoCount: newChannel.videoCount,
                accessToken: newChannel.accessToken,
                refreshToken: newChannel.refreshToken,
                connectedAt: newChannel.connectedAt,
                accountEmail: newChannel.accountEmail,
                accountName: newChannel.accountName,
                isBrandAccount: newChannel.isBrandAccount,
            };
            
            if (existingIdx >= 0) {
                userData.channels[existingIdx] = persistentChannel;
            } else {
                userData.channels.push(persistentChannel);
            }
        }
        
        // Set active channel if not set
        if (!userData.activeChannelId || !userData.channels.some(c => c.id === userData.activeChannelId)) {
            userData.activeChannelId = newChannels[0].id;
        }
        
        // Save to persistent storage
        await saveUserData(userData);

        // Create response with redirect
        const addedCount = newChannels.length;
        const response = NextResponse.redirect(
            new URL(`/video-scheduler?connected=true&added=${addedCount}`, req.url)
        );

        // Cookie options - extend to 1 year for persistence
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax" as const,
            maxAge: 60 * 60 * 24 * 365, // 1 year
            path: "/",
        };

        // Store all channels in cookie (as backup)
        response.cookies.set("yt_channels", JSON.stringify(channels), cookieOptions);
        
        // Store user ID cookie for persistent identification
        response.cookies.set("yt_user_id", userId, {
            ...cookieOptions,
            httpOnly: false, // Allow client access for data sync
        });

        // Set the first new channel as active (if no active channel set)
        const currentActive = cookieStore.get("yt_active_channel")?.value;
        if (!currentActive || !channels.some(c => c.id === currentActive)) {
            response.cookies.set("yt_active_channel", newChannels[0].id, {
                ...cookieOptions,
                httpOnly: false,
            });
        }

        return response;
    } catch (error) {
        console.error("OAuth callback error:", error);
        return NextResponse.redirect(new URL("/video-scheduler?error=callback_error", req.url));
    }
}
