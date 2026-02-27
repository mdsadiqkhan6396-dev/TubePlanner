// Hashtag Generator Types - Comprehensive Feature Set

// ─── Core Hashtag Types ─────────────────────────────────────────

// Filter options used by the Viral Hashtags page
export interface HashtagFilterOptions {
  timeRange: 'today' | 'yesterday' | 'week' | 'month' | 'year' | 'all';
  category: string;
  region: string;
  sortBy: 'trending' | 'views' | 'videos' | 'score';
  minViews: number;
  minVideos: number;
  search: string;
}

// Viral hashtag item returned by the hashtag search API
export interface HashtagItem {
  tag: string;
  formatted: string;
  totalViews: number;
  videoCount: number;
  avgViews: number;
  trendScore: number;
  rank: number;
  category?: string;
}

// API response shape for the hashtag search
export interface HashtagSearchResult {
  hashtags: HashtagItem[];
  total: number;
  fetchedAt: string;
  source?: string;
}



export interface Hashtag {
  id: string;
  tag: string; // The hashtag without # prefix
  formatted: string; // With # prefix

  // Metrics
  searchVolume: number;
  competitionScore: number; // 0-100
  trendingScore: number; // 0-100
  overallScore: number; // Combined effectiveness score

  // Trend Data
  trendDirection: 'up' | 'down' | 'stable';
  trendMomentum: number; // How fast it's changing
  isBreakout: boolean; // Suddenly spiking

  // Usage Stats
  videoCount: number; // Videos using this hashtag
  avgViews: number; // Average views on videos with this hashtag

  // Categories
  categories: string[];
  niche: string;

  // Status
  isBanned: boolean;
  isRestricted: boolean;
  restrictionReason?: string;

  // User Data
  isFavorite: boolean;
  usageCount: number; // How many times user has used this
  lastUsed?: string; // ISO date
}

export interface HashtagSet {
  id: string;
  name: string;
  description?: string;
  hashtags: Hashtag[];
  category?: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  usageCount: number;
}

export interface HashtagHistory {
  id: string;
  hashtags: string[];
  videoTitle?: string;
  videoId?: string;
  usedAt: string;
  performance?: {
    views: number;
    clicks: number;
    impressions: number;
  };
}

// ─── Generation Types ───────────────────────────────────────────

export interface HashtagGenerationRequest {
  // Input Options
  keyword?: string;
  videoTitle?: string;
  videoDescription?: string;
  category?: string;

  // Generation Settings
  mode: 'keyword' | 'ai' | 'trending' | 'competitor' | 'niche';
  maxResults: number;
  includeRelated: boolean;
  excludeBanned: boolean;

  // Filters
  minSearchVolume?: number;
  maxCompetition?: number;
  minTrendingScore?: number;
  language?: string;
  country?: string;

  // AI Mode Options
  aiContext?: string;
  contentType?: 'long-form' | 'shorts' | 'live' | 'premiere';
}

export interface HashtagGenerationResponse {
  hashtags: Hashtag[];
  relatedKeywords: string[];
  suggestedCategories: string[];
  generationTime: number;
  source: string;

  // Optimization Tips
  recommendations: HashtagRecommendation[];
  warnings: HashtagWarning[];
}

export interface HashtagRecommendation {
  type: 'add' | 'remove' | 'replace';
  message: string;
  hashtag?: string;
  suggestedReplacement?: string;
  reason: string;
  impact: 'high' | 'medium' | 'low';
}

export interface HashtagWarning {
  type: 'banned' | 'restricted' | 'duplicate' | 'irrelevant' | 'overused' | 'limit';
  message: string;
  hashtag?: string;
  severity: 'error' | 'warning' | 'info';
}

// ─── Analytics Types ────────────────────────────────────────────

export interface HashtagAnalytics {
  hashtag: string;
  period: '7d' | '30d' | '90d' | '1y';

  // Performance Metrics
  totalSearches: number;
  searchTrend: TrendPoint[];

  videoUsage: number;
  usageTrend: TrendPoint[];

  avgViewsPerVideo: number;
  avgEngagement: number;

  // Competition Analysis
  difficultToRank: boolean;
  estimatedPosition: number;
  topCompetitors: CompetitorHashtagUsage[];

  // Seasonal Data
  peakMonths: number[];
  bestPostingTimes: string[];
}

