// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Video Upload API (Secure)
// ═══════════════════════════════════════════════════════════════════════════════

import { NextRequest, NextResponse } from "next/server";
import { applySecurity, sanitizeVideoMetadata, Errors } from "@/lib/security";
import { createYouTubeAPI, YouTubeAPIError } from "@/lib/youtube";
import { validateVideoFile, validateThumbnailFile } from "@/lib/cloud-storage";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 minutes for video upload

export async function POST(req: NextRequest) {
  // ─── Security Checks ─────────────────────────────────────────
  const security = await applySecurity(req, {
    requireAuth: true,
    rateLimit: "upload",
    methods: ["POST"],
  });
  
  if ("error" in security) {
    return security.error;
  }
  
  const { userId } = security;
  if (!userId) {
    return Errors.unauthorized();
  }
  
  try {
    // ─── Parse Form Data ─────────────────────────────────────────
    const formData = await req.formData();
    
    const video = formData.get("video") as File | null;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const tagsString = formData.get("tags") as string;
    const categoryId = formData.get("categoryId") as string || "22";
    const privacyStatus = formData.get("privacyStatus") as "private" | "public" | "unlisted" || "private";
    const scheduledTime = formData.get("scheduledTime") as string | null;
    const thumbnail = formData.get("thumbnail") as File | null;
    const channelId = formData.get("channelId") as string | null;
    const madeForKids = formData.get("madeForKids") === "true";
    const license = formData.get("license") as "youtube" | "creativeCommon" || "youtube";
    
    // ─── Validation ──────────────────────────────────────────────
    if (!video) {
      return Errors.badRequest("No video file provided");
    }
    
    const videoValidation = validateVideoFile(video, video.name);
    if (!videoValidation.valid) {
      return Errors.badRequest(videoValidation.error!);
    }
    
    if (thumbnail) {
      const thumbnailValidation = validateThumbnailFile(thumbnail);
      if (!thumbnailValidation.valid) {
        return Errors.badRequest(thumbnailValidation.error!);
      }
    }
    
    // Sanitize metadata
    let tags: string[] = [];
    try {
      tags = tagsString ? JSON.parse(tagsString) : [];
    } catch {
      tags = [];
    }
    
    const sanitized = sanitizeVideoMetadata({
      title,
      description,
      tags,
    });
    
    if (!sanitized.title) {
      return Errors.badRequest("Title is required");
    }
    
    // ─── Get Channel ─────────────────────────────────────────────
    const channel = await db.youTubeChannel.findFirst({
      where: {
        userId,
        ...(channelId && { id: channelId }),
        isActive: true,
      },
    });
    
    if (!channel) {
      return Errors.badRequest("No active channel found. Please connect a YouTube channel.");
    }
    
    // ─── Upload to YouTube ───────────────────────────────────────
    const youtube = createYouTubeAPI(userId);
    
    const videoId = await youtube.uploadVideo(video, {
      title: sanitized.title,
      description: sanitized.description,
      tags: sanitized.tags,
      categoryId,
      privacyStatus: scheduledTime ? "private" : privacyStatus,
      scheduledTime: scheduledTime || undefined,
      madeForKids,
      license,
    });
    
    // ─── Upload Thumbnail ────────────────────────────────────────
    if (thumbnail) {
      try {
        await youtube.setThumbnail(videoId, thumbnail);
      } catch (error) {
        console.error("Thumbnail upload failed:", error);
        // Continue - video is still uploaded
      }
    }
    
    // ─── Save to Database ────────────────────────────────────────
    await db.video.create({
      data: {
        youtubeId: videoId,
        userId,
        channelId: channel.id,
        title: sanitized.title,
        description: sanitized.description,
        tags: sanitized.tags,
        categoryId,
        privacyStatus: privacyStatus.toUpperCase() as any,
        madeForKids: madeForKids ? "YES" : "NO",
        license: license === "creativeCommon" ? "CREATIVE_COMMON" : "YOUTUBE",
        status: scheduledTime ? "SCHEDULED" : "PUBLISHED",
        scheduledFor: scheduledTime ? new Date(scheduledTime) : null,
        publishedAt: scheduledTime ? null : new Date(),
      },
    });
    
    // ─── Track API Usage ─────────────────────────────────────────
    await db.apiUsage.create({
      data: {
        userId,
        endpoint: "/api/video-scheduler/upload",
        method: "POST",
        quotaUsed: 1600, // Video upload quota
      },
    });
    
    return NextResponse.json({
      success: true,
      videoId,
      message: scheduledTime 
        ? `Video scheduled for ${new Date(scheduledTime).toLocaleString()}`
        : "Video uploaded successfully",
    });
    
  } catch (error) {
    console.error("Upload error:", error);
    
    if (error instanceof YouTubeAPIError) {
      if (error.status === 401) {
        return Errors.unauthorized();
      }
      return NextResponse.json(
        { error: error.message },
        { status: error.status }
      );
    }
    
    return Errors.internalError();
  }
}
