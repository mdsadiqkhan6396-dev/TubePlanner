import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

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
        const cookieStore = await cookies();
        const channelsData = cookieStore.get("yt_channels")?.value;
        const activeChannelId = cookieStore.get("yt_active_channel")?.value;

        if (!channelsData) {
            return NextResponse.json(
                { error: "Not authenticated. Please connect your YouTube account." },
                { status: 401 }
            );
        }

        let channels: StoredChannel[] = [];
        try {
            channels = JSON.parse(channelsData);
        } catch {
            return NextResponse.json(
                { error: "Invalid authentication data. Please reconnect your account." },
                { status: 401 }
            );
        }

        const formData = await req.formData();
        const channelId = formData.get("channelId") as string | null;

        // Find the channel to upload to (specified channel or active channel)
        const targetChannelId = channelId || activeChannelId;
        const targetChannel = channels.find(c => c.id === targetChannelId) || channels[0];

        if (!targetChannel) {
            return NextResponse.json(
                { error: "No channel available. Please connect a YouTube account." },
                { status: 401 }
            );
        }

        const accessToken = targetChannel.accessToken;

        const video = formData.get("video") as File;
        const title = formData.get("title") as string;
        const description = formData.get("description") as string || "";
        const tagsString = formData.get("tags") as string;
        const categoryId = formData.get("categoryId") as string || "22";
        const privacyStatus = formData.get("privacyStatus") as string || "private";
        const scheduledTime = formData.get("scheduledTime") as string | null;
        const thumbnail = formData.get("thumbnail") as File | null;

        // Advanced YouTube settings
        const madeForKids = formData.get("madeForKids") as string || "no";
        const ageRestriction = formData.get("ageRestriction") === "true";
        const hasPaidPromotion = formData.get("hasPaidPromotion") === "true";
        const commentsMode = formData.get("commentsMode") as string || "all";
        const showRatings = formData.get("showRatings") !== "false";
        const allowEmbedding = formData.get("allowEmbedding") !== "false";
        const publishToFeed = formData.get("publishToFeed") !== "false";
        const licenseType = formData.get("license") as string || "youtube";
        const language = formData.get("language") as string || "en";
        const isPremiere = formData.get("isPremiere") === "true";
        const recordingDate = formData.get("recordingDate") as string | null;
        const locationDescription = formData.get("locationDescription") as string | null;

        if (!video) {
            return NextResponse.json({ error: "No video file provided" }, { status: 400 });
        }

        // Vercel serverless has a hard 4.5 MB body limit — large videos must be uploaded
        // directly to YouTube from the client using a resumable upload session.
        const MAX_VIDEO_SIZE = 4 * 1024 * 1024; // 4 MB
        if (video.size > MAX_VIDEO_SIZE) {
            return NextResponse.json(
                {
                    error: "Video file is too large to upload through this server.",
                    details: `File size: ${(video.size / 1024 / 1024).toFixed(1)} MB. Maximum allowed: 4 MB. Please use YouTube Studio to upload larger videos, or contact support.`,
                },
                { status: 413 }
            );
        }

        if (!title?.trim()) {
            return NextResponse.json({ error: "Title is required" }, { status: 400 });
        }

        if (title.length > 100) {
            return NextResponse.json({ error: "Title must be 100 characters or less" }, { status: 400 });
        }

        if (description.length > 5000) {
            return NextResponse.json({ error: "Description must be 5000 characters or less" }, { status: 400 });
        }

        // Parse tags
        let tags: string[] = [];
        try {
            tags = tagsString ? JSON.parse(tagsString) : [];
        } catch {
            tags = [];
        }

        // Validate total tag characters (YouTube limit: 500)
        const totalTagChars = tags.join(",").length;
        if (totalTagChars > 500) {
            return NextResponse.json({ error: "Tags total must be under 500 characters" }, { status: 400 });
        }

        // Build video metadata with all YouTube settings
        const videoMetadata: Record<string, unknown> = {
            snippet: {
                title: title.trim(),
                description: description.trim(),
                tags: tags,
                categoryId: categoryId,
                defaultLanguage: language,
                defaultAudioLanguage: language,
            },
            status: {
                privacyStatus: scheduledTime ? "private" : privacyStatus,
                publishAt: scheduledTime || undefined,
                selfDeclaredMadeForKids: madeForKids === "yes",
                license: licenseType === "creativeCommon" ? "creativeCommon" : "youtube",
                embeddable: allowEmbedding,
                publicStatsViewable: showRatings,
            },
        };

        // Add recording details if provided
        if (recordingDate || locationDescription) {
            (videoMetadata as Record<string, unknown>).recordingDetails = {
                ...(recordingDate ? { recordingDate: new Date(recordingDate).toISOString() } : {}),
                ...(locationDescription ? { locationDescription } : {}),
            };
        }

        // Determine API parts based on what we're sending
        const parts = ["snippet", "status"];
        if (recordingDate || locationDescription) {
            parts.push("recordingDetails");
        }

        // Step 1: Initialize resumable upload
        const initResponse = await fetch(
            `https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=${parts.join(",")}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    "X-Upload-Content-Length": video.size.toString(),
                    "X-Upload-Content-Type": video.type,
                },
                body: JSON.stringify(videoMetadata),
            }
        );

        if (!initResponse.ok) {
            const errorData = await initResponse.json();
            console.error("Upload init error:", errorData);

            if (initResponse.status === 401) {
                return NextResponse.json(
                    { error: "Authentication expired. Please reconnect your YouTube account." },
                    { status: 401 }
                );
            }

            return NextResponse.json(
                { error: errorData.error?.message || "Failed to initialize upload" },
                { status: initResponse.status }
            );
        }

        const uploadUrl = initResponse.headers.get("location");
        if (!uploadUrl) {
            return NextResponse.json(
                { error: "Failed to get upload URL" },
                { status: 500 }
            );
        }

        // Step 2: Upload the video
        const videoBuffer = await video.arrayBuffer();
        const uploadResponse = await fetch(uploadUrl, {
            method: "PUT",
            headers: {
                "Content-Type": video.type,
                "Content-Length": video.size.toString(),
            },
            body: videoBuffer,
        });

        if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json();
            console.error("Video upload error:", errorData);
            return NextResponse.json(
                { error: errorData.error?.message || "Failed to upload video" },
                { status: uploadResponse.status }
            );
        }

        const uploadResult = await uploadResponse.json();
        const videoId = uploadResult.id;

        // Step 3: Upload thumbnail if provided
        let thumbnailUrl = null;
        if (thumbnail && videoId) {
            try {
                const thumbnailBuffer = await thumbnail.arrayBuffer();
                const thumbnailResponse = await fetch(
                    `https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId=${videoId}`,
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-Type": thumbnail.type,
                        },
                        body: thumbnailBuffer,
                    }
                );

                if (thumbnailResponse.ok) {
                    const thumbnailResult = await thumbnailResponse.json();
                    thumbnailUrl = thumbnailResult.items?.[0]?.default?.url;
                } else {
                    console.warn("Thumbnail upload failed, continuing without custom thumbnail");
                }
            } catch (error) {
                console.warn("Thumbnail upload error:", error);
            }
        }

        return NextResponse.json({
            success: true,
            videoId: videoId,
            thumbnailUrl: thumbnailUrl || uploadResult.snippet?.thumbnails?.default?.url,
            title: uploadResult.snippet?.title,
            scheduledTime: scheduledTime,
            privacyStatus: uploadResult.status?.privacyStatus,
        });

    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json(
            { error: "An error occurred during upload. Please try again." },
            { status: 500 }
        );
    }
}
