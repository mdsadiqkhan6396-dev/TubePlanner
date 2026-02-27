import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { setActiveChannel } from "@/lib/storage";

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
        const body = await req.json();
        const { channelId } = body;

        if (!channelId) {
            return NextResponse.json(
                { error: "Channel ID is required" },
                { status: 400 }
            );
        }

        const cookieStore = await cookies();
        const channelsData = cookieStore.get("yt_channels")?.value;
        const userId = cookieStore.get("yt_user_id")?.value;

        if (!channelsData) {
            return NextResponse.json(
                { error: "No channels connected" },
                { status: 400 }
            );
        }

        let channels: StoredChannel[] = [];
        try {
            channels = JSON.parse(channelsData);
        } catch {
            return NextResponse.json(
                { error: "Invalid channel data" },
                { status: 500 }
            );
        }

        // Verify the channel exists
        const channel = channels.find(c => c.id === channelId);
        if (!channel) {
            return NextResponse.json(
                { error: "Channel not found" },
                { status: 404 }
            );
        }

        // Update in database
        if (userId) {
            await setActiveChannel(userId, channelId);
        }

        const response = NextResponse.json({ 
            success: true, 
            activeChannelId: channelId,
            channel: {
                id: channel.id,
                title: channel.title,
                thumbnailUrl: channel.thumbnailUrl,
                subscriberCount: channel.subscriberCount,
                videoCount: channel.videoCount,
                isConnected: true,
                connectedAt: channel.connectedAt,
            }
        });

        response.cookies.set("yt_active_channel", channelId, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Set active channel error:", error);
        return NextResponse.json(
            { error: "Failed to set active channel" },
            { status: 500 }
        );
    }
}
