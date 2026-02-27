// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - YouTube API Wrapper
// ═══════════════════════════════════════════════════════════════════════════════
// Secure wrapper for all YouTube API calls
// ═══════════════════════════════════════════════════════════════════════════════

import { getValidAccessToken, refreshAccessToken } from "./auth";

// ─────────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────────

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_UPLOAD_BASE = "https://www.googleapis.com/upload/youtube/v3";
const YOUTUBE_ANALYTICS_BASE = "https://youtubeanalytics.googleapis.com/v2";

// ─────────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────────

export interface YouTubeChannel {
  id: string;
  title: string;
  description: string;
  customUrl?: string;
  thumbnailUrl: string;
  bannerUrl?: string;
  subscriberCount: number;
  videoCount: number;
  viewCount: number;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  duration?: string;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
}

export interface UploadOptions {
  title: string;
  description: string;
  tags: string[];
  categoryId: string;
  privacyStatus: "private" | "public" | "unlisted";
  scheduledTime?: string;
  madeForKids?: boolean;
  license?: "youtube" | "creativeCommon";
}

// ─────────────────────────────────────────────────────────────────────────────────
// YouTube API Client
// ─────────────────────────────────────────────────────────────────────────────────

export class YouTubeAPI {
  private userId: string;
  
  constructor(userId: string) {
    this.userId = userId;
  }
  
  /**
   * Make authenticated request to YouTube API
   */
  private async request<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    const accessToken = await getValidAccessToken(this.userId);
    
