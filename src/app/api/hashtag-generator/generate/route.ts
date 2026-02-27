import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";

interface GeneratedHashtag {
  id: string;
  tag: string;
  formatted: string;
  searchVolume: number;
  competitionScore: number;
  trendingScore: number;
  overallScore: number;
  trendDirection: 'up' | 'down' | 'stable';
  trendMomentum: number;
  isBreakout: boolean;
  videoCount: number;
  avgViews: number;
  categories: string[];
  niche: string;
  isBanned: boolean;
  isRestricted: boolean;
  isFavorite: boolean;
  usageCount: number;
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

// Banned/restricted hashtags to filter out
const BANNED_HASHTAGS = new Set([
  'sex', 'porn', 'xxx', 'nude', 'nsfw', 'adult', 'drugs', 'weed', 'cocaine',
  'suicide', 'selfharm', 'gore', 'violence', 'terrorism', 'hate', 'racist'
]);

function isHashtagBanned(tag: string): boolean {
  return BANNED_HASHTAGS.has(tag.toLowerCase());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      query,
      keyword,
      mode = 'keyword',
      category = 'all',
      filters = {},
      count = 30
    } = body;

    const searchQuery = query || keyword || '';

    if (!searchQuery.trim() && mode !== 'trending') {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    // Check for YouTube API access
    if (!YOUTUBE_API_KEY) {
      return NextResponse.json(
        { error: "YouTube API key not configured. Please add YOUTUBE_API_KEY to environment variables.", hashtags: [] },
        { status: 503 }
      );
    }

    // Try to get YouTube auth (optional - will use API key fallback if not available)
    const cookieStore = await cookies();
    const storedChannelCookie = cookieStore.get("youtube_channel");

    let accessToken: string | null = null;

    if (storedChannelCookie?.value) {
      try {
        const storedChannel = JSON.parse(storedChannelCookie.value);
        accessToken = storedChannel.accessToken || null;
      } catch {
        // Ignore parse errors, will use API key
      }
    }

    let hashtags: GeneratedHashtag[] = [];

    // Use YouTube API for real-time data
    switch (mode) {
      case 'trending':
        hashtags = await generateFromTrending(searchQuery, category, accessToken, count);
        break;
      case 'niche':
        hashtags = await generateFromNiche(searchQuery, category, accessToken, count);
        break;
      case 'keyword':
      default:
        hashtags = await generateFromKeywords(searchQuery, category, accessToken, count);
        break;
    }

    // Apply filters
    if (filters.minScore) {
      hashtags = hashtags.filter(h => h.overallScore >= filters.minScore);
    }
    if (filters.maxCompetition) {
      hashtags = hashtags.filter(h => h.competitionScore <= filters.maxCompetition);
    }
    if (filters.excludeBanned !== false) {
      hashtags = hashtags.filter(h => !h.isBanned);
    }

    // Sort by score
    hashtags.sort((a, b) => b.overallScore - a.overallScore);

    return NextResponse.json({
      hashtags: hashtags.slice(0, count),
      meta: {
        query,
        mode,
        category,
        total: hashtags.length,
        source: 'youtube',
      },
    });

  } catch (error) {
    console.error('Generate hashtags error:', error);
    return NextResponse.json(
      { error: "Failed to generate hashtags. Please try again.", hashtags: [] },
      { status: 500 }
    );
  }
}

