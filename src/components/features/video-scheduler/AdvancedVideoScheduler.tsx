"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Upload, Calendar, Globe, Lock, EyeOff, Clock, Tags, Hash,
  FileVideo, Image as ImageIcon, Trash2, Plus, Sparkles, Loader2, Check,
  ChevronDown, ChevronUp, AlertTriangle, Info, X, Link2,
  Users, MessageSquare, ThumbsUp, Shield, Tv, PlayCircle,
  BarChart3, Brain, Settings, Video, Film, Star, Zap,
  ListVideo, MapPin, Languages, Award, ExternalLink,
  Copy, RefreshCw, Eye, PenLine, Send, Save, BookOpen,
  Layers, Radio, DollarSign, Flag, Scissors, Type,
  UserCheck, LogOut, PlusCircle, ChevronRight, User,
  CheckCircle2, XCircle, TrendingUp, Activity, MonitorSmartphone,
  Share2, PanelRight, PanelLeft, ArrowUpRight, ArrowDownRight,
  BarChart2, PieChart, Target, Smartphone, Monitor, TabletSmartphone,
  Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, Settings2
} from "lucide-react";
import {
  YouTubeVideoSettings, YouTubeChannel, YouTubeCategory, VideoPlaylist,
  ScheduledVideo, DEFAULT_VIDEO_SETTINGS, YOUTUBE_LANGUAGES,
  AnalyticsPreview, AIGeneratedContent, VideoChapter,
  SubtitleTrack, EndScreenElement, VideoCard, SponsorSegment
} from "@/types/scheduler";

// ─── YouTube Categories ─────────────────────────────────────────
const YOUTUBE_CATEGORIES: YouTubeCategory[] = [
  { id: "1", title: "Film & Animation" },
  { id: "2", title: "Autos & Vehicles" },
  { id: "10", title: "Music" },
  { id: "15", title: "Pets & Animals" },
  { id: "17", title: "Sports" },
  { id: "19", title: "Travel & Events" },
  { id: "20", title: "Gaming" },
  { id: "22", title: "People & Blogs" },
  { id: "23", title: "Comedy" },
  { id: "24", title: "Entertainment" },
  { id: "25", title: "News & Politics" },
  { id: "26", title: "Howto & Style" },
  { id: "27", title: "Education" },
  { id: "28", title: "Science & Technology" },
  { id: "29", title: "Nonprofits & Activism" },
];

// ─── YouTube Official Timezones ─────────────────────────────────
const YOUTUBE_TIMEZONES = [
  { label: "Local Time", value: "local", offset: "" },
  { label: "(GMT-10:00) Honolulu", value: "Pacific/Honolulu", offset: "-10:00" },
  { label: "(GMT-09:00) Anchorage", value: "America/Anchorage", offset: "-09:00" },
  { label: "(GMT-09:00) Juneau", value: "America/Juneau", offset: "-09:00" },
  { label: "(GMT-08:00) Los Angeles", value: "America/Los_Angeles", offset: "-08:00" },
  { label: "(GMT-08:00) Tijuana", value: "America/Tijuana", offset: "-08:00" },
  { label: "(GMT-08:00) Vancouver", value: "America/Vancouver", offset: "-08:00" },
  { label: "(GMT-07:00) Denver", value: "America/Denver", offset: "-07:00" },
  { label: "(GMT-07:00) Edmonton", value: "America/Edmonton", offset: "-07:00" },
  { label: "(GMT-07:00) Hermosillo", value: "America/Hermosillo", offset: "-07:00" },
  { label: "(GMT-07:00) Phoenix", value: "America/Phoenix", offset: "-07:00" },
  { label: "(GMT-06:00) Chicago", value: "America/Chicago", offset: "-06:00" },
  { label: "(GMT-06:00) Mexico City", value: "America/Mexico_City", offset: "-06:00" },
  { label: "(GMT-06:00) Winnipeg", value: "America/Winnipeg", offset: "-06:00" },
  { label: "(GMT-05:00) Bogotá", value: "America/Bogota", offset: "-05:00" },
  { label: "(GMT-05:00) Easter Island", value: "Pacific/Easter", offset: "-05:00" },
  { label: "(GMT-05:00) New York", value: "America/New_York", offset: "-05:00" },
  { label: "(GMT-05:00) Rio Branco", value: "America/Rio_Branco", offset: "-05:00" },
  { label: "(GMT-05:00) Toronto", value: "America/Toronto", offset: "-05:00" },
  { label: "(GMT-04:00) Halifax", value: "America/Halifax", offset: "-04:00" },
  { label: "(GMT-04:00) Manaus", value: "America/Manaus", offset: "-04:00" },
  { label: "(GMT-03:30) St John's", value: "America/St_Johns", offset: "-03:30" },
  { label: "(GMT-03:00) Bahia", value: "America/Bahia", offset: "-03:00" },
  { label: "(GMT-03:00) Belém", value: "America/Belem", offset: "-03:00" },
  { label: "(GMT-03:00) Buenos Aires", value: "America/Argentina/Buenos_Aires", offset: "-03:00" },
  { label: "(GMT-03:00) Recife", value: "America/Recife", offset: "-03:00" },
  { label: "(GMT-03:00) Santiago", value: "America/Santiago", offset: "-03:00" },
  { label: "(GMT-03:00) São Paulo", value: "America/Sao_Paulo", offset: "-03:00" },
  { label: "(GMT-02:00) Fernando de Noronha", value: "America/Noronha", offset: "-02:00" },
  { label: "(GMT+00:00) Canaries", value: "Atlantic/Canary", offset: "+00:00" },
  { label: "(GMT+00:00) Casablanca", value: "Africa/Casablanca", offset: "+00:00" },
  { label: "(GMT+00:00) Dublin", value: "Europe/Dublin", offset: "+00:00" },
  { label: "(GMT+00:00) London", value: "Europe/London", offset: "+00:00" },
  { label: "(GMT+01:00) Algiers", value: "Africa/Algiers", offset: "+01:00" },
  { label: "(GMT+01:00) Amsterdam", value: "Europe/Amsterdam", offset: "+01:00" },
  { label: "(GMT+01:00) Berlin", value: "Europe/Berlin", offset: "+01:00" },
  { label: "(GMT+01:00) Brussels", value: "Europe/Brussels", offset: "+01:00" },
  { label: "(GMT+01:00) Budapest", value: "Europe/Budapest", offset: "+01:00" },
  { label: "(GMT+01:00) Lagos", value: "Africa/Lagos", offset: "+01:00" },
  { label: "(GMT+01:00) Madrid", value: "Europe/Madrid", offset: "+01:00" },
  { label: "(GMT+01:00) Paris", value: "Europe/Paris", offset: "+01:00" },
  { label: "(GMT+01:00) Prague", value: "Europe/Prague", offset: "+01:00" },
  { label: "(GMT+01:00) Rome", value: "Europe/Rome", offset: "+01:00" },
  { label: "(GMT+01:00) Stockholm", value: "Europe/Stockholm", offset: "+01:00" },
  { label: "(GMT+01:00) Tunis", value: "Africa/Tunis", offset: "+01:00" },
  { label: "(GMT+01:00) Warsaw", value: "Europe/Warsaw", offset: "+01:00" },
  { label: "(GMT+02:00) Cairo", value: "Africa/Cairo", offset: "+02:00" },
  { label: "(GMT+02:00) Jerusalem", value: "Asia/Jerusalem", offset: "+02:00" },
  { label: "(GMT+02:00) Johannesburg", value: "Africa/Johannesburg", offset: "+02:00" },
  { label: "(GMT+02:00) Kaliningrad", value: "Europe/Kaliningrad", offset: "+02:00" },
  { label: "(GMT+03:00) Aden", value: "Asia/Aden", offset: "+03:00" },
  { label: "(GMT+03:00) Amman", value: "Asia/Amman", offset: "+03:00" },
  { label: "(GMT+03:00) Kampala", value: "Africa/Kampala", offset: "+03:00" },
  { label: "(GMT+03:00) Moscow", value: "Europe/Moscow", offset: "+03:00" },
  { label: "(GMT+03:00) Nairobi", value: "Africa/Nairobi", offset: "+03:00" },
  { label: "(GMT+03:00) Riyadh", value: "Asia/Riyadh", offset: "+03:00" },
  { label: "(GMT+03:00) Volgograd", value: "Europe/Volgograd", offset: "+03:00" },
  { label: "(GMT+05:00) Yekaterinburg", value: "Asia/Yekaterinburg", offset: "+05:00" },
  { label: "(GMT+05:30) Kolkata", value: "Asia/Kolkata", offset: "+05:30" },
  { label: "(GMT+06:00) Omsk", value: "Asia/Omsk", offset: "+06:00" },
  { label: "(GMT+07:00) Krasnoyarsk", value: "Asia/Krasnoyarsk", offset: "+07:00" },
  { label: "(GMT+07:00) Novosibirsk", value: "Asia/Novosibirsk", offset: "+07:00" },
  { label: "(GMT+08:00) Hong Kong", value: "Asia/Hong_Kong", offset: "+08:00" },
  { label: "(GMT+08:00) Taipei", value: "Asia/Taipei", offset: "+08:00" },
  { label: "(GMT+08:45) Eucla", value: "Australia/Eucla", offset: "+08:45" },
  { label: "(GMT+09:00) Seoul", value: "Asia/Seoul", offset: "+09:00" },
  { label: "(GMT+09:00) Tokyo", value: "Asia/Tokyo", offset: "+09:00" },
  { label: "(GMT+09:00) Yakutsk", value: "Asia/Yakutsk", offset: "+09:00" },
  { label: "(GMT+09:30) Darwin", value: "Australia/Darwin", offset: "+09:30" },
  { label: "(GMT+10:00) Brisbane", value: "Australia/Brisbane", offset: "+10:00" },
  { label: "(GMT+10:00) Vladivostok", value: "Asia/Vladivostok", offset: "+10:00" },
  { label: "(GMT+10:30) Adelaide", value: "Australia/Adelaide", offset: "+10:30" },
  { label: "(GMT+11:00) Hobart", value: "Australia/Hobart", offset: "+11:00" },
  { label: "(GMT+11:00) Melbourne", value: "Australia/Melbourne", offset: "+11:00" },
  { label: "(GMT+11:00) Sakhalin", value: "Asia/Sakhalin", offset: "+11:00" },
  { label: "(GMT+11:00) Sydney", value: "Australia/Sydney", offset: "+11:00" },
  { label: "(GMT+12:00) Kamchatka", value: "Asia/Kamchatka", offset: "+12:00" },
  { label: "(GMT+13:00) Auckland", value: "Pacific/Auckland", offset: "+13:00" },
  { label: "(GMT+13:45) Chatham Islands", value: "Pacific/Chatham", offset: "+13:45" },
];

// ─── Schedule Time Options (15-minute intervals) ───────────────
const SCHEDULE_TIME_OPTIONS = [
  "00:00", "00:15", "00:30", "00:45",
  "01:00", "01:15", "01:30", "01:45",
  "02:00", "02:15", "02:30", "02:45",
  "03:00", "03:15", "03:30", "03:45",
  "04:00", "04:15", "04:30", "04:45",
  "05:00", "05:15", "05:30", "05:45",
  "06:00", "06:15", "06:30", "06:45",
  "07:00", "07:15", "07:30", "07:45",
  "08:00", "08:15", "08:30", "08:45",
  "09:00", "09:15", "09:30", "09:45",
  "10:00", "10:15", "10:30", "10:45",
  "11:00", "11:15", "11:30", "11:45",
  "12:00", "12:15", "12:30", "12:45",
  "13:00", "13:15", "13:30", "13:45",
  "14:00", "14:15", "14:30", "14:45",
  "15:00", "15:15", "15:30", "15:45",
  "16:00", "16:15", "16:30", "16:45",
  "17:00", "17:15", "17:30", "17:45",
  "18:00", "18:15", "18:30", "18:45",
  "19:00", "19:15", "19:30", "19:45",
  "20:00", "20:15", "20:30", "20:45",
  "21:00", "21:15", "21:30", "21:45",
  "22:00", "22:15", "22:30", "22:45",
  "23:00", "23:15", "23:30", "23:45",
];

// ─── Tab Configuration ──────────────────────────────────────────
type TabId = "details" | "monetization" | "audience" | "visibility" | "subtitles" | "endscreen" | "cards" | "advanced" | "analytics" | "seo" | "bulk" | "templates" | "calendar" | "besttime";

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

const TABS: TabConfig[] = [
  { id: "details", label: "Details", icon: <PenLine className="w-4 h-4" /> },
  { id: "seo", label: "SEO", icon: <Check className="w-4 h-4" /> },
  { id: "audience", label: "Audience", icon: <Users className="w-4 h-4" /> },
  { id: "visibility", label: "Visibility", icon: <Eye className="w-4 h-4" /> },
  { id: "subtitles", label: "Subtitles", icon: <Type className="w-4 h-4" /> },
  { id: "endscreen", label: "End Screen", icon: <Tv className="w-4 h-4" /> },
  { id: "cards", label: "Cards", icon: <Layers className="w-4 h-4" /> },
  { id: "advanced", label: "Advanced", icon: <Settings className="w-4 h-4" /> },
  { id: "analytics", label: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
];

const ADVANCED_TABS: TabConfig[] = [
  { id: "bulk", label: "Bulk Upload", icon: <Layers className="w-4 h-4" /> },
  { id: "templates", label: "Templates", icon: <BookOpen className="w-4 h-4" /> },
  { id: "calendar", label: "Calendar", icon: <Calendar className="w-4 h-4" /> },
  { id: "besttime", label: "Best Time", icon: <Clock className="w-4 h-4" /> },
];

// ─── Bulk Upload Types ──────────────────────────────────────────
interface BulkVideoItem {
  id: string;
  file: File;
  title: string;
  description: string;
  tags: string[];
  hashtags: string[];
  categoryId: string;
  privacyStatus: "private" | "public" | "unlisted";
  scheduledTime: string;
  thumbnailFile?: File;
  thumbnailPreview?: string;
  status: "pending" | "uploading" | "completed" | "failed";
  progress: number;
  error?: string;
  videoId?: string;
}

// ─── Template Types ─────────────────────────────────────────────
interface VideoTemplate {
  id: string;
  name: string;
  description: string;
  tags: string[];
  hashtags: string[];
  categoryId: string;
  privacyStatus: "private" | "public" | "unlisted";
  madeForKids: "yes" | "no" | "unset";
  commentsMode: "all" | "approved" | "none" | "moderated";
  license: "youtube" | "creativeCommon";
  language: string;
  createdAt: string;
}

// ─── SEO Checklist Types ────────────────────────────────────────
interface SEOCheckItem {
  id: string;
  label: string;
  description: string;
  check: () => boolean;
  weight: number;
  category: "title" | "description" | "tags" | "metadata";
}

// ─── Channel Analytics Types ────────────────────────────────────
interface ChannelAnalytics {
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
  // Advanced Analytics
  contentPerformance?: {
    shortForm: { count: number; totalViews: number; avgViews: number };
    longForm: { count: number; totalViews: number; avgViews: number };
    bestPerformingLength: string;
    optimalDuration: { min: number; max: number };
  };
  retentionData?: {
    avgRetentionRate: number;
    dropOffPoints: { timestamp: number; percentage: number }[];
    bestRetentionVideos: string[];
  };
  ctrAnalysis?: {
    avgCtr: number;
    ctrByVideoType: { type: string; ctr: number }[];
    bestThumbnails: { videoId: string; title: string; ctr: number; thumbnail: string }[];
    improvementTips: string[];
  };
  milestones?: {
    currentSubscribers: number;
    nextMilestone: number;
    progressPercentage: number;
    estimatedDaysToMilestone: number;
    recentMilestones: { milestone: number; reachedAt: string }[];
  };
  uploadPatterns?: {
    avgUploadsPerWeek: number;
    bestUploadDays: { day: string; avgViews: number }[];
    uploadConsistencyScore: number;
    recommendedSchedule: string;
  };
  realtime?: {
    concurrentViewers: number;
    viewsLast48Hours: number;
    viewsLast60Minutes: number;
    trendingVideos: { id: string; title: string; currentViews: number }[];
  };
  comparison?: {
    thisWeek: { views: number; watchTime: number; subs: number };
    lastWeek: { views: number; watchTime: number; subs: number };
    thisMonth: { views: number; watchTime: number; subs: number };
    lastMonth: { views: number; watchTime: number; subs: number };
  };
  projections?: {
    estimatedViewsNextMonth: number;
    estimatedSubsNextMonth: number;
    estimatedRevenueNextMonth: number;
    growthTrend: "accelerating" | "stable" | "declining";
    confidenceLevel: number;
  };
}

type AnalyticsPeriod = "7" | "28" | "90" | "365";
type AnalyticsSection = "overview" | "growth" | "videos" | "audience" | "revenue" | "engagement" | "advanced" | "realtime";

// ─── Helper Components ──────────────────────────────────────────

function CharCounter({ current, max, warn }: { current: number; max: number; warn?: number }) {
  const warnAt = warn || max * 0.9;
  const isWarning = current >= warnAt && current < max;
  const isOver = current > max;
  return (
    <span className={`text-xs font-mono ${isOver ? "text-red-400" : isWarning ? "text-yellow-400" : "text-[var(--muted-foreground)]"}`}>
      {current}/{max}
    </span>
  );
}

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="text-[var(--primary)]">{icon}</div>
      <div>
        <h3 className="text-sm font-semibold text-[var(--foreground)]">{title}</h3>
        {subtitle && <p className="text-xs text-[var(--muted-foreground)]">{subtitle}</p>}
      </div>
    </div>
  );
}

function ToggleSwitch({ enabled, onChange, label, description }: {
  enabled: boolean; onChange: (v: boolean) => void; label: string; description?: string;
}) {
  return (
    <label className="flex items-center justify-between gap-3 py-2 cursor-pointer group">
      <div className="flex-1 min-w-0">
        <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">{label}</p>
        {description && <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-all duration-200 ${enabled ? "bg-[var(--primary)]" : "bg-[var(--muted)]"}`}
      >
        <span className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform duration-200 ${enabled ? "translate-x-[18px]" : "translate-x-[3px]"}`} />
      </button>
    </label>
  );
}

