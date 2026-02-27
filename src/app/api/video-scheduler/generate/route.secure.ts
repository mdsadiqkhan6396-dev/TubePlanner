// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - AI Generation API (Secure)
// ═══════════════════════════════════════════════════════════════════════════════

import { NextRequest, NextResponse } from "next/server";
import { applySecurity, sanitizeString, Errors } from "@/lib/security";
import { generateTitlesWithAI, generateDescriptionWithAI, generateTagsWithAI, isGeminiConfigured } from "@/lib/gemini";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  // ─── Security Checks ─────────────────────────────────────────
  const security = await applySecurity(req, {
    requireAuth: true,
    rateLimit: "ai",
    methods: ["POST"],
  });
  
  if ("error" in security) {
    return security.error;
  }
  
  const { userId } = security;
  if (!userId) {
    return Errors.unauthorized();
  }
  
  // Check if Gemini is configured
  if (!isGeminiConfigured()) {
    return NextResponse.json(
      { error: "AI features are not configured" },
      { status: 503 }
    );
  }
  
  try {
    const body = await req.json();
    const { type, topic, niche, style, videoTitle, existingDescription, existingTags } = body;
    
    if (!type) {
      return Errors.badRequest("Generation type is required");
    }
    
    // Sanitize inputs
    const sanitizedTopic = topic ? sanitizeString(topic).substring(0, 200) : "";
    const sanitizedNiche = niche ? sanitizeString(niche).substring(0, 100) : "";
    const sanitizedStyle = style ? sanitizeString(style).substring(0, 50) : "";
    
    let result: any;
    
    switch (type) {
      case "titles":
        if (!sanitizedTopic) {
          return Errors.badRequest("Topic is required for title generation");
        }
        result = await generateTitlesWithAI(
          sanitizedTopic,
          sanitizedNiche || "general",
          sanitizedStyle || "engaging"
        );
        break;
        
      case "description":
        if (!videoTitle) {
          return Errors.badRequest("Video title is required for description generation");
        }
        result = await generateDescriptionWithAI(
          sanitizeString(videoTitle).substring(0, 100),
          sanitizedNiche || "",
          existingDescription ? sanitizeString(existingDescription).substring(0, 500) : undefined
        );
        break;
        
      case "tags":
        if (!videoTitle) {
          return Errors.badRequest("Video title is required for tag generation");
        }
        result = await generateTagsWithAI(
          sanitizeString(videoTitle).substring(0, 100),
          sanitizedNiche || "",
          Array.isArray(existingTags) ? existingTags.slice(0, 10).map((t: string) => sanitizeString(t)) : undefined
        );
        break;
        
      default:
        return Errors.badRequest("Invalid generation type");
    }
    
    // Track API usage
    await db.apiUsage.create({
      data: {
        userId,
        endpoint: "/api/video-scheduler/generate",
        method: "POST",
        quotaUsed: 1, // AI generation
      },
    });
    
    return NextResponse.json({
      success: true,
      type,
      result,
    });
    
  } catch (error) {
    console.error("AI generation error:", error);
    return Errors.internalError();
  }
}
