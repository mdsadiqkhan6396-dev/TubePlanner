// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Prisma Client
// ═══════════════════════════════════════════════════════════════════════════════
// Singleton Prisma client with connection pooling for Prisma 7
// ═══════════════════════════════════════════════════════════════════════════════

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Create connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create adapter
const adapter = new PrismaPg(pool);

// Prevent multiple instances in development (hot reload)
export const db = globalThis.prisma ?? new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" 
    ? ["query", "error", "warn"] 
    : ["error"],
});

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

export default db;