function ScoreBadge({ score, label }: { score: number; label: string }) {
  const color = score >= 80 ? "text-green-400" : score >= 60 ? "text-yellow-400" : score >= 40 ? "text-orange-400" : "text-red-400";
  const bg = score >= 80 ? "bg-green-500/10" : score >= 60 ? "bg-yellow-500/10" : score >= 40 ? "bg-orange-500/10" : "bg-red-500/10";
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${bg}`}>
      <span className="text-xs text-[var(--muted-foreground)]">{label}</span>
      <span className={`text-sm font-bold ${color}`}>{score}/100</span>
    </div>
  );
}

// Channel Avatar with fallback
function ChannelAvatar({ src, alt, size = 40, onClick }: { src?: string; alt: string; size?: number; onClick?: () => void }) {
  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src || "");

  useEffect(() => {
    setImgSrc(src || "");
    setImgError(false);
  }, [src]);

  if (!imgSrc || imgError) {
    return (
      <div
        onClick={onClick}
        className="flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-bold cursor-pointer"
        style={{ width: size, height: size, fontSize: size * 0.4 }}
      >
        {alt ? alt.charAt(0).toUpperCase() : <User className="w-1/2 h-1/2" />}
      </div>
    );
  }

  return (
    <NextImage
      src={imgSrc}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover cursor-pointer"
      onClick={onClick}
      onError={() => setImgError(true)}
      unoptimized
    />
  );
}

// ─── Main Component ─────────────────────────────────────────────

export default function AdvancedVideoScheduler() {
  // Auth & Channel State
  const [channels, setChannels] = useState<YouTubeChannel[]>([]);
  const [activeChannelId, setActiveChannelId] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [connectLoading, setConnectLoading] = useState(false);

  // Video Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState("");
  const [categoryId, setCategoryId] = useState("22");
  const [privacyStatus, setPrivacyStatus] = useState<"private" | "public" | "unlisted">("private");
  const [scheduledTime, setScheduledTime] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTimeSlot, setScheduleTimeSlot] = useState("00:00");
  const [scheduleTimezone, setScheduleTimezone] = useState("local");
  const [isPremiere, setIsPremiere] = useState(false);
  const [madeForKids, setMadeForKids] = useState<"yes" | "no" | "unset">("no");
  const [ageRestriction, setAgeRestriction] = useState(false);
  const [hasPaidPromotion, setHasPaidPromotion] = useState(false);
  const [commentsMode, setCommentsMode] = useState<"all" | "approved" | "none" | "moderated">("all");
  const [sortCommentsBy, setSortCommentsBy] = useState<"top" | "newest">("top");
  const [showRatings, setShowRatings] = useState(true);
  const [allowEmbedding, setAllowEmbedding] = useState(true);
  const [publishToFeed, setPublishToFeed] = useState(true);
  const [allowSearching, setAllowSearching] = useState(true);
  const [license, setLicense] = useState<"youtube" | "creativeCommon">("youtube");
  const [language, setLanguage] = useState("en");
  const [captionsCertification, setCaptionsCertification] = useState<"none" | "selfCertified" | "certified">("none");
  const [recordingDate, setRecordingDate] = useState("");
  const [isShort, setIsShort] = useState(false);
  const [shortsSampling, setShortsSampling] = useState(true);
  const [autoChapters, setAutoChapters] = useState(true);
  const [chapters, setChapters] = useState<VideoChapter[]>([]);
  const [endScreenEnabled, setEndScreenEnabled] = useState(true);
  const [cardsEnabled, setCardsEnabled] = useState(true);
  const [playlistIds, setPlaylistIds] = useState<string[]>([]);

  // New YouTube Features State
  const [firstComment, setFirstComment] = useState("");
  const [allowClips, setAllowClips] = useState(true);
  const [allowRemix, setAllowRemix] = useState(true);
  const [allowAITraining, setAllowAITraining] = useState(true);
  const [isAIGenerated, setIsAIGenerated] = useState(false);
  const [hasAlteredContent, setHasAlteredContent] = useState(false);
  const [alteredContentDescription, setAlteredContentDescription] = useState("");
  const [audioTrackType, setAudioTrackType] = useState<"original" | "dubbed" | "descriptive">("original");
  const [subtitles, setSubtitles] = useState<SubtitleTrack[]>([]);
  const [autoGenerateCaptions, setAutoGenerateCaptions] = useState(true);
  const [is360Video, setIs360Video] = useState(false);
  const [isVRVideo, setIsVRVideo] = useState(false);
  const [isHDR, setIsHDR] = useState(false);
  const [endScreenElements, setEndScreenElements] = useState<EndScreenElement[]>([]);
  const [videoCards, setVideoCards] = useState<VideoCard[]>([]);
  const [showChannelWatermark, setShowChannelWatermark] = useState(true);
  const [superThanksEnabled, setSuperThanksEnabled] = useState(true);
  const [superChatEnabled, setSuperChatEnabled] = useState(true);
  const [membershipPromoEnabled, setMembershipPromoEnabled] = useState(true);
  const [sponsorSegments, setSponsorSegments] = useState<SponsorSegment[]>([]);

  // File State
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [videoDuration, setVideoDuration] = useState<string>("");
  const [videoDurationSeconds, setVideoDurationSeconds] = useState<number>(0);

  // Video Player State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // UI State
  const [activeTab, setActiveTab] = useState<TabId>("details");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<AIGeneratedContent | null>(null);
  const [analyticsPreview, setAnalyticsPreview] = useState<AnalyticsPreview | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [savedDrafts, setSavedDrafts] = useState<Array<{ id: string; title: string; savedAt: string; data: Record<string, unknown> }>>([]);
  const [showDrafts, setShowDrafts] = useState(false);
  const [uploadHistory, setUploadHistory] = useState<Array<{ id: string; title: string; videoId: string; uploadedAt: string; thumbnailUrl?: string }>>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Bulk Upload State
  const [bulkVideos, setBulkVideos] = useState<BulkVideoItem[]>([]);
  const [bulkUploading, setBulkUploading] = useState(false);
  const [currentBulkIndex, setCurrentBulkIndex] = useState(-1);

  // Templates State
  const [templates, setTemplates] = useState<VideoTemplate[]>([]);
  const [templateName, setTemplateName] = useState("");
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);

  // Calendar State
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [scheduledVideos, setScheduledVideos] = useState<Array<{ id: string; title: string; scheduledTime: string; status: string; thumbnailUrl?: string }>>([]);

  // Best Time State
  const [bestTimeLoading, setBestTimeLoading] = useState(false);
  const [bestTimeData, setBestTimeData] = useState<{ heatmap: number[][]; recommendations: { day: string; time: string; score: number }[] } | null>(null);

  // Channel Analytics State
  const [showAnalyticsSidebar, setShowAnalyticsSidebar] = useState(false);
  const [channelAnalyticsLoading, setChannelAnalyticsLoading] = useState(false);
  const [channelAnalytics, setChannelAnalytics] = useState<ChannelAnalytics | null>(null);
  const [analyticsPeriod, setAnalyticsPeriod] = useState<AnalyticsPeriod>("28");
  const [analyticsSection, setAnalyticsSection] = useState<AnalyticsSection>("overview");
  const [analyticsChannelId, setAnalyticsChannelId] = useState<string | null>(null); // Selected channel for analytics view

  // Advanced View Mode
  const [viewMode, setViewMode] = useState<"single" | "bulk" | "templates" | "calendar" | "besttime">("single");

  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const bulkInputRef = useRef<HTMLInputElement>(null);

  // ─── Server Sync Functions ─────────────────────────────────
  const syncToServer = useCallback(async (
    action: string,
    data: unknown
  ) => {
    try {
      await fetch("/api/video-scheduler/user-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, data }),
      });
    } catch (err) {
      console.error("Failed to sync to server:", err);
    }
  }, []);

  const loadFromServer = useCallback(async () => {
    try {
      const res = await fetch("/api/video-scheduler/user-data?action=all");
      if (!res.ok) return;
      const data = await res.json();

      // Load server data, fallback to localStorage
      if (data.drafts?.length > 0) {
        setSavedDrafts(data.drafts);
        localStorage.setItem("yt_scheduler_drafts", JSON.stringify(data.drafts));
      } else {
        const localDrafts = localStorage.getItem("yt_scheduler_drafts");
        if (localDrafts) setSavedDrafts(JSON.parse(localDrafts));
      }

      if (data.history?.length > 0) {
        setUploadHistory(data.history);
        localStorage.setItem("yt_scheduler_history", JSON.stringify(data.history));
      } else {
        const localHist = localStorage.getItem("yt_scheduler_history");
        if (localHist) setUploadHistory(JSON.parse(localHist));
      }

      if (data.templates?.length > 0) {
        setTemplates(data.templates);
        localStorage.setItem("yt_scheduler_templates", JSON.stringify(data.templates));
      } else {
        const localTmpl = localStorage.getItem("yt_scheduler_templates");
        if (localTmpl) setTemplates(JSON.parse(localTmpl));
      }

      if (data.scheduled?.length > 0) {
        setScheduledVideos(data.scheduled);
        localStorage.setItem("yt_scheduler_scheduled", JSON.stringify(data.scheduled));
      } else {
        const localSched = localStorage.getItem("yt_scheduler_scheduled");
        if (localSched) setScheduledVideos(JSON.parse(localSched));
      }
    } catch (err) {
      console.error("Failed to load from server:", err);
      // Fallback to localStorage
      const drafts = localStorage.getItem("yt_scheduler_drafts");
      if (drafts) setSavedDrafts(JSON.parse(drafts));
      const hist = localStorage.getItem("yt_scheduler_history");
      if (hist) setUploadHistory(JSON.parse(hist));
      const tmpl = localStorage.getItem("yt_scheduler_templates");
      if (tmpl) setTemplates(JSON.parse(tmpl));
      const scheduled = localStorage.getItem("yt_scheduler_scheduled");
      if (scheduled) setScheduledVideos(JSON.parse(scheduled));
    }
  }, []);

  // ─── Auth Functions ─────────────────────────────────────────
  const checkAuth = useCallback(async () => {
    setAuthLoading(true);
    try {
      const res = await fetch("/api/video-scheduler/auth/status");
      const data = await res.json();
      setChannels(data.channels || []);
      setActiveChannelId(data.activeChannelId || null);
    } catch {
      console.error("Auth check failed");
    } finally {
      setAuthLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
    loadFromServer();
  }, [checkAuth, loadFromServer]);

  // Check URL params for auth callback
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("connected") === "true") {
      toast.success(`YouTube channel connected! (${params.get("added") || 1} channel(s) added)`);
      window.history.replaceState({}, "", "/video-scheduler");
      checkAuth();
    }
    if (params.get("error")) {
      const errorMap: Record<string, string> = {
        auth_denied: "Authorization was denied",
        no_code: "No authorization code received",
        config_error: "Server configuration error",
        token_error: "Token exchange failed",
        no_channel: "No YouTube channel found for this account",
      };
      toast.error(errorMap[params.get("error")!] || "Authentication error");
      window.history.replaceState({}, "", "/video-scheduler");
    }
  }, [checkAuth]);

  const connectChannel = async () => {
    setConnectLoading(true);
    try {
      const res = await fetch("/api/video-scheduler/auth/url");
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else toast.error("Failed to get auth URL");
    } catch {
      toast.error("Failed to connect");
    } finally {
      setConnectLoading(false);
    }
  };

  const disconnectChannel = async (channelId: string) => {
    try {
      await fetch("/api/video-scheduler/auth/disconnect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channelId }),
      });
      toast.success("Channel disconnected");
      checkAuth();
    } catch {
      toast.error("Failed to disconnect");
    }
  };

  const setActive = async (channelId: string) => {
    try {
      await fetch("/api/video-scheduler/auth/set-active", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channelId }),
      });
      setActiveChannelId(channelId);
      toast.success("Active channel updated");
    } catch {
      toast.error("Failed to set active channel");
    }
  };

  // ─── File Handling ──────────────────────────────────────────
  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // YouTube max file size: 256GB, but let's set a reasonable limit
    const maxSize = 128 * 1024 * 1024 * 1024; // 128GB
    if (file.size > maxSize) {
      toast.error("File too large. Maximum 128GB.");
      return;
    }

    const validTypes = ["video/mp4", "video/webm", "video/avi", "video/mov", "video/quicktime", "video/x-msvideo", "video/x-matroska", "video/3gpp"];
    if (!validTypes.some(t => file.type.includes(t.split("/")[1])) && !file.name.match(/\.(mp4|webm|avi|mov|mkv|3gp|wmv|flv|mpg|mpeg)$/i)) {
      toast.error("Unsupported video format");
      return;
    }

    setVideoFile(file);

    // Auto-fill title from filename
    if (!title) {
      const autoTitle = file.name.replace(/\.[^.]+$/, "").replace(/[_-]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      setTitle(autoTitle.slice(0, 100));
    }

    // Get video duration + preview
    const url = URL.createObjectURL(file);
    setVideoPreview(url);
    const video = document.createElement("video");
    video.preload = "metadata";
    video.onloadedmetadata = () => {
      const dur = video.duration;
      setVideoDurationSeconds(dur);
      const h = Math.floor(dur / 3600);
      const m = Math.floor((dur % 3600) / 60);
      const s = Math.floor(dur % 60);
      setVideoDuration(h > 0 ? `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}` : `${m}:${s.toString().padStart(2, "0")}`);
      if (dur <= 60) setIsShort(true);
    };
    video.src = url;
  };

  const handleThumbnailSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Thumbnail must be under 2MB");
      return;
    }
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  // ─── Video Player Controls ─────────────────────────────────
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return h > 0 ? `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}` : `${m}:${s.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleVideoSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
    setIsMuted(vol === 0);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const skipTime = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.currentTime + seconds, videoDurationSeconds));
    }
  };

  const toggleFullscreen = () => {
    const container = document.getElementById("video-player-container");
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // ─── Tags & Hashtags ───────────────────────────────────────
  const totalTagChars = tags.join(",").length;

  const addTag = () => {
    const tag = tagInput.trim();
    if (!tag) return;
    if (tags.includes(tag)) { toast.error("Tag already exists"); return; }
    if (totalTagChars + tag.length + (tags.length > 0 ? 1 : 0) > 500) { toast.error("Tags total limit is 500 characters"); return; }
    setTags([...tags, tag]);
    setTagInput("");
  };

  const removeTag = (index: number) => setTags(tags.filter((_, i) => i !== index));

  const addHashtag = () => {
    let ht = hashtagInput.trim().replace(/^#/, "");
    if (!ht) return;
    if (hashtags.length >= 15) { toast.error("Maximum 15 hashtags"); return; }
    if (hashtags.includes(ht)) { toast.error("Hashtag already exists"); return; }
    if (ht.length > 100) { toast.error("Hashtag too long"); return; }
    setHashtags([...hashtags, ht]);
    setHashtagInput("");
  };

  const removeHashtag = (index: number) => setHashtags(hashtags.filter((_, i) => i !== index));

  // ─── Chapters ──────────────────────────────────────────────
  const addChapter = () => {
    setChapters([...chapters, { startTime: "00:00", title: "" }]);
  };

  const updateChapter = (index: number, field: keyof VideoChapter, value: string) => {
    const updated = [...chapters];
    updated[index] = { ...updated[index], [field]: value };
    setChapters(updated);
  };

  const removeChapter = (index: number) => setChapters(chapters.filter((_, i) => i !== index));

  // ─── AI Generate ───────────────────────────────────────────
  const generateAI = async () => {
    setAiLoading(true);
    try {
      const res = await fetch("/api/video-scheduler/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentTitle: title,
          currentDescription: description,
          currentTags: tags,
          fileName: videoFile?.name,
          categoryId,
        }),
      });
      const data = await res.json();
      setAiSuggestions(data);
      setShowAiPanel(true);
      toast.success("AI suggestions generated!");
    } catch {
      toast.error("Failed to generate AI suggestions");
    } finally {
      setAiLoading(false);
    }
  };

  // ─── Analytics Preview ─────────────────────────────────────
  const fetchAnalytics = async () => {
    if (!title) { toast.error("Add a title first"); return; }
    setAnalyticsLoading(true);
    try {
      const res = await fetch("/api/video-scheduler/analytics-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, tags, categoryId, scheduledTime }),
      });
      const data = await res.json();
      setAnalyticsPreview(data);
      toast.success("Analytics preview generated!");
    } catch {
      toast.error("Failed to generate analytics");
    } finally {
      setAnalyticsLoading(false);
    }
  };

  // ─── Draft Functions ───────────────────────────────────────
  const saveDraft = () => {
    const draft = {
      id: Date.now().toString(),
      title: title || "Untitled Draft",
      savedAt: new Date().toISOString(),
      data: { title, description, tags, hashtags, categoryId, privacyStatus, scheduledTime, isPremiere, madeForKids, ageRestriction, hasPaidPromotion, commentsMode, sortCommentsBy, showRatings, allowEmbedding, publishToFeed, allowSearching, license, language, captionsCertification, recordingDate, isShort, shortsSampling, autoChapters, chapters, endScreenEnabled, cardsEnabled, playlistIds },
    };
    const updated = [draft, ...savedDrafts].slice(0, 20);
    setSavedDrafts(updated);
    localStorage.setItem("yt_scheduler_drafts", JSON.stringify(updated));
    syncToServer("drafts", updated);
    toast.success("Draft saved!");
  };

  const loadDraft = (draft: typeof savedDrafts[0]) => {
    const d = draft.data as Record<string, unknown>;
    setTitle((d.title as string) || "");
    setDescription((d.description as string) || "");
    setTags((d.tags as string[]) || []);
    setHashtags((d.hashtags as string[]) || []);
    setCategoryId((d.categoryId as string) || "22");
    setPrivacyStatus((d.privacyStatus as "private" | "public" | "unlisted") || "private");
    setScheduledTime((d.scheduledTime as string) || "");
    setIsPremiere((d.isPremiere as boolean) || false);
    setMadeForKids((d.madeForKids as "yes" | "no" | "unset") || "no");
    setAgeRestriction((d.ageRestriction as boolean) || false);
    setHasPaidPromotion((d.hasPaidPromotion as boolean) || false);
    setCommentsMode((d.commentsMode as "all" | "approved" | "none" | "moderated") || "all");
    setSortCommentsBy((d.sortCommentsBy as "top" | "newest") || "top");
    setShowRatings((d.showRatings as boolean) ?? true);
    setAllowEmbedding((d.allowEmbedding as boolean) ?? true);
    setPublishToFeed((d.publishToFeed as boolean) ?? true);
    setAllowSearching((d.allowSearching as boolean) ?? true);
    setLicense((d.license as "youtube" | "creativeCommon") || "youtube");
    setLanguage((d.language as string) || "en");
    setCaptionsCertification((d.captionsCertification as "none" | "selfCertified" | "certified") || "none");
    setRecordingDate((d.recordingDate as string) || "");
    setIsShort((d.isShort as boolean) || false);
    setShortsSampling((d.shortsSampling as boolean) ?? true);
    setAutoChapters((d.autoChapters as boolean) ?? true);
    setChapters((d.chapters as VideoChapter[]) || []);
    setEndScreenEnabled((d.endScreenEnabled as boolean) ?? true);
    setCardsEnabled((d.cardsEnabled as boolean) ?? true);
    setPlaylistIds((d.playlistIds as string[]) || []);
    setShowDrafts(false);
    toast.success("Draft loaded!");
  };

  const deleteDraft = (id: string) => {
    const updated = savedDrafts.filter(d => d.id !== id);
    setSavedDrafts(updated);
    localStorage.setItem("yt_scheduler_drafts", JSON.stringify(updated));
    syncToServer("drafts", updated);
    toast.success("Draft deleted");
  };

  // ─── Template Functions ────────────────────────────────────
  const saveAsTemplate = () => {
    if (!templateName.trim()) { toast.error("Enter a template name"); return; }
    const template: VideoTemplate = {
      id: Date.now().toString(),
      name: templateName.trim(),
      description,
      tags,
      hashtags,
      categoryId,
      privacyStatus,
      madeForKids,
      commentsMode,
      license,
      language,
      createdAt: new Date().toISOString(),
    };
    const updated = [template, ...templates].slice(0, 50);
    setTemplates(updated);
    localStorage.setItem("yt_scheduler_templates", JSON.stringify(updated));
    syncToServer("templates", updated);
    setTemplateName("");
    toast.success("Template saved!");
  };

  const loadTemplate = (template: VideoTemplate) => {
    setDescription(template.description);
    setTags(template.tags);
    setHashtags(template.hashtags);
    setCategoryId(template.categoryId);
    setPrivacyStatus(template.privacyStatus);
    setMadeForKids(template.madeForKids);
    setCommentsMode(template.commentsMode);
    setLicense(template.license);
    setLanguage(template.language);
    setSelectedTemplateId(template.id);
    toast.success(`Template "${template.name}" loaded!`);
  };

  const deleteTemplate = (id: string) => {
    const updated = templates.filter(t => t.id !== id);
    setTemplates(updated);
    localStorage.setItem("yt_scheduler_templates", JSON.stringify(updated));
    syncToServer("templates", updated);
    if (selectedTemplateId === id) setSelectedTemplateId(null);
    toast.success("Template deleted");
  };

  // ─── Bulk Upload Functions ─────────────────────────────────
  const handleBulkFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const newItems: BulkVideoItem[] = files.map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      file,
      title: file.name.replace(/\.[^.]+$/, "").replace(/[_-]/g, " ").replace(/\b\w/g, c => c.toUpperCase()).slice(0, 100),
      description: "",
      tags: [],
      hashtags: [],
      categoryId: "22",
      privacyStatus: "private",
      scheduledTime: "",
      status: "pending",
      progress: 0,
    }));

    setBulkVideos(prev => [...prev, ...newItems]);
    toast.success(`${files.length} video(s) added to queue`);
  };

  const updateBulkVideo = (id: string, updates: Partial<BulkVideoItem>) => {
    setBulkVideos(prev => prev.map(v => v.id === id ? { ...v, ...updates } : v));
  };

  const removeBulkVideo = (id: string) => {
    setBulkVideos(prev => prev.filter(v => v.id !== id));
  };

  const applyTemplateToAllBulk = (template: VideoTemplate) => {
    setBulkVideos(prev => prev.map(v => ({
      ...v,
      description: template.description,
      tags: template.tags,
      hashtags: template.hashtags,
      categoryId: template.categoryId,
      privacyStatus: template.privacyStatus,
    })));
    toast.success("Template applied to all videos");
  };

  const startBulkUpload = async () => {
    if (bulkVideos.length === 0) { toast.error("Add videos to the queue first"); return; }
    if (channels.length === 0) { toast.error("Connect a YouTube channel first"); return; }

    setBulkUploading(true);
    const pendingVideos = bulkVideos.filter(v => v.status === "pending");

    for (let i = 0; i < pendingVideos.length; i++) {
      const video = pendingVideos[i];
      setCurrentBulkIndex(i);
      updateBulkVideo(video.id, { status: "uploading", progress: 0 });

      try {
        let fullDescription = video.description;
        if (video.hashtags.length > 0) {
          fullDescription += "\n\n" + video.hashtags.map(h => `#${h}`).join(" ");
        }

        const formData = new FormData();
        formData.append("video", video.file);
        formData.append("title", video.title);
        formData.append("description", fullDescription);
        formData.append("tags", JSON.stringify(video.tags));
        formData.append("categoryId", video.categoryId);
        formData.append("privacyStatus", video.privacyStatus);
        if (video.scheduledTime) formData.append("scheduledTime", video.scheduledTime);
        if (video.thumbnailFile) formData.append("thumbnail", video.thumbnailFile);
        if (activeChannelId) formData.append("channelId", activeChannelId);

        // Simulate progress
        const progressInterval = setInterval(() => {
          updateBulkVideo(video.id, { progress: Math.min(90, (bulkVideos.find(v => v.id === video.id)?.progress || 0) + 5) });
        }, 500);

        const res = await fetch("/api/video-scheduler/upload", { method: "POST", body: formData });
        clearInterval(progressInterval);

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Upload failed");
        }

        const result = await res.json();
        updateBulkVideo(video.id, { status: "completed", progress: 100, videoId: result.videoId });

        // Add to history
        const histItem = { id: Date.now().toString(), title: video.title, videoId: result.videoId, uploadedAt: new Date().toISOString(), thumbnailUrl: result.thumbnailUrl };
        const updatedHist = [histItem, ...uploadHistory].slice(0, 50);
        setUploadHistory(updatedHist);
        localStorage.setItem("yt_scheduler_history", JSON.stringify(updatedHist));
        syncToServer("history", updatedHist);

        // Add to scheduled if has scheduled time
        if (video.scheduledTime) {
          const schedItem = { id: Date.now().toString(), title: video.title, scheduledTime: video.scheduledTime, status: "scheduled", thumbnailUrl: result.thumbnailUrl };
          const updatedSched = [schedItem, ...scheduledVideos].slice(0, 100);
          setScheduledVideos(updatedSched);
          localStorage.setItem("yt_scheduler_scheduled", JSON.stringify(updatedSched));
          syncToServer("scheduled", updatedSched);
        }
      } catch (error) {
        const msg = error instanceof Error ? error.message : "Upload failed";
        updateBulkVideo(video.id, { status: "failed", error: msg, progress: 0 });
      }
    }

    setBulkUploading(false);
    setCurrentBulkIndex(-1);
    toast.success("Bulk upload completed!");
  };

  // ─── Best Time Analyzer ────────────────────────────────────
  const analyzeBestTime = async () => {
    setBestTimeLoading(true);
    try {
      // Generate simulated best time data based on common YouTube patterns
      // In production, this would analyze actual channel analytics
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const heatmap: number[][] = [];
      const allScores: { day: string; hour: number; score: number }[] = [];

      for (let dayIdx = 0; dayIdx < days.length; dayIdx++) {
        const day = days[dayIdx];
        const dayRow: number[] = [];
        for (let hour = 0; hour < 24; hour++) {
          // Simulate engagement patterns
          let score = 30;
          // Weekends are generally good
          if (day === "Saturday" || day === "Sunday") score += 15;
          // Weekday evenings are best
          if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(day)) {
            if (hour >= 17 && hour <= 21) score += 25;
            else if (hour >= 12 && hour <= 14) score += 15;
          }
          // Morning boost
          if (hour >= 8 && hour <= 10) score += 10;
          // Late night penalty
          if (hour >= 0 && hour <= 5) score -= 20;
          // Prime time boost
          if (hour >= 19 && hour <= 21) score += 20;

          const finalScore = Math.max(0, Math.min(100, score + Math.random() * 10));
          dayRow.push(finalScore);
          allScores.push({ day, hour, score: finalScore });
        }
        heatmap.push(dayRow);
      }

      // Get top 6 recommendations
      const recommendations = allScores
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map(s => ({
          day: s.day,
          time: `${s.hour.toString().padStart(2, "0")}:00`,
          score: Math.round(s.score),
        }));

      setBestTimeData({ heatmap, recommendations });
      toast.success("Best time analysis complete!");
    } catch {
      toast.error("Failed to analyze best times");
    } finally {
      setBestTimeLoading(false);
    }
  };

  // ─── Channel Analytics Fetcher ─────────────────────────────
  const fetchChannelAnalytics = useCallback(async (period: AnalyticsPeriod = analyticsPeriod, channelIdOverride?: string) => {
    const targetChannelId = channelIdOverride || analyticsChannelId || activeChannelId;
    if (!targetChannelId) {
      toast.error("Please connect a channel first");
      return;
    }

    setChannelAnalyticsLoading(true);
    try {
      const res = await fetch(`/api/video-scheduler/channel-analytics?channelId=${targetChannelId}&period=${period}`);
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to fetch analytics");
      }
      const data = await res.json();
      setChannelAnalytics(data);
    } catch (err) {
      console.error("Analytics fetch error:", err);
      toast.error(err instanceof Error ? err.message : "Failed to load analytics");
    } finally {
      setChannelAnalyticsLoading(false);
    }
  }, [activeChannelId, analyticsChannelId, analyticsPeriod]);

  // Initialize analyticsChannelId when sidebar opens
  useEffect(() => {
    if (showAnalyticsSidebar && !analyticsChannelId && activeChannelId) {
      setAnalyticsChannelId(activeChannelId);
    }
  }, [showAnalyticsSidebar, analyticsChannelId, activeChannelId]);

  // Fetch analytics when sidebar opens, channel changes, or period changes
  useEffect(() => {
    if (showAnalyticsSidebar && analyticsChannelId) {
      fetchChannelAnalytics(analyticsPeriod, analyticsChannelId);
    }
  }, [showAnalyticsSidebar, analyticsChannelId, analyticsPeriod]);

  // Handle switching analytics channel
  const switchAnalyticsChannel = (channelId: string) => {
    setAnalyticsChannelId(channelId);
    setChannelAnalytics(null); // Clear current data to show loading
  };

  // ─── SEO Score Calculation ─────────────────────────────────
  const getSEOChecklist = useCallback((): SEOCheckItem[] => [
    { id: "title-length", label: "Title is 40-70 characters", description: "Optimal length for search and display", check: () => title.length >= 40 && title.length <= 70, weight: 15, category: "title" },
    { id: "title-keyword", label: "Title contains keyword/topic", description: "Main keyword appears in title", check: () => title.length >= 10, weight: 10, category: "title" },
    { id: "title-power", label: "Title uses power words", description: "Words like: Best, Ultimate, How to, Guide", check: () => /\b(how|why|what|best|top|ultimate|guide|tutorial|tips|tricks|secrets|amazing)\b/i.test(title), weight: 10, category: "title" },
    { id: "title-number", label: "Title includes a number", description: "Numbers increase click-through rate", check: () => /\d/.test(title), weight: 5, category: "title" },
    { id: "desc-length", label: "Description is 200+ characters", description: "Detailed descriptions rank better", check: () => description.length >= 200, weight: 15, category: "description" },
    { id: "desc-keyword", label: "Description has keywords early", description: "First 2-3 lines contain main keywords", check: () => description.length >= 50, weight: 10, category: "description" },
    { id: "desc-cta", label: "Description has call-to-action", description: "Includes subscribe, like, comment prompts", check: () => /\b(subscribe|like|comment|share|follow|click)\b/i.test(description), weight: 5, category: "description" },
    { id: "desc-links", label: "Description has links", description: "Social media or related content links", check: () => /https?:\/\//.test(description) || /www\./.test(description), weight: 5, category: "description" },
    { id: "tags-count", label: "Has 5-15 tags", description: "Optimal number of tags for discoverability", check: () => tags.length >= 5 && tags.length <= 15, weight: 10, category: "tags" },
    { id: "tags-variety", label: "Mix of short and long-tail tags", description: "Both broad and specific tags", check: () => tags.some(t => t.split(" ").length === 1) && tags.some(t => t.split(" ").length >= 2), weight: 5, category: "tags" },
    { id: "hashtags-count", label: "Has 3-5 hashtags", description: "First 3 appear above title", check: () => hashtags.length >= 3 && hashtags.length <= 5, weight: 5, category: "tags" },
    { id: "thumbnail", label: "Custom thumbnail uploaded", description: "Custom thumbnails get more clicks", check: () => !!thumbnailFile, weight: 15, category: "metadata" },
    { id: "category", label: "Correct category selected", description: "Helps YouTube recommend your video", check: () => categoryId !== "22" || title.toLowerCase().includes("vlog"), weight: 5, category: "metadata" },
  ], [title, description, tags, hashtags, thumbnailFile, categoryId]);

  const calculateSEOScore = useCallback(() => {
    const checklist = getSEOChecklist();
    const totalWeight = checklist.reduce((acc, item) => acc + item.weight, 0);
    const earnedWeight = checklist.filter(item => item.check()).reduce((acc, item) => acc + item.weight, 0);
    return Math.round((earnedWeight / totalWeight) * 100);
  }, [getSEOChecklist]);

  // ─── Calendar Helpers ──────────────────────────────────────
  const getCalendarDays = useCallback(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    // Add days from previous month to fill the first week
    const startPadding = firstDay.getDay();
    for (let i = startPadding - 1; i >= 0; i--) {
      days.push(new Date(year, month, -i));
    }

    // Add days of current month
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }

    // Add days from next month to fill the last week
    const endPadding = 6 - lastDay.getDay();
    for (let i = 1; i <= endPadding; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  }, [calendarMonth]);

  const getScheduledForDate = useCallback((date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return scheduledVideos.filter(v => v.scheduledTime.startsWith(dateStr));
  }, [scheduledVideos]);

  // ─── Upload ────────────────────────────────────────────────
  const handleUpload = async () => {
    if (!videoFile) { toast.error("Please select a video file"); return; }
    if (!title.trim()) { toast.error("Title is required"); return; }
    if (title.length > 100) { toast.error("Title must be 100 characters or less"); return; }
    if (description.length > 5000) { toast.error("Description must be 5000 characters or less"); return; }
    if (channels.length === 0) { toast.error("Please connect a YouTube channel first"); return; }

    setUploading(true);
    setUploadProgress(0);

    // Build description with hashtags (first 3 appear above title on YouTube)
    let fullDescription = description;
    if (hashtags.length > 0) {
      const hashtagStr = hashtags.map(h => `#${h}`).join(" ");
      fullDescription = fullDescription ? `${fullDescription}\n\n${hashtagStr}` : hashtagStr;
    }

    // Add chapters to description if any
    if (chapters.length > 0 && !isShort) {
      const chapterStr = chapters.filter(c => c.title).map(c => `${c.startTime} ${c.title}`).join("\n");
      if (chapterStr) {
        fullDescription = fullDescription ? `${fullDescription}\n\n${chapterStr}` : chapterStr;
      }
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("title", title.trim());
    formData.append("description", fullDescription.trim());
    formData.append("tags", JSON.stringify(tags));
    formData.append("categoryId", categoryId);
    formData.append("privacyStatus", privacyStatus);
    if (scheduledTime) formData.append("scheduledTime", scheduledTime);
    if (thumbnailFile) formData.append("thumbnail", thumbnailFile);
    if (activeChannelId) formData.append("channelId", activeChannelId);

    // Advanced settings
    formData.append("madeForKids", madeForKids);
    formData.append("ageRestriction", String(ageRestriction));
    formData.append("hasPaidPromotion", String(hasPaidPromotion));
    formData.append("commentsMode", commentsMode);
    formData.append("showRatings", String(showRatings));
    formData.append("allowEmbedding", String(allowEmbedding));
    formData.append("publishToFeed", String(publishToFeed));
    formData.append("license", license);
    formData.append("language", language);
    formData.append("isPremiere", String(isPremiere));
    formData.append("isShort", String(isShort));
    if (recordingDate) formData.append("recordingDate", recordingDate);

    // Simulate progress for UX
    const progressInterval = setInterval(() => {
      setUploadProgress(p => {
        if (p >= 90) { clearInterval(progressInterval); return 90; }
        return p + Math.random() * 5;
      });
    }, 500);

    try {
      const res = await fetch("/api/video-scheduler/upload", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Upload failed");
      }

      setUploadProgress(100);
      const result = await res.json();

      // Save to upload history
      const histItem = {
        id: Date.now().toString(),
        title: title,
        videoId: result.videoId,
        uploadedAt: new Date().toISOString(),
        thumbnailUrl: result.thumbnailUrl,
      };
      const updatedHist = [histItem, ...uploadHistory].slice(0, 50);
      setUploadHistory(updatedHist);
      localStorage.setItem("yt_scheduler_history", JSON.stringify(updatedHist));
      syncToServer("history", updatedHist);

      toast.success(`Video uploaded successfully! ID: ${result.videoId}`);

      // Reset form
      setTimeout(() => {
        setVideoFile(null);
        setVideoPreview(null);
        setThumbnailFile(null);
        setThumbnailPreview(null);
        setTitle("");
        setDescription("");
        setTags([]);
        setHashtags([]);
        setUploadProgress(0);
        setUploading(false);
      }, 2000);
    } catch (error: unknown) {
      clearInterval(progressInterval);
      setUploadProgress(0);
      setUploading(false);
      const msg = error instanceof Error ? error.message : "Upload failed";
      toast.error(msg);
    }
  };

  // ─── Computed Values ───────────────────────────────────────
  const activeChannel = channels.find(c => c.id === activeChannelId);
  const isConnected = channels.length > 0;
  const canUpload = isConnected && videoFile && title.trim() && !uploading;

  // ─── Render ────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/20">
                <Video className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--foreground)]">Video Scheduler</h1>
                <p className="text-xs text-[var(--muted-foreground)]">Upload & schedule with all YouTube settings</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Analytics Button - Link to full page */}
              <Link
                href={`/analytics${activeChannelId ? `?channel=${activeChannelId}` : ""}`}
                className="px-3 py-2 text-sm rounded-lg border border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors flex items-center gap-2 font-medium"
              >
                <BarChart2 className="w-4 h-4" />
                Full Analytics
              </Link>
              {/* Hashtag Generator Link */}
              <Link
                href="/hashtag"
                className="px-3 py-2 text-sm rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2"
              >
                <Hash className="w-4 h-4" />
                Hashtags
              </Link>
              {/* Quick Analytics Sidebar */}
              <button onClick={() => {
                if (!showAnalyticsSidebar && activeChannelId && !analyticsChannelId) {
                  setAnalyticsChannelId(activeChannelId);
                }
                setShowAnalyticsSidebar(!showAnalyticsSidebar);
              }} className={`px-3 py-2 text-sm rounded-lg border transition-colors flex items-center gap-2 ${showAnalyticsSidebar ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]" : "border-[var(--border)] hover:bg-[var(--secondary)]"}`}>
                <Activity className="w-4 h-4" />
                Quick View
              </button>
              {/* Draft Button */}
              <button onClick={() => setShowDrafts(!showDrafts)} className="px-3 py-2 text-sm rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Drafts ({savedDrafts.length})
              </button>
              {/* History Button */}
              <button onClick={() => setShowHistory(!showHistory)} className="px-3 py-2 text-sm rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
                <Clock className="w-4 h-4" />
                History ({uploadHistory.length})
              </button>
              {/* Save Draft */}
              <button onClick={saveDraft} className="px-3 py-2 text-sm rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Draft
              </button>
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex gap-1 mt-4 p-1 rounded-xl bg-[var(--background)] border border-[var(--border)] overflow-x-auto">
            <button onClick={() => setViewMode("single")} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${viewMode === "single" ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)]"}`}>
              <Upload className="w-4 h-4" /> Single Upload
            </button>
            <button onClick={() => setViewMode("bulk")} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${viewMode === "bulk" ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)]"}`}>
              <Layers className="w-4 h-4" /> Bulk Upload
              {bulkVideos.length > 0 && <span className="px-1.5 py-0.5 text-xs rounded-full bg-white/20">{bulkVideos.length}</span>}
            </button>
            <button onClick={() => setViewMode("templates")} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${viewMode === "templates" ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)]"}`}>
              <BookOpen className="w-4 h-4" /> Templates
              {templates.length > 0 && <span className="px-1.5 py-0.5 text-xs rounded-full bg-white/20">{templates.length}</span>}
            </button>
            <button onClick={() => setViewMode("calendar")} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${viewMode === "calendar" ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)]"}`}>
              <Calendar className="w-4 h-4" /> Calendar
            </button>
            <button onClick={() => setViewMode("besttime")} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${viewMode === "besttime" ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)]"}`}>
              <Clock className="w-4 h-4" /> Best Time
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* ─── Channel Connection ───────────────────────────── */}
        <div className="mb-6 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <SectionHeader icon={<Tv className="w-5 h-5" />} title="YouTube Channel" subtitle="Connect your channel to upload videos" />

          {authLoading ? (
            <div className="flex items-center gap-2 py-4"><Loader2 className="w-5 h-5 animate-spin" /><span className="text-sm text-[var(--muted-foreground)]">Checking connection...</span></div>
          ) : channels.length === 0 ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-3">
                <Tv className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mb-3">No YouTube channel connected</p>
              <button onClick={connectChannel} disabled={connectLoading} className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2 mx-auto">
                {connectLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <PlusCircle className="w-4 h-4" />}
                Connect YouTube Channel
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {channels.map(ch => (
                <div key={ch.id} className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${ch.id === activeChannelId ? "border-[var(--primary)] bg-[var(--primary)]/5" : "border-[var(--border)] hover:border-[var(--primary)]/50"}`}>
                  <ChannelAvatar src={ch.thumbnailUrl} alt={ch.title} size={40} onClick={() => setActive(ch.id)} />
                  <div className="flex-1 min-w-0" onClick={() => setActive(ch.id)}>
                    <p className="text-sm font-medium text-[var(--foreground)] truncate">{ch.title}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{ch.subscriberCount.toLocaleString()} subscribers · {ch.videoCount} videos</p>
                  </div>
                  {ch.id === activeChannelId && <span className="px-2 py-0.5 text-xs bg-[var(--primary)] text-white rounded-full">Active</span>}
                  <button onClick={() => disconnectChannel(ch.id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-[var(--muted-foreground)] hover:text-red-400 transition-colors" title="Disconnect">
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button onClick={connectChannel} disabled={connectLoading} className="w-full py-2 border border-dashed border-[var(--border)] rounded-lg text-sm text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors flex items-center justify-center gap-2">
                {connectLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                Add Another Channel
              </button>
            </div>
          )}
        </div>

        {/* ─── Drafts Panel ─────────────────────────────────── */}
        {showDrafts && (
          <div className="mb-6 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Saved Drafts</h3>
              <button onClick={() => setShowDrafts(false)} className="p-1 rounded hover:bg-[var(--secondary)]"><X className="w-4 h-4" /></button>
            </div>
            {savedDrafts.length === 0 ? (
              <p className="text-xs text-[var(--muted-foreground)] py-4 text-center">No drafts saved yet</p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {savedDrafts.map(draft => (
                  <div key={draft.id} className="flex items-center gap-3 p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors">
                    <div className="flex-1 min-w-0 cursor-pointer" onClick={() => loadDraft(draft)}>
                      <p className="text-sm font-medium truncate">{draft.title}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{new Date(draft.savedAt).toLocaleDateString()}</p>
                    </div>
                    <button onClick={() => deleteDraft(draft.id)} className="p-1 rounded hover:bg-red-500/10 text-[var(--muted-foreground)] hover:text-red-400"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── Upload History Panel ─────────────────────────── */}
        {showHistory && (
          <div className="mb-6 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Upload History</h3>
              <button onClick={() => setShowHistory(false)} className="p-1 rounded hover:bg-[var(--secondary)]"><X className="w-4 h-4" /></button>
            </div>
            {uploadHistory.length === 0 ? (
              <p className="text-xs text-[var(--muted-foreground)] py-4 text-center">No uploads yet</p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {uploadHistory.map(item => (
                  <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg border border-[var(--border)]">
                    {item.thumbnailUrl ? (
                      <NextImage src={item.thumbnailUrl} alt="" width={64} height={36} className="rounded object-cover" unoptimized />
                    ) : (
                      <div className="w-16 h-9 rounded bg-[var(--secondary)] flex items-center justify-center">
                        <Video className="w-4 h-4 text-[var(--muted-foreground)]" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.title}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{new Date(item.uploadedAt).toLocaleDateString()}</p>
                    </div>
                    <a href={`https://youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg hover:bg-[var(--secondary)] text-[var(--muted-foreground)]">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* BULK UPLOAD VIEW */}
        {/* ═══════════════════════════════════════════════════════ */}
        {viewMode === "bulk" && (
          <div className="space-y-4">
            {/* Bulk Upload Channel Selector */}
            {channels.length > 1 && (
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <SectionHeader icon={<Tv className="w-5 h-5" />} title="Upload to Channel" />
                <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
                  {channels.map(ch => (
                    <button
                      key={ch.id}
                      onClick={() => setActive(ch.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border whitespace-nowrap transition-all ${ch.id === activeChannelId
                          ? "border-[var(--primary)] bg-[var(--primary)]/10"
                          : "border-[var(--border)] hover:border-[var(--primary)]/50"
                        }`}
                    >
                      <NextImage
                        src={ch.thumbnailUrl || "/default-avatar.png"}
                        alt={ch.title}
                        width={28}
                        height={28}
                        className="rounded-full"
                        unoptimized
                      />
                      <span className="text-sm font-medium">{ch.title}</span>
                      {ch.id === activeChannelId && (
                        <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="flex items-center justify-between mb-4">
                <SectionHeader icon={<Layers className="w-5 h-5" />} title="Bulk Upload Queue" />
                <div className="flex gap-2">
                  {templates.length > 0 && bulkVideos.length > 0 && (
                    <select onChange={(e) => { const t = templates.find(t => t.id === e.target.value); if (t) applyTemplateToAllBulk(t); }} className="px-3 py-1.5 text-xs rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <option value="">Apply Template...</option>
                      {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                    </select>
                  )}
                  <label className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Videos
                    <input type="file" accept="video/*" multiple onChange={handleBulkFileSelect} className="hidden" />
                  </label>
                </div>
              </div>

              {bulkVideos.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
                  <Layers className="w-12 h-12 text-[var(--muted-foreground)] mx-auto mb-3" />
                  <p className="text-sm text-[var(--muted-foreground)] mb-2">No videos in queue</p>
                  <p className="text-xs text-[var(--muted-foreground)]">Select multiple video files to bulk upload</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {bulkVideos.map((bv, idx) => (
                    <div key={bv.id} className="p-4 border border-[var(--border)] rounded-xl bg-[var(--background)]">
                      <div className="flex items-start gap-4">
                        <div className="w-32 h-20 rounded-lg bg-[var(--secondary)] flex items-center justify-center shrink-0 overflow-hidden">
                          {bv.thumbnailPreview ? (
                            <NextImage src={bv.thumbnailPreview} alt="" width={128} height={80} className="object-cover w-full h-full" unoptimized />
                          ) : (
                            <Video className="w-6 h-6 text-[var(--muted-foreground)]" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[var(--muted-foreground)]">#{idx + 1}</span>
                            <input type="text" value={bv.title} onChange={(e) => updateBulkVideo(bv.id, { title: e.target.value })} placeholder="Video title" className="flex-1 px-3 py-1.5 text-sm rounded-lg border border-[var(--border)] bg-[var(--card)] focus:border-[var(--primary)] outline-none" />
                            <button onClick={() => removeBulkVideo(bv.id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-[var(--muted-foreground)] hover:text-red-400">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <textarea value={bv.description} onChange={(e) => updateBulkVideo(bv.id, { description: e.target.value })} placeholder="Description..." rows={2} className="w-full px-3 py-1.5 text-sm rounded-lg border border-[var(--border)] bg-[var(--card)] focus:border-[var(--primary)] outline-none resize-none" />
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-[var(--muted-foreground)]">{bv.file.name}</span>
                            <span className="text-[var(--muted-foreground)]">•</span>
                            <span className="text-[var(--muted-foreground)]">{(bv.file.size / 1024 / 1024).toFixed(1)} MB</span>
                            {bv.status === "uploading" && (
                              <>
                                <span className="text-[var(--muted-foreground)]">•</span>
                                <span className="text-[var(--primary)]">Uploading... {bv.progress}%</span>
                              </>
                            )}
                            {bv.status === "completed" && (
                              <>
                                <span className="text-[var(--muted-foreground)]">•</span>
                                <span className="text-green-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Uploaded</span>
                              </>
                            )}
                            {bv.status === "failed" && (
                              <>
                                <span className="text-[var(--muted-foreground)]">•</span>
                                <span className="text-red-400">{bv.error || "Upload failed"}</span>
                              </>
                            )}
                          </div>
                          {bv.status === "uploading" && (
                            <div className="w-full h-1.5 bg-[var(--secondary)] rounded-full overflow-hidden">
                              <div className="h-full bg-[var(--primary)] transition-all" style={{ width: `${bv.progress}%` }} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center gap-3">
                      {activeChannel && (
                        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[var(--secondary)]">
                          <NextImage
                            src={activeChannel.thumbnailUrl || "/default-avatar.png"}
                            alt={activeChannel.title}
                            width={20}
                            height={20}
                            className="rounded-full"
                            unoptimized
                          />
                          <span className="text-xs text-[var(--muted-foreground)]">to {activeChannel.title}</span>
                        </div>
                      )}
                      <p className="text-sm text-[var(--muted-foreground)]">{bulkVideos.length} video(s) • {bulkVideos.filter(v => v.status === "completed").length} uploaded</p>
                    </div>
                    <button onClick={startBulkUpload} disabled={uploading || bulkVideos.every(v => v.status === "completed")} className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2">
                      {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                      {uploading ? "Uploading..." : "Start Bulk Upload"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TEMPLATES VIEW */}
        {/* ═══════════════════════════════════════════════════════ */}
        {viewMode === "templates" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <SectionHeader icon={<BookOpen className="w-5 h-5" />} title="Video Templates" />
              <p className="text-xs text-[var(--muted-foreground)] mb-4">Save current settings as a template for quick reuse</p>

              <div className="flex gap-2 mb-4">
                <input type="text" value={templateName} onChange={(e) => setTemplateName(e.target.value)} placeholder="Template name..." className="flex-1 px-3 py-2 text-sm rounded-lg border border-[var(--border)] bg-[var(--background)] focus:border-[var(--primary)] outline-none" />
                <button onClick={saveAsTemplate} disabled={!templateName.trim()} className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium disabled:opacity-50 flex items-center gap-2">
                  <Save className="w-4 h-4" /> Save Template
                </button>
              </div>

              {templates.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
                  <BookOpen className="w-12 h-12 text-[var(--muted-foreground)] mx-auto mb-3" />
                  <p className="text-sm text-[var(--muted-foreground)]">No templates saved yet</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">Configure your video settings and save them as a template</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {templates.map(tpl => (
                    <div key={tpl.id} className="p-4 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:border-[var(--primary)]/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-[var(--foreground)]">{tpl.name}</h4>
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">Created {new Date(tpl.createdAt).toLocaleDateString()}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--secondary)]">{tpl.privacyStatus}</span>
                            <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--secondary)]">{tpl.categoryId}</span>
                            {tpl.tags.slice(0, 3).map((tag: string, i: number) => (
                              <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">{tag}</span>
                            ))}
                            {tpl.tags.length > 3 && (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--secondary)]">+{tpl.tags.length - 3} more</span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => loadTemplate(tpl)} className="px-3 py-1.5 text-xs rounded-lg border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors">
                            Load
                          </button>
                          <button onClick={() => deleteTemplate(tpl.id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-[var(--muted-foreground)] hover:text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* CALENDAR VIEW */}
        {/* ═══════════════════════════════════════════════════════ */}
        {viewMode === "calendar" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="flex items-center justify-between mb-4">
                <SectionHeader icon={<Calendar className="w-5 h-5" />} title="Content Calendar" />
                <div className="flex items-center gap-2">
                  <button onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))} className="p-2 rounded-lg hover:bg-[var(--secondary)]">
                    <ChevronDown className="w-4 h-4 rotate-90" />
                  </button>
                  <span className="text-sm font-medium min-w-[140px] text-center">
                    {calendarMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </span>
                  <button onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))} className="p-2 rounded-lg hover:bg-[var(--secondary)]">
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                  <div key={day} className="text-center text-xs font-medium text-[var(--muted-foreground)] py-2">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {getCalendarDays().map((day, idx) => {
                  const scheduled = day ? getScheduledForDate(day) : [];
                  const isToday = day && new Date().toDateString() === day.toDateString();
                  return (
                    <div key={idx} className={`min-h-[80px] p-1.5 rounded-lg border ${day ? "border-[var(--border)] bg-[var(--background)]" : "border-transparent"} ${isToday ? "ring-2 ring-[var(--primary)]" : ""}`}>
                      {day && (
                        <>
                          <p className={`text-xs font-medium mb-1 ${isToday ? "text-[var(--primary)]" : "text-[var(--foreground)]"}`}>{day.getDate()}</p>
                          <div className="space-y-0.5">
                            {scheduled.slice(0, 2).map(item => (
                              <div key={item.id} className="px-1 py-0.5 rounded text-[10px] bg-[var(--primary)]/10 text-[var(--primary)] truncate" title={item.title}>
                                {item.title}
                              </div>
                            ))}
                            {scheduled.length > 2 && (
                              <p className="text-[10px] text-[var(--muted-foreground)]">+{scheduled.length - 2} more</p>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* BEST TIME VIEW */}
        {/* ═══════════════════════════════════════════════════════ */}
        {viewMode === "besttime" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="flex items-center justify-between mb-4">
                <SectionHeader icon={<Clock className="w-5 h-5" />} title="Best Time to Upload" />
                <button onClick={analyzeBestTime} disabled={bestTimeLoading} className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium disabled:opacity-50 flex items-center gap-2">
                  {bestTimeLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <TrendingUp className="w-4 h-4" />}
                  {bestTimeLoading ? "Analyzing..." : "Analyze"}
                </button>
              </div>

              {!bestTimeData ? (
                <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
                  <Clock className="w-12 h-12 text-[var(--muted-foreground)] mx-auto mb-3" />
                  <p className="text-sm text-[var(--muted-foreground)]">Click Analyze to find the best upload times</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">Based on your channel's audience activity patterns</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Heatmap */}
                  <div className="overflow-x-auto">
                    <div className="min-w-[600px]">
                      <div className="grid grid-cols-[60px_repeat(24,1fr)] gap-0.5">
                        <div />
                        {Array.from({ length: 24 }, (_, h) => (
                          <div key={h} className="text-center text-[10px] text-[var(--muted-foreground)]">{h}:00</div>
                        ))}
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, dayIdx) => (
                          <React.Fragment key={day}>
                            <div className="text-xs font-medium text-[var(--muted-foreground)] flex items-center">{day}</div>
                            {Array.from({ length: 24 }, (_, hour) => {
                              const score = bestTimeData.heatmap[dayIdx]?.[hour] || 0;
                              const intensity = Math.min(score / 100, 1);
                              return (
                                <div key={hour} className="aspect-square rounded-sm cursor-pointer hover:ring-2 hover:ring-white/50" style={{ backgroundColor: `rgba(239, 68, 68, ${intensity * 0.8 + 0.1})` }} title={`${day} ${hour}:00 - Score: ${score}`} />
                              );
                            })}
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <span className="text-xs text-[var(--muted-foreground)]">Low</span>
                        <div className="flex gap-0.5">
                          {[0.1, 0.3, 0.5, 0.7, 0.9].map(i => (
                            <div key={i} className="w-4 h-3 rounded-sm" style={{ backgroundColor: `rgba(239, 68, 68, ${i * 0.8 + 0.1})` }} />
                          ))}
                        </div>
                        <span className="text-xs text-[var(--muted-foreground)]">High</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="p-4 rounded-lg bg-[var(--background)] border border-[var(--border)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" /> Top Recommended Times
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {bestTimeData.recommendations.map((rec, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-white text-xs flex items-center justify-center">{idx + 1}</span>
                            <span className="text-sm font-medium">{rec.day}</span>
                          </div>
                          <p className="text-lg font-bold text-[var(--primary)]">{rec.time}</p>
                          <p className="text-xs text-[var(--muted-foreground)]">Engagement score: {rec.score}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SINGLE UPLOAD VIEW - Main Layout: Video + Form */}
        {/* ═══════════════════════════════════════════════════════ */}
        {viewMode === "single" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Video Upload + Preview */}
            <div className="lg:col-span-1 space-y-4">
              {/* Video Upload */}
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <SectionHeader icon={<FileVideo className="w-5 h-5" />} title="Video File" />
                <input ref={videoInputRef} type="file" accept="video/*" onChange={handleVideoSelect} className="hidden" />

                {videoFile ? (
                  <div className="space-y-3">
                    {videoPreview && (
                      <div
                        id="video-player-container"
                        className="relative rounded-xl overflow-hidden bg-black group"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => isPlaying && setShowControls(false)}
                      >
                        {/* Video Element */}
                        <video
                          ref={videoRef}
                          src={videoPreview}
                          className="w-full aspect-video"
                          onTimeUpdate={handleVideoTimeUpdate}
                          onEnded={handleVideoEnded}
                          onLoadedMetadata={() => {
                            if (videoRef.current) {
                              setVideoDurationSeconds(videoRef.current.duration);
                            }
                          }}
                          onClick={togglePlay}
                        />

                        {/* Play/Pause Overlay (center) */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0"
                            }`}
                        >
                          <button
                            onClick={togglePlay}
                            className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
                          >
                            {isPlaying ? (
                              <Pause className="w-8 h-8 text-white" />
                            ) : (
                              <Play className="w-8 h-8 text-white ml-1" />
                            )}
                          </button>
                        </div>

                        {/* Controls Bar */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0"
                            }`}
                        >
                          {/* Progress Bar */}
                          <div className="mb-2 group/progress">
                            <input
                              type="range"
                              min={0}
                              max={videoDurationSeconds || 100}
                              value={currentTime}
                              onChange={handleVideoSeek}
                              className="w-full h-1 appearance-none bg-white/30 rounded-full cursor-pointer 
                              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--primary)] 
                              [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                              [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125
                              [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full 
                              [&::-moz-range-thumb]:bg-[var(--primary)] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                              style={{
                                background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${(currentTime / (videoDurationSeconds || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (videoDurationSeconds || 1)) * 100}%, rgba(255,255,255,0.3) 100%)`
                              }}
                            />
                          </div>

                          {/* Control Buttons */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {/* Play/Pause */}
                              <button onClick={togglePlay} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
                                {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                              </button>

                              {/* Skip Backward */}
                              <button onClick={() => skipTime(-10)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors" title="Skip back 10s">
                                <SkipBack className="w-4 h-4 text-white" />
                              </button>

                              {/* Skip Forward */}
                              <button onClick={() => skipTime(10)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors" title="Skip forward 10s">
                                <SkipForward className="w-4 h-4 text-white" />
                              </button>

                              {/* Volume */}
                              <div className="flex items-center gap-1 group/volume">
                                <button onClick={toggleMute} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
                                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                                </button>
                                <input
                                  type="range"
                                  min={0}
                                  max={1}
                                  step={0.1}
                                  value={isMuted ? 0 : volume}
                                  onChange={handleVolumeChange}
                                  className="w-16 h-1 appearance-none bg-white/30 rounded-full cursor-pointer opacity-0 group-hover/volume:opacity-100 transition-opacity
                                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 
                                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer"
                                />
                              </div>

                              {/* Time Display */}
                              <span className="text-xs text-white/80 font-mono ml-1">
                                {formatTime(currentTime)} / {formatTime(videoDurationSeconds)}
                              </span>
                            </div>

                            <div className="flex items-center gap-1">
                              {/* Fullscreen */}
                              <button onClick={toggleFullscreen} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors" title="Fullscreen">
                                <Maximize className="w-4 h-4 text-white" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Video Badge */}
                        {isShort && (
                          <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-red-500 text-white text-xs font-semibold flex items-center gap-1">
                            <Zap className="w-3 h-3" /> Short
                          </div>
                        )}
                      </div>
                    )}
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-[var(--secondary)]">
                      <FileVideo className="w-4 h-4 text-[var(--primary)] shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{videoFile.name}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          {(videoFile.size / (1024 * 1024)).toFixed(1)} MB {videoDuration && `· ${videoDuration}`}
                          {isShort && " · Short"}
                        </p>
                      </div>
                      <button onClick={() => { setVideoFile(null); setVideoPreview(null); setVideoDuration(""); setVideoDurationSeconds(0); setCurrentTime(0); setIsPlaying(false); }} className="p-1 rounded hover:bg-red-500/10 text-[var(--muted-foreground)] hover:text-red-400">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => videoInputRef.current?.click()} className="w-full py-12 border-2 border-dashed border-[var(--border)] rounded-xl hover:border-[var(--primary)] transition-colors flex flex-col items-center gap-2">
                    <Upload className="w-8 h-8 text-[var(--muted-foreground)]" />
                    <span className="text-sm font-medium text-[var(--foreground)]">Select Video File</span>
                    <span className="text-xs text-[var(--muted-foreground)]">MP4, WebM, AVI, MOV · Max 128GB</span>
                  </button>
                )}
              </div>

              {/* Thumbnail Upload */}
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <SectionHeader icon={<ImageIcon className="w-5 h-5" />} title="Custom Thumbnail" subtitle="Recommended: 1280x720, max 2MB" />
                <input ref={thumbnailInputRef} type="file" accept="image/*" onChange={handleThumbnailSelect} className="hidden" />

                {thumbnailPreview ? (
                  <div className="space-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={thumbnailPreview} alt="Thumbnail" className="w-full rounded-lg aspect-video object-cover" />
                    <div className="flex gap-2">
                      <button onClick={() => thumbnailInputRef.current?.click()} className="flex-1 py-1.5 text-xs border border-[var(--border)] rounded-lg hover:bg-[var(--secondary)] transition-colors">Change</button>
                      <button onClick={() => { setThumbnailFile(null); setThumbnailPreview(null); }} className="py-1.5 px-3 text-xs border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors">Remove</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => thumbnailInputRef.current?.click()} className="w-full py-8 border-2 border-dashed border-[var(--border)] rounded-xl hover:border-[var(--primary)] transition-colors flex flex-col items-center gap-2">
                    <ImageIcon className="w-6 h-6 text-[var(--muted-foreground)]" />
                    <span className="text-xs text-[var(--muted-foreground)]">Upload Thumbnail</span>
                  </button>
                )}
              </div>

              {/* AI Generate Button */}
              <button onClick={generateAI} disabled={aiLoading} className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50">
                {aiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                Generate AI Suggestions
              </button>

              {/* Channel Selector for Upload */}
              {channels.length > 1 && (
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                  <SectionHeader icon={<Tv className="w-5 h-5" />} title="Upload to Channel" />
                  <div className="space-y-2 mt-2">
                    {channels.map(ch => (
                      <label
                        key={ch.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${ch.id === activeChannelId
                            ? "border-[var(--primary)] bg-[var(--primary)]/10"
                            : "border-[var(--border)] hover:border-[var(--primary)]/50"
                          }`}
                      >
                        <input
                          type="radio"
                          name="uploadChannel"
                          value={ch.id}
                          checked={ch.id === activeChannelId}
                          onChange={() => setActive(ch.id)}
                          className="sr-only"
                        />
                        <NextImage
                          src={ch.thumbnailUrl || "/default-avatar.png"}
                          alt={ch.title}
                          width={40}
                          height={40}
                          className="rounded-full"
                          unoptimized
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{ch.title}</p>
                          <p className="text-xs text-[var(--muted-foreground)]">
                            {ch.subscriberCount.toLocaleString()} subscribers
                          </p>
                        </div>
                        {ch.id === activeChannelId && (
                          <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Single channel indicator */}
              {channels.length === 1 && (
                <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--secondary)]">
                  <NextImage
                    src={channels[0].thumbnailUrl || "/default-avatar.png"}
                    alt={channels[0].title}
                    width={36}
                    height={36}
                    className="rounded-full"
                    unoptimized
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[var(--muted-foreground)]">Uploading to</p>
                    <p className="text-sm font-medium truncate">{channels[0].title}</p>
                  </div>
                </div>
              )}

              {/* Upload Button */}
              <button onClick={handleUpload} disabled={!canUpload} className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Uploading... {Math.round(uploadProgress)}%
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {scheduledTime ? "Schedule Video" : "Upload Now"}
                  </>
                )}
              </button>

              {uploading && (
                <div className="w-full bg-[var(--secondary)] rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
                </div>
              )}
            </div>

            {/* Right: Tabbed Form */}
            <div className="lg:col-span-2 space-y-4">
              {/* Tabs */}
              <div className="flex gap-1 p-1 rounded-xl bg-[var(--card)] border border-[var(--border)] overflow-x-auto">
                {TABS.map(tab => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)]"}`}>
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] min-h-[500px]">

                {/* ─── Details Tab ──────────────────────────── */}
                {activeTab === "details" && (
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-sm font-medium text-[var(--foreground)]">Title (required)</label>
                        <CharCounter current={title.length} max={100} />
                      </div>
                      <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value.slice(0, 100))}
                        placeholder="Add a title that describes your video"
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/30 transition-all"
                      />
                      {title.length > 0 && title.length < 10 && (
                        <p className="text-xs text-yellow-400 mt-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Title is too short for good SEO</p>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-sm font-medium text-[var(--foreground)]">Description</label>
                        <CharCounter current={description.length} max={5000} />
                      </div>
                      <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value.slice(0, 5000))}
                        placeholder="Tell viewers about your video (links, timestamps, social media...)"
                        rows={8}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/30 transition-all resize-y font-mono"
                      />
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-[var(--muted-foreground)]">
                        <span className="flex items-center gap-1"><Info className="w-3 h-3" /> First 2-3 lines appear in search</span>
                        <span className="flex items-center gap-1"><Link2 className="w-3 h-3" /> Links are clickable</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-sm font-medium text-[var(--foreground)]">Tags</label>
                        <span className="text-xs text-[var(--muted-foreground)]">{totalTagChars}/500 chars · {tags.length} tags</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={tagInput}
                          onChange={e => setTagInput(e.target.value)}
                          onKeyDown={e => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addTag(); } }}
                          placeholder="Type tag and press Enter"
                          className="flex-1 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
                        />
                        <button onClick={addTag} className="px-3 py-2 rounded-lg bg-[var(--secondary)] hover:bg-[var(--primary)] hover:text-white text-sm transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {tags.map((tag, i) => (
                            <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--secondary)] text-xs">
                              <Tags className="w-3 h-3 text-[var(--primary)]" />{tag}
                              <button onClick={() => removeTag(i)} className="ml-0.5 hover:text-red-400"><X className="w-3 h-3" /></button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Hashtags */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-sm font-medium text-[var(--foreground)]">Hashtags</label>
                        <span className="text-xs text-[var(--muted-foreground)]">{hashtags.length}/15 · First 3 appear above title</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={hashtagInput}
                          onChange={e => setHashtagInput(e.target.value)}
                          onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addHashtag(); } }}
                          placeholder="#hashtag"
                          className="flex-1 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
                        />
                        <button onClick={addHashtag} className="px-3 py-2 rounded-lg bg-[var(--secondary)] hover:bg-[var(--primary)] hover:text-white text-sm transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      {hashtags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {hashtags.map((ht, i) => (
                            <span key={i} className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs ${i < 3 ? "bg-blue-500/15 text-blue-400" : "bg-[var(--secondary)]"}`}>
                              <Hash className="w-3 h-3" />#{ht}
                              <button onClick={() => removeHashtag(i)} className="ml-0.5 hover:text-red-400"><X className="w-3 h-3" /></button>
                            </span>
                          ))}
                        </div>
                      )}
                      {hashtags.length > 0 && hashtags.length <= 3 && (
                        <p className="text-xs text-blue-400 mt-1">These hashtags will appear above your video title</p>
                      )}
                    </div>

                    {/* Category */}
                    <div>
                      <label className="text-sm font-medium text-[var(--foreground)] block mb-1.5">Category</label>
                      <select
                        value={categoryId}
                        onChange={e => setCategoryId(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
                      >
                        {YOUTUBE_CATEGORIES.map(cat => (
                          <option key={cat.id} value={cat.id}>{cat.title}</option>
                        ))}
                      </select>
                    </div>

                    {/* Chapters */}
                    {!isShort && (
                      <div>
                        <SectionHeader icon={<ListVideo className="w-4 h-4" />} title="Chapters" subtitle="Add timestamps (must start at 0:00 with 3+ chapters)" />
                        <ToggleSwitch enabled={autoChapters} onChange={setAutoChapters} label="Automatic chapters" description="Let YouTube auto-create chapters" />
                        {chapters.map((ch, i) => (
                          <div key={i} className="flex gap-2 items-center mt-2">
                            <input type="text" value={ch.startTime} onChange={e => updateChapter(i, "startTime", e.target.value)} placeholder="0:00" className="w-20 px-2 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-xs text-center font-mono focus:outline-none focus:border-[var(--primary)]" />
                            <input type="text" value={ch.title} onChange={e => updateChapter(i, "title", e.target.value)} placeholder="Chapter title" className="flex-1 px-2 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-xs focus:outline-none focus:border-[var(--primary)]" />
                            <button onClick={() => removeChapter(i)} className="p-1 rounded hover:bg-red-500/10 text-[var(--muted-foreground)] hover:text-red-400"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        ))}
                        <button onClick={addChapter} className="mt-2 text-xs text-[var(--primary)] hover:underline flex items-center gap-1"><Plus className="w-3 h-3" /> Add Chapter</button>
                      </div>
                    )}
                  </div>
                )}

                {/* ─── Monetization Tab ────────────────────────── */}
                {activeTab === "monetization" && (
                  <div className="space-y-6">
                    <SectionHeader icon={<DollarSign className="w-5 h-5" />} title="Monetization & Revenue" />

                    {/* Paid Promotion Disclosure */}
                    <div className="p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[var(--foreground)]">Paid Promotion Disclosure</p>
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">
                            If your video contains paid promotion, product placement, or endorsement, you must declare it.
                            YouTube will add an &quot;Includes paid promotion&quot; label to your video.
                          </p>
                          <div className="mt-3">
                            <ToggleSwitch enabled={hasPaidPromotion} onChange={setHasPaidPromotion} label="My video contains paid promotion" description="This video has paid product placements, sponsorships, or endorsements" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sponsor Segments */}
                    {hasPaidPromotion && (
                      <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-medium flex items-center gap-2"><Flag className="w-4 h-4 text-[var(--primary)]" /> Sponsor Segments</h4>
                          <button
                            onClick={() => {
                              const newSegment: SponsorSegment = {
                                id: `seg_${Date.now()}`,
                                type: "sponsor",
                                startTime: 0,
                                endTime: 30
                              };
                              setSponsorSegments([...sponsorSegments, newSegment]);
                            }}
                            className="px-3 py-1.5 text-xs bg-[var(--primary)] text-white rounded-lg hover:opacity-90 flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" /> Add Segment
                          </button>
                        </div>
                        <p className="text-xs text-[var(--muted-foreground)] mb-3">Mark sponsored sections to help viewers identify promotional content</p>

                        {sponsorSegments.length === 0 ? (
                          <p className="text-xs text-[var(--muted-foreground)] text-center py-4">No sponsor segments marked</p>
                        ) : (
                          <div className="space-y-2">
                            {sponsorSegments.map((seg, idx) => (
                              <div key={seg.id} className="flex items-center gap-2 p-2 rounded bg-[var(--secondary)]">
                                <select
                                  value={seg.type}
                                  onChange={e => {
                                    const updated = [...sponsorSegments];
                                    updated[idx] = { ...seg, type: e.target.value as SponsorSegment["type"] };
                                    setSponsorSegments(updated);
                                  }}
                                  className="px-2 py-1 rounded border border-[var(--border)] bg-[var(--background)] text-xs"
                                >
                                  <option value="sponsor">Sponsor</option>
                                  <option value="self_promo">Self Promo</option>
                                  <option value="intro">Intro</option>
                                  <option value="outro">Outro</option>
                                  <option value="interaction">Interaction</option>
                                </select>
                                <input
                                  type="number"
                                  min={0}
                                  value={seg.startTime}
                                  onChange={e => {
                                    const updated = [...sponsorSegments];
                                    updated[idx] = { ...seg, startTime: parseInt(e.target.value) };
                                    setSponsorSegments(updated);
                                  }}
                                  className="w-16 px-2 py-1 rounded border border-[var(--border)] bg-[var(--background)] text-xs"
                                  placeholder="Start"
                                />
                                <span className="text-xs">to</span>
                                <input
                                  type="number"
                                  min={0}
                                  value={seg.endTime}
                                  onChange={e => {
                                    const updated = [...sponsorSegments];
                                    updated[idx] = { ...seg, endTime: parseInt(e.target.value) };
                                    setSponsorSegments(updated);
                                  }}
                                  className="w-16 px-2 py-1 rounded border border-[var(--border)] bg-[var(--background)] text-xs"
                                  placeholder="End"
                                />
                                <span className="text-xs text-[var(--muted-foreground)]">sec</span>
                                <button onClick={() => setSponsorSegments(sponsorSegments.filter((_, i) => i !== idx))} className="p-1 hover:bg-red-500/20 rounded text-red-400 ml-auto">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Super Features */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /> Super Features</h4>
                      <p className="text-xs text-[var(--muted-foreground)] mb-3">Let viewers support you with Super features (requires YouTube Partner Program)</p>

                      <ToggleSwitch
                        enabled={superThanksEnabled}
                        onChange={setSuperThanksEnabled}
                        label="Super Thanks"
                        description="Allow viewers to purchase highlighted thank you messages on your video"
                      />
                      <ToggleSwitch
                        enabled={superChatEnabled}
                        onChange={setSuperChatEnabled}
                        label="Super Chat (for Premieres)"
                        description="Allow viewers to purchase highlighted messages in live chat"
                      />
                      <ToggleSwitch
                        enabled={membershipPromoEnabled}
                        onChange={setMembershipPromoEnabled}
                        label="Promote memberships"
                        description="Show channel membership promotion to eligible viewers"
                      />
                    </div>

                    {/* Partner Program Requirements */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-[var(--primary)]" /> Monetization Requirements</h4>
                      <ul className="text-xs text-[var(--muted-foreground)] space-y-1.5">
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-400" /> YouTube Partner Program membership required</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-400" /> 1,000 subscribers + 4,000 watch hours</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-400" /> Or 1,000 subscribers + 10M Shorts views (90 days)</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-400" /> Content must comply with ad-friendly guidelines</li>
                        <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-yellow-400" /> Made for kids videos have limited ads</li>
                        <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-yellow-400" /> Age-restricted content is not eligible for ads</li>
                      </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3">End Screen & Cards</h4>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setActiveTab("endscreen")}
                          className="flex-1 py-2 px-3 text-xs border border-[var(--border)] rounded-lg hover:bg-[var(--secondary)] flex items-center justify-center gap-2"
                        >
                          <Tv className="w-3.5 h-3.5" /> Configure End Screen
                        </button>
                        <button
                          onClick={() => setActiveTab("cards")}
                          className="flex-1 py-2 px-3 text-xs border border-[var(--border)] rounded-lg hover:bg-[var(--secondary)] flex items-center justify-center gap-2"
                        >
                          <Layers className="w-3.5 h-3.5" /> Configure Cards
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ─── Audience Tab ────────────────────────────── */}
                {activeTab === "audience" && (
                  <div className="space-y-6">
                    <SectionHeader icon={<Users className="w-5 h-5" />} title="Audience Settings" subtitle="Set your audience and age restrictions" />

                    {/* Made for Kids */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-1">Is this video made for kids?</h4>
                      <p className="text-xs text-[var(--muted-foreground)] mb-3">
                        Regardless of your location, you&apos;re legally required to comply with COPPA and/or other laws.
                        Content set as made for kids may get more recommendations on YouTube Kids.
                      </p>
                      <div className="space-y-2">
                        {[
                          { value: "yes" as const, label: "Yes, it's made for kids", desc: "Features like comments, notifications, and personalized ads will be limited" },
                          { value: "no" as const, label: "No, it's not made for kids", desc: "Standard YouTube features will be available" },
                          { value: "unset" as const, label: "I want to review this later", desc: "YouTube may set automatically based on content detection" },
                        ].map(opt => (
                          <label key={opt.value} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${madeForKids === opt.value ? "border-[var(--primary)] bg-[var(--primary)]/5" : "border-[var(--border)] hover:border-[var(--primary)]/50"}`}>
                            <input type="radio" name="madeForKids" checked={madeForKids === opt.value} onChange={() => setMadeForKids(opt.value)} className="mt-1 accent-[var(--primary)]" />
                            <div>
                              <p className="text-sm font-medium">{opt.label}</p>
                              <p className="text-xs text-[var(--muted-foreground)]">{opt.desc}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Age Restriction */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-1">Age restriction (advanced)</h4>
                      <p className="text-xs text-[var(--muted-foreground)] mb-3">
                        Age-restricted videos are not shown to viewers under 18, are not eligible for ads, and won&apos;t appear in certain parts of YouTube.
                      </p>
                      <div className="space-y-2">
                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${!ageRestriction ? "border-[var(--primary)] bg-[var(--primary)]/5" : "border-[var(--border)] hover:border-[var(--primary)]/50"}`}>
                          <input type="radio" name="ageRestriction" checked={!ageRestriction} onChange={() => setAgeRestriction(false)} className="mt-1 accent-[var(--primary)]" />
                          <div>
                            <p className="text-sm font-medium">No, don&apos;t restrict my video</p>
                            <p className="text-xs text-[var(--muted-foreground)]">No age gate will be applied</p>
                          </div>
                        </label>
                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${ageRestriction ? "border-[var(--primary)] bg-[var(--primary)]/5" : "border-[var(--border)] hover:border-[var(--primary)]/50"}`}>
                          <input type="radio" name="ageRestriction" checked={ageRestriction} onChange={() => setAgeRestriction(true)} className="mt-1 accent-[var(--primary)]" />
                          <div>
                            <p className="text-sm font-medium">Yes, restrict my video to viewers over 18</p>
                            <p className="text-xs text-[var(--muted-foreground)]">Video will be behind an age gate</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-[var(--primary)]" /> Comments</h4>
                      <div className="space-y-2">
                        {[
                          { value: "all" as const, label: "Allow all comments", icon: <MessageSquare className="w-4 h-4" /> },
                          { value: "moderated" as const, label: "Hold potentially inappropriate for review", icon: <Shield className="w-4 h-4" /> },
                          { value: "approved" as const, label: "Hold all comments for review", icon: <UserCheck className="w-4 h-4" /> },
                          { value: "none" as const, label: "Disable comments", icon: <X className="w-4 h-4" /> },
                        ].map(opt => (
                          <label key={opt.value} className={`flex items-center gap-3 p-2.5 rounded-lg border cursor-pointer transition-all ${commentsMode === opt.value ? "border-[var(--primary)] bg-[var(--primary)]/5" : "border-[var(--border)] hover:border-[var(--primary)]/50"}`}>
                            <input type="radio" name="commentsMode" checked={commentsMode === opt.value} onChange={() => setCommentsMode(opt.value)} className="accent-[var(--primary)]" />
                            <span className="text-[var(--muted-foreground)]">{opt.icon}</span>
                            <span className="text-sm">{opt.label}</span>
                          </label>
                        ))}
                      </div>

                      {commentsMode !== "none" && (
                        <div className="mt-3 pt-3 border-t border-[var(--border)]">
                          <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-2">Sort comments by default</label>
                          <div className="flex gap-2">
                            {[
                              { value: "top" as const, label: "Top comments" },
                              { value: "newest" as const, label: "Newest first" },
                            ].map(opt => (
                              <button key={opt.value} onClick={() => setSortCommentsBy(opt.value)} className={`flex-1 py-2 text-xs rounded-lg border transition-all ${sortCommentsBy === opt.value ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]" : "border-[var(--border)] hover:border-[var(--primary)]/50"}`}>
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Ratings */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <ToggleSwitch enabled={showRatings} onChange={setShowRatings} label="Show how many viewers like this video" description="The number of likes on this video will be public" />
                    </div>
                  </div>
                )}

                {/* ─── Subtitles Tab ───────────────────────────── */}
                {activeTab === "subtitles" && (
                  <div className="space-y-6">
                    <SectionHeader icon={<Type className="w-5 h-5" />} title="Subtitles & Closed Captions" subtitle="Add subtitles to make your video accessible" />

                    {/* Auto-generate */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <ToggleSwitch
                        enabled={autoGenerateCaptions}
                        onChange={setAutoGenerateCaptions}
                        label="Automatic captions"
                        description="Let YouTube automatically generate captions using speech recognition"
                      />
                      {autoGenerateCaptions && (
                        <p className="mt-2 text-xs text-[var(--muted-foreground)] bg-[var(--secondary)] p-2 rounded">
                          Automatic captions will be generated after upload. You can review and edit them in YouTube Studio.
                        </p>
                      )}
                    </div>

                    {/* Subtitle Tracks */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium">Subtitle Tracks</h4>
                        <button
                          onClick={() => {
                            const newTrack: SubtitleTrack = {
                              id: `sub_${Date.now()}`,
                              language: "en",
                              languageName: "English",
                              isAutoGenerated: false,
                              isASR: false,
                              isCC: false,
                              status: "draft"
                            };
                            setSubtitles([...subtitles, newTrack]);
                          }}
                          className="px-3 py-1.5 text-xs bg-[var(--primary)] text-white rounded-lg hover:opacity-90 flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" /> Add Language
                        </button>
                      </div>

                      {subtitles.length === 0 ? (
                        <div className="text-center py-8 border-2 border-dashed border-[var(--border)] rounded-lg">
                          <Type className="w-8 h-8 text-[var(--muted-foreground)] mx-auto mb-2 opacity-50" />
                          <p className="text-sm text-[var(--muted-foreground)]">No subtitle tracks added</p>
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">Click &quot;Add Language&quot; to upload subtitles</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {subtitles.map((track, idx) => (
                            <div key={track.id} className="p-3 rounded-lg border border-[var(--border)] bg-[var(--secondary)]">
                              <div className="flex items-center gap-3">
                                <select
                                  value={track.language}
                                  onChange={e => {
                                    const lang = YOUTUBE_LANGUAGES.find(l => l.code === e.target.value);
                                    const updated = [...subtitles];
                                    updated[idx] = { ...track, language: e.target.value, languageName: lang?.name || e.target.value };
                                    setSubtitles(updated);
                                  }}
                                  className="px-2 py-1.5 rounded border border-[var(--border)] bg-[var(--background)] text-sm flex-1"
                                >
                                  {YOUTUBE_LANGUAGES.map(lang => (
                                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                                  ))}
                                </select>
                                <label className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={track.isCC}
                                    onChange={e => {
                                      const updated = [...subtitles];
                                      updated[idx] = { ...track, isCC: e.target.checked };
                                      setSubtitles(updated);
                                    }}
                                    className="accent-[var(--primary)]"
                                  />
                                  <span className="text-xs">CC</span>
                                </label>
                                <input
                                  type="file"
                                  accept=".srt,.vtt,.sbv,.sub,.ass"
                                  onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const updated = [...subtitles];
                                      updated[idx] = { ...track, file, status: "draft" };
                                      setSubtitles(updated);
                                    }
                                  }}
                                  className="text-xs"
                                />
                                <button
                                  onClick={() => setSubtitles(subtitles.filter((_, i) => i !== idx))}
                                  className="p-1 hover:bg-red-500/20 rounded text-red-400"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              {track.file && (
                                <p className="text-xs text-[var(--muted-foreground)] mt-2">File: {track.file.name}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Tips */}
                    <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-blue-400" /> Supported Formats</h4>
                      <ul className="text-xs text-[var(--muted-foreground)] space-y-1">
                        <li>• SubRip (.srt) - Most common format</li>
                        <li>• WebVTT (.vtt) - HTML5 standard</li>
                        <li>• SubViewer (.sbv) - YouTube native format</li>
                        <li>• SSA/ASS (.ass) - Advanced styling</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* ─── End Screen Tab ──────────────────────────── */}
                {activeTab === "endscreen" && (
                  <div className="space-y-6">
                    <SectionHeader icon={<Tv className="w-5 h-5" />} title="End Screen" subtitle="Add elements in the last 5-20 seconds of your video" />

                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <ToggleSwitch
                        enabled={endScreenEnabled}
                        onChange={setEndScreenEnabled}
                        label="Enable end screen"
                        description="Show interactive elements at the end of your video"
                      />
                    </div>

                    {endScreenEnabled && (
                      <>
                        {/* End Screen Elements */}
                        <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-medium">End Screen Elements</h4>
                            <button
                              onClick={() => {
                                const newElement: EndScreenElement = {
                                  id: `es_${Date.now()}`,
                                  type: "video",
                                  position: { x: 50, y: 50 },
                                  size: { width: 25, height: 25 },
                                  startTime: 15,
                                  duration: 10,
                                  bestForViewer: true
                                };
                                setEndScreenElements([...endScreenElements, newElement]);
                              }}
                              className="px-3 py-1.5 text-xs bg-[var(--primary)] text-white rounded-lg hover:opacity-90 flex items-center gap-1"
                            >
                              <Plus className="w-3 h-3" /> Add Element
                            </button>
                          </div>

                          {endScreenElements.length === 0 ? (
                            <div className="text-center py-8 border-2 border-dashed border-[var(--border)] rounded-lg">
                              <Tv className="w-8 h-8 text-[var(--muted-foreground)] mx-auto mb-2 opacity-50" />
                              <p className="text-sm text-[var(--muted-foreground)]">No end screen elements</p>
                              <p className="text-xs text-[var(--muted-foreground)] mt-1">Add elements to show at the end of your video</p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {endScreenElements.map((element, idx) => (
                                <div key={element.id} className="p-3 rounded-lg border border-[var(--border)] bg-[var(--secondary)]">
                                  <div className="flex items-center gap-3 flex-wrap">
                                    <select
                                      value={element.type}
                                      onChange={e => {
                                        const updated = [...endScreenElements];
                                        updated[idx] = { ...element, type: e.target.value as EndScreenElement["type"] };
                                        setEndScreenElements(updated);
                                      }}
                                      className="px-2 py-1.5 rounded border border-[var(--border)] bg-[var(--background)] text-sm"
                                    >
                                      <option value="video">Video</option>
                                      <option value="playlist">Playlist</option>
                                      <option value="channel">Channel</option>
                                      <option value="subscribe">Subscribe</option>
                                      <option value="link">Link</option>
                                      <option value="merchandise">Merchandise</option>
                                    </select>

                                    {element.type === "video" && (
                                      <label className="flex items-center gap-2 text-xs">
                                        <input
                                          type="checkbox"
                                          checked={element.bestForViewer || false}
                                          onChange={e => {
                                            const updated = [...endScreenElements];
                                            updated[idx] = { ...element, bestForViewer: e.target.checked };
                                            setEndScreenElements(updated);
                                          }}
                                          className="accent-[var(--primary)]"
                                        />
                                        Best for viewer
                                      </label>
                                    )}

                                    <div className="flex items-center gap-2 text-xs">
                                      <span>Show at:</span>
                                      <input
                                        type="number"
                                        min={5}
                                        max={20}
                                        value={element.startTime}
                                        onChange={e => {
                                          const updated = [...endScreenElements];
                                          updated[idx] = { ...element, startTime: parseInt(e.target.value) };
                                          setEndScreenElements(updated);
                                        }}
                                        className="w-16 px-2 py-1 rounded border border-[var(--border)] bg-[var(--background)] text-sm"
                                      />
                                      <span>sec from end</span>
                                    </div>

                                    <button
                                      onClick={() => setEndScreenElements(endScreenElements.filter((_, i) => i !== idx))}
                                      className="p-1 hover:bg-red-500/20 rounded text-red-400 ml-auto"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Tips */}
                        <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                          <h4 className="text-sm font-medium mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-blue-400" /> End Screen Tips</h4>
                          <ul className="text-xs text-[var(--muted-foreground)] space-y-1">
                            <li>• Video must be at least 25 seconds long</li>
                            <li>• Elements appear in the last 5-20 seconds</li>
                            <li>• Include a subscribe button for channel growth</li>
                            <li>• &quot;Best for viewer&quot; lets YouTube pick optimal content</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* ─── Cards Tab ───────────────────────────────── */}
                {activeTab === "cards" && (
                  <div className="space-y-6">
                    <SectionHeader icon={<Layers className="w-5 h-5" />} title="Info Cards" subtitle="Add interactive cards throughout your video" />

                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <ToggleSwitch
                        enabled={cardsEnabled}
                        onChange={setCardsEnabled}
                        label="Enable info cards"
                        description="Show interactive cards during video playback"
                      />
                    </div>

                    {cardsEnabled && (
                      <>
                        {/* Cards List */}
                        <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-medium">Video Cards</h4>
                            <button
                              onClick={() => {
                                const newCard: VideoCard = {
                                  id: `card_${Date.now()}`,
                                  type: "video",
                                  teaserText: "Check this out!",
                                  startTime: 30
                                };
                                setVideoCards([...videoCards, newCard]);
                              }}
                              className="px-3 py-1.5 text-xs bg-[var(--primary)] text-white rounded-lg hover:opacity-90 flex items-center gap-1"
                            >
                              <Plus className="w-3 h-3" /> Add Card
                            </button>
                          </div>

                          {videoCards.length === 0 ? (
                            <div className="text-center py-8 border-2 border-dashed border-[var(--border)] rounded-lg">
                              <Layers className="w-8 h-8 text-[var(--muted-foreground)] mx-auto mb-2 opacity-50" />
                              <p className="text-sm text-[var(--muted-foreground)]">No cards added</p>
                              <p className="text-xs text-[var(--muted-foreground)] mt-1">Click &quot;Add Card&quot; to create interactive elements</p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {videoCards.map((card, idx) => (
                                <div key={card.id} className="p-3 rounded-lg border border-[var(--border)] bg-[var(--secondary)]">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <select
                                      value={card.type}
                                      onChange={e => {
                                        const updated = [...videoCards];
                                        updated[idx] = { ...card, type: e.target.value as VideoCard["type"] };
                                        setVideoCards(updated);
                                      }}
                                      className="px-2 py-1.5 rounded border border-[var(--border)] bg-[var(--background)] text-sm"
                                    >
                                      <option value="video">Video</option>
                                      <option value="playlist">Playlist</option>
                                      <option value="channel">Channel</option>
                                      <option value="link">Link</option>
                                      <option value="poll">Poll</option>
                                    </select>

                                    <div className="flex items-center gap-2 text-xs">
                                      <span>Show at:</span>
                                      <input
                                        type="number"
                                        min={0}
                                        value={card.startTime}
                                        onChange={e => {
                                          const updated = [...videoCards];
                                          updated[idx] = { ...card, startTime: parseInt(e.target.value) };
                                          setVideoCards(updated);
                                        }}
                                        className="w-20 px-2 py-1 rounded border border-[var(--border)] bg-[var(--background)] text-sm"
                                      />
                                      <span>seconds</span>
                                    </div>
                                  </div>

                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      value={card.teaserText}
                                      onChange={e => {
                                        const updated = [...videoCards];
                                        updated[idx] = { ...card, teaserText: e.target.value.slice(0, 30) };
                                        setVideoCards(updated);
                                      }}
                                      placeholder="Teaser text (max 30 chars)"
                                      className="w-full px-2 py-1.5 rounded border border-[var(--border)] bg-[var(--background)] text-sm"
                                      maxLength={30}
                                    />
                                  </div>

                                  {card.type === "poll" && (
                                    <div className="mt-2 space-y-2">
                                      <input
                                        type="text"
                                        value={card.pollQuestion || ""}
                                        onChange={e => {
                                          const updated = [...videoCards];
                                          updated[idx] = { ...card, pollQuestion: e.target.value };
                                          setVideoCards(updated);
                                        }}
                                        placeholder="Poll question"
                                        className="w-full px-2 py-1.5 rounded border border-[var(--border)] bg-[var(--background)] text-sm"
                                      />
                                      <div className="grid grid-cols-2 gap-2">
                                        {(card.pollOptions || ["", ""]).map((opt, optIdx) => (
                                          <input
                                            key={optIdx}
                                            type="text"
                                            value={opt}
                                            onChange={e => {
                                              const updated = [...videoCards];
                                              const options = [...(card.pollOptions || ["", ""])];
                                              options[optIdx] = e.target.value;
                                              updated[idx] = { ...card, pollOptions: options };
                                              setVideoCards(updated);
                                            }}
                                            placeholder={`Option ${optIdx + 1}`}
                                            className="px-2 py-1.5 rounded border border-[var(--border)] bg-[var(--background)] text-sm"
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  <div className="mt-2 flex justify-end">
                                    <button
                                      onClick={() => setVideoCards(videoCards.filter((_, i) => i !== idx))}
                                      className="text-xs text-red-400 hover:underline flex items-center gap-1"
                                    >
                                      <Trash2 className="w-3 h-3" /> Remove
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Tips */}
                        <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                          <h4 className="text-sm font-medium mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-blue-400" /> Card Types</h4>
                          <ul className="text-xs text-[var(--muted-foreground)] space-y-1">
                            <li>• <strong>Video:</strong> Link to another video</li>
                            <li>• <strong>Playlist:</strong> Link to a playlist</li>
                            <li>• <strong>Channel:</strong> Promote another channel</li>
                            <li>• <strong>Link:</strong> External website (requires Partner Program)</li>
                            <li>• <strong>Poll:</strong> Ask viewers a question</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* ─── Visibility Tab ──────────────────────────── */}
                {activeTab === "visibility" && (
                  <div className="space-y-6">
                    <SectionHeader icon={<Eye className="w-5 h-5" />} title="Visibility & Scheduling" subtitle="Choose when and how to publish your video" />

                    {/* Privacy Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { value: "private" as const, icon: <Lock className="w-5 h-5" />, label: "Private", desc: "Only you and people you choose can watch" },
                        { value: "unlisted" as const, icon: <EyeOff className="w-5 h-5" />, label: "Unlisted", desc: "Anyone with the link can watch" },
                        { value: "public" as const, icon: <Globe className="w-5 h-5" />, label: "Public", desc: "Everyone can watch" },
                      ].map(opt => (
                        <button key={opt.value} onClick={() => setPrivacyStatus(opt.value)} className={`p-4 rounded-xl border text-left transition-all ${privacyStatus === opt.value ? "border-[var(--primary)] bg-[var(--primary)]/5 ring-1 ring-[var(--primary)]/30" : "border-[var(--border)] hover:border-[var(--primary)]/50"}`}>
                          <div className={`mb-2 ${privacyStatus === opt.value ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"}`}>{opt.icon}</div>
                          <p className="text-sm font-medium">{opt.label}</p>
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">{opt.desc}</p>
                        </button>
                      ))}
                    </div>

                    {/* Schedule */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-1 flex items-center gap-2"><Calendar className="w-4 h-4 text-[var(--primary)]" /> Schedule</h4>
                      <p className="text-xs text-[var(--muted-foreground)] mb-3">Schedule as public</p>

                      <div className="flex flex-wrap gap-3 items-center">
                        {/* Date Picker */}
                        <div className="flex-1 min-w-[140px]">
                          <input
                            type="date"
                            value={scheduleDate}
                            onChange={e => {
                              setScheduleDate(e.target.value);
                              if (e.target.value && scheduleTimeSlot) {
                                setScheduledTime(`${e.target.value}T${scheduleTimeSlot}`);
                              }
                            }}
                            min={new Date().toISOString().slice(0, 10)}
                            className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
                          />
                        </div>

                        {/* Time Selector */}
                        <div className="w-[100px]">
                          <select
                            value={scheduleTimeSlot}
                            onChange={e => {
                              setScheduleTimeSlot(e.target.value);
                              if (scheduleDate) {
                                setScheduledTime(`${scheduleDate}T${e.target.value}`);
                              }
                            }}
                            className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
                          >
                            {SCHEDULE_TIME_OPTIONS.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>

                        {/* Timezone Selector */}
                        <div className="flex-1 min-w-[180px]">
                          <select
                            value={scheduleTimezone}
                            onChange={e => setScheduleTimezone(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
                          >
                            {YOUTUBE_TIMEZONES.map(tz => (
                              <option key={tz.value} value={tz.value}>{tz.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {scheduleDate && (
                        <div className="mt-3">
                          <p className="text-xs text-[var(--muted-foreground)]">
                            Video will be <span className="font-medium text-[var(--foreground)]">private</span> before publishing
                          </p>
                          <div className="mt-2 flex items-center justify-between">
                            <p className="text-xs text-[var(--primary)]">
                              Scheduled: {new Date(`${scheduleDate}T${scheduleTimeSlot}`).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })} at {scheduleTimeSlot}
                              {scheduleTimezone !== 'local' && ` (${YOUTUBE_TIMEZONES.find(tz => tz.value === scheduleTimezone)?.label || scheduleTimezone})`}
                            </p>
                            <button
                              onClick={() => {
                                setScheduleDate("");
                                setScheduledTime("");
                              }}
                              className="text-xs text-red-400 hover:underline"
                            >
                              Clear
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Premiere Settings */}
                    {privacyStatus === "public" && (
                      <div className="p-4 rounded-lg border border-purple-500/20 bg-purple-500/5">
                        <ToggleSwitch enabled={isPremiere} onChange={setIsPremiere} label="Set as Premiere" description="Your video will debut as a live-viewing experience with real-time chat" />

                        {isPremiere && (
                          <div className="mt-3 p-2 rounded bg-purple-500/10 text-xs text-purple-300 flex items-center gap-2">
                            <Radio className="w-3.5 h-3.5" /> Premiere includes countdown, live chat, and Super Chats
                          </div>
                        )}
                      </div>
                    )}

                    {/* First Comment */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-1 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-[var(--primary)]" /> First Comment</h4>
                      <p className="text-xs text-[var(--muted-foreground)] mb-2">Post a pinned comment when your video goes live</p>
                      <textarea
                        value={firstComment}
                        onChange={e => setFirstComment(e.target.value)}
                        placeholder="e.g., Thanks for watching! Let me know your thoughts..."
                        className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] resize-none h-20"
                        maxLength={10000}
                      />
                      <p className="text-xs text-[var(--muted-foreground)] text-right mt-1">{firstComment.length}/10,000</p>
                    </div>

                    {/* Distribution */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3">Distribution</h4>
                      <ToggleSwitch enabled={publishToFeed} onChange={setPublishToFeed} label="Publish to subscriptions feed" description="Notify subscribers and show in their feed" />
                      <ToggleSwitch enabled={allowSearching} onChange={setAllowSearching} label="Allow in search results" description="Video can be found through YouTube search" />
                      <ToggleSwitch enabled={allowEmbedding} onChange={setAllowEmbedding} label="Allow embedding" description="Allow others to embed this video on external sites" />
                    </div>
                  </div>
                )}

                {/* ─── Advanced Tab ────────────────────────────── */}
                {activeTab === "advanced" && (
                  <div className="space-y-6">
                    <SectionHeader icon={<Settings className="w-5 h-5" />} title="Advanced Settings" />

                    {/* Language & Audio */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><Languages className="w-4 h-4 text-[var(--primary)]" /> Language & Audio</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs text-[var(--muted-foreground)] block mb-1">Video language</label>
                          <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)]">
                            {YOUTUBE_LANGUAGES.map(lang => (
                              <option key={lang.code} value={lang.code}>{lang.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-[var(--muted-foreground)] block mb-1">Audio track type</label>
                          <select value={audioTrackType} onChange={e => setAudioTrackType(e.target.value as typeof audioTrackType)} className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)]">
                            <option value="original">Original audio</option>
                            <option value="dubbed">Dubbed audio</option>
                            <option value="descriptive">Audio description</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-[var(--muted-foreground)] block mb-1">Captions certification</label>
                          <select value={captionsCertification} onChange={e => setCaptionsCertification(e.target.value as typeof captionsCertification)} className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)]">
                            <option value="none">None</option>
                            <option value="selfCertified">This video has captions that I have verified</option>
                            <option value="certified">This video has professionally created captions</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Clips & Remix */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><Scissors className="w-4 h-4 text-[var(--primary)]" /> Clips & Remix</h4>
                      <ToggleSwitch enabled={allowClips} onChange={setAllowClips} label="Allow clips" description="Let viewers create clips from this video (5-60 seconds)" />
                      <ToggleSwitch enabled={allowRemix} onChange={setAllowRemix} label="Allow Remix" description="Let others use your video content in their Shorts" />
                    </div>

                    {/* AI & Content Disclosure */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><Brain className="w-4 h-4 text-[var(--primary)]" /> AI & Content Disclosure</h4>
                      <ToggleSwitch enabled={allowAITraining} onChange={setAllowAITraining} label="Allow AI training" description="Let YouTube use this content to improve AI features" />
                      <ToggleSwitch enabled={isAIGenerated} onChange={setIsAIGenerated} label="AI-generated content" description="This video was created using AI tools" />
                      <ToggleSwitch enabled={hasAlteredContent} onChange={setHasAlteredContent} label="Altered or synthetic content" description="Contains realistic AI-generated or manipulated content that may appear real" />
                      {hasAlteredContent && (
                        <div className="mt-2">
                          <input
                            type="text"
                            value={alteredContentDescription}
                            onChange={e => setAlteredContentDescription(e.target.value)}
                            placeholder="Describe what content is altered..."
                            className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)]"
                          />
                        </div>
                      )}
                    </div>

                    {/* License */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><Award className="w-4 h-4 text-[var(--primary)]" /> License</h4>
                      <div className="space-y-2">
                        <label className={`flex items-center gap-3 p-2.5 rounded-lg border cursor-pointer transition-all ${license === "youtube" ? "border-[var(--primary)] bg-[var(--primary)]/5" : "border-[var(--border)]"}`}>
                          <input type="radio" name="license" checked={license === "youtube"} onChange={() => setLicense("youtube")} className="accent-[var(--primary)]" />
                          <div>
                            <p className="text-sm font-medium">Standard YouTube License</p>
                            <p className="text-xs text-[var(--muted-foreground)]">Standard terms of service</p>
                          </div>
                        </label>
                        <label className={`flex items-center gap-3 p-2.5 rounded-lg border cursor-pointer transition-all ${license === "creativeCommon" ? "border-[var(--primary)] bg-[var(--primary)]/5" : "border-[var(--border)]"}`}>
                          <input type="radio" name="license" checked={license === "creativeCommon"} onChange={() => setLicense("creativeCommon")} className="accent-[var(--primary)]" />
                          <div>
                            <p className="text-sm font-medium">Creative Commons - Attribution</p>
                            <p className="text-xs text-[var(--muted-foreground)]">Others can reuse your content with attribution</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Shorts & Video Type */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><Film className="w-4 h-4 text-[var(--primary)]" /> Video Type</h4>
                      <ToggleSwitch enabled={isShort} onChange={setIsShort} label="YouTube Short" description="Short-form vertical video (up to 60 seconds)" />
                      {isShort && (
                        <ToggleSwitch enabled={shortsSampling} onChange={setShortsSampling} label="Allow Shorts sampling" description="Let others use segments of this Short" />
                      )}
                      <div className="mt-3 pt-3 border-t border-[var(--border)]">
                        <ToggleSwitch enabled={is360Video} onChange={setIs360Video} label="360° video" description="Immersive 360-degree video content" />
                        <ToggleSwitch enabled={isVRVideo} onChange={setIsVRVideo} label="VR video" description="Virtual reality compatible video" />
                        <ToggleSwitch enabled={isHDR} onChange={setIsHDR} label="HDR" description="High Dynamic Range video" />
                      </div>
                    </div>

                    {/* Channel Features */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><Tv className="w-4 h-4 text-[var(--primary)]" /> Channel Features</h4>
                      <ToggleSwitch enabled={showChannelWatermark} onChange={setShowChannelWatermark} label="Show channel watermark" description="Display your channel branding watermark on video" />
                    </div>

                    {/* Recording Details */}
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"><Calendar className="w-4 h-4 text-[var(--primary)]" /> Recording Date</h4>
                      <div>
                        <label className="text-xs text-[var(--muted-foreground)] block mb-1">When was this video recorded?</label>
                        <input type="date" value={recordingDate} onChange={e => setRecordingDate(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* ─── Analytics Tab ───────────────────────────── */}
                {activeTab === "analytics" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <SectionHeader icon={<BarChart3 className="w-5 h-5" />} title="Performance Preview" subtitle="AI-powered analytics prediction" />
                      <button onClick={fetchAnalytics} disabled={analyticsLoading || !title} className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50 flex items-center gap-2">
                        {analyticsLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Brain className="w-4 h-4" />}
                        Analyze
                      </button>
                    </div>

                    {!analyticsPreview && !analyticsLoading && (
                      <div className="text-center py-12">
                        <BarChart3 className="w-12 h-12 text-[var(--muted-foreground)] mx-auto mb-3 opacity-30" />
                        <p className="text-sm text-[var(--muted-foreground)]">Add a title and click Analyze to see performance predictions</p>
                      </div>
                    )}

                    {analyticsLoading && (
                      <div className="text-center py-12">
                        <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)] mx-auto mb-3" />
                        <p className="text-sm text-[var(--muted-foreground)]">Analyzing your video metadata...</p>
                      </div>
                    )}

                    {analyticsPreview && (
                      <div className="space-y-4">
                        {/* Scores */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <ScoreBadge score={analyticsPreview.overallScore} label="Overall" />
                          <ScoreBadge score={analyticsPreview.titleScore} label="Title" />
                          <ScoreBadge score={analyticsPreview.descriptionScore} label="Description" />
                          <ScoreBadge score={analyticsPreview.tagsScore} label="Tags" />
                        </div>

                        {/* Estimated Views */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                            <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1"><Eye className="w-3.5 h-3.5" /> Est. Views (first week)</div>
                            <p className="text-lg font-bold text-[var(--foreground)]">{analyticsPreview.estimatedViews.min.toLocaleString()} - {analyticsPreview.estimatedViews.max.toLocaleString()}</p>
                          </div>
                          <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                            <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1"><ThumbsUp className="w-3.5 h-3.5" /> Est. Engagement</div>
                            <p className="text-lg font-bold text-[var(--foreground)]">{analyticsPreview.estimatedEngagement}%</p>
                          </div>
                        </div>

                        {/* Best Time */}
                        <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                          <div className="flex items-center gap-2 text-xs text-green-400 mb-1"><Clock className="w-3.5 h-3.5" /> Best Publish Time</div>
                          <p className="text-sm font-medium text-[var(--foreground)]">{analyticsPreview.bestTimeRecommendation}</p>
                        </div>

                        {/* Similar Videos */}
                        <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                          <p className="text-xs font-medium text-[var(--muted-foreground)] mb-2">Similar Videos Average</p>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="text-center">
                              <p className="text-lg font-bold">{analyticsPreview.similarVideosPerformance.avgViews.toLocaleString()}</p>
                              <p className="text-xs text-[var(--muted-foreground)]">Views</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold">{analyticsPreview.similarVideosPerformance.avgLikes.toLocaleString()}</p>
                              <p className="text-xs text-[var(--muted-foreground)]">Likes</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold">{analyticsPreview.similarVideosPerformance.avgComments.toLocaleString()}</p>
                              <p className="text-xs text-[var(--muted-foreground)]">Comments</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* ─── AI Suggestions Panel ──────────────────────── */}
              {showAiPanel && aiSuggestions && (
                <div className="p-5 rounded-xl border border-purple-500/30 bg-[var(--card)]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple-400" /> AI Suggestions</h3>
                    <button onClick={() => setShowAiPanel(false)} className="p-1 rounded hover:bg-[var(--secondary)]"><X className="w-4 h-4" /></button>
                  </div>

                  {/* Suggested Titles */}
                  {aiSuggestions.titles?.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-[var(--muted-foreground)] mb-2">Titles</p>
                      <div className="space-y-1.5">
                        {aiSuggestions.titles.map((t, i) => (
                          <button key={i} onClick={() => { setTitle(t.slice(0, 100)); toast.success("Title applied"); }} className="w-full text-left p-2 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 text-sm transition-all flex items-center justify-between group">
                            <span className="truncate">{t}</span>
                            <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[var(--primary)] shrink-0 ml-2" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Suggested Descriptions */}
                  {aiSuggestions.descriptions?.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-[var(--muted-foreground)] mb-2">Descriptions</p>
                      <div className="space-y-1.5">
                        {aiSuggestions.descriptions.map((d, i) => (
                          <button key={i} onClick={() => { setDescription(d.slice(0, 5000)); toast.success("Description applied"); }} className="w-full text-left p-2 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 text-xs transition-all">
                            <span className="line-clamp-3">{d}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Suggested Tags */}
                  {aiSuggestions.tags?.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-medium text-[var(--muted-foreground)]">Tags</p>
                        <button
                          onClick={() => {
                            const newTags = aiSuggestions.tags.filter(t => !tags.includes(t));
                            setTags([...tags, ...newTags].slice(0, 30));
                            toast.success(`${newTags.length} tags added`);
                          }}
                          className="text-xs text-[var(--primary)] hover:underline"
                        >Add All</button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {aiSuggestions.tags.map((tag, i) => (
                          <button key={i} onClick={() => {
                            if (!tags.includes(tag)) { setTags([...tags, tag]); toast.success(`Tag "${tag}" added`); }
                          }} className={`px-2 py-1 rounded-md text-xs border transition-all ${tags.includes(tag) ? "bg-[var(--primary)]/10 border-[var(--primary)]/30 text-[var(--primary)]" : "border-[var(--border)] hover:border-[var(--primary)]"}`}>
                            {tags.includes(tag) && <Check className="w-3 h-3 inline mr-1" />}{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Suggested Hashtags */}
                  {aiSuggestions.hashtags?.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-medium text-[var(--muted-foreground)]">Hashtags</p>
                        <button
                          onClick={() => {
                            const newHt = aiSuggestions.hashtags.filter(h => !hashtags.includes(h));
                            setHashtags([...hashtags, ...newHt].slice(0, 15));
                            toast.success(`${newHt.length} hashtags added`);
                          }}
                          className="text-xs text-[var(--primary)] hover:underline"
                        >Add All</button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {aiSuggestions.hashtags.map((ht, i) => (
                          <button key={i} onClick={() => {
                            if (!hashtags.includes(ht) && hashtags.length < 15) { setHashtags([...hashtags, ht]); toast.success(`#${ht} added`); }
                          }} className={`px-2 py-1 rounded-md text-xs border transition-all ${hashtags.includes(ht) ? "bg-blue-500/10 border-blue-500/30 text-blue-400" : "border-[var(--border)] hover:border-blue-500"}`}>
                            {hashtags.includes(ht) && <Check className="w-3 h-3 inline mr-1" />}#{ht}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SEO CHECKLIST (shown on all views except calendar) */}
        {/* ═══════════════════════════════════════════════════════ */}
        {(viewMode === "single" || viewMode === "bulk") && (
          <div className="mt-6 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="flex items-center justify-between mb-4">
              <SectionHeader icon={<CheckCircle2 className="w-5 h-5" />} title="SEO Checklist" />
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${calculateSEOScore() >= 80 ? "text-green-500" : calculateSEOScore() >= 50 ? "text-yellow-500" : "text-red-400"}`}>
                  {calculateSEOScore()}%
                </span>
                <div className="w-24 h-2 bg-[var(--secondary)] rounded-full overflow-hidden">
                  <div className={`h-full transition-all ${calculateSEOScore() >= 80 ? "bg-green-500" : calculateSEOScore() >= 50 ? "bg-yellow-500" : "bg-red-400"}`} style={{ width: `${calculateSEOScore()}%` }} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {getSEOChecklist().map((item, idx) => {
                const passed = item.check();
                return (
                  <div key={idx} className={`flex items-start gap-2 p-3 rounded-lg border ${passed ? "border-green-500/20 bg-green-500/5" : "border-[var(--border)] bg-[var(--background)]"}`}>
                    {passed ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-[var(--muted-foreground)] shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-medium ${passed ? "text-green-400" : "text-[var(--foreground)]"}`}>{item.label}</p>
                      <p className="text-[10px] text-[var(--muted-foreground)]">Weight: {item.weight}%</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* CHANNEL ANALYTICS SIDEBAR */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] lg:w-[550px] bg-[var(--card)] border-l border-[var(--border)] shadow-2xl transform transition-transform duration-300 z-50 ${showAnalyticsSidebar ? "translate-x-0" : "translate-x-full"}`}>
        {/* Sidebar Header */}
        <div className="sticky top-0 bg-[var(--card)] border-b border-[var(--border)] p-4 z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20">
                <BarChart2 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h2 className="font-semibold text-[var(--foreground)]">Channel Analytics</h2>
                {/* Channel Selector - shows dropdown when multiple channels */}
                {channels.length > 1 ? (
                  <div className="relative mt-1">
                    <select
                      value={analyticsChannelId || ""}
                      onChange={(e) => switchAnalyticsChannel(e.target.value)}
                      className="text-xs bg-[var(--secondary)] border border-[var(--border)] rounded-lg px-2 py-1 pr-6 cursor-pointer hover:border-[var(--primary)]/50 transition-colors appearance-none"
                    >
                      {channels.map(ch => (
                        <option key={ch.id} value={ch.id}>
                          {ch.title} ({ch.subscriberCount.toLocaleString()} subs)
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--muted-foreground)]" />
                  </div>
                ) : (
                  <p className="text-xs text-[var(--muted-foreground)]">
                    {channels.find(c => c.id === analyticsChannelId)?.title || "No channel selected"}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/analytics${analyticsChannelId ? `?channel=${analyticsChannelId}` : ""}`}
                className="px-3 py-1.5 text-xs rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Full Page
              </Link>
              <button onClick={() => setShowAnalyticsSidebar(false)} className="p-2 rounded-lg hover:bg-[var(--secondary)] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Period Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--muted-foreground)]">Period:</span>
            <div className="flex gap-1 flex-1">
              {([["7", "7 Days"], ["28", "28 Days"], ["90", "90 Days"], ["365", "1 Year"]] as [AnalyticsPeriod, string][]).map(([val, label]) => (
                <button key={val} onClick={() => { setAnalyticsPeriod(val); setChannelAnalytics(null); }} className={`flex-1 px-2 py-1.5 text-xs rounded-lg transition-colors ${analyticsPeriod === val ? "bg-[var(--primary)] text-white" : "bg-[var(--secondary)] hover:bg-[var(--secondary)]/80"}`}>
                  {label}
                </button>
              ))}
            </div>
            <button onClick={() => fetchChannelAnalytics(analyticsPeriod, analyticsChannelId || undefined)} disabled={channelAnalyticsLoading} className="p-1.5 rounded-lg hover:bg-[var(--secondary)] transition-colors disabled:opacity-50">
              <RefreshCw className={`w-4 h-4 ${channelAnalyticsLoading ? "animate-spin" : ""}`} />
            </button>
          </div>

          {/* Section Tabs */}
          <div className="flex gap-1 mt-3 overflow-x-auto pb-1">
            {([["overview", <Activity key="o" className="w-3.5 h-3.5" />, "Overview"], ["growth", <TrendingUp key="g" className="w-3.5 h-3.5" />, "Growth"], ["videos", <PlayCircle key="v" className="w-3.5 h-3.5" />, "Videos"], ["audience", <Users key="a" className="w-3.5 h-3.5" />, "Audience"], ["revenue", <DollarSign key="r" className="w-3.5 h-3.5" />, "Revenue"], ["engagement", <ThumbsUp key="e" className="w-3.5 h-3.5" />, "Engage"], ["advanced", <Brain key="adv" className="w-3.5 h-3.5" />, "Insights"], ["realtime", <Zap key="rt" className="w-3.5 h-3.5" />, "Live"]] as [AnalyticsSection, React.ReactNode, string][]).map(([id, icon, label]) => (
              <button key={id} onClick={() => setAnalyticsSection(id)} className={`flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-lg whitespace-nowrap transition-colors ${analyticsSection === id ? "bg-[var(--primary)] text-white" : "bg-[var(--secondary)] hover:bg-[var(--secondary)]/80"}`}>
                {icon} {label}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100%-200px)] p-4">
          {!analyticsChannelId && channels.length === 0 ? (
            <div className="text-center py-20">
              <Tv className="w-16 h-16 text-[var(--muted-foreground)] mx-auto mb-4 opacity-30" />
              <p className="text-sm text-[var(--muted-foreground)]">Connect a YouTube channel to see analytics</p>
            </div>
          ) : channelAnalyticsLoading ? (
            <div className="text-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-[var(--primary)] mx-auto mb-4" />
              <p className="text-sm text-[var(--muted-foreground)]">Loading analytics for {channels.find(c => c.id === analyticsChannelId)?.title || "channel"}...</p>
            </div>
          ) : !channelAnalytics ? (
            <div className="text-center py-20">
              <BarChart2 className="w-16 h-16 text-[var(--muted-foreground)] mx-auto mb-4 opacity-30" />
              <p className="text-sm text-[var(--muted-foreground)] mb-3">No analytics data available</p>
              <button onClick={() => fetchChannelAnalytics(analyticsPeriod, analyticsChannelId || undefined)} className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm">
                Load Analytics
              </button>
            </div>
          ) : (
            <>
              {/* ─── OVERVIEW SECTION ─────────────────────────────── */}
              {analyticsSection === "overview" && (
                <div className="space-y-4">
                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                        <Eye className="w-3.5 h-3.5" /> Total Views
                      </div>
                      <p className="text-xl font-bold">{channelAnalytics.overview.totalViews.toLocaleString()}</p>
                      <div className={`flex items-center gap-1 text-xs mt-1 ${channelAnalytics.overview.viewsChange >= 0 ? "text-green-500" : "text-red-400"}`}>
                        {channelAnalytics.overview.viewsChange >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {Math.abs(channelAnalytics.overview.viewsChange)}% vs prev period
                      </div>
                    </div>
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                        <Users className="w-3.5 h-3.5" /> Subscribers
                      </div>
                      <p className="text-xl font-bold">{channelAnalytics.overview.totalSubscribers.toLocaleString()}</p>
                      <div className={`flex items-center gap-1 text-xs mt-1 ${channelAnalytics.overview.subscribersChange >= 0 ? "text-green-500" : "text-red-400"}`}>
                        {channelAnalytics.overview.subscribersChange >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {channelAnalytics.overview.subscribersChange >= 0 ? "+" : ""}{channelAnalytics.overview.subscribersChange} in period
                      </div>
                    </div>
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                        <Clock className="w-3.5 h-3.5" /> Watch Time
                      </div>
                      <p className="text-xl font-bold">{Math.round(channelAnalytics.overview.totalWatchTimeMinutes / 60).toLocaleString()}h</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">{channelAnalytics.overview.totalWatchTimeMinutes.toLocaleString()} min</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                        <PlayCircle className="w-3.5 h-3.5" /> Videos
                      </div>
                      <p className="text-xl font-bold">{channelAnalytics.overview.totalVideos.toLocaleString()}</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">Avg duration: {Math.round(channelAnalytics.overview.avgViewDuration)}s</p>
                    </div>
                  </div>

                  {/* Engagement Summary */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[var(--primary)]" /> Engagement Overview
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <p className="text-lg font-bold text-[var(--primary)]">{channelAnalytics.engagement.engagementRate}%</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Engagement Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">{channelAnalytics.engagement.avgLikesPerVideo}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Avg Likes/Video</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">{channelAnalytics.engagement.avgCommentsPerVideo}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Avg Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── GROWTH SECTION ───────────────────────────────── */}
              {analyticsSection === "growth" && (
                <div className="space-y-4">
                  {/* Simple Growth Chart (ASCII-style bars) */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" /> Views Over Time
                    </h4>
                    <div className="space-y-1.5">
                      {channelAnalytics.growth.views.slice(-14).map((views, idx) => {
                        const max = Math.max(...channelAnalytics.growth.views.slice(-14));
                        const pct = max > 0 ? (views / max) * 100 : 0;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-[10px] text-[var(--muted-foreground)] w-12 shrink-0">
                              {channelAnalytics.growth.labels.slice(-14)[idx]?.slice(5) || ""}
                            </span>
                            <div className="flex-1 h-4 bg-[var(--secondary)] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                            </div>
                            <span className="text-[10px] text-[var(--muted-foreground)] w-12 text-right">{views.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subscriber Growth */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" /> Subscriber Growth
                    </h4>
                    <div className="flex items-end gap-1 h-32">
                      {channelAnalytics.growth.subscribers.slice(-14).map((subs, idx) => {
                        const min = Math.min(...channelAnalytics.growth.subscribers.slice(-14));
                        const max = Math.max(...channelAnalytics.growth.subscribers.slice(-14));
                        const range = max - min || 1;
                        const pct = ((subs - min) / range) * 80 + 20;
                        return (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all" style={{ height: `${pct}%` }} />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] text-[var(--muted-foreground)]">{channelAnalytics.growth.labels.slice(-14)[0]?.slice(5)}</span>
                      <span className="text-[10px] text-[var(--muted-foreground)]">{channelAnalytics.growth.labels.slice(-1)[0]?.slice(5)}</span>
                    </div>
                  </div>

                  {/* Watch Time Trend */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-500" /> Watch Time (minutes)
                    </h4>
                    <p className="text-xs text-[var(--muted-foreground)] mb-2">Last {channelAnalytics.growth.watchTime.length} days total: {channelAnalytics.growth.watchTime.reduce((a, b) => a + b, 0).toLocaleString()} min</p>
                    <div className="flex items-end gap-0.5 h-20">
                      {channelAnalytics.growth.watchTime.slice(-28).map((wt, idx) => {
                        const max = Math.max(...channelAnalytics.growth.watchTime.slice(-28));
                        const pct = max > 0 ? (wt / max) * 100 : 0;
                        return (
                          <div key={idx} className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t transition-all" style={{ height: `${pct}%` }} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ─── VIDEOS SECTION ───────────────────────────────── */}
              {analyticsSection === "videos" && (
                <div className="space-y-4">
                  {/* Top Performing Videos */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" /> Top Performing Videos
                    </h4>
                    <div className="space-y-2">
                      {channelAnalytics.topVideos.slice(0, 5).map((video, idx) => (
                        <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)]/50 transition-colors">
                          <span className="w-6 h-6 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                          {video.thumbnail && (
                            <NextImage src={video.thumbnail} alt="" width={64} height={36} className="rounded object-cover shrink-0" unoptimized />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate">{video.title}</p>
                            <div className="flex items-center gap-3 mt-1 text-[10px] text-[var(--muted-foreground)]">
                              <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {video.views.toLocaleString()}</span>
                              <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> {video.likes.toLocaleString()}</span>
                              <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {video.comments.toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-xs font-medium text-[var(--primary)]">{video.avgViewPercentage.toFixed(0)}%</p>
                            <p className="text-[10px] text-[var(--muted-foreground)]">avg watched</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Recent Uploads */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" /> Recent Uploads
                    </h4>
                    <div className="space-y-2">
                      {channelAnalytics.recentVideos.slice(0, 5).map(video => (
                        <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)]/50 transition-colors">
                          {video.thumbnail && (
                            <NextImage src={video.thumbnail} alt="" width={64} height={36} className="rounded object-cover shrink-0" unoptimized />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate">{video.title}</p>
                            <p className="text-[10px] text-[var(--muted-foreground)] mt-0.5">{new Date(video.publishedAt).toLocaleDateString()}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-sm font-bold">{video.views.toLocaleString()}</p>
                            <p className="text-[10px] text-[var(--muted-foreground)]">views</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ─── AUDIENCE SECTION ─────────────────────────────── */}
              {analyticsSection === "audience" && (
                <div className="space-y-4">
                  {/* Geography */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-500" /> Top Countries
                    </h4>
                    <div className="space-y-2">
                      {channelAnalytics.audience.countries.slice(0, 5).map(country => (
                        <div key={country.country} className="flex items-center gap-2">
                          <span className="text-xs w-8">{country.country}</span>
                          <div className="flex-1 h-3 bg-[var(--secondary)] rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${country.percentage}%` }} />
                          </div>
                          <span className="text-xs text-[var(--muted-foreground)] w-12 text-right">{country.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Age & Gender */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" /> Age & Gender
                    </h4>
                    <div className="space-y-2">
                      {channelAnalytics.audience.ageGender.map(ag => (
                        <div key={ag.ageGroup} className="flex items-center gap-2">
                          <span className="text-xs w-12 shrink-0">{ag.ageGroup}</span>
                          <div className="flex-1 flex gap-0.5">
                            <div className="h-4 bg-blue-500 rounded-l" style={{ width: `${ag.male}%` }} title={`Male: ${ag.male}%`} />
                            <div className="h-4 bg-pink-500 rounded-r" style={{ width: `${ag.female}%` }} title={`Female: ${ag.female}%`} />
                          </div>
                          <span className="text-[10px] text-[var(--muted-foreground)] w-16 text-right">{ag.male}% / {ag.female}%</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-3 text-xs">
                      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded" /> Male</span>
                      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-pink-500 rounded" /> Female</span>
                    </div>
                  </div>

                  {/* Device Types */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <MonitorSmartphone className="w-4 h-4 text-green-500" /> Devices
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {channelAnalytics.audience.deviceTypes.slice(0, 4).map(device => (
                        <div key={device.device} className="p-3 rounded-lg bg-[var(--secondary)] text-center">
                          {device.device.toLowerCase().includes("mobile") && <Smartphone className="w-5 h-5 mx-auto mb-1 text-[var(--muted-foreground)]" />}
                          {device.device.toLowerCase().includes("computer") && <Monitor className="w-5 h-5 mx-auto mb-1 text-[var(--muted-foreground)]" />}
                          {device.device.toLowerCase().includes("tablet") && <TabletSmartphone className="w-5 h-5 mx-auto mb-1 text-[var(--muted-foreground)]" />}
                          {device.device.toLowerCase().includes("tv") && <Tv className="w-5 h-5 mx-auto mb-1 text-[var(--muted-foreground)]" />}
                          <p className="text-lg font-bold">{device.percentage}%</p>
                          <p className="text-[10px] text-[var(--muted-foreground)] capitalize">{device.device.replace(/_/g, " ")}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Traffic Sources */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-orange-500" /> Traffic Sources
                    </h4>
                    <div className="space-y-2">
                      {channelAnalytics.audience.trafficSources.slice(0, 5).map(source => (
                        <div key={source.source} className="flex items-center gap-2">
                          <span className="text-xs flex-1 truncate capitalize">{source.source}</span>
                          <div className="w-20 h-2 bg-[var(--secondary)] rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: `${source.percentage}%` }} />
                          </div>
                          <span className="text-xs text-[var(--muted-foreground)] w-10 text-right">{source.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subscribed vs Not */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-red-500" /> Viewer Subscription Status
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex h-6 rounded-full overflow-hidden">
                          <div className="bg-red-500 flex items-center justify-center text-xs text-white font-medium" style={{ width: `${Math.round(channelAnalytics.audience.subscribedVsNot.subscribed / (channelAnalytics.audience.subscribedVsNot.subscribed + channelAnalytics.audience.subscribedVsNot.notSubscribed) * 100)}%` }}>
                            {Math.round(channelAnalytics.audience.subscribedVsNot.subscribed / (channelAnalytics.audience.subscribedVsNot.subscribed + channelAnalytics.audience.subscribedVsNot.notSubscribed) * 100)}%
                          </div>
                          <div className="bg-gray-500 flex items-center justify-center text-xs text-white font-medium flex-1">
                            {Math.round(channelAnalytics.audience.subscribedVsNot.notSubscribed / (channelAnalytics.audience.subscribedVsNot.subscribed + channelAnalytics.audience.subscribedVsNot.notSubscribed) * 100)}%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-4 mt-2 text-xs">
                      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded" /> Subscribed</span>
                      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-500 rounded" /> Not Subscribed</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── REVENUE SECTION ──────────────────────────────── */}
              {analyticsSection === "revenue" && (
                <div className="space-y-4">
                  {!channelAnalytics.revenue ? (
                    <div className="text-center py-16">
                      <DollarSign className="w-16 h-16 text-[var(--muted-foreground)] mx-auto mb-4 opacity-30" />
                      <p className="text-sm text-[var(--muted-foreground)]">Revenue data not available</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">This channel may not be monetized or data is not accessible</p>
                    </div>
                  ) : (
                    <>
                      {/* Revenue Overview */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                          <div className="flex items-center gap-2 text-xs text-green-400 mb-1">
                            <DollarSign className="w-3.5 h-3.5" /> Est. Revenue
                          </div>
                          <p className="text-2xl font-bold text-green-500">${channelAnalytics.revenue.estimatedRevenue.toFixed(2)}</p>
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">Last {analyticsPeriod} days</p>
                        </div>
                        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                          <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                            <TrendingUp className="w-3.5 h-3.5" /> RPM
                          </div>
                          <p className="text-2xl font-bold">${channelAnalytics.revenue.rpm.toFixed(2)}</p>
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">Revenue per 1K views</p>
                        </div>
                        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                          <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                            <BarChart2 className="w-3.5 h-3.5" /> CPM
                          </div>
                          <p className="text-2xl font-bold">${channelAnalytics.revenue.cpm.toFixed(2)}</p>
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">Cost per 1K impressions</p>
                        </div>
                        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                          <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                            <PlayCircle className="w-3.5 h-3.5" /> Monetized Plays
                          </div>
                          <p className="text-2xl font-bold">{channelAnalytics.revenue.monetizedPlaybacks.toLocaleString()}</p>
                          <p className="text-xs text-[var(--muted-foreground)] mt-1">Ad impressions</p>
                        </div>
                      </div>

                      {/* Revenue by Month */}
                      {channelAnalytics.revenue.revenueByMonth.length > 0 && (
                        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <BarChart2 className="w-4 h-4 text-green-500" /> Revenue by Month
                          </h4>
                          <div className="space-y-2">
                            {channelAnalytics.revenue.revenueByMonth.map(month => {
                              const max = Math.max(...channelAnalytics.revenue!.revenueByMonth.map(m => m.revenue));
                              const pct = max > 0 ? (month.revenue / max) * 100 : 0;
                              return (
                                <div key={month.month} className="flex items-center gap-2">
                                  <span className="text-xs w-16 shrink-0">{month.month}</span>
                                  <div className="flex-1 h-5 bg-[var(--secondary)] rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-end pr-2 text-[10px] text-white font-medium" style={{ width: `${pct}%` }}>
                                      ${month.revenue.toFixed(2)}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* ─── ENGAGEMENT SECTION ───────────────────────────── */}
              {analyticsSection === "engagement" && (
                <div className="space-y-4">
                  {/* Engagement Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                        <ThumbsUp className="w-3.5 h-3.5" /> Avg Likes
                      </div>
                      <p className="text-2xl font-bold">{channelAnalytics.engagement.avgLikesPerVideo.toLocaleString()}</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">per video</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                        <MessageSquare className="w-3.5 h-3.5" /> Avg Comments
                      </div>
                      <p className="text-2xl font-bold">{channelAnalytics.engagement.avgCommentsPerVideo.toLocaleString()}</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">per video</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-1">
                        <Share2 className="w-3.5 h-3.5" /> Avg Shares
                      </div>
                      <p className="text-2xl font-bold">{channelAnalytics.engagement.avgSharesPerVideo.toLocaleString()}</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">per video</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/5">
                      <div className="flex items-center gap-2 text-xs text-[var(--primary)] mb-1">
                        <Activity className="w-3.5 h-3.5" /> Engagement Rate
                      </div>
                      <p className="text-2xl font-bold text-[var(--primary)]">{channelAnalytics.engagement.engagementRate}%</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">(likes + comments) / views</p>
                    </div>
                  </div>

                  {/* Subscribers Gained */}
                  <div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium flex items-center gap-2">
                          <Users className="w-4 h-4 text-green-500" /> Subscribers Gained from Videos
                        </p>
                        <p className="text-xs text-[var(--muted-foreground)] mt-1">In the last {analyticsPeriod} days</p>
                      </div>
                      <p className="text-3xl font-bold text-green-500">+{channelAnalytics.engagement.subscriberGainedFromVideos.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Engagement Tips */}
                  <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" /> Engagement Tips
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[var(--muted-foreground)]">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        Ask questions in your videos to encourage comments
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        Create eye-catching thumbnails to improve CTR
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        Post consistently to build audience habits
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        Respond to comments to boost community engagement
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* ─── ADVANCED INSIGHTS SECTION ────────────────────── */}
              {analyticsSection === "advanced" && (
                <div className="space-y-4">
                  {/* Subscriber Milestones */}
                  {channelAnalytics.milestones && (
                    <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-500" /> Subscriber Milestone
                      </h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[var(--muted-foreground)]">{channelAnalytics.milestones.currentSubscribers.toLocaleString()} subs</span>
                        <span className="text-xs font-medium text-purple-400">{channelAnalytics.milestones.nextMilestone.toLocaleString()} goal</span>
                      </div>
                      <div className="w-full h-4 bg-[var(--secondary)] rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all flex items-center justify-end pr-2" style={{ width: `${channelAnalytics.milestones.progressPercentage}%` }}>
                          <span className="text-[10px] text-white font-medium">{channelAnalytics.milestones.progressPercentage}%</span>
                        </div>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Est. <span className="font-medium text-purple-400">{channelAnalytics.milestones.estimatedDaysToMilestone}</span> days to reach {channelAnalytics.milestones.nextMilestone.toLocaleString()} subscribers
                      </p>
                    </div>
                  )}

                  {/* Content Performance */}
                  {channelAnalytics.contentPerformance && (
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Film className="w-4 h-4 text-blue-500" /> Content Performance
                      </h4>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="p-3 rounded-lg bg-[var(--secondary)] text-center">
                          <p className="text-lg font-bold">{channelAnalytics.contentPerformance.shortForm.avgViews.toLocaleString()}</p>
                          <p className="text-[10px] text-[var(--muted-foreground)]">Avg Shorts Views</p>
                          <p className="text-xs text-blue-400">{channelAnalytics.contentPerformance.shortForm.count} videos</p>
                        </div>
                        <div className="p-3 rounded-lg bg-[var(--secondary)] text-center">
                          <p className="text-lg font-bold">{channelAnalytics.contentPerformance.longForm.avgViews.toLocaleString()}</p>
                          <p className="text-[10px] text-[var(--muted-foreground)]">Avg Long-form Views</p>
                          <p className="text-xs text-green-400">{channelAnalytics.contentPerformance.longForm.count} videos</p>
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                        <p className="text-xs text-center">
                          <span className="text-green-400 font-medium">Best performing:</span> {channelAnalytics.contentPerformance.bestPerformingLength}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* CTR Analysis */}
                  {channelAnalytics.ctrAnalysis && (
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-orange-500" /> Click-Through Rate
                      </h4>
                      <div className="flex items-center justify-center mb-4">
                        <div className="relative w-24 h-24">
                          <svg className="w-24 h-24 transform -rotate-90">
                            <circle cx="48" cy="48" r="40" stroke="var(--secondary)" strokeWidth="8" fill="none" />
                            <circle cx="48" cy="48" r="40" stroke="url(#ctrGradient)" strokeWidth="8" fill="none" strokeDasharray={`${channelAnalytics.ctrAnalysis.avgCtr * 25} 251`} strokeLinecap="round" />
                            <defs>
                              <linearGradient id="ctrGradient" x1="0%" y1="0%" x2="100%">
                                <stop offset="0%" stopColor="#f97316" />
                                <stop offset="100%" stopColor="#eab308" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold">{channelAnalytics.ctrAnalysis.avgCtr}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {channelAnalytics.ctrAnalysis.ctrByVideoType.slice(0, 4).map(item => (
                          <div key={item.type} className="flex items-center gap-2">
                            <span className="text-xs w-20 truncate">{item.type}</span>
                            <div className="flex-1 h-2 bg-[var(--secondary)] rounded-full overflow-hidden">
                              <div className="h-full bg-orange-500 rounded-full" style={{ width: `${item.ctr * 10}%` }} />
                            </div>
                            <span className="text-xs text-[var(--muted-foreground)] w-10 text-right">{item.ctr.toFixed(1)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Retention Data */}
                  {channelAnalytics.retentionData && (
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-cyan-500" /> Audience Retention
                      </h4>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-[var(--muted-foreground)]">Average retention</span>
                        <span className="text-lg font-bold text-cyan-400">{channelAnalytics.retentionData.avgRetentionRate}%</span>
                      </div>
                      <div className="h-20 flex items-end gap-0.5">
                        {channelAnalytics.retentionData.dropOffPoints.map((point, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t transition-all" style={{ height: `${point.percentage}%` }} />
                            <span className="text-[8px] text-[var(--muted-foreground)]">{point.timestamp}s</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] mt-3">Best retention: {channelAnalytics.retentionData.bestRetentionVideos[0] || "N/A"}</p>
                    </div>
                  )}

                  {/* Upload Patterns */}
                  {channelAnalytics.uploadPatterns && (
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-500" /> Upload Schedule
                      </h4>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="p-3 rounded-lg bg-[var(--secondary)] text-center">
                          <p className="text-lg font-bold">{channelAnalytics.uploadPatterns.avgUploadsPerWeek}</p>
                          <p className="text-[10px] text-[var(--muted-foreground)]">Uploads/Week</p>
                        </div>
                        <div className="p-3 rounded-lg bg-[var(--secondary)] text-center">
                          <p className="text-lg font-bold">{channelAnalytics.uploadPatterns.uploadConsistencyScore}%</p>
                          <p className="text-[10px] text-[var(--muted-foreground)]">Consistency</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {channelAnalytics.uploadPatterns.bestUploadDays.slice(0, 3).map((day, idx) => (
                          <div key={day.day} className="flex items-center gap-2">
                            <span className={`text-xs w-5 h-5 rounded-full flex items-center justify-center ${idx === 0 ? "bg-green-500 text-white" : "bg-[var(--secondary)]"}`}>{idx + 1}</span>
                            <span className="text-xs flex-1">{day.day}</span>
                            <span className="text-xs text-[var(--muted-foreground)]">{day.avgViews.toLocaleString()} avg views</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                        <p className="text-xs text-center text-green-400">{channelAnalytics.uploadPatterns.recommendedSchedule}</p>
                      </div>
                    </div>
                  )}

                  {/* Projections */}
                  {channelAnalytics.projections && (
                    <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" /> Growth Projections
                      </h4>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${channelAnalytics.projections.growthTrend === "accelerating" ? "bg-green-500/20 text-green-400" : channelAnalytics.projections.growthTrend === "declining" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                          {channelAnalytics.projections.growthTrend.charAt(0).toUpperCase() + channelAnalytics.projections.growthTrend.slice(1)}
                        </span>
                        <span className="text-xs text-[var(--muted-foreground)]">{channelAnalytics.projections.confidenceLevel}% confidence</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-[var(--background)]">
                          <span className="text-xs text-[var(--muted-foreground)]">Est. Views (next month)</span>
                          <span className="text-sm font-bold">{channelAnalytics.projections.estimatedViewsNextMonth.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-[var(--background)]">
                          <span className="text-xs text-[var(--muted-foreground)]">Est. Subscribers</span>
                          <span className="text-sm font-bold">+{channelAnalytics.projections.estimatedSubsNextMonth.toLocaleString()}</span>
                        </div>
                        {channelAnalytics.projections.estimatedRevenueNextMonth > 0 && (
                          <div className="flex items-center justify-between p-2 rounded-lg bg-[var(--background)]">
                            <span className="text-xs text-[var(--muted-foreground)]">Est. Revenue</span>
                            <span className="text-sm font-bold text-green-500">${channelAnalytics.projections.estimatedRevenueNextMonth}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTR Improvement Tips */}
                  {channelAnalytics.ctrAnalysis && (
                    <div className="p-4 rounded-xl border border-orange-500/20 bg-orange-500/5">
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-500" /> CTR Improvement Tips
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[var(--muted-foreground)]">
                        {channelAnalytics.ctrAnalysis.improvementTips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-orange-500">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* ─── REALTIME SECTION ─────────────────────────────── */}
              {analyticsSection === "realtime" && (
                <div className="space-y-4">
                  {/* Live Stats */}
                  {channelAnalytics.realtime && (
                    <>
                      <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-semibold flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            Live Now
                          </h4>
                          <span className="text-xs text-[var(--muted-foreground)]">Real-time</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-lg bg-[var(--background)] text-center">
                            <p className="text-2xl font-bold text-red-500">{channelAnalytics.realtime.concurrentViewers}</p>
                            <p className="text-[10px] text-[var(--muted-foreground)]">Watching Now</p>
                          </div>
                          <div className="p-3 rounded-lg bg-[var(--background)] text-center">
                            <p className="text-2xl font-bold">{channelAnalytics.realtime.viewsLast60Minutes}</p>
                            <p className="text-[10px] text-[var(--muted-foreground)]">Views (60 min)</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" /> Last 48 Hours
                        </h4>
                        <p className="text-3xl font-bold text-center mb-2">{channelAnalytics.realtime.viewsLast48Hours.toLocaleString()}</p>
                        <p className="text-xs text-center text-[var(--muted-foreground)]">Total views</p>
                      </div>

                      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" /> Trending Now
                        </h4>
                        <div className="space-y-2">
                          {channelAnalytics.realtime.trendingVideos.map((video, idx) => (
                            <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--secondary)] transition-colors">
                              <span className="w-5 h-5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                              <p className="text-xs flex-1 truncate">{video.title}</p>
                              <span className="text-xs text-green-500">{video.currentViews.toLocaleString()}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Period Comparison */}
                  {channelAnalytics.comparison && (
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <BarChart2 className="w-4 h-4 text-purple-500" /> Period Comparison
                      </h4>

                      {/* Week Comparison */}
                      <div className="mb-4">
                        <p className="text-xs text-[var(--muted-foreground)] mb-2">Weekly</p>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center">
                            <p className="text-xs text-[var(--muted-foreground)] mb-1">Views</p>
                            <p className="text-sm font-bold">{channelAnalytics.comparison.thisWeek.views.toLocaleString()}</p>
                            <p className={`text-[10px] ${channelAnalytics.comparison.thisWeek.views >= channelAnalytics.comparison.lastWeek.views ? "text-green-500" : "text-red-400"}`}>
                              {channelAnalytics.comparison.thisWeek.views >= channelAnalytics.comparison.lastWeek.views ? "↑" : "↓"} vs last week
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-[var(--muted-foreground)] mb-1">Watch Time</p>
                            <p className="text-sm font-bold">{Math.round(channelAnalytics.comparison.thisWeek.watchTime / 60)}h</p>
                            <p className={`text-[10px] ${channelAnalytics.comparison.thisWeek.watchTime >= channelAnalytics.comparison.lastWeek.watchTime ? "text-green-500" : "text-red-400"}`}>
                              {channelAnalytics.comparison.thisWeek.watchTime >= channelAnalytics.comparison.lastWeek.watchTime ? "↑" : "↓"} vs last week
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-[var(--muted-foreground)] mb-1">Subs</p>
                            <p className="text-sm font-bold">+{channelAnalytics.comparison.thisWeek.subs}</p>
                            <p className={`text-[10px] ${channelAnalytics.comparison.thisWeek.subs >= channelAnalytics.comparison.lastWeek.subs ? "text-green-500" : "text-red-400"}`}>
                              {channelAnalytics.comparison.thisWeek.subs >= channelAnalytics.comparison.lastWeek.subs ? "↑" : "↓"} vs last week
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Month Comparison */}
                      <div>
                        <p className="text-xs text-[var(--muted-foreground)] mb-2">Monthly</p>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center">
                            <p className="text-xs text-[var(--muted-foreground)] mb-1">Views</p>
                            <p className="text-sm font-bold">{channelAnalytics.comparison.thisMonth.views.toLocaleString()}</p>
                            <p className={`text-[10px] ${channelAnalytics.comparison.thisMonth.views >= channelAnalytics.comparison.lastMonth.views ? "text-green-500" : "text-red-400"}`}>
                              {channelAnalytics.comparison.thisMonth.views >= channelAnalytics.comparison.lastMonth.views ? "↑" : "↓"} vs last month
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-[var(--muted-foreground)] mb-1">Watch Time</p>
                            <p className="text-sm font-bold">{Math.round(channelAnalytics.comparison.thisMonth.watchTime / 60)}h</p>
                            <p className={`text-[10px] ${channelAnalytics.comparison.thisMonth.watchTime >= channelAnalytics.comparison.lastMonth.watchTime ? "text-green-500" : "text-red-400"}`}>
                              {channelAnalytics.comparison.thisMonth.watchTime >= channelAnalytics.comparison.lastMonth.watchTime ? "↑" : "↓"} vs last month
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-[var(--muted-foreground)] mb-1">Subs</p>
                            <p className="text-sm font-bold">+{channelAnalytics.comparison.thisMonth.subs}</p>
                            <p className={`text-[10px] ${channelAnalytics.comparison.thisMonth.subs >= channelAnalytics.comparison.lastMonth.subs ? "text-green-500" : "text-red-400"}`}>
                              {channelAnalytics.comparison.thisMonth.subs >= channelAnalytics.comparison.lastMonth.subs ? "↑" : "↓"} vs last month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Best Thumbnails */}
                  {channelAnalytics.ctrAnalysis && channelAnalytics.ctrAnalysis.bestThumbnails.length > 0 && (
                    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-pink-500" /> Best Performing Thumbnails
                      </h4>
                      <div className="space-y-2">
                        {channelAnalytics.ctrAnalysis.bestThumbnails.map((item, idx) => (
                          <div key={item.videoId} className="flex items-center gap-3 p-2 rounded-lg bg-[var(--secondary)]">
                            {item.thumbnail && (
                              <NextImage src={item.thumbnail} alt="" width={64} height={36} className="rounded object-cover shrink-0" unoptimized />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-xs truncate">{item.title}</p>
                              <p className="text-[10px] text-[var(--muted-foreground)]">CTR: <span className="text-green-500 font-medium">{item.ctr}%</span></p>
                            </div>
                            <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs">#{idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* Backdrop */}
      {showAnalyticsSidebar && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowAnalyticsSidebar(false)} />
      )}
    </div>
  );
}
