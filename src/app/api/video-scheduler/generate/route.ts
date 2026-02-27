import { NextRequest, NextResponse } from "next/server";
import { generateWithGemini } from "@/lib/gemini";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { currentTitle, currentDescription, currentTags, fileName, categoryId } = body;

        // Build context for AI
        const context = [];
        if (currentTitle) context.push(`Current title: "${currentTitle}"`);
        if (currentDescription) context.push(`Current description: "${currentDescription}"`);
        if (currentTags?.length) context.push(`Current tags: ${currentTags.join(", ")}`);
        if (fileName) context.push(`File name: "${fileName}"`);
        if (categoryId) {
            const categories: Record<string, string> = {
                "1": "Film & Animation", "2": "Autos & Vehicles", "10": "Music",
                "15": "Pets & Animals", "17": "Sports", "20": "Gaming",
                "22": "People & Blogs", "23": "Comedy", "24": "Entertainment",
                "25": "News & Politics", "26": "Howto & Style", "27": "Education",
                "28": "Science & Technology",
            };
            context.push(`Category: ${categories[categoryId] || "People & Blogs"}`);
        }

        const prompt = `You are a YouTube SEO expert. Based on the following video information, generate optimized content suggestions.

${context.join("\n")}

Generate:
1. 5 engaging, click-worthy video titles (100 chars max each, use power words, create curiosity)
2. 2 SEO-optimized descriptions (include relevant keywords, call-to-action, natural language)
3. 15 relevant tags (single words or short phrases, mix of broad and specific)
4. 5 trending hashtags (without the # symbol)

Respond ONLY with valid JSON in this exact format:
{
  "titles": ["title1", "title2", "title3", "title4", "title5"],
  "descriptions": ["description1", "description2"],
  "tags": ["tag1", "tag2", ...],
  "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"]
}`;

        const response = await generateWithGemini(prompt);

        // Parse the response
        let suggestions;
        try {
            // Extract JSON from response
            const jsonMatch = response.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                suggestions = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error("No JSON found in response");
            }
        } catch (parseError) {
            console.error("Failed to parse AI response:", parseError);
            console.error("Raw response:", response);
            
            // Return default suggestions if parsing fails
            suggestions = {
                titles: [
                    currentTitle ? `${currentTitle} | Must Watch!` : "Amazing Video You Need to See",
                    currentTitle ? `Why ${currentTitle} Changes Everything` : "This Will Blow Your Mind",
                    currentTitle ? `The Truth About ${currentTitle}` : "You Won't Believe What Happens",
                    currentTitle ? `${currentTitle} Explained` : "Ultimate Guide for Beginners",
                    currentTitle ? `How ${currentTitle} Actually Works` : "Everything You Need to Know",
                ],
                descriptions: [
                    `${currentDescription || "Check out this amazing video!"}\n\n🔔 Don't forget to subscribe and turn on notifications!\n👍 Like this video if you found it helpful\n💬 Drop a comment below with your thoughts\n\n#youtube #video #content`,
                    `${currentDescription || "In this video, we explore something incredible."}\n\n⏰ Timestamps:\n0:00 - Introduction\n\n📱 Connect with me:\n• Twitter: @channel\n• Instagram: @channel\n\n🎬 Related Videos:\n• [Link to related video]`,
                ],
                tags: ["youtube", "video", "tutorial", "howto", "guide", "tips", "tricks", "learn", "education", "entertainment", "viral", "trending", "2026", "best", "top"],
                hashtags: ["YouTube", "Viral", "Trending", "MustWatch", "Tutorial"],
            };
        }

        return NextResponse.json(suggestions);

    } catch (error) {
        console.error("AI generation error:", error);
        return NextResponse.json(
            { error: "Failed to generate suggestions. Please try again." },
            { status: 500 }
        );
    }
}