// Generate hashtags from YouTube search results
async function generateFromKeywords(query: string, category: string, accessToken: string | null, count: number): Promise<GeneratedHashtag[]> {
  const params = new URLSearchParams({
    part: 'snippet',
    type: 'video',
    q: query,
    order: 'relevance',
    maxResults: '50',
    relevanceLanguage: 'en',
  });

  if (!accessToken && YOUTUBE_API_KEY) {
    params.append('key', YOUTUBE_API_KEY);
  }

  const fetchOptions: RequestInit = accessToken
    ? { headers: { Authorization: `Bearer ${accessToken}` } }
    : {};

  const searchResponse = await fetch(`${YOUTUBE_API_BASE}/search?${params}`, fetchOptions);

  if (!searchResponse.ok) {
    console.error('YouTube keyword search failed:', await searchResponse.text());
    return [];
  }

  const searchData = await searchResponse.json();
  const videoIds = searchData.items?.map((item: any) => item.id.videoId).filter(Boolean).join(',');

  if (!videoIds) {
    return [];
  }

  // Get video details with tags
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
    console.error('YouTube video details failed:', await videoResponse.text());
    return [];
  }

  const videoData = await videoResponse.json();

  // Aggregate hashtags
  const hashtagStats = new Map<string, { count: number; totalViews: number }>();

  for (const video of videoData.items || []) {
    const description = video.snippet?.description || '';
    const tags = video.snippet?.tags || [];
    const viewCount = parseInt(video.statistics?.viewCount) || 0;

    const videoHashtags = extractHashtags(description, tags);

    videoHashtags.forEach(tag => {
      const existing = hashtagStats.get(tag) || { count: 0, totalViews: 0 };
      existing.count++;
      existing.totalViews += viewCount;
      hashtagStats.set(tag, existing);
    });
  }

  // Convert to hashtag objects
  return Array.from(hashtagStats.entries())
    .map(([tag, stats]) => {
      const competitionScore = Math.min(stats.count * 15, 100);
      const trendingScore = Math.min(Math.log10(stats.totalViews / stats.count + 1) * 15, 100);
      const overallScore = Math.round((trendingScore * 0.6) + ((100 - competitionScore) * 0.4));

      return {
        id: `kw-${tag}-${Date.now()}`,
        tag,
        formatted: `#${tag}`,
        searchVolume: stats.totalViews,
        competitionScore,
        trendingScore,
        overallScore,
        trendDirection: (trendingScore >= 60 ? 'up' : trendingScore >= 30 ? 'stable' : 'down') as 'up' | 'down' | 'stable',
        trendMomentum: trendingScore / 2,
        isBreakout: false,
        videoCount: stats.count,
        avgViews: Math.round(stats.totalViews / stats.count),
        categories: [category],
        niche: category,
        isBanned: isHashtagBanned(tag),
        isRestricted: false,
        isFavorite: false,
        usageCount: 0,
      };
    })
    .filter(h => !h.isBanned)
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, count);
}

// Generate from trending videos in category
async function generateFromTrending(query: string, category: string, accessToken: string | null, count: number): Promise<GeneratedHashtag[]> {
  const params = new URLSearchParams({
    part: 'snippet,statistics',
    chart: 'mostPopular',
    maxResults: '50',
    regionCode: 'US',
  });

  if (!accessToken && YOUTUBE_API_KEY) {
    params.append('key', YOUTUBE_API_KEY);
  }

  const fetchOptions: RequestInit = accessToken
    ? { headers: { Authorization: `Bearer ${accessToken}` } }
    : {};

  const response = await fetch(`${YOUTUBE_API_BASE}/videos?${params}`, fetchOptions);

  if (!response.ok) {
    console.error('YouTube trending fetch failed:', await response.text());
    // Try keyword search as backup
    return generateFromKeywords(query, category, accessToken, count);
  }

  const data = await response.json();

  // Extract hashtags from trending videos
  const hashtagStats = new Map<string, { count: number; totalViews: number }>();

  for (const video of data.items || []) {
    const description = video.snippet?.description || '';
    const tags = video.snippet?.tags || [];
    const viewCount = parseInt(video.statistics?.viewCount) || 0;

    const videoHashtags = extractHashtags(description, tags);

    // Filter by query relevance
    const relevantHashtags = query
      ? videoHashtags.filter(tag =>
        tag.includes(query.toLowerCase()) ||
        query.toLowerCase().split(' ').some(word => tag.includes(word))
      )
      : videoHashtags;

    relevantHashtags.forEach(tag => {
      const existing = hashtagStats.get(tag) || { count: 0, totalViews: 0 };
      existing.count++;
      existing.totalViews += viewCount;
      hashtagStats.set(tag, existing);
    });
  }

  return Array.from(hashtagStats.entries())
    .map(([tag, stats]) => {
      const competitionScore = Math.min(stats.count * 15, 100);
      const trendingScore = Math.min(Math.log10(stats.totalViews / stats.count + 1) * 15, 100);
      const overallScore = Math.round((trendingScore * 0.7) + ((100 - competitionScore) * 0.3));

      return {
        id: `trend-${tag}-${Date.now()}`,
        tag,
        formatted: `#${tag}`,
        searchVolume: stats.totalViews,
        competitionScore,
        trendingScore,
        overallScore,
        trendDirection: 'up' as const,
        trendMomentum: trendingScore,
        isBreakout: stats.count >= 3 && trendingScore >= 60,
        videoCount: stats.count,
        avgViews: Math.round(stats.totalViews / stats.count),
        categories: [category],
        niche: category,
        isBanned: isHashtagBanned(tag),
        isRestricted: false,
        isFavorite: false,
        usageCount: 0,
      };
    })
    .filter(h => !h.isBanned)
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, count);
}

