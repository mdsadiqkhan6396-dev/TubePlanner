import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// YouTube API endpoint
const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";

interface StoredChannel {
  id: string;
  accessToken: string;
  refreshToken?: string;
}

interface TrendingHashtag {
  id: string;
  tag: string;
  formatted: string;
  rank: number;
  searchVolume: number;
  competitionScore: number;
  trendingScore: number;
  overallScore: number;
  trendDirection: 'up' | 'down' | 'stable';
  trendMomentum: number;
  rankChange: number;
  isBreakout: boolean;
  videoCount: number;
  avgViews: number;
  categories: string[];
  niche: string;
  isBanned: boolean;
  isRestricted: boolean;
  isFavorite: boolean;
  usageCount: number;
  relatedTopics: string[];
  peakDate?: string;
  region?: string;
}

// Helper to get date range based on time period
function getDateRange(period: string, customStart?: string, customEnd?: string): { startDate: Date; endDate: Date } {
  const now = new Date();
  let endDate = new Date(now);
  let startDate = new Date(now);
  
  switch (period) {
    case 'today':
      startDate.setHours(0, 0, 0, 0);
      break;
    case 'yesterday':
      startDate.setDate(startDate.getDate() - 1);
      startDate.setHours(0, 0, 0, 0);
      endDate.setDate(endDate.getDate() - 1);
      endDate.setHours(23, 59, 59, 999);
      break;
    case 'this_week':
      startDate.setDate(startDate.getDate() - 7);
      break;
    case 'this_month':
      startDate.setDate(startDate.getDate() - 30);
      break;
    case 'last_30_days':
      startDate.setDate(startDate.getDate() - 30);
      break;
    case 'custom':
      if (customStart) startDate = new Date(customStart);
      if (customEnd) endDate = new Date(customEnd);
      break;
    default:
      startDate.setDate(startDate.getDate() - 7);
  }
  
  return { startDate, endDate };
}

// YouTube category ID mapping
const CATEGORY_MAP: Record<string, string> = {
  'all': '',
  'gaming': '20',
  'music': '10',
  'entertainment': '24',
  'education': '27',
  'tech': '28',
  'sports': '17',
  'travel': '19',
  'food': '26',
  'news': '25',
  'comedy': '23',
  'howto': '26',
  'vlogs': '22',
  'science': '28',
  'beauty': '26',
  'fitness': '17',
  'business': '28',
  'asmr': '24',
};

// Extract hashtags from video description and tags
function extractHashtags(description: string, tags: string[] = []): string[] {
  const hashtags: Set<string> = new Set();
  
  // Extract hashtags from description (e.g., #gaming, #tech)
  const hashtagRegex = /#[\w\u0080-\uFFFF]+/g;
  const descriptionHashtags = description.match(hashtagRegex) || [];
  descriptionHashtags.forEach(tag => {
    const cleanTag = tag.replace('#', '').toLowerCase();
    if (cleanTag.length >= 2 && cleanTag.length <= 50) {
      hashtags.add(cleanTag);
    }
  });
  
  // Add video tags as potential hashtags
  tags.forEach(tag => {
    const cleanTag = tag.toLowerCase().replace(/[^a-z0-9]/gi, '');
    if (cleanTag.length >= 2 && cleanTag.length <= 50) {
      hashtags.add(cleanTag);
    }
  });
  
  return Array.from(hashtags);
}

