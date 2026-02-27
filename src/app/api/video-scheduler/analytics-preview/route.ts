import { NextRequest, NextResponse } from "next/server";
import { generateWithGemini } from "@/lib/gemini";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, description, tags, categoryId, scheduledTime } = body;

        if (!title) {
            return NextResponse.json(
                { error: "Title is required for analysis" },
                { status: 400 }
            );
        }

        // Calculate basic scores
        const titleScore = calculateTitleScore(title);
        const descriptionScore = calculateDescriptionScore(description || "");
        const tagsScore = calculateTagsScore(tags || []);
        const overallScore = Math.round((titleScore + descriptionScore + tagsScore) / 3);

        // Get AI-powered insights
        const prompt = `Analyze this YouTube video metadata for SEO and performance potential:

Title: "${title}"
Description: "${description || "No description"}"
Tags: ${tags?.length ? tags.join(", ") : "No tags"}
Category ID: ${categoryId}
${scheduledTime ? `Scheduled for: ${scheduledTime}` : "Immediate upload"}

Provide a brief JSON response with:
1. Estimated view range (min and max for first week)
2. Estimated engagement rate percentage
3. Best time recommendation for this type of content
4. Average performance of similar videos (views, likes, comments)

Respond ONLY with valid JSON:
{
  "estimatedViews": { "min": number, "max": number },
  "estimatedEngagement": number,
  "bestTimeRecommendation": "string (e.g., 'Tuesday 3PM EST')",
  "similarVideosPerformance": {
    "avgViews": number,
    "avgLikes": number,
    "avgComments": number
  }
}`;

        let aiInsights = {
            estimatedViews: { min: 100, max: 10000 },
            estimatedEngagement: 4.5,
            bestTimeRecommendation: "Saturday 2PM - 5PM",
            similarVideosPerformance: {
                avgViews: 5000,
                avgLikes: 200,
                avgComments: 50,
            },
        };

        try {
            const response = await generateWithGemini(prompt);
            const jsonMatch = response.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0]);
                aiInsights = { ...aiInsights, ...parsed };
            }
        } catch (error) {
            console.warn("AI insights generation failed, using defaults:", error);
        }

        // Adjust estimates based on scores
        const scoreMultiplier = overallScore / 70; // Normalize around 70 as baseline
        aiInsights.estimatedViews.min = Math.round(aiInsights.estimatedViews.min * scoreMultiplier);
        aiInsights.estimatedViews.max = Math.round(aiInsights.estimatedViews.max * scoreMultiplier);

        return NextResponse.json({
            ...aiInsights,
            titleScore,
            descriptionScore,
            tagsScore,
            overallScore,
        });

    } catch (error) {
        console.error("Analytics preview error:", error);
        return NextResponse.json(
            { error: "Failed to generate analytics preview" },
            { status: 500 }
        );
    }
}

function calculateTitleScore(title: string): number {
    let score = 50; // Base score

    // Length check (optimal: 40-60 chars)
    const length = title.length;
    if (length >= 40 && length <= 60) score += 15;
    else if (length >= 30 && length <= 70) score += 10;
    else if (length < 20 || length > 100) score -= 10;

    // Power words
    const powerWords = [
        "how", "why", "what", "best", "top", "ultimate", "guide", "tutorial",
        "secret", "amazing", "incredible", "easy", "simple", "fast", "quick",
        "free", "new", "proven", "effective", "complete", "essential"
    ];
    const lowerTitle = title.toLowerCase();
    const powerWordCount = powerWords.filter(word => lowerTitle.includes(word)).length;
    score += Math.min(powerWordCount * 5, 15);

    // Numbers (listicles perform well)
    if (/\d+/.test(title)) score += 10;

    // Capitalization (not all caps, but proper case)
    if (title === title.toUpperCase()) score -= 10;

    // Emoji usage (moderate is good)
    const emojiCount = (title.match(/[\u{1F300}-\u{1F9FF}]/gu) || []).length;
    if (emojiCount > 0 && emojiCount <= 2) score += 5;
    else if (emojiCount > 3) score -= 5;

    return Math.max(0, Math.min(100, score));
}

function calculateDescriptionScore(description: string): number {
    let score = 40; // Base score

    const length = description.length;
    
    // Length check (optimal: 200-500 chars minimum, more is usually better)
    if (length >= 500) score += 20;
    else if (length >= 200) score += 15;
    else if (length >= 100) score += 5;
    else if (length < 50) score -= 10;

    // Hashtags
    const hashtagCount = (description.match(/#\w+/g) || []).length;
    if (hashtagCount >= 1 && hashtagCount <= 5) score += 10;
    else if (hashtagCount > 10) score -= 5;

    // Links (having links is good for engagement)
    if (description.includes("http") || description.includes("www")) score += 5;

    // Call to action
    const ctaWords = ["subscribe", "like", "comment", "share", "follow", "click", "check out", "watch"];
    const lowerDesc = description.toLowerCase();
    const ctaCount = ctaWords.filter(word => lowerDesc.includes(word)).length;
    score += Math.min(ctaCount * 5, 15);

    // Timestamps
    if (/\d{1,2}:\d{2}/.test(description)) score += 10;

    return Math.max(0, Math.min(100, score));
}

function calculateTagsScore(tags: string[]): number {
    let score = 30; // Base score

    const count = tags.length;
    
    // Tag count (optimal: 8-15 tags)
    if (count >= 8 && count <= 15) score += 25;
    else if (count >= 5 && count <= 20) score += 15;
    else if (count >= 3) score += 5;
    else if (count === 0) return 20;

    // Tag variety (mix of short and long-tail)
    const shortTags = tags.filter(t => t.split(" ").length === 1).length;
    const longTailTags = tags.filter(t => t.split(" ").length >= 2).length;
    
    if (shortTags > 0 && longTailTags > 0) {
        score += 15; // Good mix
    }

    // Average tag length
    const avgLength = tags.reduce((acc, t) => acc + t.length, 0) / count;
    if (avgLength >= 5 && avgLength <= 20) score += 10;

    // Check for duplicates
    const uniqueTags = new Set(tags.map(t => t.toLowerCase()));
    if (uniqueTags.size < tags.length) score -= 10;

    return Math.max(0, Math.min(100, score));
}