export interface TrendPoint {
  date: string;
  value: number;
}

export interface CompetitorHashtagUsage {
  channelName: string;
  channelId: string;
  thumbnailUrl?: string;
  subscriberCount: number;
  videoCount: number;
  avgViews: number;
  hashtags: string[];
}

// ─── Competitor Analysis Types ──────────────────────────────────

export interface CompetitorAnalysisRequest {
  videoUrl?: string;
  channelUrl?: string;
  searchKeyword?: string;
  maxVideos: number;
}

export interface CompetitorAnalysisResult {
  videos: CompetitorVideo[];
  commonHashtags: HashtagFrequency[];
  uniqueHashtags: HashtagFrequency[];
  recommendations: string[];
}

export interface CompetitorVideo {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  likes: number;
  publishedAt: string;
  hashtags: string[];
  channelName: string;
  channelId: string;
}

export interface HashtagFrequency {
  hashtag: string;
  count: number;
  avgViews: number;
  topVideo?: CompetitorVideo;
}

// ─── Trending Types ─────────────────────────────────────────────

export interface TrendingHashtag extends Hashtag {
  rank: number;
  previousRank?: number;
  rankChange: number;
  peakDate?: string;
  relatedTopics: string[];
}

export interface TrendingCategory {
  id: string;
  name: string;
  icon: string;
  hashtags: TrendingHashtag[];
  lastUpdated: string;
}

// ─── Optimization Types ─────────────────────────────────────────

export interface HashtagOptimizationResult {
  originalHashtags: string[];
  optimizedHashtags: string[];

  // Scores
  originalScore: number;
  optimizedScore: number;
  improvement: number;

  // Changes
  added: string[];
  removed: string[];
  kept: string[];

  // Analysis
  issues: HashtagIssue[];
  suggestions: HashtagSuggestion[];
}

export interface HashtagIssue {
  hashtag: string;
  issue: string;
  severity: 'critical' | 'warning' | 'info';
  fix?: string;
}

export interface HashtagSuggestion {
  hashtag: string;
  reason: string;
  expectedImpact: number;
  confidence: number;
}

// ─── UI State Types ─────────────────────────────────────────────

export interface HashtagGeneratorState {
  // Input State
  searchQuery: string;
  selectedMode: HashtagGenerationRequest['mode'];
  filters: HashtagFilters;

  // Generated Results
  generatedHashtags: Hashtag[];
  selectedHashtags: Hashtag[];

  // UI State
  isGenerating: boolean;
  isAnalyzing: boolean;
  activeTab: 'generate' | 'trending' | 'saved' | 'history' | 'analytics';

  // Saved Data
  savedSets: HashtagSet[];
  history: HashtagHistory[];
  favorites: Hashtag[];
}

export interface HashtagFilters {
  minSearchVolume: number;
  maxCompetition: number;
  minTrendingScore: number;
  categories: string[];
  excludeBanned: boolean;
  language: string;
  country: string;
}

// ─── Copy/Export Types ──────────────────────────────────────────

export type HashtagCopyFormat =
  | 'hashtags' // #tag1 #tag2 
  | 'comma' // tag1, tag2
  | 'newline' // One per line
  | 'youtube-tags' // For YouTube tag field
  | 'json';

export interface ExportOptions {
  format: 'csv' | 'json' | 'txt';
  includeMetrics: boolean;
  selectedOnly: boolean;
}

// ─── Trending Time Periods ──────────────────────────────────────

export type TrendingTimePeriod = 'today' | 'yesterday' | 'this_week' | 'this_month' | 'last_30_days' | 'custom';

export interface TrendingTimeFilter {
  period: TrendingTimePeriod;
  customStartDate?: string; // ISO date for custom range
  customEndDate?: string;
}

export const TRENDING_TIME_PERIODS = [
  { id: 'today', label: 'Today', shortLabel: '24h', description: 'Last 24 hours' },
  { id: 'yesterday', label: 'Yesterday', shortLabel: 'Yest', description: 'Previous day' },
  { id: 'this_week', label: 'This Week', shortLabel: '7d', description: 'Last 7 days' },
  { id: 'this_month', label: 'This Month', shortLabel: '30d', description: 'Last 30 days' },
  { id: 'last_30_days', label: 'Last 30 Days', shortLabel: '30d', description: 'Previous 30 days' },
  { id: 'custom', label: 'Custom Date', shortLabel: 'Custom', description: 'Select a date range' },
] as const;

