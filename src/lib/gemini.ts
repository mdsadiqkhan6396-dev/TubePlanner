import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.0-flash";

let genAI: GoogleGenerativeAI | null = null;

function getGenAI(): GoogleGenerativeAI {
    if (!GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not configured");
    }
    if (!genAI) {
        genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    }
    return genAI;
}

export function isGeminiConfigured(): boolean {
    return !!GEMINI_API_KEY;
}

function getModel() {
    if (!GEMINI_API_KEY) {
        return null;
    }
    return getGenAI().getGenerativeModel({ model: GEMINI_MODEL });
}

// Generic Gemini generation helper
export async function generateWithGemini(prompt: string): Promise<string> {
    const model = getModel();
    if (!model) {
        throw new Error("GEMINI_API_KEY is not configured. Please add it to your environment variables.");
    }
    const result = await model.generateContent(prompt);
    return result.response.text();
}
// â”€â”€ Title Generation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface GeneratedTitle {
    title: string;
    score: number;
    pattern: string;
    reasoning?: string;
}

export async function generateTitlesWithAI(
    topic: string,
    niche: string,
    style: string,
    context?: {
        topPerformingTitles?: string[];
        commonKeywords?: string[];
    }
): Promise<GeneratedTitle[]> {
    const model = getModel();
    if (!model) return [];

    const contextInfo = context?.topPerformingTitles?.length
        ? `\nTop performing titles in this niche for reference:\n${context.topPerformingTitles.slice(0, 5).map(t => `- "${t}"`).join("\n")}`
        : "";

    const keywordsInfo = context?.commonKeywords?.length
        ? `\nCommon high-performing keywords: ${context.commonKeywords.slice(0, 10).join(", ")}`
        : "";

    const prompt = `Generate 10 highly clickable, SEO-optimized YouTube video titles for the following:

Topic: ${topic}
Niche: ${niche}
Style: ${style}
${contextInfo}
${keywordsInfo}

Requirements:
- Make titles attention-grabbing with emotional hooks
- Use power words that drive clicks
- Keep titles between 40-65 characters for optimal display
- Include numbers, questions, or curiosity gaps where appropriate
- Make each title unique with different patterns (how-to, listicle, question, story, reveal, etc.)

Respond in JSON format only:
{
  "titles": [
    {
      "title": "The actual title text",
      "score": 85,
      "pattern": "listicle",
      "reasoning": "Brief explanation why this title works"
    }
  ]
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]);
        return parsed.titles || [];
    } catch (error) {
        console.error("Gemini title generation error:", error);
        return [];
    }
}

// ── Description Generation ─────────────────────────────────────────────────

export async function generateDescriptionWithAI(
    videoTitle: string,
    niche: string = "general",
    existingDescription?: string
): Promise<string> {
    const model = getModel();
    if (!model) {
        return existingDescription || "";
    }

    const prompt = `You are a YouTube SEO expert. Generate an engaging and SEO-optimized video description.

Video Title: "${videoTitle}"
Niche: ${niche}
${existingDescription ? `Existing Description to improve: "${existingDescription}"` : ""}

Requirements:
1. First 2-3 lines should hook viewers (shown above "Show more")
2. Include relevant timestamps placeholder if applicable
3. Add a clear call-to-action
4. Keep it under 500 characters initially visible
5. Include relevant keywords naturally
6. Be engaging and conversational

Respond ONLY with a JSON object:
{
    "description": "Full optimized description..."
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return existingDescription || "";

        const parsed = JSON.parse(jsonMatch[0]);
        return parsed.description || existingDescription || "";
    } catch (error) {
        console.error("Gemini description generation error:", error);
        return existingDescription || "";
    }
}

// ── Tags Generation ─────────────────────────────────────────────────────────

