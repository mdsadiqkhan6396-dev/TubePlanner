import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { loadUserData, saveUserData, generateUserId, findUserByEmail } from "@/lib/storage";

interface StoredChannel {
    id: string;
    title: string;
    thumbnailUrl: string;
    subscriberCount: number;
    videoCount: number;
    accessToken: string;
    refreshToken?: string;
    connectedAt: string;
    accountEmail?: string;
    accountName?: string;
    isBrandAccount?: boolean;
}

interface PublicChannel {
    id: string;
    title: string;
    thumbnailUrl: string;
    subscriberCount: number;
    videoCount: number;
    isConnected: boolean;
    connectedAt: string;
    accountEmail?: string;
    accountName?: string;
    isBrandAccount?: boolean;
}

interface AccountGroup {
    email: string;
    name: string;
    channels: PublicChannel[];
}

// Check connection status for all channels
export async function GET() {
    try {
        const cookieStore = await cookies();
        const channelsData = cookieStore.get("yt_channels")?.value;
        const activeChannelId = cookieStore.get("yt_active_channel")?.value;
        const userIdCookie = cookieStore.get("yt_user_id")?.value;

        let storedChannels: StoredChannel[] = [];
        let persistentActiveChannelId: string | null = null;

        // First try cookie data
        if (channelsData) {
            try {
                storedChannels = JSON.parse(channelsData);
            } catch {
                storedChannels = [];
            }
        }

        // If no cookie data but have user ID, try to restore from persistent storage
        if (storedChannels.length === 0 && userIdCookie) {
            let userData = await loadUserData(userIdCookie);
            
            // If not found by ID and we have email from channels, try by email
            if (!userData && storedChannels.length > 0 && storedChannels[0].accountEmail) {
                userData = await findUserByEmail(storedChannels[0].accountEmail);
            }
            
            if (userData && userData.channels.length > 0) {
                storedChannels = userData.channels;
                persistentActiveChannelId = userData.activeChannelId;
                console.log("Restored", storedChannels.length, "channels from persistent storage");
            }
        }

        if (storedChannels.length === 0) {
            return NextResponse.json({ 
                channels: [], 
                accounts: [],
                activeChannelId: null 
            });
        }

        // Verify each channel's token and update info
        const validChannels: StoredChannel[] = [];
        const publicChannels: PublicChannel[] = [];

        for (const channel of storedChannels) {
            try {
                // Verify by fetching channel info using the specific channel ID
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channel.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${channel.accessToken}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    if (data.items && data.items.length > 0) {
                        const ytChannel = data.items[0];
                        // Get best available thumbnail (high > medium > default)
                        const thumbnails = ytChannel.snippet.thumbnails;
                        const thumbnailUrl = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || "";
                        
                        const updatedChannel: StoredChannel = {
                            ...channel,
                            title: ytChannel.snippet.title,
                            thumbnailUrl: thumbnailUrl,
                            subscriberCount: parseInt(ytChannel.statistics.subscriberCount || "0"),
                            videoCount: parseInt(ytChannel.statistics.videoCount || "0"),
                        };
                        validChannels.push(updatedChannel);
                        publicChannels.push({
                            id: updatedChannel.id,
                            title: updatedChannel.title,
                            thumbnailUrl: updatedChannel.thumbnailUrl,
                            subscriberCount: updatedChannel.subscriberCount,
                            videoCount: updatedChannel.videoCount,
                            isConnected: true,
                            connectedAt: updatedChannel.connectedAt,
                            accountEmail: updatedChannel.accountEmail,
                            accountName: updatedChannel.accountName,
                            isBrandAccount: updatedChannel.isBrandAccount,
                        });
                    }
                }
                // If token invalid, channel won't be added to validChannels
            } catch (error) {
                console.error(`Failed to verify channel ${channel.id}:`, error);
            }
        }

        // Group channels by account email
        const accountsMap = new Map<string, AccountGroup>();
        for (const channel of publicChannels) {
            const email = channel.accountEmail || "unknown";
            if (!accountsMap.has(email)) {
                accountsMap.set(email, {
                    email,
                    name: channel.accountName || email,
                    channels: [],
                });
            }
            accountsMap.get(email)!.channels.push(channel);
        }
        const accounts = Array.from(accountsMap.values());

        // Determine active channel - use cookie, then persistent, then first valid
        let finalActiveChannelId: string | null = activeChannelId || null;
        if (!finalActiveChannelId || !validChannels.some(c => c.id === finalActiveChannelId)) {
            finalActiveChannelId = persistentActiveChannelId && validChannels.some(c => c.id === persistentActiveChannelId)
                ? persistentActiveChannelId
                : validChannels[0]?.id || null;
        }

        // Update stored channels if any were removed
        const res = NextResponse.json({
            channels: publicChannels,
            accounts,
            activeChannelId: finalActiveChannelId,
        });

        // Always refresh cookies with extended expiry (1 year)
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax" as const,
            maxAge: 60 * 60 * 24 * 365, // 1 year
            path: "/",
        };

        if (validChannels.length > 0) {
            res.cookies.set("yt_channels", JSON.stringify(validChannels), cookieOptions);
            
            // Also update persistent storage
            if (userIdCookie) {
                const userData = await loadUserData(userIdCookie);
                if (userData) {
                    userData.channels = validChannels as import("@/lib/storage").StoredChannel[];
                    userData.activeChannelId = finalActiveChannelId ?? null;
                    await saveUserData(userData);
                }
            } else if (validChannels[0]?.accountEmail) {
                // Set user ID cookie if not present but have email
                const userId = generateUserId(validChannels[0].accountEmail);
                res.cookies.set("yt_user_id", userId, {
                    ...cookieOptions,
                    httpOnly: false,
                });
            }
        }

        return res;
    } catch (error) {
        console.error("Auth status check error:", error);
        return NextResponse.json({ 
            channels: [], 
            activeChannelId: null 
        });
    }
}
