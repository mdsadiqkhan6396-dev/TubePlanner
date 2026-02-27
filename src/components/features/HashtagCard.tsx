"use client";

import { useState } from "react";
import { Copy, Check, TrendingUp, TrendingDown, Minus, Eye, Video, Flame, BarChart2 } from "lucide-react";
import { toast } from "sonner";
import type { HashtagItem } from "@/types/hashtag";
import { formatNumber } from "@/lib/utils";

interface HashtagCardProps {
    hashtag: HashtagItem;
    rank: number;
}

const RANK_STYLES: Record<number, { ring: string; badge: string; label: string }> = {
    1: { ring: "ring-2 ring-yellow-400/60 shadow-yellow-400/10", badge: "bg-yellow-400 text-yellow-900", label: "🥇" },
    2: { ring: "ring-2 ring-slate-300/60 shadow-slate-300/10", badge: "bg-slate-300 text-slate-800", label: "🥈" },
    3: { ring: "ring-2 ring-amber-600/60 shadow-amber-600/10", badge: "bg-amber-600 text-white", label: "🥉" },
};

function getTrendColor(score: number) {
    if (score >= 70) return { text: "text-green-400", bg: "bg-green-500", pill: "bg-green-500/10 border-green-500/20 text-green-400" };
    if (score >= 40) return { text: "text-yellow-400", bg: "bg-yellow-500", pill: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400" };
    return { text: "text-red-400", bg: "bg-red-500", pill: "bg-red-500/10 border-red-500/20 text-red-400" };
}

function getCompetitionBadge(videoCount: number) {
    if (videoCount <= 5) return { label: "Low", color: "bg-green-500/15 text-green-400 border-green-500/20" };
    if (videoCount <= 15) return { label: "Medium", color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" };
    return { label: "High", color: "bg-red-500/15 text-red-400 border-red-500/20" };
}

export function HashtagCard({ hashtag, rank }: HashtagCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`#${hashtag.tag}`);
        setCopied(true);
        toast.success(`Copied #${hashtag.tag}`);
        setTimeout(() => setCopied(false), 2000);
    };

    const trendColor = getTrendColor(hashtag.trendScore);
    const competition = getCompetitionBadge(hashtag.videoCount);
    const rankStyle = RANK_STYLES[rank] ?? null;

    return (
        <div className={`group relative p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 shadow-sm ${rankStyle?.ring ?? ""}`}>
            {/* Rank Badge */}
            <div className={`absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shadow-md z-10 ${rankStyle ? rankStyle.badge : "bg-primary text-white"}`}>
                {rankStyle ? rankStyle.label : rank}
            </div>

            {/* Trending indicator (top-right for high score) */}
            {hashtag.trendScore >= 70 && (
                <div className="absolute top-2 right-2">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                </div>
            )}

            {/* Header */}
            <div className="flex items-start justify-between mb-3 mt-1 pr-4">
                <button onClick={handleCopy} className="text-left group/tag flex-1 min-w-0" title={`Copy #${hashtag.tag}`}>
                    <span className="text-base font-semibold text-primary group-hover/tag:underline break-all leading-tight">
                        #{hashtag.tag}
                    </span>
                </button>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg hover:bg-secondary transition-colors ml-1 flex-shrink-0"
                    title="Copy hashtag"
                >
                    {copied ? (
                        <Check className="w-3.5 h-3.5 text-green-500" />
                    ) : (
                        <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" />
                    )}
                </button>
            </div>

            {/* Trend Score Bar */}
            <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium ${trendColor.pill}`}>
                        <Flame className={`w-3 h-3 ${trendColor.text}`} />
                        <span>{hashtag.trendScore} score</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                        {hashtag.trendScore >= 70 ? "🔥 Hot" : hashtag.trendScore >= 40 ? "📈 Rising" : "📉 Slow"}
                    </span>
                </div>
                {/* Visual progress bar */}
                <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ${trendColor.bg}`}
                        style={{ width: `${hashtag.trendScore}%` }}
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-2.5">
                <div className="flex items-center gap-1.5 text-muted-foreground bg-secondary/40 rounded-lg px-2 py-1.5">
                    <Eye className="w-3 h-3 flex-shrink-0 text-blue-400" />
                    <div>
                        <p className="font-semibold text-foreground">{formatNumber(hashtag.totalViews)}</p>
                        <p className="text-[10px]">total views</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground bg-secondary/40 rounded-lg px-2 py-1.5">
                    <Video className="w-3 h-3 flex-shrink-0 text-purple-400" />
                    <div>
                        <p className="font-semibold text-foreground">{formatNumber(hashtag.videoCount)}</p>
                        <p className="text-[10px]">videos</p>
                    </div>
                </div>
            </div>

            {/* Avg views + Competition */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <BarChart2 className="w-3 h-3 text-orange-400" />
                    <span>~{formatNumber(hashtag.avgViews ?? 0)} avg/video</span>
                </div>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full border ${competition.color}`}>
                    {competition.label} comp
                </span>
            </div>

            {/* Category */}
            {hashtag.category && (
                <div className="mt-2 pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground capitalize">{hashtag.category}</span>
                </div>
            )}
        </div>
    );
}
