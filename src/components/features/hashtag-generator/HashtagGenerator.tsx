"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Hash, Search, Loader2, Copy, Check, Filter, ChevronDown,
  TrendingUp, Calendar, Layers, Video, RefreshCw,
  Gamepad2, Music, Film, GraduationCap, Laptop, Trophy,
  Plane, ChefHat, Dumbbell, Briefcase, Newspaper, Laugh
} from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────
interface Hashtag {
  id: string;
  tag: string;
  formatted: string;
  searchVolume: number;
  competitionScore: number;
  trendingScore: number;
  overallScore: number;
  trendDirection: "up" | "down" | "stable";
  videoCount: number;
  avgViews: number;
  categories: string[];
}

interface Filters {
  timePeriod: string;
  category: string;
  region: string;
  minScore: number;
  maxCompetition: number;
  sortBy: string;
  resultCount: number;
}

// ─── Constants ──────────────────────────────────────────────────
const TIME_PERIODS = [
  { id: "today", label: "Today" },
  { id: "yesterday", label: "Yesterday" },
  { id: "this_week", label: "This Week" },
  { id: "this_month", label: "This Month" },
  { id: "last_30_days", label: "Last 30 Days" },
];

const CATEGORIES = [
  { id: "all", label: "All Categories", icon: <Layers className="w-4 h-4" /> },
  { id: "gaming", label: "Gaming", icon: <Gamepad2 className="w-4 h-4" /> },
  { id: "music", label: "Music", icon: <Music className="w-4 h-4" /> },
  { id: "entertainment", label: "Entertainment", icon: <Film className="w-4 h-4" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
  { id: "tech", label: "Technology", icon: <Laptop className="w-4 h-4" /> },
  { id: "sports", label: "Sports", icon: <Trophy className="w-4 h-4" /> },
  { id: "travel", label: "Travel", icon: <Plane className="w-4 h-4" /> },
  { id: "food", label: "Food & Cooking", icon: <ChefHat className="w-4 h-4" /> },
  { id: "fitness", label: "Fitness", icon: <Dumbbell className="w-4 h-4" /> },
  { id: "business", label: "Business", icon: <Briefcase className="w-4 h-4" /> },
  { id: "news", label: "News", icon: <Newspaper className="w-4 h-4" /> },
  { id: "comedy", label: "Comedy", icon: <Laugh className="w-4 h-4" /> },
];

const REGIONS = [
  { id: "US", label: "United States" },
  { id: "GB", label: "United Kingdom" },
  { id: "IN", label: "India" },
  { id: "CA", label: "Canada" },
  { id: "AU", label: "Australia" },
  { id: "DE", label: "Germany" },
  { id: "FR", label: "France" },
  { id: "JP", label: "Japan" },
  { id: "BR", label: "Brazil" },
  { id: "MX", label: "Mexico" },
];

const SORT_OPTIONS = [
  { id: "overallScore", label: "Best Overall" },
  { id: "trendingScore", label: "Most Trending" },
  { id: "searchVolume", label: "Highest Volume" },
  { id: "competitionScore", label: "Lowest Competition" },
];

const DEFAULT_FILTERS: Filters = {
  timePeriod: "this_week",
  category: "all",
  region: "US",
  minScore: 0,
  maxCompetition: 100,
  sortBy: "overallScore",
  resultCount: 30,
};

// ─── Main Component ─────────────────────────────────────────────
export default function HashtagGenerator() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hashtags, setHashtags] = useState<Hashtag[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedHashtags, setSelectedHashtags] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Search for hashtags
  const searchHashtags = useCallback(async () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/hashtag-generator/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: searchQuery,
          category: filters.category,
          count: filters.resultCount,
          filters: {
            minScore: filters.minScore,
            maxCompetition: filters.maxCompetition,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch hashtags");
      }

      const data = await response.json();
      let results = data.hashtags || [];

      // Apply sorting
      results.sort((a: Hashtag, b: Hashtag) => {
        switch (filters.sortBy) {
          case "trendingScore":
            return b.trendingScore - a.trendingScore;
          case "searchVolume":
            return b.searchVolume - a.searchVolume;
          case "competitionScore":
            return a.competitionScore - b.competitionScore;
          default:
            return b.overallScore - a.overallScore;
        }
      });

      setHashtags(results);
      toast.success(`Found ${results.length} hashtags`);
    } catch (error) {
      console.error("Search error:", error);
      toast.error("Failed to search hashtags");
    } finally {
      setLoading(false);
    }
  }, [searchQuery, filters]);

  // Get trending hashtags
  const getTrending = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        timePeriod: filters.timePeriod,
        category: filters.category,
        search: searchQuery,
      });

      const response = await fetch(`/api/hashtag-generator/trending?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch trending");
      }

      const data = await response.json();
      let results = data.hashtags || [];

      // Apply filters
      results = results.filter(
        (h: Hashtag) =>
          h.overallScore >= filters.minScore &&
          h.competitionScore <= filters.maxCompetition
      );

      // Apply sorting
      results.sort((a: Hashtag, b: Hashtag) => {
        switch (filters.sortBy) {
          case "trendingScore":
            return b.trendingScore - a.trendingScore;
          case "searchVolume":
            return b.searchVolume - a.searchVolume;
          case "competitionScore":
            return a.competitionScore - b.competitionScore;
          default:
            return b.overallScore - a.overallScore;
        }
      });

      setHashtags(results.slice(0, filters.resultCount));
      toast.success(`Found ${results.length} trending hashtags`);
    } catch (error) {
      console.error("Trending error:", error);
      toast.error("Failed to fetch trending hashtags");
    } finally {
      setLoading(false);
    }
  }, [filters, searchQuery]);

  // Copy hashtag
  const copyHashtag = useCallback((tag: string, id: string) => {
    navigator.clipboard.writeText(`#${tag}`);
    setCopiedId(id);
    toast.success(`Copied #${tag}`);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  // Copy all selected
  const copySelected = useCallback(() => {
    if (selectedHashtags.size === 0) {
      toast.error("No hashtags selected");
      return;
    }
    const tags = Array.from(selectedHashtags)
      .map((id) => {
        const h = hashtags.find((h) => h.id === id);
        return h ? `#${h.tag}` : "";
      })
      .filter(Boolean)
      .join(" ");

    navigator.clipboard.writeText(tags);
    toast.success(`Copied ${selectedHashtags.size} hashtags`);
  }, [selectedHashtags, hashtags]);

  // Toggle hashtag selection
  const toggleSelect = useCallback((id: string) => {
    setSelectedHashtags((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  // Select all
  const selectAll = useCallback(() => {
    if (selectedHashtags.size === hashtags.length) {
      setSelectedHashtags(new Set());
    } else {
      setSelectedHashtags(new Set(hashtags.map((h) => h.id)));
    }
  }, [hashtags, selectedHashtags]);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    toast.success("Filters reset");
  }, []);

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchHashtags();
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-[var(--foreground)]">
                TubePlanner
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/video-scheduler"
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                Video Scheduler
              </Link>
              <Link
                href="/hashtag"
                className="text-sm text-[var(--primary)] font-medium"
              >
                Hashtag
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--foreground)] flex items-center justify-center gap-3">
            <Hash className="w-8 h-8 text-[var(--primary)]" />
            Hashtag
          </h1>
          <p className="text-[var(--muted-foreground)] mt-2">
            Find trending and relevant hashtags for your YouTube videos
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter keyword to search hashtags..."
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)]"
              />
            </div>
            <button
              onClick={searchHashtags}
              disabled={loading}
              className="h-12 px-6 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Search className="w-5 h-5" />
              )}
              Search
            </button>
            <button
              onClick={getTrending}
              disabled={loading}
              className="h-12 px-6 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium hover:bg-[var(--secondary)] transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Trending
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`h-12 px-4 rounded-xl border transition-colors flex items-center gap-2 ${showFilters
                  ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                  : "border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--secondary)]"
                }`}
            >
              <Filter className="w-5 h-5" />
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[var(--foreground)] flex items-center gap-2">
                <Filter className="w-5 h-5 text-[var(--primary)]" />
                Advanced Filters
              </h3>
              <button
                onClick={resetFilters}
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] flex items-center gap-1"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Time Period */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Time Period
                </label>
                <select
                  value={filters.timePeriod}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, timePeriod: e.target.value }))
                  }
                  className="w-full h-10 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
                >
                  {TIME_PERIODS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, category: e.target.value }))
                  }
                  className="w-full h-10 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Region
                </label>
                <select
                  value={filters.region}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, region: e.target.value }))
                  }
                  className="w-full h-10 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
                >
                  {REGIONS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Min Score */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Minimum Score: {filters.minScore}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.minScore}
                  onChange={(e) =>
                    setFilters((f) => ({
                      ...f,
                      minScore: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[var(--secondary)]"
                />
              </div>

              {/* Max Competition */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Max Competition: {filters.maxCompetition}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.maxCompetition}
                  onChange={(e) =>
                    setFilters((f) => ({
                      ...f,
                      maxCompetition: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[var(--secondary)]"
                />
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, sortBy: e.target.value }))
                  }
                  className="w-full h-10 px-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
                >
                  {SORT_OPTIONS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result Count */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Results: {filters.resultCount}
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value={filters.resultCount}
                  onChange={(e) =>
                    setFilters((f) => ({
                      ...f,
                      resultCount: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[var(--secondary)]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Quick Category Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.slice(0, 8).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilters((f) => ({ ...f, category: cat.id }))}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${filters.category === cat.id
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--secondary)]/80"
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Section */}
        {hashtags.length > 0 && (
          <div className="mb-6">
            {/* Actions Bar */}
            <div className="flex items-center justify-between mb-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="flex items-center gap-4">
                <button
                  onClick={selectAll}
                  className="text-sm text-[var(--primary)] hover:underline"
                >
                  {selectedHashtags.size === hashtags.length
                    ? "Deselect All"
                    : "Select All"}
                </button>
                <span className="text-sm text-[var(--muted-foreground)]">
                  {selectedHashtags.size} selected
                </span>
              </div>
              <button
                onClick={copySelected}
                disabled={selectedHashtags.size === 0}
                className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy Selected
              </button>
            </div>

            {/* Hashtag Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {hashtags.map((hashtag) => (
                <div
                  key={hashtag.id}
                  onClick={() => toggleSelect(hashtag.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedHashtags.has(hashtag.id)
                      ? "border-[var(--primary)] bg-[var(--primary)]/5 ring-2 ring-[var(--primary)]/20"
                      : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)]/50"
                    }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-lg font-semibold text-[var(--primary)]">
                      #{hashtag.tag}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyHashtag(hashtag.tag, hashtag.id);
                      }}
                      className="p-1.5 rounded-lg hover:bg-[var(--secondary)] transition-colors"
                    >
                      {copiedId === hashtag.id ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-[var(--muted-foreground)]" />
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-xs text-[var(--muted-foreground)]">
                        Score
                      </div>
                      <div
                        className={`text-sm font-semibold ${hashtag.overallScore >= 70
                            ? "text-green-500"
                            : hashtag.overallScore >= 40
                              ? "text-yellow-500"
                              : "text-red-500"
                          }`}
                      >
                        {hashtag.overallScore}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted-foreground)]">
                        Trending
                      </div>
                      <div className="text-sm font-semibold text-[var(--foreground)] flex items-center justify-center gap-1">
                        {hashtag.trendDirection === "up" && (
                          <TrendingUp className="w-3 h-3 text-green-500" />
                        )}
                        {hashtag.trendingScore}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted-foreground)]">
                        Competition
                      </div>
                      <div
                        className={`text-sm font-semibold ${hashtag.competitionScore <= 30
                            ? "text-green-500"
                            : hashtag.competitionScore <= 60
                              ? "text-yellow-500"
                              : "text-red-500"
                          }`}
                      >
                        {hashtag.competitionScore}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && hashtags.length === 0 && (
          <div className="text-center py-16">
            <Hash className="w-16 h-16 mx-auto text-[var(--muted-foreground)]/30 mb-4" />
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              No hashtags yet
            </h3>
            <p className="text-[var(--muted-foreground)]">
              Enter a keyword and click Search, or click Trending to discover
              popular hashtags
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <Loader2 className="w-12 h-12 mx-auto text-[var(--primary)] animate-spin mb-4" />
            <p className="text-[var(--muted-foreground)]">
              Searching YouTube for hashtags...
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
