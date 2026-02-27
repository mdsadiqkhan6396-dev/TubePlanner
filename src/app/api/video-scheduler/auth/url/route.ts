import { NextRequest, NextResponse } from "next/server";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/api/video-scheduler/auth/callback";

// Required scopes for uploading, scheduling, and analytics
const SCOPES = [
    "https://www.googleapis.com/auth/youtube.upload",
    "https://www.googleapis.com/auth/youtube",
    "https://www.googleapis.com/auth/youtube.force-ssl",
    "https://www.googleapis.com/auth/yt-analytics.readonly",
    "https://www.googleapis.com/auth/yt-analytics-monetary.readonly",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
].join(" ");

export async function GET(req: NextRequest) {
    if (!GOOGLE_CLIENT_ID) {
        return NextResponse.json(
            { error: "GOOGLE_CLIENT_ID is not configured. Please add it to your .env.local file." },
            { status: 500 }
        );
    }

    // Check if user wants to add a new account (force account selection)
    const searchParams = req.nextUrl.searchParams;
    const addNew = searchParams.get("addNew") === "true";

    const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    authUrl.searchParams.set("client_id", GOOGLE_CLIENT_ID);
    authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set("scope", SCOPES);
    authUrl.searchParams.set("access_type", "offline");
    
    // Force showing all logged-in accounts for selection
    // Using select_account shows the account picker with all accounts
    authUrl.searchParams.set("prompt", "select_account");
    
    // Add state parameter with timestamp to prevent caching
    authUrl.searchParams.set("state", Date.now().toString());

    return NextResponse.json({ url: authUrl.toString() });
}
