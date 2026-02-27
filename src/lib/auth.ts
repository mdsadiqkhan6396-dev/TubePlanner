// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - NextAuth.js v5 Configuration
// ═══════════════════════════════════════════════════════════════════════════════
// Secure authentication with Google OAuth for YouTube access
// ═══════════════════════════════════════════════════════════════════════════════

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";
import { encrypt, decrypt } from "./encryption";
import type { NextAuthConfig } from "next-auth";

// ─────────────────────────────────────────────────────────────────────────────────
// YouTube OAuth Scopes
// ─────────────────────────────────────────────────────────────────────────────────

const YOUTUBE_SCOPES = [
  "openid",
  "email",
  "profile",
  // YouTube Data API
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtube.upload",
  "https://www.googleapis.com/auth/youtube.force-ssl",
  // YouTube Analytics
  "https://www.googleapis.com/auth/yt-analytics.readonly",
  "https://www.googleapis.com/auth/yt-analytics-monetary.readonly",
];

// ─────────────────────────────────────────────────────────────────────────────────
// Auth Configuration
// ─────────────────────────────────────────────────────────────────────────────────

const config: NextAuthConfig = {
  // Use Prisma adapter for database sessions
  adapter: PrismaAdapter(db),
  
  // Providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: YOUTUBE_SCOPES.join(" "),
          access_type: "offline",
          prompt: "consent", // Force consent to get refresh token
        },
      },
    }),
  ],
  
  // Session configuration - use JWT for Edge runtime compatibility
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  // Custom pages
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  
  // Callbacks
  callbacks: {
    // Control who can sign in
    async signIn({ user, account }) {
      if (!user.email) {
        return false;
      }
      
      // Note: Token encryption is handled in the adapter layer
      // or after initial OAuth token storage
      
      return true;
    },
    
    // Add user ID and tokens to JWT
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
      }
      return token;
    },
    
    // Add user ID to session
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
    
    // Redirect after sign in
    async redirect({ url, baseUrl }) {
      // Allow relative URLs
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      // Allow same origin
      if (new URL(url).origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
  },
  
  // Events for logging
  events: {
    async signIn({ user, isNewUser }) {
      console.log(`[Auth] User signed in: ${user.email} (new: ${isNewUser})`);
      
      // Update last login
      await db.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      });
    },
    async signOut() {
      console.log(`[Auth] User signed out`);
    },
  },
  
  // Security options
  trustHost: true,
  
  // Debug in development only
  debug: process.env.NODE_ENV === "development",
};

// ─────────────────────────────────────────────────────────────────────────────────
// Export Auth Functions
// ─────────────────────────────────────────────────────────────────────────────────

export const { handlers, signIn, signOut, auth } = NextAuth(config);

// ─────────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Get decrypted OAuth tokens for a user
 */
export async function getUserTokens(userId: string): Promise<{
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
} | null> {
  const account = await db.account.findFirst({
    where: {
      userId,
      provider: "google",
    },
    select: {
      access_token: true,
      refresh_token: true,
      expires_at: true,
    },
  });
  
  if (!account) return null;
  
  return {
    accessToken: account.access_token ? await decrypt(account.access_token) : null,
    refreshToken: account.refresh_token ? await decrypt(account.refresh_token) : null,
    expiresAt: account.expires_at,
  };
}

/**
 * Update OAuth tokens for a user (encrypted)
 */
export async function updateUserTokens(
  userId: string,
  tokens: {
    accessToken: string;
    refreshToken?: string;
    expiresAt?: number;
  }
): Promise<void> {
  const encryptedAccess = await encrypt(tokens.accessToken);
  const encryptedRefresh = tokens.refreshToken 
    ? await encrypt(tokens.refreshToken) 
    : undefined;
  
  await db.account.updateMany({
    where: {
      userId,
      provider: "google",
    },
    data: {
      access_token: encryptedAccess,
      ...(encryptedRefresh && { refresh_token: encryptedRefresh }),
      ...(tokens.expiresAt && { expires_at: tokens.expiresAt }),
      updatedAt: new Date(),
    },
  });
}

/**
 * Refresh access token using refresh token
 */
export async function refreshAccessToken(userId: string): Promise<string | null> {
  const tokens = await getUserTokens(userId);
  
  if (!tokens?.refreshToken) {
    console.error("[Auth] No refresh token available");
    return null;
  }
  
  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        refresh_token: tokens.refreshToken,
        grant_type: "refresh_token",
      }),
    });
    
    if (!response.ok) {
      console.error("[Auth] Token refresh failed:", await response.text());
      return null;
    }
    
    const data = await response.json();
    
    // Update stored tokens
    await updateUserTokens(userId, {
      accessToken: data.access_token,
      ...(data.refresh_token && { refreshToken: data.refresh_token }),
      expiresAt: Math.floor(Date.now() / 1000) + data.expires_in,
    });
    
    return data.access_token;
  } catch (error) {
    console.error("[Auth] Token refresh error:", error);
    return null;
  }
}

/**
 * Get valid access token (refreshes if expired)
 */
export async function getValidAccessToken(userId: string): Promise<string | null> {
  const tokens = await getUserTokens(userId);
  
  if (!tokens?.accessToken) {
    return null;
  }
  
  // Check if token is expired (with 5 minute buffer)
  if (tokens.expiresAt && tokens.expiresAt < Math.floor(Date.now() / 1000) + 300) {
    console.log("[Auth] Token expired, refreshing...");
    return refreshAccessToken(userId);
  }
  
  return tokens.accessToken;
}
