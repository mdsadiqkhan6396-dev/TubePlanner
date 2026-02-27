// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Encryption Utilities
// ═══════════════════════════════════════════════════════════════════════════════
// AES-256-GCM encryption for sensitive data (OAuth tokens, etc.)
// NEVER expose encryption keys to the client!
// ═══════════════════════════════════════════════════════════════════════════════

import { getEnv } from "./env";

// ─────────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────────

const ALGORITHM = "AES-GCM";
const KEY_LENGTH = 256;
const IV_LENGTH = 12; // 96 bits for GCM
const TAG_LENGTH = 128; // bits

// Prefix to identify encrypted data
const ENCRYPTED_PREFIX = "enc:v1:";

// ─────────────────────────────────────────────────────────────────────────────────
// Key Management
// ─────────────────────────────────────────────────────────────────────────────────

let cryptoKey: CryptoKey | null = null;

/**
 * Get or create the encryption key from environment variable
 */
async function getKey(): Promise<CryptoKey> {
  if (cryptoKey) return cryptoKey;
  
  const env = getEnv();
  const keyHex = env.ENCRYPTION_KEY;
  
  if (!keyHex || keyHex.length !== 64) {
    throw new Error(
      "ENCRYPTION_KEY must be a 64-character hex string (32 bytes). " +
      "Generate with: openssl rand -hex 32"
    );
  }
  
  // Convert hex string to Uint8Array
  const keyBytes = new Uint8Array(32);
  for (let i = 0; i < 32; i++) {
    keyBytes[i] = parseInt(keyHex.substring(i * 2, i * 2 + 2), 16);
  }
  
  // Import as CryptoKey
  cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: ALGORITHM, length: KEY_LENGTH },
    false, // not extractable
    ["encrypt", "decrypt"]
  );
  
  return cryptoKey;
}

// ─────────────────────────────────────────────────────────────────────────────────
// Encryption Functions
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Encrypt sensitive data
 * @param plaintext - The data to encrypt
 * @returns Encrypted string (base64 encoded with prefix)
 */
export async function encrypt(plaintext: string): Promise<string> {
  if (!plaintext) return "";
  
  // Don't double-encrypt
  if (plaintext.startsWith(ENCRYPTED_PREFIX)) {
    return plaintext;
  }
  
  try {
    const key = await getKey();
    
    // Generate random IV
    const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
    
    // Encode plaintext to bytes
    const encoder = new TextEncoder();
    const data = encoder.encode(plaintext);
    
    // Encrypt
    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: ALGORITHM, iv, tagLength: TAG_LENGTH },
      key,
      data
    );
    
    // Combine IV + encrypted data
    const combined = new Uint8Array(iv.length + encryptedBuffer.byteLength);
    combined.set(iv);
    combined.set(new Uint8Array(encryptedBuffer), iv.length);
    
    // Convert to base64
    const base64 = btoa(String.fromCharCode(...combined));
    
    return ENCRYPTED_PREFIX + base64;
  } catch (error) {
    console.error("Encryption failed:", error);
    throw new Error("Failed to encrypt sensitive data");
  }
}

/**
 * Decrypt sensitive data
 * @param ciphertext - The encrypted string
 * @returns Decrypted plaintext
 */
export async function decrypt(ciphertext: string): Promise<string> {
  if (!ciphertext) return "";
  
  // Check if data is encrypted
  if (!ciphertext.startsWith(ENCRYPTED_PREFIX)) {
    // Return as-is if not encrypted (for backwards compatibility)
    return ciphertext;
  }
  
  try {
    const key = await getKey();
    
    // Remove prefix and decode base64
    const base64 = ciphertext.substring(ENCRYPTED_PREFIX.length);
    const combined = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    
    // Extract IV and encrypted data
    const iv = combined.slice(0, IV_LENGTH);
    const encryptedData = combined.slice(IV_LENGTH);
    
    // Decrypt
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: ALGORITHM, iv, tagLength: TAG_LENGTH },
      key,
      encryptedData
    );
    
    // Decode to string
    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
  } catch (error) {
    console.error("Decryption failed:", error);
    throw new Error("Failed to decrypt sensitive data");
  }
}

// ─────────────────────────────────────────────────────────────────────────────────
// Token Encryption Helpers
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Encrypt OAuth tokens before storing
 */
export async function encryptTokens(tokens: {
  accessToken?: string | null;
  refreshToken?: string | null;
  idToken?: string | null;
}): Promise<{
  accessToken?: string | null;
  refreshToken?: string | null;
  idToken?: string | null;
}> {
  return {
    accessToken: tokens.accessToken ? await encrypt(tokens.accessToken) : null,
    refreshToken: tokens.refreshToken ? await encrypt(tokens.refreshToken) : null,
    idToken: tokens.idToken ? await encrypt(tokens.idToken) : null,
  };
}

/**
 * Decrypt OAuth tokens after retrieval
 */
export async function decryptTokens(tokens: {
  accessToken?: string | null;
  refreshToken?: string | null;
  idToken?: string | null;
}): Promise<{
  accessToken?: string | null;
  refreshToken?: string | null;
  idToken?: string | null;
}> {
  return {
    accessToken: tokens.accessToken ? await decrypt(tokens.accessToken) : null,
    refreshToken: tokens.refreshToken ? await decrypt(tokens.refreshToken) : null,
    idToken: tokens.idToken ? await decrypt(tokens.idToken) : null,
  };
}

// ─────────────────────────────────────────────────────────────────────────────────
// Hashing Utilities (for non-reversible data like IPs)
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Hash data using SHA-256 (for anonymization, not encryption)
 * @param data - Data to hash
 * @returns Hex-encoded hash
 */
export async function hash(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Hash IP address for anonymous tracking
 */
export async function hashIp(ip: string): Promise<string> {
  // Add salt for extra security
  const salt = "tubeplanner-ip-salt-v1";
  return hash(ip + salt);
}

// ─────────────────────────────────────────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Check if a string is encrypted
 */
export function isEncrypted(value: string): boolean {
  return value?.startsWith(ENCRYPTED_PREFIX) ?? false;
}

/**
 * Validate encryption key is properly configured
 */
export async function validateEncryption(): Promise<boolean> {
  try {
    const testData = "encryption-test-" + Date.now();
    const encrypted = await encrypt(testData);
    const decrypted = await decrypt(encrypted);
    return decrypted === testData;
  } catch {
    return false;
  }
}
