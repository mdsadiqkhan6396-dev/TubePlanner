import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// YouTube API endpoint
const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";

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

// Calculate trending score based on video metrics
function calculateTrendingScore(viewCount: number, likeCount: number, commentCount: number, ageInHours: number): number {
  const velocity = viewCount / Math.max(ageInHours, 1);
  const engagement = (likeCount + commentCount * 2) / Math.max(viewCount, 1);
  let velocityScore = Math.min(velocity / 100, 50);
  let engagementScore = Math.min(engagement * 1000, 30);
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

    // Check for YouTube API access
    if (!YOUTUBE_API_KEY) {
      return NextResponse.json(
        { error: "YouTube API key not configured. Please add YOUTUBE_API_KEY to environment variables.", hashtags: [] },
        { status: 503 }
      );
    }

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

    if (!accessToken && YOUTUBE_API_KEY) {
      params.append('key', YOUTUBE_API_KEY);
    }

    if (categoryId) {
      params.append('videoCategoryId', categoryId);
    }

    if (niche || searchQuery) {
      params.append('q', `${niche} ${searchQuery}`.trim());
    }

    const fetchOptions: RequestInit = accessToken
      ? { headers: { Authorization: `Bearer ${accessToken}` } }
      : {};

    // Fetch trending videos
    const searchResponse = await fetch(`${YOUTUBE_API_BASE}/search?${params}`, fetchOptions);

    if (!searchResponse.ok) {
      const errorData = await searchResponse.json().catch(() => ({}));
      console.error('YouTube API error:', errorData);
      return NextResponse.json(
        { error: "Failed to fetch trending data from YouTube. Please try again.", hashtags: [] },
        { status: 502 }
      );
    }

    const searchData = await searchResponse.json();
    const videoIds = searchData.items?.map((item: any) => item.id.videoId).filter(Boolean).join(',');

    if (!videoIds) {
      return NextResponse.json({ hashtags: [], meta: { timePeriod, category, niche, source: 'youtube', totalVideosAnalyzed: 0 } });
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
      return NextResponse.json(
        { error: "Failed to fetch video details from YouTube.", hashtags: [] },
        { status: 502 }
      );
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
      .map(([tag, stats]) => {
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

        const isBreakout = stats.count >= 3 && trendingScore >= 70;
        const competitionScore = Math.min(stats.count * 10, 100);
        const overallScore = Math.round((trendingScore * 0.7) + ((100 - competitionScore) * 0.3));

        return {
          id: `trending-${tag}-${Date.now()}`,
          tag,
          formatted: `#${tag}`,
          rank: 0,
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
      .filter(h => h.videoCount >= 2)
      .sort((a, b) => b.overallScore - a.overallScore)
      .slice(0, 50)
      .map((h, i) => ({ ...h, rank: i + 1 }));

    return NextResponse.json({
      hashtags: trendingHashtags,
      meta: {
        timePeriod,
        category,
        niche,
        source: 'youtube',
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
      { error: "Failed to fetch trending hashtags. Please try again.", hashtags: [] },
      { status: 500 }
    );
  }
}
