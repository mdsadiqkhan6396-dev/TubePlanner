// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Database-based Storage
// ═══════════════════════════════════════════════════════════════════════════════
// Uses Prisma/PostgreSQL for persistent storage (works on Vercel serverless)
// ═══════════════════════════════════════════════════════════════════════════════

import { db } from "./db";
import { encrypt, decrypt } from "./encryption";

// User data structure (for API responses)
export interface UserData {
  id: string;
  channels: StoredChannel[];
  activeChannelId: string | null;
  drafts: Draft[];
  templates: VideoTemplate[];
  uploadHistory: UploadHistoryItem[];
  scheduledVideos: ScheduledVideoItem[];
  settings: UserSettings;
  lastUpdated: string;
}

export interface StoredChannel {
  id: string;
  title: string;
  thumbnailUrl: string;
  subscriberCount: number;
  videoCount: number;
  accessToken: string;
  refreshToken?: string;
  connectedAt: string;
  accountEmail?: string;
  accountName?: string;
  isBrandAccount?: boolean;
}

export interface Draft {
  id: string;
  title: string;
  description: string;
  tags: string[];
  hashtags: string[];
  categoryId: string;
  privacyStatus: string;
  savedAt: string;
  thumbnailData?: string;
}

export interface VideoTemplate {
  id: string;
  name: string;
  description: string;
  tags: string[];
  hashtags: string[];
  categoryId: string;
  privacyStatus: string;
  madeForKids: string;
  commentsMode: string;
  license: string;
  language: string;
  createdAt: string;
}

export interface UploadHistoryItem {
  id: string;
  title: string;
  videoId: string;
  channelId: string;
  channelTitle: string;
  uploadedAt: string;
  thumbnailUrl?: string;
  scheduledTime?: string;
  status: "uploaded" | "scheduled" | "published";
}

export interface ScheduledVideoItem {
  id: string;
  title: string;
  videoId: string;
  channelId: string;
  scheduledTime: string;
  thumbnailUrl?: string;
  status: "pending" | "published" | "failed";
}

export interface UserSettings {
  defaultPrivacy: string;
  defaultCategory: string;
  defaultLanguage: string;
  autoSaveDrafts: boolean;
  rememberLastChannel: boolean;
}

