// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Channels API (Secure)
// ═══════════════════════════════════════════════════════════════════════════════

import { NextRequest, NextResponse } from "next/server";
import { applySecurity, Errors } from "@/lib/security";
import { db } from "@/lib/db";
import { decrypt } from "@/lib/encryption";

export async function GET(req: NextRequest) {
  // ─── Security Checks ─────────────────────────────────────────
  const security = await applySecurity(req, {
    requireAuth: true,
    rateLimit: "api",
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
    // Get user's channels
    const channels = await db.youTubeChannel.findMany({
      where: {
        userId,
        isActive: true,
      },
      select: {
        id: true,
        title: true,
        description: true,
        customUrl: true,
        thumbnailUrl: true,
        subscriberCount: true,
        videoCount: true,
        viewCount: true,
        accountEmail: true,
        isBrandAccount: true,
        connectedAt: true,
        lastSyncAt: true,
      },
      orderBy: {
        connectedAt: "desc",
      },
    });
    
    return NextResponse.json({
      channels: channels.map(ch => ({
        ...ch,
        subscriberCount: Number(ch.subscriberCount),
        viewCount: Number(ch.viewCount),
      })),
    });
    
  } catch (error) {
    console.error("Channels error:", error);
    return Errors.internalError();
  }
}

export async function DELETE(req: NextRequest) {
  // ─── Security Checks ─────────────────────────────────────────
  const security = await applySecurity(req, {
    requireAuth: true,
    rateLimit: "api",
    methods: ["DELETE"],
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
    
    if (!channelId) {
      return Errors.badRequest("channelId is required");
    }
    
    // Verify channel belongs to user
    const channel = await db.youTubeChannel.findFirst({
      where: {
        id: channelId,
        userId,
      },
    });
    
    if (!channel) {
      return Errors.notFound("Channel");
    }
    
    // Soft delete - mark as inactive
    await db.youTubeChannel.update({
      where: { id: channelId },
      data: {
        isActive: false,
        accessToken: "", // Clear tokens
        refreshToken: null,
      },
    });
    
    return NextResponse.json({
      success: true,
      message: "Channel disconnected",
    });
    
  } catch (error) {
    console.error("Delete channel error:", error);
    return Errors.internalError();
  }
}
