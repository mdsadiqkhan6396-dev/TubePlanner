// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Middleware
// ═══════════════════════════════════════════════════════════════════════════════
// Runs before every request for security and routing
// ═══════════════════════════════════════════════════════════════════════════════

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth.edge";

// ─────────────────────────────────────────────────────────────────────────────────
// Protected Routes Configuration
// ─────────────────────────────────────────────────────────────────────────────────

// Routes that require authentication
const PROTECTED_ROUTES = [
  "/video-scheduler",
  "/dashboard",
  "/analytics",
  "/settings",
  "/api/video-scheduler",
];

// Routes that should redirect to dashboard if already authenticated
const AUTH_ROUTES = [
  "/auth/signin",
  "/login",
];

// API routes that don't require authentication
const PUBLIC_API_ROUTES = [
  "/api/auth",
  "/api/health",
  "/api/hashtag-generator",
];

// ─────────────────────────────────────────────────────────────────────────────────
// Middleware Function
// ─────────────────────────────────────────────────────────────────────────────────

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isAuthenticated = !!req.auth;
  
  // ─── Security Headers ─────────────────────────────────────────
  const response = NextResponse.next();
  
  // Add security headers to all responses
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  
  // ─── Public API Routes ────────────────────────────────────────
  const isPublicApi = PUBLIC_API_ROUTES.some(route => pathname.startsWith(route));
  if (isPublicApi) {
    return response;
  }
  
  // ─── Protected Routes Check ───────────────────────────────────
  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
  
  if (isProtectedRoute && !isAuthenticated) {
    // Redirect to sign in with callback URL
    const signInUrl = new URL("/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }
  
  // ─── Auth Routes Redirect ─────────────────────────────────────
  const isAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route));
  
  if (isAuthRoute && isAuthenticated) {
    // Already logged in, redirect to dashboard
    return NextResponse.redirect(new URL("/video-scheduler", req.url));
  }
  
  return response;
});

// ─────────────────────────────────────────────────────────────────────────────────
// Middleware Configuration
// ─────────────────────────────────────────────────────────────────────────────────

export const config = {
  // Run middleware on these paths
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*|public).*)",
  ],
};
