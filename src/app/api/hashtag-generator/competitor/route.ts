import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

interface StoredChannel {
  id: string;
  accessToken: string;
  refreshToken?: string;
}

interface CompetitorVideo {
  videoId: string;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  publishedAt: string;
  hashtags: string[];
  channelTitle: string;
  channelId: string;
}

interface HashtagAnalysis {
  tag: string;
  frequency: number;
  totalViews: number;
  avgViews: number;
  topVideo: {
    id: string;
    title: string;
    views: number;
  };
}

// Extract hashtags from video description and tags
function extractHashtags(description: string, tags: string[] = []): string[] {
  const hashtags: Set<string> = new Set();
  
  const hashtagRegex = /#[\w\u0080-\uFFFF]+/g;
  const descriptionHashtags = description.match(hashtagRegex) || [];
  descriptionHashtags.forEach(tag => {
    const cleanTag = tag.replace('#', '').toLowerCase();
    if (cleanTag.length >= 2 && cleanTag.length <= 50) {
      hashtags.add(cleanTag);
    }
  });
  
  tags.forEach(tag => {
    const cleanTag = tag.toLowerCase().replace(/[^a-z0-9]/gi, '');
    if (cleanTag.length >= 2 && cleanTag.length <= 50) {
      hashtags.add(cleanTag);
    }
  });
  
  return Array.from(hashtags);
}