export async function generateTagsWithAI(
    videoTitle: string,
    niche: string = "general",
    existingTags?: string[]
): Promise<string[]> {
    const model = getModel();
    if (!model) {
        return existingTags || [];
    }

    const prompt = `Generate relevant YouTube tags for:
    
Video Title: "${videoTitle}"
Niche: ${niche}
${existingTags?.length ? `Build upon these existing tags: ${existingTags.join(", ")}` : ""}

Requirements:
1. Generate 15-20 highly relevant tags
2. Mix broad and specific keywords
3. Include trending variations
4. Ensure variety for better discovery

Respond ONLY with a JSON object:
{
    "tags": ["tag1", "tag2", "tag3", ...]
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return existingTags || [];

        const parsed = JSON.parse(jsonMatch[0]);
        return parsed.tags || existingTags || [];
    } catch (error) {
        console.error("Gemini tags generation error:", error);
        return existingTags || [];
    }
}

// ── Video Ideas Generation ──────────────────────────────────────────────────

export interface VideoIdea {
    title: string;
    description: string;
    format: string;
    difficulty: "easy" | "medium" | "hard";
    estimatedViews: string;
    tags: string[];
    hooks: string[];
}

export async function generateVideoIdeasWithAI(
    niche: string,
    context?: {
        trendingTopics?: string[];
        competitorTitles?: string[];
        audienceInterests?: string[];
    }
): Promise<VideoIdea[]> {
    const model = getModel();
    if (!model) return [];

    const trendingInfo = context?.trendingTopics?.length
        ? `\nCurrent trending topics in this niche:\n${context.trendingTopics.slice(0, 5).map(t => `- ${t}`).join("\n")}`
        : "";

    const competitorInfo = context?.competitorTitles?.length
        ? `\nTop competitor videos:\n${context.competitorTitles.slice(0, 5).map(t => `- "${t}"`).join("\n")}`
        : "";

    const prompt = `Generate 8 unique, high-potential YouTube video ideas for the "${niche}" niche.
${trendingInfo}
${competitorInfo}

For each idea, provide:
- A compelling title
- A brief description of the content
- Video format (tutorial, vlog, listicle, review, challenge, story, etc.)
- Production difficulty (easy, medium, hard)
- Estimated view potential
- Relevant tags
- Strong hook ideas for the first 30 seconds

Consider:
- Content gaps that aren't being covered
- Trending angles and current events
- Evergreen content that stays relevant
- Unique perspectives or contrarian takes

Respond in JSON format only:
{
  "ideas": [
    {
      "title": "Video title",
      "description": "What the video covers",
      "format": "tutorial",
      "difficulty": "medium",
      "estimatedViews": "10K-50K",
      "tags": ["tag1", "tag2", "tag3"],
      "hooks": ["Hook idea 1", "Hook idea 2"]
    }
  ]
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]);
        return parsed.ideas || [];
    } catch (error) {
        console.error("Gemini video ideas error:", error);
        return [];
    }
}

// â”€â”€ SEO Tags Generation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export interface SEOTagResult {
    tag: string;
    relevance: number;
    searchVolume: "high" | "medium" | "low";
    competition: "high" | "medium" | "low";
    reasoning?: string;
}

export async function generateSEOTagsWithAI(
    title: string,
    description: string,
    category: string,
    existingTags?: string[]
): Promise<SEOTagResult[]> {
    const model = getModel();
    if (!model) return [];

    const existingInfo = existingTags?.length
        ? `\nTags commonly used by competitors: ${existingTags.slice(0, 20).join(", ")}`
        : "";

    const prompt = `Generate optimized SEO tags for a YouTube video:

Title: ${title}
Description: ${description}
Category: ${category}
${existingInfo}

Requirements:
- Generate 30 highly relevant tags
- Mix of broad and specific/long-tail tags
- Include variations and related terms
- Consider search intent and discoverability
- Order by relevance and impact

Respond in JSON format only:
{
  "tags": [
    {
      "tag": "tag text",
      "relevance": 95,
      "searchVolume": "high",
      "competition": "medium",
      "reasoning": "Why this tag is effective"
    }
  ]
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]);
        return parsed.tags || [];
    } catch (error) {
        console.error("Gemini SEO tags error:", error);
        return [];
    }
}

// â”€â”€ Sentiment Analysis â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export interface SentimentResult {
    overallSentiment: "positive" | "negative" | "neutral" | "mixed";
    sentimentScore: number; // -1 to 1
    summary: string;
    keyThemes: string[];
    topPositive: string[];
    topNegative: string[];
    suggestions: string[];
}

export async function analyzeSentimentWithAI(
    comments: string[],
    videoTitle?: string
): Promise<SentimentResult | null> {
    if (comments.length === 0) return null;
    const model = getModel();
    if (!model) return null;


    const sampleComments = comments.slice(0, 50); // Limit for API

    const prompt = `Analyze the sentiment and themes in these YouTube video comments${videoTitle ? ` for the video "${videoTitle}"` : ""}:

Comments:
${sampleComments.map((c, i) => `${i + 1}. "${c}"`).join("\n")}

Provide a comprehensive sentiment analysis including:
- Overall sentiment classification
- Sentiment score (-1 to 1)
- Summary of audience reception
- Key themes mentioned
- Most common positive feedback points
- Most common criticisms or concerns
- Suggestions for the creator based on feedback

Respond in JSON format only:
{
  "overallSentiment": "positive",
  "sentimentScore": 0.65,
  "summary": "Brief summary of audience reception",
  "keyThemes": ["theme1", "theme2"],
  "topPositive": ["positive point 1", "positive point 2"],
  "topNegative": ["criticism 1", "criticism 2"],
  "suggestions": ["suggestion 1", "suggestion 2"]
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return null;

        return JSON.parse(jsonMatch[0]);
    } catch (error) {
        console.error("Gemini sentiment analysis error:", error);
        return null;
    }
}

