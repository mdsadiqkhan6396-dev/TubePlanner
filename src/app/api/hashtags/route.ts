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

// Large curated fallback pools per category
function getFallback(category: string) {
    const POOLS: Record<string, string[]> = {
        "0": ["viral", "trending", "youtube", "fyp", "foryou", "subscribe", "like", "popular", "mustwatch", "recommended", "best", "shorts", "content", "creator", "2024", "2025", "explore", "views", "growth", "algorithm", "discover", "entertainment", "video", "watchtime", "engagement", "reels", "share", "highlight", "update", "community", "fans", "support", "follow", "notification", "bell", "newvideo", "upload", "premiere", "live", "stream", "collab", "challenge", "reaction", "tutorial", "howto", "tips", "tricks", "hack", "vlog", "daily", "weekly", "review", "unboxing", "haul", "announcement"],
        "20": ["gaming", "gamer", "gameplay", "esports", "streamer", "twitch", "ps5", "xbox", "nintendo", "videogames", "fortnite", "minecraft", "valorant", "apex", "fps", "rpg", "mmorpg", "indie", "retrogaming", "console", "pc", "mobile", "strategy", "simulation", "horror", "openworld", "multiplayer", "singleplayer", "pvp", "pve", "raid", "ranked", "competitive", "casual", "speedrun", "glitch", "modding", "gaming2024", "newgame", "gamereview", "gamedrop", "gaminglife", "gamingnews", "epicgames", "steam", "legendary", "loot", "grind", "noob", "pro", "clutch", "montage"],
        "10": ["music", "newmusic", "hiphop", "pop", "rock", "singer", "rapper", "musician", "beats", "song", "album", "musicvideo", "viral", "trending", "rnb", "edm", "jazz", "classical", "acoustic", "indie", "underground", "lyrics", "cover", "remix", "mashup", "producer", "beatmaker", "studio", "recording", "release", "newrelease", "musicproduction", "playlist", "spotify", "soundcloud", "bandcamp", "genre", "artist", "concert", "live", "performance", "tour", "festival", "musiclife", "songwriting", "collaboration", "featured", "debut", "single", "ep", "documentary"],
        "24": ["entertainment", "viral", "trending", "funny", "memes", "celebrity", "reaction", "vlog", "daily", "lifestyle", "content", "creator", "challenge", "prank", "shorts", "sketch", "comedy", "drama", "reality", "talkshow", "interview", "podcast", "documentary", "series", "episode", "season", "streaming", "binge", "netflix", "youtube", "highlight", "recap", "breakdown", "theory", "review", "reaction", "commentary", "roast", "beef", "drama", "tea", "expose", "callout", "response", "storytime", "rant", "opinion", "hot", "take"],
        "27": ["education", "learn", "tutorial", "howto", "study", "tips", "knowledge", "course", "lesson", "online", "school", "student", "teacher", "skillshare", "edtech", "science", "math", "history", "language", "coding", "programming", "exam", "revision", "notes", "lecture", "university", "college", "degree", "certificate", "career", "job", "skill", "productivity", "mindset", "motivation", "success", "growth", "selfimprovement", "books", "reading", "research", "analysis", "explained", "breakdown", "guide", "beginner", "advanced", "masterclass", "workshop", "webinar", "qa"],
        "28": ["tech", "technology", "gadgets", "review", "unboxing", "apple", "android", "iphone", "ai", "coding", "programming", "software", "app", "innovation", "startup", "cybersecurity", "hacking", "linux", "windows", "mac", "gpu", "cpu", "ram", "storage", "ssd", "nvme", "benchmark", "performance", "gaming", "streaming", "setup", "battlestation", "workspace", "homelab", "server", "cloud", "aws", "docker", "kubernetes", "devops", "frontend", "backend", "fullstack", "webdev", "mobile", "flutter", "reactnative", "swift", "kotlin", "python", "rust", "golang"],
        "17": ["sports", "fitness", "workout", "athlete", "football", "basketball", "soccer", "nba", "nfl", "mma", "boxing", "training", "gym", "health", "motivation", "cricket", "tennis", "golf", "swimming", "running", "marathon", "cycling", "yoga", "pilates", "crossfit", "hiit", "weightlifting", "powerlifting", "bodybuilding", "calisthenics", "nutrition", "diet", "protein", "supplement", "recovery", "injury", "rehabilitation", "coaching", "referee", "highlight", "replay", "analysis", "prediction", "transfer", "draft", "season", "championship", "tournament", "match", "game", "win", "loss", "draw"],
        "26": ["food", "recipe", "cooking", "chef", "foodie", "delicious", "homemade", "baking", "healthy", "vegan", "mukbang", "asmr", "restaurant", "tasty", "foodreview", "streetfood", "fastfood", "gourmet", "dessert", "cake", "pizza", "pasta", "sushi", "bbq", "grilling", "airfryer", "instantpot", "mealprep", "weightloss", "nutrition", "diet", "cleaneating", "glutenfree", "dairyfree", "vegetarian", "keto", "paleo", "mediterranean", "breakfast", "lunch", "dinner", "snack", "appetizer", "cocktail", "mocktail", "smoothie", "juicing", "fermentation", "sourdough", "confectionery", "patisserie"],
        "22": ["vlog", "daily", "lifestyle", "challenge", "prank", "reactionvideo", "storytime", "haul", "grwm", "aesthetic", "dayinmylife", "routine", "family", "relatable", "funny", "bestie", "friends", "relationship", "dating", "breakup", "advice", "opinion", "rant", "qa", "askme", "tag", "collab", "guestpost", "travel", "adventure", "explore", "hidden", "gems", "local", "city", "abroad", "moving", "newplace", "apartment", "house", "tour", "renovation", "diy", "decor", "minimalist", "organization", "productivity", "morning", "evening", "night", "weekend", "holiday"],
        "15": ["pets", "animals", "dog", "cat", "puppy", "kitten", "cute", "funny", "animal", "nature", "wildlife", "birds", "fish", "reptiles", "zoo", "hamster", "rabbit", "guinea", "pig", "parrot", "turtle", "snake", "lizard", "horse", "farm", "cow", "chicken", "goat", "sheep", "pig", "wild", "lion", "tiger", "elephant", "giraffe", "panda", "koala", "penguin", "dolphin", "whale", "shark", "octopus", "butterfly", "bee", "insect", "rescue", "adoption", "shelter", "vet", "grooming", "training", "tricks", "compilation", "moments", "fails"],
        "25": ["news", "politics", "currentevents", "breakingnews", "worldnews", "usa", "government", "election", "media", "journalism", "update", "daily", "analysis", "opinion", "report", "international", "economy", "business", "finance", "market", "stocks", "crypto", "technology", "environment", "climate", "health", "pandemic", "education", "culture", "society", "race", "gender", "equality", "justice", "rights", "law", "court", "crime", "police", "military", "war", "peace", "diplomacy", "trade", "sanctions", "foreign", "policy", "domestic", "state", "local", "city", "investigation", "documentary", "interview"],
        "23": ["comedy", "funny", "humor", "lol", "memes", "roast", "standup", "satire", "parody", "sketch", "fail", "prank", "reaction", "viral", "hilarious", "laughing", "jokes", "comedian", "funniest", "compilation", "blooper", "outtake", "behind", "scenes", "impersonation", "impression", "character", "skit", "short", "film", "sitcom", "series", "show", "live", "special", "tour", "club", "open", "mic", "amateur", "professional", "legend", "classic", "old", "school", "new", "wave", "dark", "humor", "wholesome", "family", "friendly", "adult", "rated"],
        "1": ["film", "animation", "movie", "cinema", "cartoon", "anime", "2d", "3d", "cgi", "vfx", "effects", "short", "film", "director", "producer", "screenwriter", "actor", "actress", "cast", "crew", "behindscenes", "making", "of", "trailer", "teaser", "review", "rating", "oscar", "award", "festival", "premiere", "release", "blockbuster", "indie", "arthouse", "horror", "thriller", "romance", "comedy", "drama", "action", "adventure", "fantasy", "scifi", "documentary", "animation", "pixar", "disney", "marvel", "dc", "studio", "ghibli"],
        "2": ["cars", "automobile", "automotive", "vehicle", "driving", "racing", "supercar", "hypercar", "electric", "ev", "tesla", "bmw", "mercedes", "ferrari", "lamborghini", "porsche", "audi", "ford", "chevrolet", "toyota", "honda", "nissan", "subaru", "offroad", "truck", "suv", "van", "motorcycle", "bike", "moto", "track", "drag", "drift", "rally", "formula1", "f1", "nascar", "review", "test", "drive", "modification", "tuning", "custom", "restoration", "classic", "vintage", "engine", "exhaust", "horsepower", "torque", "acceleration", "specs"],
    };
    const tags = POOLS[category] ?? POOLS["0"];
    return tags.map((tag, i) => ({
        tag,
        formatted: `#${tag}`,
        totalViews: Math.round(Math.max(100 - i * 1.5, 10) * 60000),
        videoCount: Math.round(Math.max(100 - i * 1.5, 10) * 250),
        trendScore: Math.max(97 - Math.floor(i * 1.5), 15),
        avgViews: Math.round(Math.max(100 - i * 1.5, 10) * 1200),
        rank: i + 1,
        category: undefined as string | undefined,
    }));
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

        // No YouTube API key → serve curated fallback
        if (!YOUTUBE_API_KEY) {
            let hashtags = getFallback(category);
            if (search) hashtags = hashtags.filter((h) => h.tag.includes(search.toLowerCase()));
            if (minViews > 0) hashtags = hashtags.filter((h) => h.totalViews >= minViews);
            hashtags = applySort(hashtags, sortBy);
            return NextResponse.json({ hashtags, total: hashtags.length, fetchedAt: new Date().toISOString(), source: "fallback" });
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
            if (!searchRes.ok) break;

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

        // If YouTube returned 0 useful hashtags, serve fallback
        if (hashtags.length === 0) {
            let fallback = getFallback(category);
            if (search) fallback = fallback.filter((h) => h.tag.includes(search.toLowerCase()));
            if (minViews > 0) fallback = fallback.filter((h) => h.totalViews >= minViews);
            fallback = applySort(fallback, sortBy);
            return NextResponse.json({ hashtags: fallback, total: fallback.length, fetchedAt: new Date().toISOString(), source: "fallback" });
        }

        hashtags = applySort(hashtags, sortBy);
        // Re-rank after sort — no cap on total results
        hashtags = hashtags.map((h, i) => ({ ...h, rank: i + 1 }));

        return NextResponse.json({ hashtags, total: hashtags.length, fetchedAt: new Date().toISOString(), source: "youtube" });

    } catch (err) {
        console.error("[/api/hashtags]", err);
        const fallback = getFallback("0");
        return NextResponse.json({ hashtags: fallback, total: fallback.length, fetchedAt: new Date().toISOString(), source: "fallback" });
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