    if (!accessToken) {
      throw new YouTubeAPIError("No valid access token", 401);
    }
    
    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...options.headers,
      },
    });
    
    // Handle token expiration
    if (response.status === 401) {
      // Try to refresh token
      const newToken = await refreshAccessToken(this.userId);
      if (newToken) {
        // Retry with new token
        const retryResponse = await fetch(url, {
          ...options,
          headers: {
            Authorization: `Bearer ${newToken}`,
            ...options.headers,
          },
        });
        
        if (!retryResponse.ok) {
          throw new YouTubeAPIError(
            `API request failed: ${retryResponse.status}`,
            retryResponse.status
          );
        }
        
        return retryResponse.json();
      }
      
      throw new YouTubeAPIError("Authentication expired", 401);
    }
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new YouTubeAPIError(
        error.error?.message || `API request failed: ${response.status}`,
        response.status
      );
    }
    
    return response.json();
  }
  
  // ─────────────────────────────────────────────────────────────────────────────
  // Channel Methods
  // ─────────────────────────────────────────────────────────────────────────────
  
  /**
   * Get current user's channels
   */
  async getMyChannels(): Promise<YouTubeChannel[]> {
    const data = await this.request<any>(
      `${YOUTUBE_API_BASE}/channels?part=snippet,statistics,brandingSettings&mine=true`
    );
    
    return (data.items || []).map(this.mapChannel);
  }
  
  /**
   * Get channel by ID
   */
  async getChannel(channelId: string): Promise<YouTubeChannel | null> {
    const data = await this.request<any>(
      `${YOUTUBE_API_BASE}/channels?part=snippet,statistics,brandingSettings&id=${channelId}`
    );
    
    const item = data.items?.[0];
    return item ? this.mapChannel(item) : null;
  }
  
  private mapChannel(item: any): YouTubeChannel {
    return {
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      customUrl: item.snippet.customUrl,
      thumbnailUrl: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
      bannerUrl: item.brandingSettings?.image?.bannerExternalUrl,
      subscriberCount: parseInt(item.statistics.subscriberCount) || 0,
      videoCount: parseInt(item.statistics.videoCount) || 0,
      viewCount: parseInt(item.statistics.viewCount) || 0,
    };
  }
  
  // ─────────────────────────────────────────────────────────────────────────────
  // Video Methods
  // ─────────────────────────────────────────────────────────────────────────────
  
  /**
   * Get channel videos
   */
  async getChannelVideos(
    channelId: string,
    maxResults: number = 10
  ): Promise<YouTubeVideo[]> {
    // First get video IDs from search
    const searchData = await this.request<any>(
      `${YOUTUBE_API_BASE}/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxResults}`
    );
    
    const videoIds = searchData.items?.map((item: any) => item.id.videoId).join(",");
    if (!videoIds) return [];
    
    // Get full video details
    const videoData = await this.request<any>(
      `${YOUTUBE_API_BASE}/videos?part=snippet,statistics,contentDetails&id=${videoIds}`
    );
    
    return (videoData.items || []).map(this.mapVideo);
  }
  
  /**
   * Get video by ID
   */
  async getVideo(videoId: string): Promise<YouTubeVideo | null> {
    const data = await this.request<any>(
      `${YOUTUBE_API_BASE}/videos?part=snippet,statistics,contentDetails&id=${videoId}`
    );
    
    const item = data.items?.[0];
    return item ? this.mapVideo(item) : null;
  }
  
  private mapVideo(item: any): YouTubeVideo {
    return {
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
      publishedAt: item.snippet.publishedAt,
      duration: item.contentDetails?.duration,
      viewCount: parseInt(item.statistics?.viewCount) || 0,
      likeCount: parseInt(item.statistics?.likeCount) || 0,
      commentCount: parseInt(item.statistics?.commentCount) || 0,
    };
  }
  
  // ─────────────────────────────────────────────────────────────────────────────
  // Upload Methods
  // ─────────────────────────────────────────────────────────────────────────────
  
  /**
   * Upload video using resumable upload
   */
  async uploadVideo(
    videoFile: File | Blob,
    options: UploadOptions,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    const accessToken = await getValidAccessToken(this.userId);
    
    if (!accessToken) {
      throw new YouTubeAPIError("No valid access token", 401);
    }
    
    // Build metadata
    const metadata = {
      snippet: {
        title: options.title.substring(0, 100),
        description: options.description.substring(0, 5000),
        tags: options.tags.slice(0, 500),
        categoryId: options.categoryId,
      },
      status: {
        privacyStatus: options.privacyStatus,
        selfDeclaredMadeForKids: options.madeForKids ?? false,
        license: options.license || "youtube",
        ...(options.scheduledTime && options.privacyStatus === "private" && {
          privacyStatus: "private",
          publishAt: options.scheduledTime,
        }),
      },
    };
    
    // Initialize resumable upload
    const parts = ["snippet", "status"];
    const initResponse = await fetch(
      `${YOUTUBE_UPLOAD_BASE}/videos?uploadType=resumable&part=${parts.join(",")}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "X-Upload-Content-Type": videoFile.type || "video/*",
          "X-Upload-Content-Length": videoFile.size.toString(),
        },
        body: JSON.stringify(metadata),
      }
    );
    
    if (!initResponse.ok) {
      const error = await initResponse.json().catch(() => ({}));
      throw new YouTubeAPIError(
        error.error?.message || "Failed to initialize upload",
        initResponse.status
      );
    }
    
    const uploadUrl = initResponse.headers.get("Location");
    if (!uploadUrl) {
      throw new YouTubeAPIError("No upload URL returned", 500);
    }
    
    // Upload video data
    const uploadResponse = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": videoFile.type || "video/*",
        "Content-Length": videoFile.size.toString(),
      },
      body: videoFile,
    });
    
    if (!uploadResponse.ok) {
      const error = await uploadResponse.json().catch(() => ({}));
      throw new YouTubeAPIError(
        error.error?.message || "Failed to upload video",
        uploadResponse.status
      );
    }
    
    const result = await uploadResponse.json();
    return result.id;
  }
  
  /**
   * Set video thumbnail
   */
  async setThumbnail(videoId: string, thumbnailFile: File | Blob): Promise<void> {
    const accessToken = await getValidAccessToken(this.userId);
    
    if (!accessToken) {
      throw new YouTubeAPIError("No valid access token", 401);
    }
    
    const response = await fetch(
      `${YOUTUBE_UPLOAD_BASE}/thumbnails/set?videoId=${videoId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": thumbnailFile.type || "image/jpeg",
        },
        body: thumbnailFile,
      }
    );
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new YouTubeAPIError(
        error.error?.message || "Failed to set thumbnail",
        response.status
      );
    }
  }
  
  // ─────────────────────────────────────────────────────────────────────────────
  // Analytics Methods
  // ─────────────────────────────────────────────────────────────────────────────
  
  /**
   * Get channel analytics
   */
  async getAnalytics(
    channelId: string,
    startDate: string,
    endDate: string,
    metrics: string[] = ["views", "subscribersGained", "subscribersLost", "estimatedMinutesWatched"]
  ): Promise<any> {
    const params = new URLSearchParams({
      ids: `channel==${channelId}`,
      startDate,
      endDate,
      metrics: metrics.join(","),
    });
    
    return this.request(`${YOUTUBE_ANALYTICS_BASE}/reports?${params}`);
  }
  
  /**
   * Get top videos by views
   */
  async getTopVideos(
    channelId: string,
    startDate: string,
    endDate: string,
    maxResults: number = 10
  ): Promise<any> {
    const params = new URLSearchParams({
      ids: `channel==${channelId}`,
      startDate,
      endDate,
      metrics: "views,likes,comments,estimatedMinutesWatched,averageViewPercentage",
      dimensions: "video",
      sort: "-views",
      maxResults: maxResults.toString(),
    });
    
    return this.request(`${YOUTUBE_ANALYTICS_BASE}/reports?${params}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────────
// Error Class
// ─────────────────────────────────────────────────────────────────────────────────

export class YouTubeAPIError extends Error {
  status: number;
  
  constructor(message: string, status: number) {
    super(message);
    this.name = "YouTubeAPIError";
    this.status = status;
  }
}

// ─────────────────────────────────────────────────────────────────────────────────
// Factory Function
// ─────────────────────────────────────────────────────────────────────────────────

export function createYouTubeAPI(userId: string): YouTubeAPI {
  return new YouTubeAPI(userId);
}