// Generate niche-specific hashtags
async function generateFromNiche(query: string, category: string, accessToken: string | null, count: number): Promise<GeneratedHashtag[]> {
  const nicheQuery = `${query} ${category}`.trim();

  const params = new URLSearchParams({
    part: 'snippet',
    type: 'video',
    q: nicheQuery,
    order: 'viewCount',
    maxResults: '50',
  });

  if (!accessToken && YOUTUBE_API_KEY) {
    params.append('key', YOUTUBE_API_KEY);
  }

  const fetchOptions: RequestInit = accessToken
    ? { headers: { Authorization: `Bearer ${accessToken}` } }
    : {};

  const response = await fetch(`${YOUTUBE_API_BASE}/search?${params}`, fetchOptions);

  if (!response.ok) {
    console.error('YouTube niche search failed:', await response.text());
    return [];
  }

  const searchData = await response.json();
  const videoIds = searchData.items?.map((item: any) => item.id.videoId).filter(Boolean).join(',');

  if (!videoIds) {
    return [];
  }

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
    console.error('YouTube niche video details failed:', await videoResponse.text());
    return [];
  }

  const videoData = await videoResponse.json();

  const hashtagStats = new Map<string, { count: number; totalViews: number }>();

  for (const video of videoData.items || []) {
    const description = video.snippet?.description || '';
    const tags = video.snippet?.tags || [];
    const viewCount = parseInt(video.statistics?.viewCount) || 0;

    const videoHashtags = extractHashtags(description, tags);

    videoHashtags.forEach(tag => {
      const existing = hashtagStats.get(tag) || { count: 0, totalViews: 0 };
      existing.count++;
      existing.totalViews += viewCount;
      hashtagStats.set(tag, existing);
    });
  }

  return Array.from(hashtagStats.entries())
    .map(([tag, stats]) => {
      const competitionScore = Math.min(stats.count * 10, 100);
      const trendingScore = Math.min(Math.log10(stats.totalViews + 1) * 10, 100);
      const overallScore = Math.round((trendingScore * 0.5) + ((100 - competitionScore) * 0.5));

      return {
        id: `niche-${tag}-${Date.now()}`,
        tag,
        formatted: `#${tag}`,
        searchVolume: stats.totalViews,
        competitionScore,
        trendingScore,
        overallScore,
        trendDirection: (trendingScore >= 50 ? 'up' : 'stable') as 'up' | 'down' | 'stable',
        trendMomentum: trendingScore / 2,
        isBreakout: false,
        videoCount: stats.count,
        avgViews: Math.round(stats.totalViews / stats.count),
        categories: [category],
        niche: category,
        isBanned: isHashtagBanned(tag),
        isRestricted: false,
        isFavorite: false,
        usageCount: 0,
      };
    })
    .filter(h => !h.isBanned)
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, count);
}