// Calculate trending score based on video metrics
function calculateTrendingScore(viewCount: number, likeCount: number, commentCount: number, ageInHours: number): number {
  // Viral velocity: views per hour
  const velocity = viewCount / Math.max(ageInHours, 1);
  
  // Engagement ratio
  const engagement = (likeCount + commentCount * 2) / Math.max(viewCount, 1);
  
  // Base score from velocity (0-50)
  let velocityScore = Math.min(velocity / 100, 50);
  
  // Engagement bonus (0-30)
  let engagementScore = Math.min(engagement * 1000, 30);
  
  // Recency bonus (0-20)
  let recencyScore = Math.max(20 - (ageInHours / 24), 0);
  
  return Math.round(velocityScore + engagementScore + recencyScore);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const timePeriod = searchParams.get('timePeriod') || 'today';
    const category = searchParams.get('category') || 'all';
    const niche = searchParams.get('niche') || '';
    const customDateStart = searchParams.get('customDateStart') || '';
    const customDateEnd = searchParams.get('customDateEnd') || '';
    const searchQuery = searchParams.get('search') || '';
    
    // Try to get YouTube auth (optional)
    const cookieStore = await cookies();
    const storedChannelCookie = cookieStore.get("youtube_channel");
    
    let accessToken: string | null = null;
    
    if (storedChannelCookie?.value) {
      try {
        const storedChannel = JSON.parse(storedChannelCookie.value);
        accessToken = storedChannel.accessToken || null;
      } catch {
        // Ignore parse errors
      }
    }
    
    // If no YouTube auth and no API key, use fallback hashtags
    if (!accessToken && !YOUTUBE_API_KEY) {
      const fallbackTrending = generateFallbackTrending(category, niche);
      return NextResponse.json({ 
        hashtags: fallbackTrending,
        meta: {
          timePeriod,
          category,
          niche,
          source: 'fallback',
          totalVideosAnalyzed: 0,
        },
      });
    }
    
    const { startDate, endDate } = getDateRange(timePeriod, customDateStart, customDateEnd);
    const categoryId = CATEGORY_MAP[category] || '';
    
    // Build YouTube API search URL
    const params = new URLSearchParams({
      part: 'snippet',
      type: 'video',
      order: 'viewCount',
      maxResults: '50',
      publishedAfter: startDate.toISOString(),
      publishedBefore: endDate.toISOString(),
      regionCode: 'US',
    });
    
    // Use API key if no access token
    if (!accessToken && YOUTUBE_API_KEY) {
      params.append('key', YOUTUBE_API_KEY);
    }
    
    if (categoryId) {
      params.append('videoCategoryId', categoryId);
    }
    
    // Add search query if provided (for niche filtering)
    if (niche || searchQuery) {
      params.append('q', `${niche} ${searchQuery}`.trim());
    }
    
    // Prepare fetch options based on auth method
    const fetchOptions: RequestInit = accessToken 
      ? { headers: { Authorization: `Bearer ${accessToken}` } }
      : {};
    
    // Fetch trending videos
    const searchResponse = await fetch(`${YOUTUBE_API_BASE}/search?${params}`, fetchOptions);
    
    if (!searchResponse.ok) {
      const errorData = await searchResponse.json();
      console.error('YouTube API error:', errorData);
      // Return fallback on error
      const fallbackTrending = generateFallbackTrending(category, niche);
      return NextResponse.json({ 
        hashtags: fallbackTrending,
        meta: {
          timePeriod,
          category,
          niche,
          source: 'fallback',
          totalVideosAnalyzed: 0,
        },
      });
    }
    
    const searchData = await searchResponse.json();
    const videoIds = searchData.items?.map((item: any) => item.id.videoId).filter(Boolean).join(',');
    
    if (!videoIds) {
      return NextResponse.json({ hashtags: [] });
    }
    
    // Get full video details including tags
    const videoParams = new URLSearchParams({
      part: 'snippet,statistics',
      id: videoIds,
    });
    
    if (!accessToken && YOUTUBE_API_KEY) {
      videoParams.append('key', YOUTUBE_API_KEY);
    }
    
    const videoResponse = await fetch(
      `${YOUTUBE_API_BASE}/videos?${videoParams}`,
      fetchOptions
    );
    
    if (!videoResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch video details" }, { status: videoResponse.status });
    }
    
    const videoData = await videoResponse.json();
    
    // Extract and aggregate hashtags from all videos
    const hashtagStats: Map<string, {
      count: number;
      totalViews: number;
      totalLikes: number;
      totalComments: number;
      videos: any[];
      relatedTags: Set<string>;
    }> = new Map();
    
    for (const video of videoData.items || []) {
      const description = video.snippet?.description || '';
      const tags = video.snippet?.tags || [];
      const viewCount = parseInt(video.statistics?.viewCount) || 0;
      const likeCount = parseInt(video.statistics?.likeCount) || 0;
      const commentCount = parseInt(video.statistics?.commentCount) || 0;
      
      const videoHashtags = extractHashtags(description, tags);
      
      videoHashtags.forEach(tag => {
        const existing = hashtagStats.get(tag) || {
          count: 0,
          totalViews: 0,
          totalLikes: 0,
          totalComments: 0,
          videos: [],
          relatedTags: new Set(),
        };
        
        existing.count++;
        existing.totalViews += viewCount;
        existing.totalLikes += likeCount;
        existing.totalComments += commentCount;
        existing.videos.push(video);
        
        // Add other hashtags from same video as related
        videoHashtags.forEach(related => {
          if (related !== tag) existing.relatedTags.add(related);
        });
        
        hashtagStats.set(tag, existing);
      });
    }
    
    // Convert to trending hashtags array with scoring
    const trendingHashtags: TrendingHashtag[] = Array.from(hashtagStats.entries())
      .map(([tag, stats], index) => {
        const avgViews = stats.count > 0 ? Math.round(stats.totalViews / stats.count) : 0;
        
        // Calculate age of most recent video
        const mostRecentVideo = stats.videos.sort((a, b) => 
          new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime()
        )[0];
        const ageInHours = mostRecentVideo 
          ? (Date.now() - new Date(mostRecentVideo.snippet.publishedAt).getTime()) / (1000 * 60 * 60)
          : 24;
        
        const trendingScore = calculateTrendingScore(
          stats.totalViews,
          stats.totalLikes,
          stats.totalComments,
          ageInHours
        );
        
        // Determine if breakout (appearing in many recent videos with high velocity)
        const isBreakout = stats.count >= 3 && trendingScore >= 70;
        
        // Competition score based on usage
        const competitionScore = Math.min(stats.count * 10, 100);
        
        // Overall score combines trending and competition
        const overallScore = Math.round((trendingScore * 0.7) + ((100 - competitionScore) * 0.3));
        
        return {
          id: `trending-${tag}-${Date.now()}`,
          tag,
          formatted: `#${tag}`,
          rank: 0, // Will be set after sorting
          searchVolume: stats.totalViews,
          competitionScore,
          trendingScore,
          overallScore,
          trendDirection: (trendingScore >= 60 ? 'up' : trendingScore >= 30 ? 'stable' : 'down') as 'up' | 'down' | 'stable',
          trendMomentum: trendingScore,
          rankChange: isBreakout ? Math.floor(Math.random() * 10) + 5 : Math.floor(Math.random() * 5) - 2,
          isBreakout,
          videoCount: stats.count,
          avgViews,
          categories: [category !== 'all' ? category : 'general'],
          niche: niche || category,
          isBanned: false,
          isRestricted: false,
          isFavorite: false,
          usageCount: 0,
          relatedTopics: Array.from(stats.relatedTags).slice(0, 5),
          region: 'US',
        };
      })
      .filter(h => h.videoCount >= 2) // Only show hashtags appearing in multiple videos
      .sort((a, b) => b.overallScore - a.overallScore)
      .slice(0, 50)
      .map((h, i) => ({ ...h, rank: i + 1 }));
    
    return NextResponse.json({ 
      hashtags: trendingHashtags,
      meta: {
        timePeriod,
        category,
        niche,
        totalVideosAnalyzed: videoData.items?.length || 0,
        dateRange: {
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        },
      },
    });
    
  } catch (error) {
    console.error('Trending hashtags error:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Fallback trending hashtags when no API available
function generateFallbackTrending(category: string, niche: string): TrendingHashtag[] {
  const categoryHashtags: Record<string, string[]> = {
    'gaming': ['gaming', 'gamer', 'twitch', 'streamer', 'gameplay', 'esports', 'playstation', 'xbox', 'nintendo', 'videogames', 'fortnite', 'minecraft', 'valorant', 'leagueoflegends', 'apex'],
    'music': ['music', 'newmusic', 'hiphop', 'pop', 'rock', 'singer', 'rapper', 'musician', 'beats', 'song', 'album', 'musicvideo', 'viral', 'tiktok', 'trending'],
    'entertainment': ['entertainment', 'viral', 'trending', 'funny', 'memes', 'celebrity', 'moviereview', 'reaction', 'challenge', 'prank', 'vlog', 'daily', 'lifestyle', 'content', 'creator'],
    'education': ['education', 'learn', 'tutorial', 'howto', 'study', 'tips', 'knowledge', 'school', 'college', 'student', 'teacher', 'course', 'lesson', 'skillshare', 'online'],
    'tech': ['tech', 'technology', 'gadgets', 'review', 'unboxing', 'apple', 'android', 'iphone', 'samsung', 'laptop', 'ai', 'coding', 'programming', 'software', 'app'],
    'sports': ['sports', 'fitness', 'workout', 'athlete', 'football', 'basketball', 'soccer', 'nba', 'nfl', 'mma', 'boxing', 'training', 'gym', 'health', 'motivation'],
    'food': ['food', 'recipe', 'cooking', 'chef', 'foodie', 'delicious', 'homemade', 'baking', 'healthy', 'vegan', 'mukbang', 'asmr', 'restaurant', 'foodreview', 'tasty'],
    'travel': ['travel', 'adventure', 'explore', 'vacation', 'trip', 'wanderlust', 'travelvlog', 'destination', 'tourism', 'backpacking', 'roadtrip', 'beach', 'nature', 'world', 'lifestyle'],
    'beauty': ['beauty', 'makeup', 'skincare', 'fashion', 'style', 'tutorial', 'grwm', 'haul', 'review', 'cosmetics', 'hair', 'nails', 'model', 'influencer', 'selfcare'],
    'all': ['viral', 'trending', 'youtube', 'fyp', 'foryou', 'subscribe', 'like', 'share', 'newyork', 'usa', '2024', 'popular', 'mustwatch', 'recommended', 'best'],
  };
  
  const tags = categoryHashtags[category] || categoryHashtags['all'];
  
  return tags.map((tag, index) => ({
    id: `fallback-${tag}-${Date.now()}-${index}`,
    tag,
    formatted: `#${tag}`,
    rank: index + 1,
    searchVolume: Math.round((100 - index * 5) * 10000),
    competitionScore: Math.min(50 + index * 3, 95),
    trendingScore: Math.max(95 - index * 5, 30),
    overallScore: Math.max(90 - index * 4, 40),
    trendDirection: (index < 5 ? 'up' : index < 10 ? 'stable' : 'down') as 'up' | 'down' | 'stable',
    trendMomentum: Math.max(90 - index * 5, 20),
    rankChange: index < 3 ? Math.floor(Math.random() * 5) + 1 : 0,
    isBreakout: index < 3,
    videoCount: Math.round((100 - index * 5) * 100),
    avgViews: Math.round((100 - index * 5) * 1000),
    categories: [category !== 'all' ? category : 'general'],
    niche: niche || category,
    isBanned: false,
    isRestricted: false,
    isFavorite: false,
    usageCount: 0,
    relatedTopics: [],
    region: 'US',
  }));
}
