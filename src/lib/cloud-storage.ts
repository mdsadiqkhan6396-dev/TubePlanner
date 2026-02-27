// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Google Cloud Storage Integration
// ═══════════════════════════════════════════════════════════════════════════════
// Secure file storage for videos and thumbnails
// ═══════════════════════════════════════════════════════════════════════════════

import { Storage } from "@google-cloud/storage";

// ─────────────────────────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────────────────────────

let storage: Storage | null = null;

function getStorage(): Storage | null {
  if (storage) return storage;
  
  const bucketName = process.env.GCS_BUCKET_NAME;
  const projectId = process.env.GCS_PROJECT_ID;
  
  if (!bucketName || !projectId) {
    console.warn("[GCS] Cloud Storage not configured, using local storage fallback");
    return null;
  }
  
  try {
    storage = new Storage({ projectId });
    return storage;
  } catch (error) {
    console.error("[GCS] Failed to initialize Cloud Storage:", error);
    return null;
  }
}

function getBucket() {
  const storageClient = getStorage();
  if (!storageClient) return null;
  
  const bucketName = process.env.GCS_BUCKET_NAME;
  if (!bucketName) return null;
  
  return storageClient.bucket(bucketName);
}

// ─────────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────────

export interface UploadResult {
  url: string;
  gcsPath: string;
  size: number;
  contentType: string;
}

export interface SignedUrlOptions {
  expiresInMinutes?: number;
  contentType?: string;
}

// ─────────────────────────────────────────────────────────────────────────────────
// Storage Functions
// ─────────────────────────────────────────────────────────────────────────────────

/**
 * Check if Cloud Storage is configured
 */
export function isCloudStorageEnabled(): boolean {
  return !!(process.env.GCS_BUCKET_NAME && process.env.GCS_PROJECT_ID);
}

/**
 * Generate a secure file path
 */
function generateFilePath(
  userId: string,
  type: "video" | "thumbnail",
  fileName: string
): string {
  const timestamp = Date.now();
  const randomId = crypto.randomUUID().substring(0, 8);
  const sanitizedName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
  return `users/${userId}/${type}s/${timestamp}-${randomId}-${sanitizedName}`;
}

/**
 * Upload file to Cloud Storage
 */
