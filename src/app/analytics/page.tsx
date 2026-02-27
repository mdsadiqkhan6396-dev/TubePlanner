"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  Clock, 
  PlaySquare,
  Globe,
  Monitor,
  Smartphone,
  Tv,
  ThumbsUp,
  MessageSquare,
  Share2,
  DollarSign,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap,
  RefreshCw,
  ChevronDown,
  ExternalLink,
  Youtube
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Types for analytics data
interface AnalyticsData {
  overview: {
    totalViews: number;
    totalSubscribers: number;
    totalVideos: number;
    totalWatchTimeMinutes: number;
    viewsChange: number;
    subscribersChange: number;
    avgViewDuration: number;
  };
  growth: {
    labels: string[];
    views: number[];
    subscribers: number[];
    watchTime: number[];
  };
  topVideos: {
    id: string;
    title: string;
    thumbnail: string;
    views: number;
    likes: number;
    comments: number;
    watchTimeMinutes: number;
    avgViewPercentage: number;
  }[];
  recentVideos: {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
    views: number;
    likes: number;
    comments: number;
    ctr?: number;
    avgViewDuration?: number;
  }[];
  audience: {
    countries: { country: string; views: number; percentage: number }[];
    ageGender: { ageGroup: string; male: number; female: number }[];
    deviceTypes: { device: string; views: number; percentage: number }[];
    trafficSources: { source: string; views: number; percentage: number }[];
    peakHours: { hour: number; views: number }[];
    subscribedVsNot: { subscribed: number; notSubscribed: number };
  };
  revenue?: {
    estimatedRevenue: number;
    rpm: number;
    cpm: number;
    playbackBasedCpm: number;
    monetizedPlaybacks: number;
    revenueByMonth: { month: string; revenue: number }[];
  };
  engagement: {
    avgLikesPerVideo: number;
    avgCommentsPerVideo: number;
    avgSharesPerVideo: number;
    engagementRate: number;
    subscriberGainedFromVideos: number;
  };
  milestones?: {
    currentSubscribers: number;
    nextMilestone: number;
    progressPercentage: number;
    estimatedDaysToMilestone: number;
    recentMilestones: { milestone: number; reachedAt: string }[];
  };
}

interface Channel {
  id: string;
  title: string;
  thumbnailUrl: string;
  subscriberCount: number;
  videoCount: number;
}

function formatNumber(num: number): string {
  if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toLocaleString();
}

