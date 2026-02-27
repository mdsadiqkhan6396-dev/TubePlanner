"use client";

import { useState } from "react";
import { Filter, RefreshCw, Search, ChevronDown } from "lucide-react";
import type { HashtagFilterOptions } from "@/types/hashtag";

interface HashtagFiltersProps {
    onFilterChange: (filters: HashtagFilterOptions) => void;
}

const TIME_RANGES = [
    { id: "today", label: "Today" },
    { id: "yesterday", label: "Yesterday" },
    { id: "week", label: "This Week" },
    { id: "month", label: "This Month" },
    { id: "year", label: "This Year" },
    { id: "all", label: "All Time" },
] as const;

const CATEGORIES = [
    { id: "0", label: "All Categories" },
    { id: "1", label: "Film & Animation" },
    { id: "2", label: "Autos & Vehicles" },
    { id: "10", label: "Music" },
    { id: "15", label: "Pets & Animals" },
    { id: "17", label: "Sports" },
    { id: "20", label: "Gaming" },
    { id: "22", label: "People & Blogs" },
    { id: "23", label: "Comedy" },
    { id: "24", label: "Entertainment" },
    { id: "25", label: "News & Politics" },
    { id: "26", label: "Howto & Style" },
    { id: "27", label: "Education" },
    { id: "28", label: "Science & Technology" },
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
    { id: "trending", label: "Most Trending" },
    { id: "views", label: "Most Viewed" },
    { id: "videos", label: "Most Videos" },
    { id: "score", label: "Highest Score" },
];

const DEFAULT_FILTERS: HashtagFilterOptions = {
    timeRange: "today",
    category: "0",
    region: "US",
    sortBy: "trending",
    minViews: 0,
    minVideos: 1,
    search: "",
};

export function HashtagFilters({ onFilterChange }: HashtagFiltersProps) {
    const [filters, setFilters] = useState<HashtagFilterOptions>(DEFAULT_FILTERS);
    const [showAdvanced, setShowAdvanced] = useState(false);

    const updateFilter = <K extends keyof HashtagFilterOptions>(
        key: K,
        value: HashtagFilterOptions[K]
    ) => {
        const updated = { ...filters, [key]: value };
        setFilters(updated);
        onFilterChange(updated);
    };

    const resetFilters = () => {
        setFilters(DEFAULT_FILTERS);
        onFilterChange(DEFAULT_FILTERS);
    };

    return (
        <div className="mb-6 space-y-4">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                    type="text"
                    value={filters.search}
                    onChange={(e) => updateFilter("search", e.target.value)}
                    placeholder="Filter hashtags by keyword..."
                    className="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                />
            </div>

            {/* Time Range Pills */}
            <div className="flex flex-wrap gap-2">
                {TIME_RANGES.map((range) => (
                    <button
                        key={range.id}
                        onClick={() => updateFilter("timeRange", range.id)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filters.timeRange === range.id
                                ? "bg-primary text-white shadow-sm"
                                : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                            }`}
                    >
                        {range.label}
                    </button>
                ))}
            </div>

            {/* Advanced Filters Toggle */}
            <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <Filter className="w-4 h-4" />
                Advanced Filters
                <ChevronDown className={`w-4 h-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
            </button>

            {/* Advanced Filters Panel */}
            {showAdvanced && (
                <div className="p-4 rounded-xl border border-border bg-card">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <Filter className="w-4 h-4 text-primary" />
                            Filter Options
                        </h3>
                        <button
                            onClick={resetFilters}
                            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                        >
                            <RefreshCw className="w-3 h-3" />
                            Reset
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Category */}
                        <div>
                            <label className="block text-xs font-medium text-foreground mb-1.5">
                                Category
                            </label>
                            <select
                                value={filters.category}
                                onChange={(e) => updateFilter("category", e.target.value)}
                                className="w-full h-9 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                            <label className="block text-xs font-medium text-foreground mb-1.5">
                                Region
                            </label>
                            <select
                                value={filters.region}
                                onChange={(e) => updateFilter("region", e.target.value)}
                                className="w-full h-9 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                {REGIONS.map((r) => (
                                    <option key={r.id} value={r.id}>
                                        {r.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort By */}
                        <div>
                            <label className="block text-xs font-medium text-foreground mb-1.5">
                                Sort By
                            </label>
                            <select
                                value={filters.sortBy}
                                onChange={(e) => updateFilter("sortBy", e.target.value as HashtagFilterOptions["sortBy"])}
                                className="w-full h-9 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                {SORT_OPTIONS.map((s) => (
                                    <option key={s.id} value={s.id}>
                                        {s.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Min Views */}
                        <div>
                            <label className="block text-xs font-medium text-foreground mb-1.5">
                                Min Views: {filters.minViews.toLocaleString()}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                step="10000"
                                value={filters.minViews}
                                onChange={(e) => updateFilter("minViews", parseInt(e.target.value))}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
