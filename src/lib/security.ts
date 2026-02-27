// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Security Middleware
// ═══════════════════════════════════════════════════════════════════════════════
// Centralized security checks for API routes
// ═══════════════════════════════════════════════════════════════════════════════

import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
import { applyRateLimit, type RateLimitType } from "./rate-limit";

// ─────────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────────

export interface SecureRequest extends NextRequest {
  userId?: string;
  userEmail?: string;
}

export interface SecurityOptions {
  // Require authentication
  requireAuth?: boolean;
  
  // Rate limit type
  rateLimit?: RateLimitType;
  
  // Allowed HTTP methods
  methods?: string[];
  
  // Required headers
  requiredHeaders?: string[];
  
  // Skip CSRF check (for webhooks)
  skipCsrf?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────────
// Security Middleware
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Apply security checks to an API route
 * @returns Error response if checks fail, null if all checks pass
 */
export async function applySecurity(
  req: NextRequest,
  options: SecurityOptions = {}
): Promise<{ error: NextResponse } | { userId?: string; userEmail?: string }> {
  const {
    requireAuth = true,
    rateLimit = "api",
    methods,
    requiredHeaders = [],
  } = options;
  
  // ─── Method Check ─────────────────────────────────────────────
  if (methods && !methods.includes(req.method)) {
    return {
      error: NextResponse.json(
        { error: "Method not allowed" },
        { status: 405, headers: { Allow: methods.join(", ") } }
      ),
    };
  }
  
  // ─── Required Headers Check ───────────────────────────────────
  for (const header of requiredHeaders) {
    if (!req.headers.get(header)) {
      return {
        error: NextResponse.json(
          { error: `Missing required header: ${header}` },
          { status: 400 }
        ),
      };
    }
  }
  
  // ─── Authentication Check ─────────────────────────────────────
  let userId: string | undefined;
  let userEmail: string | undefined;
  
  if (requireAuth) {
    const session = await auth();
    
    if (!session?.user?.id) {
      return {
        error: NextResponse.json(
          { error: "Unauthorized", message: "Please sign in to access this resource" },
          { status: 401 }
        ),
      };
    }
    
    userId = session.user.id;
    userEmail = session.user.email ?? undefined;
  }
  
  // ─── Rate Limiting ────────────────────────────────────────────
  if (rateLimit) {
    const rateLimitResult = await applyRateLimit(req, rateLimit, userId);
    if (rateLimitResult) {
      return { error: rateLimitResult };
    }
  }
  
  return { userId, userEmail };
}

// ─────────────────────────────────────────────────────────────────────────────────
// Secure Route Handler
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Wrapper for secure API route handlers
 */
export function secureHandler<T>(
  options: SecurityOptions,
  handler: (
    req: SecureRequest,
    context: { userId?: string; userEmail?: string }
  ) => Promise<NextResponse<T>>
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    try {
      // Apply security checks
      const result = await applySecurity(req, options);
      
      if ("error" in result) {
        return result.error;
      }
      
      // Call the handler with authenticated context
      const secureReq = req as SecureRequest;
      secureReq.userId = result.userId;
      secureReq.userEmail = result.userEmail;
      
      return await handler(secureReq, result);
    } catch (error) {
      console.error("[Security] Handler error:", error);
      
      // Don't expose internal errors
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  };
}

// ─────────────────────────────────────────────────────────────────────────────────
// CSRF Protection
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Verify request origin for CSRF protection
 */
export function verifyCsrf(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  
  if (!origin || !host) {
    // Allow requests without origin (server-to-server)
    return true;
  }
  
  try {
    const originUrl = new URL(origin);
    return originUrl.host === host;
  } catch {
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────────
// Input Validation
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Sanitize string input to prevent XSS
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

/**
 * Validate and sanitize video metadata
 */
export function sanitizeVideoMetadata(data: {
  title?: string;
  description?: string;
  tags?: string[];
}): { title: string; description: string; tags: string[] } {
  return {
    title: data.title 
      ? sanitizeString(data.title).substring(0, 100) 
      : "",
    description: data.description 
      ? sanitizeString(data.description).substring(0, 5000) 
      : "",
    tags: (data.tags || [])
      .slice(0, 500)
      .map(tag => sanitizeString(tag).substring(0, 30))
      .filter(tag => tag.length > 0),
  };
}

// ─────────────────────────────────────────────────────────────────────────────────
// Error Responses
// ─────────────────────────────────────────────────────────────────────────────────

export const Errors = {
  unauthorized: () => NextResponse.json(
    { error: "Unauthorized" },
    { status: 401 }
  ),
  
  forbidden: () => NextResponse.json(
    { error: "Forbidden" },
    { status: 403 }
  ),
  
  notFound: (resource = "Resource") => NextResponse.json(
    { error: `${resource} not found` },
    { status: 404 }
  ),
  
  badRequest: (message: string) => NextResponse.json(
    { error: "Bad request", message },
    { status: 400 }
  ),
  
  internalError: () => NextResponse.json(
    { error: "Internal server error" },
    { status: 500 }
  ),
  
  rateLimited: (retryAfter: number) => NextResponse.json(
    { error: "Too many requests", retryAfter },
    { status: 429, headers: { "Retry-After": retryAfter.toString() } }
  ),
};