function formatDuration(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours}h ${mins}m`;
  }
  return `${Math.round(minutes)}m`;
}

function formatPercentageChange(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

// Stat Card Component
function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  suffix = "",
  className = "" 
}: { 
  title: string; 
  value: string | number; 
  change?: number; 
  icon: React.ElementType;
  suffix?: string;
  className?: string;
}) {
  const isPositive = change !== undefined && change >= 0;
  
  return (
    <div className={`bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold text-foreground mt-2">
            {typeof value === "number" ? formatNumber(value) : value}
            {suffix && <span className="text-lg text-muted-foreground ml-1">{suffix}</span>}
          </p>
          {change !== undefined && (
            <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${
              isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{formatPercentageChange(change)}</span>
              <span className="text-muted-foreground font-normal">vs last period</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}

// Progress Bar Component
function ProgressBar({ value, max, label, color = "bg-primary" }: { 
  value: number; 
  max: number; 
  label: string;
  color?: string;
}) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{label}</span>
        <span className="text-muted-foreground">{formatNumber(value)}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// Simple Bar Chart Component
function SimpleBarChart({ data, maxValue }: { 
  data: { label: string; value: number; color?: string }[];
  maxValue?: number;
}) {
  const max = maxValue || Math.max(...data.map(d => d.value));
  
  return (
    <div className="space-y-3">
      {data.map((item, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-foreground">{item.label}</span>
            <span className="text-muted-foreground font-medium">{formatNumber(item.value)}</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className={`h-full ${item.color || "bg-primary"} rounded-full transition-all duration-500`}
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Video Card Component
function VideoCard({ video, rank }: { 
  video: { 
    id: string; 
    title: string; 
    thumbnail: string; 
    views: number; 
    likes: number; 
    comments: number;
    watchTimeMinutes?: number;
    avgViewPercentage?: number;
  }; 
  rank?: number;
}) {
  return (
    <div className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
      {rank && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold text-primary">#{rank}</span>
        </div>
      )}
      <div className="flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden bg-muted">
        <img 
          src={video.thumbnail || "/default-thumbnail.png"} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-foreground line-clamp-2 mb-2">{video.title}</h4>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {formatNumber(video.views)} views
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-3.5 h-3.5" />
            {formatNumber(video.likes)}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5" />
            {formatNumber(video.comments)}
          </span>
          {video.avgViewPercentage && (
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" />
              {video.avgViewPercentage.toFixed(1)}% retention
            </span>
          )}
        </div>
      </div>
      <a 
        href={`https://youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 p-2 hover:bg-muted rounded-lg transition-colors"
      >
        <ExternalLink className="w-4 h-4 text-muted-foreground" />
      </a>
    </div>
  );
}

// Main Analytics Page Content Component
function AnalyticsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const channelIdParam = searchParams.get("channel");
  
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(channelIdParam);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState<"7" | "28" | "90" | "365">("28");
  const [activeTab, setActiveTab] = useState<"overview" | "audience" | "content" | "revenue">("overview");
  
  // Load channels
  useEffect(() => {
    async function loadChannels() {
      try {
        const res = await fetch("/api/video-scheduler/auth/status");
        if (res.ok) {
          const data = await res.json();
          setChannels(data.channels || []);
          if (!selectedChannelId && data.channels?.length > 0) {
            setSelectedChannelId(data.activeChannelId || data.channels[0].id);
          }
        }
      } catch (err) {
        console.error("Error loading channels:", err);
      }
    }
    loadChannels();
  }, [selectedChannelId]);
  
  // Load analytics
  const loadAnalytics = useCallback(async () => {
    if (!selectedChannelId) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch(`/api/video-scheduler/channel-analytics?channelId=${selectedChannelId}&period=${period}`);
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to load analytics");
      }
      const data = await res.json();
      setAnalytics(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load analytics");
    } finally {
      setLoading(false);
    }
  }, [selectedChannelId, period]);
  
  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);
  
  const selectedChannel = channels.find(c => c.id === selectedChannelId);
  
  // Device icon mapping
  const getDeviceIcon = (device: string) => {
    const lowered = device.toLowerCase();
    if (lowered.includes("mobile") || lowered.includes("phone")) return Smartphone;
    if (lowered.includes("tv") || lowered.includes("television")) return Tv;
    return Monitor;
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back button and title */}
            <div className="flex items-center gap-4">
              <Link 
                href="/video-scheduler"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-foreground">Channel Analytics</h1>
                  <p className="text-xs text-muted-foreground">Performance insights & growth metrics</p>
                </div>
              </div>
            </div>
            
            {/* Right: Channel selector, period, theme */}
            <div className="flex items-center gap-3">
              {/* Period Selector */}
              <select 
                value={period}
                onChange={(e) => setPeriod(e.target.value as typeof period)}
                className="px-3 py-2 text-sm bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="7">Last 7 days</option>
                <option value="28">Last 28 days</option>
                <option value="90">Last 90 days</option>
                <option value="365">Last 365 days</option>
              </select>
              
              {/* Channel Selector */}
              {channels.length > 0 && (
                <div className="relative">
                  <select
                    value={selectedChannelId || ""}
                    onChange={(e) => setSelectedChannelId(e.target.value)}
                    className="appearance-none pl-10 pr-8 py-2 text-sm bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    {channels.map(ch => (
                      <option key={ch.id} value={ch.id}>{ch.title}</option>
                    ))}
                  </select>
                  {selectedChannel && (
                    <img 
                      src={selectedChannel.thumbnailUrl || "/default-avatar.png"}
                      alt={selectedChannel.title}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                    />
                  )}
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              )}
              
              {/* Refresh */}
              <button 
                onClick={loadAnalytics}
                disabled={loading}
                className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-5 h-5 text-foreground ${loading ? "animate-spin" : ""}`} />
              </button>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      
      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* No Channel Connected */}
        {channels.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="inline-flex p-4 bg-red-500/10 rounded-full mb-4">
              <Youtube className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">No Channel Connected</h2>
            <p className="text-muted-foreground mb-6">Connect your YouTube channel to view analytics</p>
            <Link 
              href="/video-scheduler"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go to Video Scheduler
            </Link>
          </div>
        )}
        
        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="inline-flex p-4 bg-red-500/10 rounded-full mb-4">
              <Activity className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Error Loading Analytics</h2>
            <p className="text-muted-foreground mb-6">{error}</p>
            <button 
              onClick={loadAnalytics}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}
        
        {/* Analytics Content */}
        {analytics && !loading && !error && (
          <>
            {/* Tab Navigation */}
            <div className="flex gap-1 p-1 bg-muted rounded-xl mb-8 w-fit">
              {[
                { id: "overview", label: "Overview", icon: BarChart3 },
                { id: "audience", label: "Audience", icon: Users },
                { id: "content", label: "Content", icon: PlaySquare },
                { id: "revenue", label: "Revenue", icon: DollarSign },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard 
                    title="Total Views"
                    value={analytics.overview.totalViews}
                    change={analytics.overview.viewsChange}
                    icon={Eye}
                  />
                  <StatCard 
                    title="Subscribers"
                    value={analytics.overview.totalSubscribers}
                    change={analytics.overview.subscribersChange}
                    icon={Users}
                  />
                  <StatCard 
                    title="Watch Time"
                    value={formatDuration(analytics.overview.totalWatchTimeMinutes)}
                    icon={Clock}
                  />
                  <StatCard 
                    title="Videos"
                    value={analytics.overview.totalVideos}
                    icon={PlaySquare}
                  />
                </div>
                
                {/* Engagement Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      Engagement
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4" /> Avg Likes/Video
                        </span>
                        <span className="font-semibold text-foreground">
                          {formatNumber(analytics.engagement.avgLikesPerVideo)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" /> Avg Comments/Video
                        </span>
                        <span className="font-semibold text-foreground">
                          {formatNumber(analytics.engagement.avgCommentsPerVideo)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Share2 className="w-4 h-4" /> Avg Shares/Video
                        </span>
                        <span className="font-semibold text-foreground">
                          {formatNumber(analytics.engagement.avgSharesPerVideo)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-border">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Zap className="w-4 h-4" /> Engagement Rate
                        </span>
                        <span className="font-bold text-primary">
                          {analytics.engagement.engagementRate.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Milestone Progress */}
                  {analytics.milestones && (
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Next Milestone
                      </h3>
                      <div className="text-center mb-4">
                        <p className="text-4xl font-bold text-foreground">
                          {formatNumber(analytics.milestones.currentSubscribers)}
                        </p>
                        <p className="text-muted-foreground">
                          / {formatNumber(analytics.milestones.nextMilestone)} subscribers
                        </p>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden mb-3">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-green-500 rounded-full"
                          style={{ width: `${analytics.milestones.progressPercentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-center text-muted-foreground">
                        ~{analytics.milestones.estimatedDaysToMilestone} days to reach milestone
                      </p>
                    </div>
                  )}
                  
                  {/* Subscribers vs Non-subscribers */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-primary" />
                      Viewer Types
                    </h3>
                    <div className="space-y-4">
                      <ProgressBar 
                        value={analytics.audience.subscribedVsNot.subscribed}
                        max={analytics.audience.subscribedVsNot.subscribed + analytics.audience.subscribedVsNot.notSubscribed}
                        label="Subscribers"
                        color="bg-green-500"
                      />
                      <ProgressBar 
                        value={analytics.audience.subscribedVsNot.notSubscribed}
                        max={analytics.audience.subscribedVsNot.subscribed + analytics.audience.subscribedVsNot.notSubscribed}
                        label="Non-subscribers"
                        color="bg-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Top Videos */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Top Performing Videos
                  </h3>
                  <div className="space-y-3">
                    {analytics.topVideos.slice(0, 5).map((video, index) => (
                      <VideoCard key={video.id} video={video} rank={index + 1} />
                    ))}
                    {analytics.topVideos.length === 0 && (
                      <p className="text-muted-foreground text-center py-8">No video data available</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Audience Tab */}
            {activeTab === "audience" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Geographic Distribution */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      Top Countries
                    </h3>
                    <SimpleBarChart 
                      data={analytics.audience.countries.slice(0, 6).map((c, i) => ({
                        label: c.country,
                        value: c.views,
                        color: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500"][i]
                      }))}
                    />
                  </div>
                  
                  {/* Device Types */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-primary" />
                      Devices
                    </h3>
                    <div className="space-y-4">
                      {analytics.audience.deviceTypes.map((device, i) => {
                        const DeviceIcon = getDeviceIcon(device.device);
                        return (
                          <div key={i} className="flex items-center gap-4">
                            <div className="p-2 bg-muted rounded-lg">
                              <DeviceIcon className="w-5 h-5 text-foreground" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-foreground font-medium">{device.device}</span>
                                <span className="text-muted-foreground">{device.percentage.toFixed(1)}%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${device.percentage}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Traffic Sources */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      Traffic Sources
                    </h3>
                    <SimpleBarChart 
                      data={analytics.audience.trafficSources.slice(0, 6).map((s, i) => ({
                        label: s.source,
                        value: s.views,
                        color: ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-lime-500", "bg-emerald-500", "bg-teal-500"][i]
                      }))}
                    />
                  </div>
                  
                  {/* Peak Activity Hours */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Peak Viewing Hours
                    </h3>
                    <div className="grid grid-cols-6 gap-2">
                      {analytics.audience.peakHours.map((h) => {
                        const maxViews = Math.max(...analytics.audience.peakHours.map(p => p.views));
                        const intensity = h.views / maxViews;
                        return (
                          <div key={h.hour} className="text-center">
                            <div 
                              className="h-20 rounded-lg mb-1 transition-colors"
                              style={{ 
                                backgroundColor: `rgba(239, 68, 68, ${0.2 + intensity * 0.8})` 
                              }}
                              title={`${formatNumber(h.views)} views`}
                            />
                            <span className="text-xs text-muted-foreground">
                              {h.hour}:00
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Darker = More views during that hour
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Content Tab */}
            {activeTab === "content" && (
              <div className="space-y-8">
                {/* Recent Videos Performance */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <PlaySquare className="w-5 h-5 text-primary" />
                    Recent Videos Performance
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-sm text-muted-foreground border-b border-border">
                          <th className="pb-3 font-medium">Video</th>
                          <th className="pb-3 font-medium text-right">Views</th>
                          <th className="pb-3 font-medium text-right">Likes</th>
                          <th className="pb-3 font-medium text-right">Comments</th>
                          <th className="pb-3 font-medium text-right">CTR</th>
                          <th className="pb-3 font-medium text-right">Published</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {analytics.recentVideos.map(video => (
                          <tr key={video.id} className="hover:bg-muted/50">
                            <td className="py-3">
                              <div className="flex items-center gap-3">
                                <img 
                                  src={video.thumbnail || "/default-thumbnail.png"}
                                  alt={video.title}
                                  className="w-16 h-10 rounded object-cover bg-muted"
                                />
                                <span className="text-sm font-medium text-foreground line-clamp-1 max-w-xs">
                                  {video.title}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 text-right text-sm text-foreground">
                              {formatNumber(video.views)}
                            </td>
                            <td className="py-3 text-right text-sm text-foreground">
                              {formatNumber(video.likes)}
                            </td>
                            <td className="py-3 text-right text-sm text-foreground">
                              {formatNumber(video.comments)}
                            </td>
                            <td className="py-3 text-right text-sm text-foreground">
                              {video.ctr ? `${video.ctr.toFixed(1)}%` : "—"}
                            </td>
                            <td className="py-3 text-right text-sm text-muted-foreground">
                              {new Date(video.publishedAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Revenue Tab */}
            {activeTab === "revenue" && (
              <div className="space-y-8">
                {analytics.revenue ? (
                  <>
                    {/* Revenue Overview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <StatCard 
                        title="Estimated Revenue"
                        value={`$${analytics.revenue.estimatedRevenue.toFixed(2)}`}
                        icon={DollarSign}
                      />
                      <StatCard 
                        title="RPM"
                        value={`$${analytics.revenue.rpm.toFixed(2)}`}
                        icon={TrendingUp}
                      />
                      <StatCard 
                        title="CPM"
                        value={`$${analytics.revenue.cpm.toFixed(2)}`}
                        icon={BarChart3}
                      />
                      <StatCard 
                        title="Monetized Playbacks"
                        value={analytics.revenue.monetizedPlaybacks}
                        icon={PlaySquare}
                      />
                    </div>
                    
                    {/* Revenue by Month */}
                    {analytics.revenue.revenueByMonth && analytics.revenue.revenueByMonth.length > 0 && (
                      <div className="bg-card rounded-xl p-6 border border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-primary" />
                          Revenue by Month
                        </h3>
                        <SimpleBarChart
                          data={analytics.revenue.revenueByMonth.map((m, i) => ({
                            label: m.month,
                            value: m.revenue,
                            color: "bg-green-500"
                          }))}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="bg-card rounded-xl p-12 border border-border text-center">
                    <div className="inline-flex p-4 bg-muted rounded-full mb-4">
                      <DollarSign className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Revenue Data Not Available</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Revenue analytics require YouTube Partner Program membership and monetization enabled on your channel.
                    </p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

// Loading fallback for Suspense
function AnalyticsLoading() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <div className="text-center">
        <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-[var(--primary)]" />
        <p className="text-[var(--muted-foreground)]">Loading analytics...</p>
      </div>
    </div>
  );
}

// Main page export with Suspense boundary
export default function AnalyticsPage() {
  return (
    <Suspense fallback={<AnalyticsLoading />}>
      <AnalyticsPageContent />
    </Suspense>
  );
}