// Extract channel ID from various URL formats
function extractChannelId(url: string): { type: 'channel' | 'video' | 'handle'; id: string } | null {
  try {
    const urlObj = new URL(url);
    
    // Video URL: youtube.com/watch?v=VIDEO_ID
    if (urlObj.searchParams.has('v')) {
      return { type: 'video', id: urlObj.searchParams.get('v')! };
    }
    
    // Channel URL: youtube.com/channel/CHANNEL_ID
    const channelMatch = url.match(/\/channel\/([^/?]+)/);
    if (channelMatch) {
      return { type: 'channel', id: channelMatch[1] };
    }
    
    // Handle URL: youtube.com/@handle
    const handleMatch = url.match(/@([^/?]+)/);
    if (handleMatch) {
      return { type: 'handle', id: handleMatch[1] };
    }
    
    // Short video URL: youtu.be/VIDEO_ID
    if (urlObj.hostname === 'youtu.be') {
      return { type: 'video', id: urlObj.pathname.slice(1) };
    }
    
    return null;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, maxVideos = 20 } = body;
    
    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }
    
    // Get stored channel for auth
    const cookieStore = await cookies();
    const storedChannelCookie = cookieStore.get("youtube_channel");
    
    if (!storedChannelCookie?.value) {
      return NextResponse.json({ error: "Not authenticated with YouTube" }, { status: 401 });
    }
    
    let storedChannel: StoredChannel;
    try {
      storedChannel = JSON.parse(storedChannelCookie.value);
    } catch {
      return NextResponse.json({ error: "Invalid channel data" }, { status: 400 });
    }
    
    const { accessToken } = storedChannel;
    
    if (!accessToken) {
      return NextResponse.json({ error: "No access token" }, { status: 401 });
    }
    
    const parsed = extractChannelId(url);
    
    if (!parsed) {
      return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 });
    }
    
    let channelId: string | null = null;
    let videos: CompetitorVideo[] = [];
    
    if (parsed.type === 'video') {
      // Single video analysis
      const videoData = await fetch(
        `${YOUTUBE_API_BASE}/videos?part=snippet,statistics&id=${parsed.id}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      
      if (!videoData.ok) {
        return NextResponse.json({ error: "Failed to fetch video" }, { status: videoData.status });
      }
      
      const data = await videoData.json();
      const video = data.items?.[0];
      
      if (!video) {
        return NextResponse.json({ error: "Video not found" }, { status: 404 });
      }
      
      channelId = video.snippet.channelId;
      
      videos.push({
        videoId: video.id,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.default?.url,
        views: parseInt(video.statistics?.viewCount) || 0,
        likes: parseInt(video.statistics?.likeCount) || 0,
        publishedAt: video.snippet.publishedAt,
        hashtags: extractHashtags(video.snippet.description || '', video.snippet.tags || []),
        channelTitle: video.snippet.channelTitle,
        channelId: video.snippet.channelId,
      });
    } else if (parsed.type === 'handle') {
      // Resolve handle to channel ID
      const searchResponse = await fetch(
        `${YOUTUBE_API_BASE}/search?part=snippet&type=channel&q=${encodeURIComponent('@' + parsed.id)}&maxResults=1`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      
      if (!searchResponse.ok) {
        return NextResponse.json({ error: "Failed to find channel" }, { status: searchResponse.status });
      }
      
      const searchData = await searchResponse.json();
      channelId = searchData.items?.[0]?.id?.channelId;
      
      if (!channelId) {
        return NextResponse.json({ error: "Channel not found" }, { status: 404 });
      }
    } else {
      channelId = parsed.id;
    }
    
    // If we have a channel ID, fetch their videos
    if (channelId && videos.length === 0) {
      // Search for channel videos
      const searchResponse = await fetch(
        `${YOUTUBE_API_BASE}/search?part=snippet&channelId=${channelId}&type=video&order=viewCount&maxResults=${maxVideos}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      
      if (!searchResponse.ok) {
        return NextResponse.json({ error: "Failed to fetch channel videos" }, { status: searchResponse.status });
      }
      
      const searchData = await searchResponse.json();
      const videoIds = searchData.items?.map((item: any) => item.id.videoId).filter(Boolean).join(',');
      
      if (videoIds) {
        const videoResponse = await fetch(
          `${YOUTUBE_API_BASE}/videos?part=snippet,statistics&id=${videoIds}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        
        if (videoResponse.ok) {
          const videoData = await videoResponse.json();
          
          videos = (videoData.items || []).map((video: any) => ({
            videoId: video.id,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.default?.url,
            views: parseInt(video.statistics?.viewCount) || 0,
            likes: parseInt(video.statistics?.likeCount) || 0,
            publishedAt: video.snippet.publishedAt,
            hashtags: extractHashtags(video.snippet.description || '', video.snippet.tags || []),
            channelTitle: video.snippet.channelTitle,
            channelId: video.snippet.channelId,
          }));
        }
      }
    }
    
    // Analyze hashtag usage across videos
    const hashtagMap = new Map<string, HashtagAnalysis>();
    
    videos.forEach(video => {
      video.hashtags.forEach(tag => {
        const existing = hashtagMap.get(tag) || {
          tag,
          frequency: 0,
          totalViews: 0,
          avgViews: 0,
          topVideo: { id: '', title: '', views: 0 },
        };
        
        existing.frequency++;
        existing.totalViews += video.views;
        existing.avgViews = Math.round(existing.totalViews / existing.frequency);
        
        if (video.views > existing.topVideo.views) {
          existing.topVideo = {
            id: video.videoId,
            title: video.title,
            views: video.views,
          };
        }
        
        hashtagMap.set(tag, existing);
      });
    });
    
    // Sort hashtag analysis by total views
    const hashtagAnalysis = Array.from(hashtagMap.values())
      .sort((a, b) => b.totalViews - a.totalViews);
    
    // Get channel info
    let channelInfo = null;
    if (channelId) {
      const channelResponse = await fetch(
        `${YOUTUBE_API_BASE}/channels?part=snippet,statistics&id=${channelId}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      
      if (channelResponse.ok) {
        const channelData = await channelResponse.json();
        const channel = channelData.items?.[0];
        if (channel) {
          channelInfo = {
            id: channel.id,
            title: channel.snippet.title,
            thumbnail: channel.snippet.thumbnails?.high?.url,
            subscriberCount: parseInt(channel.statistics?.subscriberCount) || 0,
            videoCount: parseInt(channel.statistics?.videoCount) || 0,
            viewCount: parseInt(channel.statistics?.viewCount) || 0,
          };
        }
      }
    }
    
    return NextResponse.json({
      videos,
      hashtagAnalysis,
      channel: channelInfo,
      meta: {
        totalVideosAnalyzed: videos.length,
        totalUniqueHashtags: hashtagMap.size,
        totalHashtagUsages: Array.from(hashtagMap.values()).reduce((acc, h) => acc + h.frequency, 0),
      },
    });
    
  } catch (error) {
    console.error('Competitor analysis error:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
