// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Secure Environment Configuration
// ═══════════════════════════════════════════════════════════════════════════════
// Validates and provides type-safe access to environment variables
// NEVER expose these values to the client!
// ═══════════════════════════════════════════════════════════════════════════════

import { z } from "zod";

// ─────────────────────────────────────────────────────────────────────────────────
// Environment Schema - Validates all required environment variables
// ─────────────────────────────────────────────────────────────────────────────────
const envSchema = z.object({
  // Security
  AUTH_SECRET: z.string().min(32, "AUTH_SECRET must be at least 32 characters"),
  ENCRYPTION_KEY: z.string().length(64, "ENCRYPTION_KEY must be 64 hex characters").optional(),

  // Google OAuth
  GOOGLE_CLIENT_ID: z.string().min(1, "GOOGLE_CLIENT_ID is required"),
  GOOGLE_CLIENT_SECRET: z.string().min(1, "GOOGLE_CLIENT_SECRET is required"),
  GOOGLE_REDIRECT_URI: z.string().url("GOOGLE_REDIRECT_URI must be a valid URL").optional(),

  // Gemini AI
  GEMINI_API_KEY: z.string().min(1, "GEMINI_API_KEY is required"),

  // YouTube Data API (for hashtag generator without OAuth)
  YOUTUBE_API_KEY: z.string().optional(),

  // Database
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),

  // Rate Limiting (optional)
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

  // Google Cloud Storage (optional)
  GCS_BUCKET_NAME: z.string().optional(),
  GCS_PROJECT_ID: z.string().optional(),

  // Application
  NEXTAUTH_URL: z.string().url().default("http://localhost:3000"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  // Optional
  DEBUG: z.string().default("false").transform(v => v === "true"),
  TRUST_PROXY: z.string().default("false").transform(v => v === "true"),
});

// ─────────────────────────────────────────────────────────────────────────────────
// Environment Validation
// ─────────────────────────────────────────────────────────────────────────────────

type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | null = null;

/**
 * Get validated environment variables
 * Throws an error if required variables are missing in production
 */
export function getEnv(): Env {
  if (cachedEnv) return cachedEnv;

  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const errors = parsed.error.issues
      .map((e) => `  - ${String(e.path.join("."))}: ${e.message}`)
      .join("\n");

    // In development, allow missing vars with defaults
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "⚠️  Missing environment variables (using defaults for development):\n" + errors
      );

      // Return development defaults
      cachedEnv = {
        AUTH_SECRET: "development-secret-change-in-production-32-chars",
        ENCRYPTION_KEY: undefined,
        GOOGLE_CLIENT_ID: "",
        GOOGLE_CLIENT_SECRET: "",
        GOOGLE_REDIRECT_URI: undefined,
        GEMINI_API_KEY: "",
        DATABASE_URL: "postgresql://postgres:password@localhost:5432/tubeplanner",
        NEXTAUTH_URL: "http://localhost:3000",
        NODE_ENV: "development",
        DEBUG: true,
        TRUST_PROXY: false,
      };
      return cachedEnv;
    }

    throw new Error(
      `❌ Invalid environment variables:\n${errors}\n\n` +
      `Copy .env.example to .env.local and fill in the required values.`
    );
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}

// ─────────────────────────────────────────────────────────────────────────────────
// Safe Env Getters (for specific use cases)
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

/**
 * Check if debug mode is enabled
 */
export function isDebugMode(): boolean {
  return process.env.DEBUG === "true";
}

/**
 * Get Google OAuth credentials (server-side only)
 */
export function getGoogleCredentials() {
  const env = getEnv();
  return {
    clientId: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    redirectUri: env.GOOGLE_REDIRECT_URI,
  };
}

/**
 * Check if all required credentials are configured
 */
export function isFullyConfigured(): boolean {
  try {
    const env = getEnv();
    return !!(
      env.GOOGLE_CLIENT_ID &&
      env.GOOGLE_CLIENT_SECRET &&
      env.GEMINI_API_KEY &&
      env.DATABASE_URL
    );
  } catch {
    return false;
  }
}

/**
 * Check if rate limiting is enabled
 */
export function isRateLimitingEnabled(): boolean {
  return !!(
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  );
}

// ─────────────────────────────────────────────────────────────────────────────────
// Sensitive Data Masking (for logging)
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Mask sensitive values for logging
 */
export function maskSensitive(value: string, showChars: number = 4): string {
  if (!value || value.length <= showChars * 2) {
    return "***";
  }
  return `${value.substring(0, showChars)}...${value.substring(value.length - showChars)}`;
}

/**
 * Log environment status (safe for console)
 */
export function logEnvStatus(): void {
  const env = getEnv();

  console.log("\n🔐 TubePlanner Environment Status:");
  console.log("─".repeat(50));
  console.log(`  NODE_ENV: ${env.NODE_ENV}`);
  console.log(`  Google OAuth: ${env.GOOGLE_CLIENT_ID ? "✅ Configured" : "❌ Missing"}`);
  console.log(`  Gemini AI: ${env.GEMINI_API_KEY ? "✅ Configured" : "❌ Missing"}`);
  console.log(`  Database: ${env.DATABASE_URL ? "✅ Configured" : "❌ Missing"}`);
  console.log(`  Rate Limiting: ${isRateLimitingEnabled() ? "✅ Enabled" : "⚠️  Disabled"}`);
  console.log(`  GCS Storage: ${env.GCS_BUCKET_NAME ? "✅ Configured" : "⚠️  Using local"}`);
  console.log("─".repeat(50) + "\n");
}
