// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Edge-compatible Auth Configuration
// ═══════════════════════════════════════════════════════════════════════════════
// Minimal auth config for middleware (Edge runtime compatible)
// ═══════════════════════════════════════════════════════════════════════════════

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

// ─────────────────────────────────────────────────────────────────────────────────
// Edge-compatible Auth Config (no Prisma/Node.js modules)
// ─────────────────────────────────────────────────────────────────────────────────

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  
  session: {
    strategy: "jwt",
  },
  
  trustHost: true,
};

export const { auth, handlers } = NextAuth(authConfig);

export default authConfig;
