// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Channel Analytics API (Secure)
// ═══════════════════════════════════════════════════════════════════════════════

import { NextRequest, NextResponse } from "next/server";
import { applySecurity, Errors } from "@/lib/security";
import { createYouTubeAPI, YouTubeAPIError } from "@/lib/youtube";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  // ─── Security Checks ─────────────────────────────────────────
  const security = await applySecurity(req, {
    requireAuth: true,
    rateLimit: "analytics",
    methods: ["GET"],
  });
  
  if ("error" in security) {
    return security.error;
  }
  
  const { userId } = security;
  if (!userId) {
    return Errors.unauthorized();
  }
  
  try {
    const { searchParams } = new URL(req.url);
    const channelId = searchParams.get("channelId");
    const period = searchParams.get("period") || "28";
    
    if (!channelId) {
      return Errors.badRequest("channelId is required");
    }
    
    // Verify channel belongs to user
    const channel = await db.youTubeChannel.findFirst({
      where: {
        id: channelId,
        userId,
        isActive: true,
      },
    });
    
    if (!channel) {
      return Errors.notFound("Channel");
    }
    
    // Calculate date range
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(period));
    
    const startDateStr = startDate.toISOString().split("T")[0];
    const endDateStr = endDate.toISOString().split("T")[0];
    
    // Fetch analytics
    const youtube = createYouTubeAPI(userId);
    
    const [channelInfo, analytics, topVideos] = await Promise.all([
      youtube.getChannel(channelId),
      youtube.getAnalytics(channelId, startDateStr, endDateStr),
      youtube.getTopVideos(channelId, startDateStr, endDateStr),
    ]);
    
    // Track API usage
    await db.apiUsage.create({
      data: {
        userId,
        endpoint: "/api/video-scheduler/channel-analytics",
        method: "GET",
        quotaUsed: 5, // Multiple API calls
      },
    });
    
    // Update cached stats
    if (channelInfo) {
      await db.youTubeChannel.update({
        where: { id: channelId },
        data: {
          subscriberCount: channelInfo.subscriberCount,
          videoCount: channelInfo.videoCount,
          viewCount: channelInfo.viewCount,
          lastSyncAt: new Date(),
        },
      });
    }
    
    return NextResponse.json({
      channel: channelInfo,
      analytics,
      topVideos,
      period: {
        start: startDateStr,
        end: endDateStr,
        days: parseInt(period),
      },
    });
    
  } catch (error) {
    console.error("Analytics error:", error);
    
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