// ─── YouTube Official Categories (from YouTube Data API) ────────

export const YOUTUBE_OFFICIAL_CATEGORIES = [
  { id: '1', name: 'Film & Animation', icon: 'Film' },
  { id: '2', name: 'Autos & Vehicles', icon: 'Car' },
  { id: '10', name: 'Music', icon: 'Music' },
  { id: '15', name: 'Pets & Animals', icon: 'PawPrint' },
  { id: '17', name: 'Sports', icon: 'Trophy' },
  { id: '18', name: 'Short Movies', icon: 'Clapperboard' },
  { id: '19', name: 'Travel & Events', icon: 'Plane' },
  { id: '20', name: 'Gaming', icon: 'Gamepad2' },
  { id: '21', name: 'Videoblogging', icon: 'Video' },
  { id: '22', name: 'People & Blogs', icon: 'Users' },
  { id: '23', name: 'Comedy', icon: 'Laugh' },
  { id: '24', name: 'Entertainment', icon: 'Star' },
  { id: '25', name: 'News & Politics', icon: 'Newspaper' },
  { id: '26', name: 'Howto & Style', icon: 'Wrench' },
  { id: '27', name: 'Education', icon: 'GraduationCap' },
  { id: '28', name: 'Science & Technology', icon: 'FlaskConical' },
  { id: '29', name: 'Nonprofits & Activism', icon: 'Heart' },
  { id: '30', name: 'Movies', icon: 'Clapperboard' },
  { id: '31', name: 'Anime/Animation', icon: 'Sparkles' },
  { id: '32', name: 'Action/Adventure', icon: 'Zap' },
  { id: '33', name: 'Classics', icon: 'Clock' },
  { id: '34', name: 'Comedy', icon: 'Laugh' },
  { id: '35', name: 'Documentary', icon: 'FileText' },
  { id: '36', name: 'Drama', icon: 'Theater' },
  { id: '37', name: 'Family', icon: 'Users' },
  { id: '38', name: 'Foreign', icon: 'Globe' },
  { id: '39', name: 'Horror', icon: 'Skull' },
  { id: '40', name: 'Sci-Fi/Fantasy', icon: 'Rocket' },
  { id: '41', name: 'Thriller', icon: 'AlertTriangle' },
  { id: '42', name: 'Shorts', icon: 'Play' },
  { id: '43', name: 'Shows', icon: 'Tv' },
  { id: '44', name: 'Trailers', icon: 'Film' },
] as const;

// ─── Niche Categories (Popular Content Niches) ──────────────────