export async function uploadToStorage(
  userId: string,
  file: File | Blob,
  type: "video" | "thumbnail",
  fileName: string
): Promise<UploadResult | null> {
  const bucket = getBucket();
  
  if (!bucket) {
    console.warn("[GCS] Bucket not available, cannot upload");
    return null;
  }
  
  const filePath = generateFilePath(userId, type, fileName);
  const blob = bucket.file(filePath);
  
  const buffer = await file.arrayBuffer();
  
  try {
    await blob.save(Buffer.from(buffer), {
      contentType: file.type,
      metadata: {
        userId,
        uploadedAt: new Date().toISOString(),
        originalName: fileName,
      },
      // Make file private by default
      public: false,
    });
    
    // Generate signed URL for access
    const [url] = await blob.getSignedUrl({
      action: "read",
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    
    return {
      url,
      gcsPath: `gs://${process.env.GCS_BUCKET_NAME}/${filePath}`,
      size: file.size,
      contentType: file.type,
    };
  } catch (error) {
    console.error("[GCS] Upload failed:", error);
    throw new Error("Failed to upload file to storage");
  }
}

/**
 * Get signed URL for uploading (for client-side uploads)
 */
export async function getUploadSignedUrl(
  userId: string,
  type: "video" | "thumbnail",
  fileName: string,
  contentType: string,
  options: SignedUrlOptions = {}
): Promise<{ uploadUrl: string; filePath: string } | null> {
  const bucket = getBucket();
  
  if (!bucket) {
    return null;
  }
  
  const filePath = generateFilePath(userId, type, fileName);
  const blob = bucket.file(filePath);
  
  const expiresInMs = (options.expiresInMinutes || 15) * 60 * 1000;
  
  try {
    const [uploadUrl] = await blob.getSignedUrl({
      version: "v4",
      action: "write",
      expires: Date.now() + expiresInMs,
      contentType: options.contentType || contentType,
    });
    
    return { uploadUrl, filePath };
  } catch (error) {
    console.error("[GCS] Failed to generate signed URL:", error);
    return null;
  }
}

/**
 * Get signed URL for reading a file
 */
export async function getReadSignedUrl(
  filePath: string,
  expiresInMinutes: number = 60
): Promise<string | null> {
  const bucket = getBucket();
  
  if (!bucket) {
    return null;
  }
  
  // Handle both gs:// paths and raw paths
  const cleanPath = filePath.replace(`gs://${process.env.GCS_BUCKET_NAME}/`, "");
  const blob = bucket.file(cleanPath);
  
  try {
    const [url] = await blob.getSignedUrl({
      version: "v4",
      action: "read",
      expires: Date.now() + expiresInMinutes * 60 * 1000,
    });
    
    return url;
  } catch (error) {
    console.error("[GCS] Failed to generate read URL:", error);
    return null;
  }
}

/**
 * Delete file from storage
 */
export async function deleteFromStorage(filePath: string): Promise<boolean> {
  const bucket = getBucket();
  
  if (!bucket) {
    return false;
  }
  
  const cleanPath = filePath.replace(`gs://${process.env.GCS_BUCKET_NAME}/`, "");
  
  try {
    await bucket.file(cleanPath).delete();
    return true;
  } catch (error) {
    console.error("[GCS] Delete failed:", error);
    return false;
  }
}

/**
 * Delete all files for a user (for account deletion)
 */
export async function deleteUserFiles(userId: string): Promise<boolean> {
  const bucket = getBucket();
  
  if (!bucket) {
    return false;
  }
  
  try {
    await bucket.deleteFiles({
      prefix: `users/${userId}/`,
    });
    return true;
  } catch (error) {
    console.error("[GCS] Failed to delete user files:", error);
    return false;
  }
}

/**
 * Get file metadata
 */
export async function getFileMetadata(filePath: string): Promise<{
  size: number;
  contentType: string;
  createdAt: string;
} | null> {
  const bucket = getBucket();
  
  if (!bucket) {
    return null;
  }
  
  const cleanPath = filePath.replace(`gs://${process.env.GCS_BUCKET_NAME}/`, "");
  
  try {
    const [metadata] = await bucket.file(cleanPath).getMetadata();
    return {
      size: parseInt(metadata.size as string),
      contentType: metadata.contentType as string,
      createdAt: metadata.timeCreated as string,
    };
  } catch (error) {
    console.error("[GCS] Failed to get metadata:", error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────────────────────────────────────────

const ALLOWED_VIDEO_TYPES = [
  "video/mp4",
  "video/quicktime",
  "video/x-msvideo",
  "video/x-ms-wmv",
  "video/webm",
  "video/x-flv",
  "video/mpeg",
];

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];

const MAX_VIDEO_SIZE = 256 * 1024 * 1024 * 1024; // 256 GB (YouTube limit)
const MAX_THUMBNAIL_SIZE = 2 * 1024 * 1024; // 2 MB

/**
 * Validate video file
 */
export function validateVideoFile(file: File | Blob, fileName: string): {
  valid: boolean;
  error?: string;
} {
  if (!ALLOWED_VIDEO_TYPES.includes(file.type)) {
    return { valid: false, error: `Invalid video type: ${file.type}` };
  }
  
  if (file.size > MAX_VIDEO_SIZE) {
    return { valid: false, error: "Video file exceeds 256 GB limit" };
  }
  
  if (file.size === 0) {
    return { valid: false, error: "Video file is empty" };
  }
  
  return { valid: true };
}

/**
 * Validate thumbnail file
 */
export function validateThumbnailFile(file: File | Blob): {
  valid: boolean;
  error?: string;
} {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return { valid: false, error: `Invalid image type: ${file.type}` };
  }
  
  if (file.size > MAX_THUMBNAIL_SIZE) {
    return { valid: false, error: "Thumbnail exceeds 2 MB limit" };
  }
  
  if (file.size === 0) {
    return { valid: false, error: "Thumbnail file is empty" };
  }
  
  return { valid: true };
}