// Generate user ID from email
export function generateUserId(email: string): string {
  return Buffer.from(email.toLowerCase().trim()).toString("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, 16);
}

// Helper to convert DB channel to StoredChannel
async function dbChannelToStored(ch: {
  id: string;
  title: string;
  thumbnailUrl: string | null;
  subscriberCount: bigint;
  videoCount: number;
  accessToken: string | null;
  refreshToken: string | null;
  connectedAt: Date;
  accountEmail: string | null;
  accountName: string | null;
  isBrandAccount: boolean;
}): Promise<StoredChannel> {
  return {
    id: ch.id,
    title: ch.title,
    thumbnailUrl: ch.thumbnailUrl || "",
    subscriberCount: Number(ch.subscriberCount),
    videoCount: ch.videoCount,
    accessToken: ch.accessToken ? await decrypt(ch.accessToken) : "",
    refreshToken: ch.refreshToken ? await decrypt(ch.refreshToken) : undefined,
    connectedAt: ch.connectedAt.toISOString(),
    accountEmail: ch.accountEmail || undefined,
    accountName: ch.accountName || undefined,
    isBrandAccount: ch.isBrandAccount,
  };
}

// Get or create user in database
export async function getOrCreateUser(email: string): Promise<UserData> {
  try {
    // Try to find existing user
    let user = await db.user.findUnique({
      where: { email: email.toLowerCase().trim() },
      include: {
        channels: true,
        settings: true,
      },
    });

    // Create if doesn't exist
    if (!user) {
      user = await db.user.create({
        data: {
          email: email.toLowerCase().trim(),
          settings: {
            create: {
              defaultPrivacy: "PRIVATE",
              defaultCategory: "22",
              defaultLanguage: "en",
              autoSaveDrafts: true,
            },
          },
        },
        include: {
          channels: true,
          settings: true,
        },
      });
    }

    // Convert to UserData format
    const channels: StoredChannel[] = await Promise.all(user.channels.map(dbChannelToStored));
    const activeChannel = user.channels.find(c => c.isActive);

    return {
      id: user.id,
      channels,
      activeChannelId: activeChannel?.id || (channels[0]?.id || null),
      drafts: [],
      templates: [],
      uploadHistory: [],
      scheduledVideos: [],
      settings: {
        defaultPrivacy: user.settings?.defaultPrivacy || "private",
        defaultCategory: user.settings?.defaultCategory || "22",
        defaultLanguage: user.settings?.defaultLanguage || "en",
        autoSaveDrafts: user.settings?.autoSaveDrafts ?? true,
        rememberLastChannel: true,
      },
      lastUpdated: user.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error("Error in getOrCreateUser:", error);
    // Return empty user data on error
    return {
      id: generateUserId(email),
      channels: [],
      activeChannelId: null,
      drafts: [],
      templates: [],
      uploadHistory: [],
      scheduledVideos: [],
      settings: {
        defaultPrivacy: "private",
        defaultCategory: "22",
        defaultLanguage: "en",
        autoSaveDrafts: true,
        rememberLastChannel: true,
      },
      lastUpdated: new Date().toISOString(),
    };
  }
}

// Load user data by ID (supports both database ID and legacy hash-based ID)
export async function loadUserData(userId: string): Promise<UserData | null> {
  try {
    // First try to find by database ID
    let user = await db.user.findUnique({
      where: { id: userId },
      include: {
        channels: true,
        settings: true,
      },
    });

    // If not found and userId looks like a legacy hash, we can't recover it
    // The user will need to reconnect their channel
    if (!user) return null;

    const channels: StoredChannel[] = await Promise.all(user.channels.map(dbChannelToStored));
    const activeChannel = user.channels.find(c => c.isActive);

    return {
      id: user.id,
      channels,
      activeChannelId: activeChannel?.id || null,
      drafts: [],
      templates: [],
      uploadHistory: [],
      scheduledVideos: [],
      settings: {
        defaultPrivacy: user.settings?.defaultPrivacy || "private",
        defaultCategory: user.settings?.defaultCategory || "22",
        defaultLanguage: user.settings?.defaultLanguage || "en",
        autoSaveDrafts: user.settings?.autoSaveDrafts ?? true,
        rememberLastChannel: true,
      },
      lastUpdated: user.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error("Error loading user data:", error);
    return null;
  }
}

// Save user data (add/update channels)
export async function saveUserData(userData: UserData): Promise<boolean> {
  try {
    // Get user
    const user = await db.user.findUnique({
      where: { id: userData.id },
    });

    if (!user) {
      console.error("User not found:", userData.id);
      return false;
    }

    // Update/create channels
    for (const channel of userData.channels) {
      const encryptedAccessToken = await encrypt(channel.accessToken);
      const encryptedRefreshToken = channel.refreshToken ? await encrypt(channel.refreshToken) : null;
      
      await db.youTubeChannel.upsert({
        where: { id: channel.id },
        create: {
          id: channel.id,
          userId: user.id,
          title: channel.title,
          thumbnailUrl: channel.thumbnailUrl,
          subscriberCount: BigInt(channel.subscriberCount),
          videoCount: channel.videoCount,
          accessToken: encryptedAccessToken,
          refreshToken: encryptedRefreshToken,
          accountEmail: channel.accountEmail,
          accountName: channel.accountName,
          isBrandAccount: channel.isBrandAccount || false,
          isActive: channel.id === userData.activeChannelId,
          connectedAt: new Date(channel.connectedAt),
        },
        update: {
          title: channel.title,
          thumbnailUrl: channel.thumbnailUrl,
          subscriberCount: BigInt(channel.subscriberCount),
          videoCount: channel.videoCount,
          accessToken: encryptedAccessToken,
          refreshToken: encryptedRefreshToken,
          accountEmail: channel.accountEmail,
          accountName: channel.accountName,
          isBrandAccount: channel.isBrandAccount || false,
          isActive: channel.id === userData.activeChannelId,
        },
      });
    }

    return true;
  } catch (error) {
    console.error("Error saving user data:", error);
    return false;
  }
}

// Find user by email
export async function findUserByEmail(email: string): Promise<UserData | null> {
  try {
    const user = await db.user.findUnique({
      where: { email: email.toLowerCase().trim() },
      include: {
        channels: true,
        settings: true,
      },
    });

    if (!user) return null;

    const channels: StoredChannel[] = await Promise.all(user.channels.map(dbChannelToStored));
    const activeChannel = user.channels.find(c => c.isActive);

    return {
      id: user.id,
      channels,
      activeChannelId: activeChannel?.id || null,
      drafts: [],
      templates: [],
      uploadHistory: [],
      scheduledVideos: [],
      settings: {
        defaultPrivacy: user.settings?.defaultPrivacy || "private",
        defaultCategory: user.settings?.defaultCategory || "22",
        defaultLanguage: user.settings?.defaultLanguage || "en",
        autoSaveDrafts: user.settings?.autoSaveDrafts ?? true,
        rememberLastChannel: true,
      },
      lastUpdated: user.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error("Error finding user by email:", error);
    return null;
  }
}

// Find user by channel ID
export async function findUserByChannelId(channelId: string): Promise<UserData | null> {
  try {
    const channel = await db.youTubeChannel.findUnique({
      where: { id: channelId },
      include: {
        user: {
          include: {
            channels: true,
            settings: true,
          },
        },
      },
    });

    if (!channel) return null;

    const user = channel.user;
    const channels: StoredChannel[] = await Promise.all(user.channels.map(dbChannelToStored));
    const activeChannel = user.channels.find(c => c.isActive);

    return {
      id: user.id,
      channels,
      activeChannelId: activeChannel?.id || null,
      drafts: [],
      templates: [],
      uploadHistory: [],
      scheduledVideos: [],
      settings: {
        defaultPrivacy: user.settings?.defaultPrivacy || "private",
        defaultCategory: user.settings?.defaultCategory || "22",
        defaultLanguage: user.settings?.defaultLanguage || "en",
        autoSaveDrafts: user.settings?.autoSaveDrafts ?? true,
        rememberLastChannel: true,
      },
      lastUpdated: user.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error("Error finding user by channel:", error);
    return null;
  }
}

// Update channels for a user
export async function updateUserChannels(
  userId: string,
  channels: StoredChannel[],
  activeChannelId: string | null
): Promise<boolean> {
  try {
    // First, reset all channels to inactive
    await db.youTubeChannel.updateMany({
      where: { userId },
      data: { isActive: false },
    });

    // Update/create channels
    for (const channel of channels) {
      const encryptedAccessToken = await encrypt(channel.accessToken);
      const encryptedRefreshToken = channel.refreshToken ? await encrypt(channel.refreshToken) : null;
      
      await db.youTubeChannel.upsert({
        where: { id: channel.id },
        create: {
          id: channel.id,
          userId,
          title: channel.title,
          thumbnailUrl: channel.thumbnailUrl,
          subscriberCount: BigInt(channel.subscriberCount),
          videoCount: channel.videoCount,
          accessToken: encryptedAccessToken,
          refreshToken: encryptedRefreshToken,
          accountEmail: channel.accountEmail,
          accountName: channel.accountName,
          isBrandAccount: channel.isBrandAccount || false,
          isActive: channel.id === activeChannelId,
          connectedAt: new Date(channel.connectedAt),
        },
        update: {
          title: channel.title,
          thumbnailUrl: channel.thumbnailUrl,
          subscriberCount: BigInt(channel.subscriberCount),
          videoCount: channel.videoCount,
          accessToken: encryptedAccessToken,
          refreshToken: encryptedRefreshToken,
          isActive: channel.id === activeChannelId,
        },
      });
    }

    return true;
  } catch (error) {
    console.error("Error updating channels:", error);
    return false;
  }
}

// Add to upload history (placeholder - would need a separate table)
export async function addToUploadHistory(userId: string, item: UploadHistoryItem): Promise<boolean> {
  console.log("Upload history:", userId, item);
  return true;
}

// Update scheduled videos (placeholder)
export async function updateScheduledVideos(userId: string, videos: ScheduledVideoItem[]): Promise<boolean> {
  console.log("Scheduled videos:", userId, videos);
  return true;
}

// Save drafts (placeholder)
export async function saveDrafts(userId: string, drafts: Draft[]): Promise<boolean> {
  console.log("Drafts:", userId, drafts);
  return true;
}

// Save templates (placeholder)
export async function saveTemplates(userId: string, templates: VideoTemplate[]): Promise<boolean> {
  console.log("Templates:", userId, templates);
  return true;
}

// Delete channel
export async function deleteChannel(userId: string, channelId: string): Promise<boolean> {
  try {
    await db.youTubeChannel.delete({
      where: { id: channelId, userId },
    });
    return true;
  } catch (error) {
    console.error("Error deleting channel:", error);
    return false;
  }
}

// Set active channel
export async function setActiveChannel(userId: string, channelId: string): Promise<boolean> {
  try {
    // Reset all to inactive
    await db.youTubeChannel.updateMany({
      where: { userId },
      data: { isActive: false },
    });

    // Set active
    await db.youTubeChannel.update({
      where: { id: channelId, userId },
      data: { isActive: true },
    });

    return true;
  } catch (error) {
    console.error("Error setting active channel:", error);
    return false;
  }
}
