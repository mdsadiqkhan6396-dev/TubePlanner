"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
    Hash, Loader2, Flame, TrendingUp, Eye, Video, Copy, Check,
    Download, Search, SortAsc, ChevronDown
} from "lucide-react";
import { HashtagCard } from "@/components/features/HashtagCard";
import { HashtagFilters } from "@/components/features/HashtagFilters";
import type { Hashtag, HashtagFilterOptions, HashtagSearchResult } from "@/types/hashtag";
import { toast } from "sonner";
import { formatNumber } from "@/lib/format";

type CopyFormat = "hashtags" | "csv" | "newline";
type SortOption = "trending" | "views" | "videos" | "score";

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
    { id: "trending", label: "Trending" },
    { id: "views", label: "Most Viewed" },
    { id: "videos", label: "Most Videos" },
    { id: "score", label: "Top Score" },
];

const COPY_FORMATS: { id: CopyFormat; label: string; example: string }[] = [
    { id: "hashtags", label: "#tag format", example: "#viral #trending" },
    { id: "csv", label: "Comma separated", example: "viral, trending" },
    { id: "newline", label: "One per line", example: "#viral\n#trending" },
];

export default function HashtagsPage() {
    const [results, setResults] = useState<HashtagSearchResult | null>(null);
    const [loading, setLoading] = useState(true);
    const [copiedAll, setCopiedAll] = useState(false);
    const [copyFormat, setCopyFormat] = useState<CopyFormat>("hashtags");
    const [showCopyMenu, setShowCopyMenu] = useState(false);
    const [localSearch, setLocalSearch] = useState("");
    const [activeSort, setActiveSort] = useState<SortOption>("trending");
    const [filters, setFilters] = useState<HashtagFilterOptions>({
        timeRange: "today",
        category: "0",
        region: "US",
        sortBy: "trending",
        minViews: 0,
        minVideos: 1,
        search: "",
    });

    const fetchHashtags = useCallback(async (f: HashtagFilterOptions) => {
        setLoading(true);
        try {
            const response = await fetch("/api/hashtags", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(f),
            });

            if (!response.ok) throw new Error(`API error: ${response.status}`);

            const data = await response.json();
            if (data && Array.isArray(data.hashtags)) {
                setResults(data);
            } else {
                setResults({ hashtags: [], total: 0, fetchedAt: new Date().toISOString() });
            }
        } catch (error) {
            console.error("Failed to fetch hashtags:", error);
            toast.error("Failed to fetch hashtags. Please try again.");
            setResults({ hashtags: [], total: 0, fetchedAt: new Date().toISOString() });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchHashtags(filters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFilterChange = (newFilters: HashtagFilterOptions) => {
        setFilters(newFilters);
        setActiveSort(newFilters.sortBy as SortOption);
        fetchHashtags(newFilters);
    };

    const handleSortChange = (sort: SortOption) => {
        setActiveSort(sort);
        const updated = { ...filters, sortBy: sort };
        setFilters(updated);
        fetchHashtags(updated);
    };

    // Client-side local search filter (instant, no API call)
    const displayedHashtags = useMemo(() => {
        if (!results?.hashtags) return [];
        const q = localSearch.trim().toLowerCase();
        return q ? results.hashtags.filter(h => h.tag.includes(q)) : results.hashtags;
    }, [results, localSearch]);

    const formatForCopy = (tags: string[], format: CopyFormat) => {
        switch (format) {
            case "csv": return tags.map(t => t).join(", ");
            case "newline": return tags.map(t => `#${t}`).join("\n");
            default: return tags.map(t => `#${t}`).join(" ");
        }
    };

    const handleCopyAll = (format: CopyFormat = copyFormat) => {
        if (!displayedHashtags.length) return;
        const text = formatForCopy(displayedHashtags.map(h => h.tag), format);
        navigator.clipboard.writeText(text);
        setCopiedAll(true);
        setShowCopyMenu(false);
        toast.success(`Copied ${displayedHashtags.length} hashtags!`);
        setTimeout(() => setCopiedAll(false), 2500);
    };

    const handleExport = () => {
        if (!displayedHashtags.length) return;
        const lines = displayedHashtags.map(
            (h, i) => `${i + 1}\t#${h.tag}\t${h.trendScore}\t${formatNumber(h.totalViews)}\t${h.videoCount}`
        );
        const content = `Rank\tHashtag\tScore\tViews\tVideos\n${lines.join("\n")}`;
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `hashtags-${filters.timeRange}-${new Date().toISOString().slice(0, 10)}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        toast.success("Hashtags exported!");
    };

    const getTimeLabel = () => {
        const labels: Record<string, string> = {
            today: "Today's", yesterday: "Yesterday's", week: "This Week's",
            month: "This Month's", year: "This Year's", all: "All Time",
        };
        return labels[filters.timeRange] || "Today's";
    };

    const totalViews = displayedHashtags.reduce((s, h) => s + h.totalViews, 0);
    const totalVideos = displayedHashtags.reduce((s, h) => s + h.videoCount, 0);
    const avgScore = displayedHashtags.length > 0
        ? Math.round(displayedHashtags.reduce((s, h) => s + h.trendScore, 0) / displayedHashtags.length)
        : 0;
    const topScore = displayedHashtags.length > 0
        ? Math.max(...displayedHashtags.map(h => h.trendScore))
        : 0;

    return (
        <main className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8" suppressHydrationWarning>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 rounded-xl bg-primary/10">
                            <Hash className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Viral Hashtags</h1>
                            <p className="text-muted-foreground mt-1">
                                Discover {getTimeLabel().toLowerCase()} most viral and trending YouTube hashtags
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <HashtagFilters onFilterChange={handleFilterChange} />

                {/* Sort Pills + Local Search */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                    <div className="flex items-center gap-1.5 bg-card border border-border rounded-xl p-1">
                        {SORT_OPTIONS.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => handleSortChange(opt.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeSort === opt.id
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                    }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>

                    {/* Quick local filter */}
                    <div className="relative flex-1 max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                        <input
                            type="text"
                            value={localSearch}
                            onChange={e => setLocalSearch(e.target.value)}
                            placeholder="Filter results..."
                            className="w-full h-9 pl-9 pr-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-xs"
                        />
                    </div>

                    {localSearch && (
                        <span className="text-xs text-muted-foreground">
                            {displayedHashtags.length} / {results?.hashtags.length ?? 0} results
                        </span>
                    )}
                </div>

                {/* Stats Bar */}
                {results && !loading && (
                    <div className="mb-6 p-4 rounded-xl bg-card border border-border">
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                            {/* Stat items */}
                            <div className="flex items-center gap-2">
                                <Hash className="w-4 h-4 text-primary" />
                                <span className="font-bold text-lg text-primary">{displayedHashtags.length}</span>
                                <span className="text-muted-foreground">
                                    {localSearch ? `of ${results.hashtags.length} ` : ""}hashtags
                                </span>
                            </div>
                            <div className="h-4 w-px bg-border hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4 text-blue-400" />
                                <span className="font-bold text-foreground">{formatNumber(totalViews)}</span>
                                <span className="text-muted-foreground">total views</span>
                            </div>
                            <div className="h-4 w-px bg-border hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <Video className="w-4 h-4 text-purple-400" />
                                <span className="font-bold text-foreground">{formatNumber(totalVideos)}</span>
                                <span className="text-muted-foreground">videos</span>
                            </div>
                            <div className="h-4 w-px bg-border hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <Flame className="w-4 h-4 text-orange-400" />
                                <span className="font-bold text-foreground">{avgScore}</span>
                                <span className="text-muted-foreground">avg score</span>
                            </div>
                            <div className="h-4 w-px bg-border hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                <span className="font-bold text-foreground">{topScore}</span>
                                <span className="text-muted-foreground">top score</span>
                            </div>

                            {/* Action buttons */}
                            <div className="ml-auto flex items-center gap-2">
                                {/* Export */}
                                <button
                                    onClick={handleExport}
                                    disabled={!displayedHashtags.length}
                                    className="px-3 py-2 bg-secondary hover:bg-secondary/80 border border-border rounded-lg text-sm font-medium text-foreground transition-all flex items-center gap-1.5 disabled:opacity-40"
                                    title="Export as .txt"
                                >
                                    <Download className="w-4 h-4" />
                                    <span className="hidden sm:inline">Export</span>
                                </button>

                                {/* Copy with format selector */}
                                <div className="relative">
                                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => handleCopyAll()}
                                            disabled={!displayedHashtags.length}
                                            className="px-3 py-2 bg-secondary hover:bg-primary/20 hover:border-primary/50 text-sm font-medium text-foreground transition-all flex items-center gap-1.5 disabled:opacity-40"
                                        >
                                            {copiedAll ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                            <span className="hidden sm:inline">{copiedAll ? "Copied!" : "Copy All"}</span>
                                        </button>
                                        <button
                                            onClick={() => setShowCopyMenu(p => !p)}
                                            disabled={!displayedHashtags.length}
                                            className="px-2 py-2 bg-secondary hover:bg-primary/20 border-l border-border text-muted-foreground hover:text-foreground transition-all disabled:opacity-40"
                                        >
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCopyMenu ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>

                                    {showCopyMenu && (
                                        <div className="absolute right-0 top-full mt-1 z-50 bg-card border border-border rounded-xl shadow-xl p-2 min-w-52">
                                            <p className="text-xs text-muted-foreground px-2 pb-2 font-medium">Copy format</p>
                                            {COPY_FORMATS.map(fmt => (
                                                <button
                                                    key={fmt.id}
                                                    onClick={() => { setCopyFormat(fmt.id); handleCopyAll(fmt.id); }}
                                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors hover:bg-secondary flex flex-col gap-0.5 ${copyFormat === fmt.id ? "bg-primary/10 text-primary" : ""}`}
                                                >
                                                    <span className="font-medium">{fmt.label}</span>
                                                    <span className="text-xs text-muted-foreground font-mono">{fmt.example}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
                        <p className="text-muted-foreground">Analyzing {getTimeLabel().toLowerCase()} viral hashtags...</p>
                        <p className="text-sm text-muted-foreground mt-2">Scanning trending videos for hashtag patterns</p>
                    </div>
                )}

                {/* Hashtag Grid — ALL results, no slice */}
                {!loading && displayedHashtags.length > 0 && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {displayedHashtags.map((hashtag, index) => (
                                <HashtagCard
                                    key={hashtag.tag}
                                    hashtag={hashtag}
                                    rank={index + 1}
                                />
                            ))}
                        </div>
                        <p className="text-center text-xs text-muted-foreground mt-6">
                            Showing all <strong>{displayedHashtags.length}</strong> hashtags
                            {results?.source && (
                                <span className="ml-2 px-1.5 py-0.5 bg-secondary rounded text-[10px]">
                                    {results.source === "youtube" ? "📺 YouTube live data" : "📋 Curated data"}
                                </span>
                            )}
                        </p>
                    </>
                )}

                {/* Empty State */}
                {!loading && displayedHashtags.length === 0 && (
                    <div className="text-center py-20 bg-secondary/20 rounded-xl border border-border">
                        <Hash className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-lg font-medium text-foreground mb-2">No hashtags found</p>
                        <p className="text-sm text-muted-foreground">
                            {localSearch ? `No results for "${localSearch}" — try a different filter` : "Try adjusting your filters or time range"}
                        </p>
                    </div>
                )}

                {/* Tips Section */}
                {!loading && displayedHashtags.length > 0 && (
                    <div className="mt-10 p-6 bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/20 rounded-2xl">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            How to Use Viral Hashtags
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                            <div className="p-3 bg-card rounded-xl border border-border">
                                <p className="font-medium text-foreground mb-1">🎯 Target High Scores</p>
                                <p>Use hashtags with trend scores above 60 for maximum visibility in YouTube search.</p>
                            </div>
                            <div className="p-3 bg-card rounded-xl border border-border">
                                <p className="font-medium text-foreground mb-1">📊 Mix Competition</p>
                                <p>Combine <strong>High</strong> competition hashtags with <strong>Low</strong> ones for broad + niche reach.</p>
                            </div>
                            <div className="p-3 bg-card rounded-xl border border-border">
                                <p className="font-medium text-foreground mb-1">⏰ Time It Right</p>
                                <p>Check "Today" tab before uploading to catch real-time trending hashtags.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
