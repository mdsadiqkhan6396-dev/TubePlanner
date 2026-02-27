// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Rate Limiting
// ═══════════════════════════════════════════════════════════════════════════════
// Protects APIs from abuse using Upstash Redis or in-memory fallback
// ═══════════════════════════════════════════════════════════════════════════════

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { isRateLimitingEnabled } from "./env";
import { hashIp } from "./encryption";

// ─────────────────────────────────────────────────────────────────────────────────
// Rate Limiter Configuration
// ─────────────────────────────────────────────────────────────────────────────────

// In-memory cache for when Redis is not available
const inMemoryCache = new Map<string, { count: number; resetAt: number }>();

// Rate limit configurations per endpoint type
const RATE_LIMITS = {
  // Authentication - strict limits to prevent brute force
  auth: { requests: 5, window: "1m" as const },
  
  // Video upload - moderate limits (quota-expensive)
  upload: { requests: 10, window: "1h" as const },
  
  // AI generation - moderate (API cost)
  ai: { requests: 30, window: "1m" as const },
  
  // General API - relaxed limits
  api: { requests: 100, window: "1m" as const },
  
  // Analytics - relaxed (read-only)
  analytics: { requests: 60, window: "1m" as const },
};

type RateLimitType = keyof typeof RATE_LIMITS;

// ─────────────────────────────────────────────────────────────────────────────────
// Redis Rate Limiter
// ─────────────────────────────────────────────────────────────────────────────────

let rateLimiters: Map<RateLimitType, Ratelimit> | null = null;

function getRateLimiters(): Map<RateLimitType, Ratelimit> | null {
  if (!isRateLimitingEnabled()) return null;
  
  if (rateLimiters) return rateLimiters;
  
  try {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
    
    rateLimiters = new Map();
    
    for (const [type, config] of Object.entries(RATE_LIMITS)) {
      rateLimiters.set(
        type as RateLimitType,
        new Ratelimit({
          redis,
          limiter: Ratelimit.slidingWindow(config.requests, config.window),
          analytics: true,
          prefix: `tubeplanner:ratelimit:${type}`,
        })
      );
    }
    
    return rateLimiters;
  } catch (error) {
    console.error("Failed to initialize Redis rate limiter:", error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────────
// In-Memory Fallback Rate Limiter
// ─────────────────────────────────────────────────────────────────────────────────

function checkInMemoryLimit(
  key: string,
  type: RateLimitType
): { success: boolean; remaining: number; reset: number } {
  const config = RATE_LIMITS[type];
  const windowMs = parseWindow(config.window);
  const now = Date.now();
  
  const entry = inMemoryCache.get(key);
  
  if (!entry || entry.resetAt < now) {
    // New window
    inMemoryCache.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: config.requests - 1, reset: now + windowMs };
  }
  
  if (entry.count >= config.requests) {
    return { success: false, remaining: 0, reset: entry.resetAt };
  }
  
  entry.count++;
  return { success: true, remaining: config.requests - entry.count, reset: entry.resetAt };
}

function parseWindow(window: string): number {
  const match = window.match(/^(\d+)(s|m|h|d)$/);
  if (!match) return 60000; // default 1 minute
  
  const value = parseInt(match[1]);
  const unit = match[2];
  
  switch (unit) {
    case "s": return value * 1000;
    case "m": return value * 60 * 1000;
    case "h": return value * 60 * 60 * 1000;
    case "d": return value * 24 * 60 * 60 * 1000;
    default: return 60000;
  }
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of inMemoryCache.entries()) {
    if (entry.resetAt < now) {
      inMemoryCache.delete(key);
    }
  }
}, 60000); // Every minute

// ─────────────────────────────────────────────────────────────────────────────────
// Rate Limiting Functions
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Check rate limit for a request
 * @param identifier - Unique identifier (user ID, IP hash, etc.)
 * @param type - Type of rate limit to apply
 */
export async function checkRateLimit(
  identifier: string,
  type: RateLimitType = "api"
): Promise<{
  success: boolean;
  remaining: number;
  reset: number;
  limit: number;
}> {
  const config = RATE_LIMITS[type];
  const key = `${type}:${identifier}`;
  
  // Try Redis first
  const limiters = getRateLimiters();
  
  if (limiters) {
    const limiter = limiters.get(type);
    if (limiter) {
      const result = await limiter.limit(key);
      return {
        success: result.success,
        remaining: result.remaining,
        reset: result.reset,
        limit: config.requests,
      };
    }
  }
  
  // Fallback to in-memory
  const result = checkInMemoryLimit(key, type);
  return {
    ...result,
    limit: config.requests,
  };
}

/**
 * Get IP address from request (handles proxies)
 */
export function getClientIp(req: NextRequest): string {
  // Check various headers for proxied IP
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }
  
  // Fallback
  return "unknown";
}

/**
 * Create rate limit identifier from request
 */
export async function getRateLimitIdentifier(
  req: NextRequest,
  userId?: string
): Promise<string> {
  if (userId) {
    return `user:${userId}`;
  }
  
  const ip = getClientIp(req);
  const hashedIp = await hashIp(ip);
  return `ip:${hashedIp}`;
}

// ─────────────────────────────────────────────────────────────────────────────────
// Rate Limit Middleware Helper
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Apply rate limiting to an API route
 * Returns error response if rate limited, null otherwise
 */
export async function applyRateLimit(
  req: NextRequest,
  type: RateLimitType = "api",
  userId?: string
): Promise<NextResponse | null> {
  const identifier = await getRateLimitIdentifier(req, userId);
  const result = await checkRateLimit(identifier, type);
  
  if (!result.success) {
    const retryAfter = Math.ceil((result.reset - Date.now()) / 1000);
    
    return NextResponse.json(
      {
        error: "Too many requests",
        message: "Rate limit exceeded. Please try again later.",
        retryAfter,
      },
      {
        status: 429,
        headers: {
          "Retry-After": retryAfter.toString(),
          "X-RateLimit-Limit": result.limit.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": result.reset.toString(),
        },
      }
    );
  }
  
  return null;
}

/**
 * Add rate limit headers to response
 */
export function addRateLimitHeaders(
  response: NextResponse,
  result: { limit: number; remaining: number; reset: number }
): NextResponse {
  response.headers.set("X-RateLimit-Limit", result.limit.toString());
  response.headers.set("X-RateLimit-Remaining", result.remaining.toString());
  response.headers.set("X-RateLimit-Reset", result.reset.toString());
  return response;
}

// ─────────────────────────────────────────────────────────────────────────────────
// Export types
// ─────────────────────────────────────────────────────────────────────────────────

export type { RateLimitType };
