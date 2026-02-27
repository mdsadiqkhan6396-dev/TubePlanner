import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteChannel, loadUserData, setActiveChannel } from "@/lib/storage";

interface StoredChannel {
    id: string;
    title: string;
    thumbnailUrl: string;
    subscriberCount: number;
    videoCount: number;
    accessToken: string;
    refreshToken?: string;
    connectedAt: string;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => ({}));
        const channelId = body.channelId;

        const cookieStore = await cookies();
        const channelsData = cookieStore.get("yt_channels")?.value;
        const activeChannelId = cookieStore.get("yt_active_channel")?.value;
        const userId = cookieStore.get("yt_user_id")?.value;

        if (!channelsData) {
            return NextResponse.json({ success: true, channels: [] });
        }

        let channels: StoredChannel[] = [];
        try {
            channels = JSON.parse(channelsData);
        } catch {
            const response = NextResponse.json({ success: true, channels: [] });
            response.cookies.delete("yt_channels");
            response.cookies.delete("yt_active_channel");
            return response;
        }

        // If no channelId specified, disconnect all channels
        if (!channelId) {
            // Delete all channels from database
            if (userId) {
                for (const ch of channels) {
                    await deleteChannel(userId, ch.id);
                }
            }
            const response = NextResponse.json({ success: true, channels: [] });
            response.cookies.delete("yt_channels");
            response.cookies.delete("yt_active_channel");
            return response;
        }

        // Remove specific channel from database
        if (userId) {
            await deleteChannel(userId, channelId);
        }

        // Remove specific channel from cookies
        const updatedChannels = channels.filter(c => c.id !== channelId);
        const response = NextResponse.json({ 
            success: true, 
            channels: updatedChannels.map(c => ({
                id: c.id,
                title: c.title,
                thumbnailUrl: c.thumbnailUrl,
                subscriberCount: c.subscriberCount,
                videoCount: c.videoCount,
                isConnected: true,
                connectedAt: c.connectedAt,
            }))
        });

        if (updatedChannels.length === 0) {
            response.cookies.delete("yt_channels");
            response.cookies.delete("yt_active_channel");
        } else {
            response.cookies.set("yt_channels", JSON.stringify(updatedChannels), {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 24 * 30,
                path: "/",
            });

            // If we removed the active channel, set a new one
            if (activeChannelId === channelId) {
                response.cookies.set("yt_active_channel", updatedChannels[0].id, {
                    httpOnly: false,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "lax",
                    maxAge: 60 * 60 * 24 * 30,
                    path: "/",
                });
            }
        }

        return response;
    } catch (error) {
        console.error("Disconnect error:", error);
        return NextResponse.json({ error: "Failed to disconnect" }, { status: 500 });
    }
}