// â”€â”€ Thumbnail Analysis â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export interface ThumbnailRecommendation {
    element: string;
    recommendation: string;
    importance: "high" | "medium" | "low";
    examples?: string[];
}

export async function analyzeThumbnailPatternsWithAI(
    niche: string,
    topPerformingData: {
        titles: string[];
        patterns: string[];
        avgViews: number;
    }
): Promise<ThumbnailRecommendation[]> {
    const model = getModel();
    if (!model) return [];

    const prompt = `Analyze successful YouTube thumbnail patterns for the "${niche}" niche and provide recommendations.

Top performing video titles in this niche:
${topPerformingData.titles.slice(0, 10).map(t => `- "${t}"`).join("\n")}

Common title patterns observed:
${topPerformingData.patterns.slice(0, 10).map(p => `- ${p}`).join("\n")}

Average views: ${topPerformingData.avgViews.toLocaleString()}

Based on this data, provide specific thumbnail recommendations for:
- Text overlay (what to include, font style)
- Face/expression usage
- Color schemes
- Composition and layout
- Objects or props
- Branding elements
- Background choices
- Emotional triggers

Respond in JSON format only:
{
  "recommendations": [
    {
      "element": "Text Overlay",
      "recommendation": "Specific recommendation",
      "importance": "high",
      "examples": ["Example 1", "Example 2"]
    }
  ]
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]);
        return parsed.recommendations || [];
    } catch (error) {
        console.error("Gemini thumbnail analysis error:", error);
        return [];
    }
}

// â”€â”€ Content Gap Analysis â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export interface ContentGap {
    topic: string;
    opportunity: string;
    difficulty: "easy" | "medium" | "hard";
    potentialViews: string;
    reasoning: string;
}

export async function analyzeContentGapsWithAI(
    niche: string,
    existingContent: string[],
    competitorContent: string[]
): Promise<ContentGap[]> {
    const model = getModel();
    if (!model) return [];

    const prompt = `Identify content gaps and opportunities in the "${niche}" YouTube niche.

Existing content already covered:
${existingContent.slice(0, 15).map(t => `- "${t}"`).join("\n")}

Competitor content (top performers):
${competitorContent.slice(0, 15).map(t => `- "${t}"`).join("\n")}

Identify:
- Topics not being covered well
- Underserved audience segments
- Trending topics with low competition
- Evergreen content opportunities
- Unique angles on popular topics

Respond in JSON format only:
{
  "gaps": [
    {
      "topic": "Content gap topic",
      "opportunity": "Description of the opportunity",
      "difficulty": "medium",
      "potentialViews": "50K-100K",
      "reasoning": "Why this is a good opportunity"
    }
  ]
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]);
        return parsed.gaps || [];
    } catch (error) {
        console.error("Gemini content gap analysis error:", error);
        return [];
    }
}

// â”€â”€ Hashtag Generation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export interface HashtagResult {
    hashtag: string;
    category: "primary" | "secondary" | "trending" | "niche";
    reach: "high" | "medium" | "low";
}

export async function generateHashtagsWithAI(
    topic: string,
    niche: string,
    existingHashtags?: string[]
): Promise<HashtagResult[]> {
    const model = getModel();
    if (!model) return [];

    const existingInfo = existingHashtags?.length
        ? `\nPopular hashtags in this niche: ${existingHashtags.slice(0, 15).join(" ")}`
        : "";

    const prompt = `Generate optimal YouTube hashtags for a video about "${topic}" in the ${niche} niche.
${existingInfo}

Requirements:
- Generate 15-20 relevant hashtags
- Mix of broad reach and niche-specific tags
- Include trending hashtags if relevant
- Order by potential impact
- Use proper hashtag format (no spaces, camelCase for readability)

Respond in JSON format only:
{
  "hashtags": [
    {
      "hashtag": "#HashtagName",
      "category": "primary",
      "reach": "high"
    }
  ]
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]);
        return parsed.hashtags || [];
    } catch (error) {
        console.error("Gemini hashtag generation error:", error);
        return [];
    }
}
