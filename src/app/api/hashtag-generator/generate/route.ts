import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";

interface StoredChannel {
  id: string;
  accessToken: string;
  refreshToken?: string;
}

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
      keyword, // Support both query and keyword
      mode = 'keyword', 
      category = 'all',
      filters = {},
      count = 30 
    } = body;
    
    const searchQuery = query || keyword || '';
    
    if (!searchQuery.trim() && mode !== 'trending') {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
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
        // Ignore parse errors, will use API key fallback
      }
    }
    
    let hashtags: GeneratedHashtag[] = [];
    
    // Use OAuth token if available, otherwise use API key
    const authParam = accessToken 
      ? { headers: { Authorization: `Bearer ${accessToken}` } }
      : YOUTUBE_API_KEY 
        ? { } // Will add key param to URL
        : null;
    
    if (!authParam && !YOUTUBE_API_KEY) {
      // No auth available - use fallback hashtags
      hashtags = generateFallbackHashtags(searchQuery, category, count);
    } else {
      // Have YouTube access - use API
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
      },
    });
    
  } catch (error) {
    console.error('Generate hashtags error:', error);
    return NextResponse.json(
      { error: "Internal server error" },
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
  
  // Use API key if no access token
  if (!accessToken && YOUTUBE_API_KEY) {
    params.append('key', YOUTUBE_API_KEY);
  }
  
  const fetchOptions: RequestInit = accessToken 
    ? { headers: { Authorization: `Bearer ${accessToken}` } }
    : {};
  
  const searchResponse = await fetch(`${YOUTUBE_API_BASE}/search?${params}`, fetchOptions);
  
  if (!searchResponse.ok) {
    // If API fails, return fallback
    return generateFallbackHashtags(query, category, count);
  }
  
  const searchData = await searchResponse.json();
  const videoIds = searchData.items?.map((item: any) => item.id.videoId).filter(Boolean).join(',');
  
  if (!videoIds) {
    return generateFallbackHashtags(query, category, count);
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
    return generateFallbackHashtags(query, category, count);
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
  
  // Use API key if no access token
  if (!accessToken && YOUTUBE_API_KEY) {
    params.append('key', YOUTUBE_API_KEY);
  }
  
  const fetchOptions: RequestInit = accessToken 
    ? { headers: { Authorization: `Bearer ${accessToken}` } }
    : {};
  
  const response = await fetch(`${YOUTUBE_API_BASE}/videos?${params}`, fetchOptions);
  
  if (!response.ok) {
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
      const trendingScore = Math.min(85 + Math.random() * 15, 100); // Trending videos = high score
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
        isBreakout: true,
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
  // Search for videos in specific niche
  const nicheQuery = `${query} ${category}`.trim();
  
  const params = new URLSearchParams({
    part: 'snippet',
    type: 'video',
    q: nicheQuery,
    order: 'viewCount',
    maxResults: '50',
  });
  
  // Use API key if no access token
  if (!accessToken && YOUTUBE_API_KEY) {
    params.append('key', YOUTUBE_API_KEY);
  }
  
  const fetchOptions: RequestInit = accessToken 
    ? { headers: { Authorization: `Bearer ${accessToken}` } }
    : {};
  
  const response = await fetch(`${YOUTUBE_API_BASE}/search?${params}`, fetchOptions);
  
  if (!response.ok) {
    return generateFallbackHashtags(query, category, count);
  }
  
  const searchData = await response.json();
  const videoIds = searchData.items?.map((item: any) => item.id.videoId).filter(Boolean).join(',');
  
  if (!videoIds) {
    return generateFallbackHashtags(query, category, count);
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
    return generateFallbackHashtags(query, category, count);
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

// Fallback hashtag generation without API
function generateFallbackHashtags(query: string, category: string, count: number): GeneratedHashtag[] {
  const words = query.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
  const hashtags: GeneratedHashtag[] = [];
  
  // Generate variations
  words.forEach((word, index) => {
    hashtags.push({
      id: `fb-${word}-${Date.now()}-${index}`,
      tag: word,
      formatted: `#${word}`,
      searchVolume: 10000,
      competitionScore: 50,
      trendingScore: 50,
      overallScore: 50,
      trendDirection: 'stable',
      trendMomentum: 25,
      isBreakout: false,
      videoCount: 100,
      avgViews: 10000,
      categories: [category],
      niche: category,
      isBanned: isHashtagBanned(word),
      isRestricted: false,
      isFavorite: false,
      usageCount: 0,
    });
  });
  
  // Add combined hashtags
  if (words.length >= 2) {
    const combined = words.join('');
    hashtags.push({
      id: `fb-${combined}-${Date.now()}`,
      tag: combined,
      formatted: `#${combined}`,
      searchVolume: 5000,
      competitionScore: 30,
      trendingScore: 60,
      overallScore: 62,
      trendDirection: 'up',
      trendMomentum: 30,
      isBreakout: false,
      videoCount: 50,
      avgViews: 5000,
      categories: [category],
      niche: category,
      isBanned: isHashtagBanned(combined),
      isRestricted: false,
      isFavorite: false,
      usageCount: 0,
    });
  }
  
  return hashtags.filter(h => !h.isBanned).slice(0, count);
}