export const NICHE_CATEGORIES = [
  { id: 'gaming_fps', name: 'FPS Gaming', parent: 'gaming', keywords: ['fps', 'shooter', 'cod', 'valorant', 'csgo'] },
  { id: 'gaming_moba', name: 'MOBA Gaming', parent: 'gaming', keywords: ['moba', 'lol', 'dota', 'league'] },
  { id: 'gaming_minecraft', name: 'Minecraft', parent: 'gaming', keywords: ['minecraft', 'mc', 'survival', 'creative'] },
  { id: 'gaming_roblox', name: 'Roblox', parent: 'gaming', keywords: ['roblox', 'rbx', 'robux'] },
  { id: 'gaming_mobile', name: 'Mobile Gaming', parent: 'gaming', keywords: ['mobilegaming', 'mobilegames', 'android', 'ios'] },
  { id: 'music_cover', name: 'Music Covers', parent: 'music', keywords: ['cover', 'coversong', 'acoustic', 'sing'] },
  { id: 'music_production', name: 'Music Production', parent: 'music', keywords: ['musicproduction', 'beatmaking', 'producer', 'daw'] },
  { id: 'tech_reviews', name: 'Tech Reviews', parent: 'tech', keywords: ['techreview', 'unboxing', 'gadgets', 'smartphone'] },
  { id: 'tech_programming', name: 'Programming', parent: 'tech', keywords: ['coding', 'programming', 'developer', 'webdev'] },
  { id: 'fitness_workout', name: 'Workout', parent: 'fitness', keywords: ['workout', 'exercise', 'gym', 'homeworkout'] },
  { id: 'fitness_yoga', name: 'Yoga', parent: 'fitness', keywords: ['yoga', 'meditation', 'flexibility', 'mindfulness'] },
  { id: 'food_recipes', name: 'Recipes', parent: 'food', keywords: ['recipe', 'cooking', 'homemade', 'chef'] },
  { id: 'food_mukbang', name: 'Mukbang', parent: 'food', keywords: ['mukbang', 'eating', 'foodie', 'asmreating'] },
  { id: 'beauty_makeup', name: 'Makeup', parent: 'beauty', keywords: ['makeup', 'makeuptutorial', 'beauty', 'cosmetics'] },
  { id: 'beauty_skincare', name: 'Skincare', parent: 'beauty', keywords: ['skincare', 'skincareroutine', 'glowingskin'] },
  { id: 'travel_vlog', name: 'Travel Vlog', parent: 'travel', keywords: ['travelvlog', 'traveling', 'wanderlust', 'explore'] },
  { id: 'education_language', name: 'Language Learning', parent: 'education', keywords: ['language', 'learning', 'english', 'spanish'] },
  { id: 'shorts_viral', name: 'Viral Shorts', parent: 'shorts', keywords: ['shorts', 'viral', 'fyp', 'trending', 'short'] },
  { id: 'shorts_comedy', name: 'Comedy Shorts', parent: 'shorts', keywords: ['funnyshorts', 'comedyshorts', 'funny', 'meme'] },
  { id: 'asmr_eating', name: 'Eating ASMR', parent: 'asmr', keywords: ['asmreating', 'mukbangasmr', 'foodasmr'] },
  { id: 'asmr_triggers', name: 'ASMR Triggers', parent: 'asmr', keywords: ['asmr', 'tingles', 'relaxing', 'sleep'] },
] as const;

// ─── YouTube Categories for Hashtags ────────────────────────────

export const HASHTAG_CATEGORIES = [
  { id: 'all', name: 'All', icon: 'Hash' },
  { id: 'gaming', name: 'Gaming', icon: 'Gamepad2' },
  { id: 'music', name: 'Music', icon: 'Music' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Film' },
  { id: 'education', name: 'Education', icon: 'GraduationCap' },
  { id: 'tech', name: 'Technology', icon: 'Laptop' },
  { id: 'sports', name: 'Sports', icon: 'Trophy' },
  { id: 'travel', name: 'Travel', icon: 'Plane' },
  { id: 'food', name: 'Food & Cooking', icon: 'ChefHat' },
  { id: 'beauty', name: 'Beauty & Fashion', icon: 'Sparkles' },
  { id: 'fitness', name: 'Fitness & Health', icon: 'Dumbbell' },
  { id: 'business', name: 'Business', icon: 'Briefcase' },
  { id: 'science', name: 'Science', icon: 'FlaskConical' },
  { id: 'news', name: 'News & Politics', icon: 'Newspaper' },
  { id: 'comedy', name: 'Comedy', icon: 'Laugh' },
  { id: 'howto', name: 'How-to & DIY', icon: 'Wrench' },
  { id: 'vlogs', name: 'Vlogs', icon: 'Video' },
  { id: 'asmr', name: 'ASMR', icon: 'Headphones' },
  { id: 'shorts', name: 'Shorts', icon: 'Play' },
  { id: 'livestream', name: 'Live Stream', icon: 'Radio' },
  { id: 'animals', name: 'Pets & Animals', icon: 'PawPrint' },
  { id: 'automotive', name: 'Autos & Vehicles', icon: 'Car' },
] as const;

// ─── Default Values ─────────────────────────────────────────────

export const DEFAULT_HASHTAG_FILTERS: HashtagFilters = {
  minSearchVolume: 0,
  maxCompetition: 100,
  minTrendingScore: 0,
  categories: [],
  excludeBanned: true,
  language: 'en',
  country: 'US',
};

export const YOUTUBE_HASHTAG_LIMITS = {
  maxHashtags: 60, // More causes all to be ignored
  recommendedCount: 3, // YouTube shows top 3 above title
  optimalRange: { min: 3, max: 15 },
  maxCharacters: 100, // Per hashtag
  titleHashtagLimit: 3, // Only 3 shown from title
} as const;
