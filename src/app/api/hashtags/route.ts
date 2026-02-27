import { NextRequest, NextResponse } from "next/server";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY ?? "";

// --- Helpers ---

function getPublishedAfter(timeRange: string): string {
    const now = new Date();
    const d = new Date(now);
    switch (timeRange) {
        case "today": d.setHours(0, 0, 0, 0); break;
        case "yesterday": d.setDate(d.getDate() - 1); d.setHours(0, 0, 0, 0); break;
        case "week": d.setDate(d.getDate() - 7); break;
        case "month": d.setDate(d.getDate() - 30); break;
        case "year": d.setFullYear(d.getFullYear() - 1); break;
        default: d.setDate(d.getDate() - 90); break; // "all"
    }
    return d.toISOString();
}

function extractTags(description: string, tags: string[]): string[] {
    const seen = new Set<string>();
    (description.match(/#[\w\u0080-\uFFFF]+/g) ?? []).forEach((m) => {
        const t = m.slice(1).toLowerCase();
        if (t.length >= 2 && t.length <= 50) seen.add(t);
    });
    tags.forEach((tag) => {
        const t = tag.toLowerCase().replace(/[^a-z0-9]/gi, "");
        if (t.length >= 2 && t.length <= 50) seen.add(t);
    });
    return [...seen];
}

function calcScore(views: number, likes: number, comments: number, ageHours: number): number {
    const velocity = views / Math.max(ageHours, 1);
    const engagement = (likes + comments * 2) / Math.max(views, 1);
    const vScore = Math.min(velocity / 100, 50);
    const eScore = Math.min(engagement * 1000, 30);
    const rScore = Math.max(20 - ageHours / 24, 0);
    return Math.min(Math.round(vScore + eScore + rScore), 100);
}

// --- Handler ---

export async function POST(request: NextRequest) {
    try {
        let body: Record<string, unknown> = {};
        try {
            body = await request.json();
        } catch {
            // bad JSON — use defaults
        }

        const timeRange = String(body.timeRange ?? "today");
        const category = String(body.category ?? "0");
        const region = String(body.region ?? "US");
        const sortBy = String(body.sortBy ?? "trending");
        const minViews = Number(body.minViews ?? 0);
        const minVideos = Number(body.minVideos ?? 1);
        const search = String(body.search ?? "");

        // No YouTube API key → return error
        if (!YOUTUBE_API_KEY) {
            return NextResponse.json(
                { error: "YouTube API key not configured. Please add YOUTUBE_API_KEY to environment variables.", hashtags: [], total: 0 },
                { status: 503 }
            );
        }

        // --- YouTube API path — fetch 2 pages (up to 100 videos) ---
        const publishedAfter = getPublishedAfter(timeRange);

        const statsMap = new Map<string, { views: number; likes: number; comments: number; count: number; ageHours: number }>();

        let pageToken: string | undefined = undefined;
        for (let page = 0; page < 2; page++) {
            const searchParams = new URLSearchParams({
                part: "snippet",
                type: "video",
                order: "viewCount",
                maxResults: "50",
                publishedAfter,
                regionCode: region,
                key: YOUTUBE_API_KEY,
            });
            if (category !== "0") searchParams.set("videoCategoryId", category);
            if (search) searchParams.set("q", search);
            if (pageToken) searchParams.set("pageToken", pageToken);

            const searchRes = await fetch(`${YOUTUBE_API_BASE}/search?${searchParams}`);
            if (!searchRes.ok) {
                const errData = await searchRes.json().catch(() => ({}));
                console.error("[/api/hashtags] YouTube search error:", errData);
                break;
            }

            const searchData = await searchRes.json();
            pageToken = searchData.nextPageToken;

            const videoIds = ((searchData.items ?? []) as Array<{ id?: { videoId?: string } }>)
                .map((item) => item.id?.videoId)
                .filter(Boolean)
                .join(",");

            if (!videoIds) break;

            const videoParams = new URLSearchParams({ part: "snippet,statistics", id: videoIds, key: YOUTUBE_API_KEY });
            const videoRes = await fetch(`${YOUTUBE_API_BASE}/videos?${videoParams}`);
            if (!videoRes.ok) break;

            const videoData = await videoRes.json();

            for (const video of (videoData.items ?? []) as Array<{ snippet?: { description?: string; tags?: string[]; publishedAt?: string }; statistics?: { viewCount?: string; likeCount?: string; commentCount?: string } }>) {
                const desc = video.snippet?.description ?? "";
                const tags = video.snippet?.tags ?? [];
                const views = parseInt(video.statistics?.viewCount ?? "0", 10);
                const likes = parseInt(video.statistics?.likeCount ?? "0", 10);
                const cmnts = parseInt(video.statistics?.commentCount ?? "0", 10);
                const pub = video.snippet?.publishedAt ? new Date(video.snippet.publishedAt) : new Date();
                const ageHrs = (Date.now() - pub.getTime()) / 3_600_000;

                for (const tag of extractTags(desc, tags)) {
                    const prev = statsMap.get(tag) ?? { views: 0, likes: 0, comments: 0, count: 0, ageHours: ageHrs };
                    statsMap.set(tag, {
                        views: prev.views + views,
                        likes: prev.likes + likes,
                        comments: prev.comments + cmnts,
                        count: prev.count + 1,
                        ageHours: Math.min(prev.ageHours, ageHrs),
                    });
                }
            }

            if (!pageToken) break; // no more pages
        }

        let hashtags = [...statsMap.entries()]
            .filter(([, s]) => s.count >= minVideos && s.views >= minViews)
            .map(([tag, s], i) => ({
                tag,
                formatted: `#${tag}`,
                totalViews: s.views,
                videoCount: s.count,
                trendScore: calcScore(s.views, s.likes, s.comments, s.ageHours),
                avgViews: Math.round(s.views / s.count),
                rank: i + 1,
                category: undefined as string | undefined,
            }));

        hashtags = applySort(hashtags, sortBy);
        // Re-rank after sort
        hashtags = hashtags.map((h, i) => ({ ...h, rank: i + 1 }));

        return NextResponse.json({ hashtags, total: hashtags.length, fetchedAt: new Date().toISOString(), source: "youtube" });

    } catch (err) {
        console.error("[/api/hashtags]", err);
        return NextResponse.json(
            { error: "Failed to fetch hashtags from YouTube. Please try again.", hashtags: [], total: 0 },
            { status: 500 }
        );
    }
}

function applySort<T extends { trendScore: number; totalViews: number; videoCount: number }>(
    hashtags: T[],
    sortBy: string
): T[] {
    switch (sortBy) {
        case "views": return [...hashtags].sort((a, b) => b.totalViews - a.totalViews);
        case "videos": return [...hashtags].sort((a, b) => b.videoCount - a.videoCount);
        case "score": return [...hashtags].sort((a, b) => b.trendScore - a.trendScore);
        default: return [...hashtags].sort((a, b) => b.trendScore - a.trendScore);
    }
}
