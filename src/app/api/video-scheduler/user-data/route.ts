import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  loadUserData,
  saveUserData,
  getOrCreateUser,
  generateUserId,
  findUserByEmail,
  UserData,
  Draft,
  VideoTemplate,
  UploadHistoryItem,
  ScheduledVideoItem,
} from "@/lib/storage";

interface StoredChannel {
  id: string;
  accessToken: string;
  refreshToken?: string;
  accountEmail?: string;
}

// GET - Load user data
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const action = searchParams.get("action");
  
  // Get user ID from cookie
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("yt_user_id");
  
  // Also check channels cookie to get email
  const channelsCookie = cookieStore.get("yt_channels");
  
  let userId = userIdCookie?.value;
  let userEmail: string | null = null;
  
  // Parse channels to get email for fallback lookup
  if (channelsCookie?.value) {
    try {
      const channels: StoredChannel[] = JSON.parse(channelsCookie.value);
      if (channels.length > 0 && channels[0].accountEmail) {
        userEmail = channels[0].accountEmail;
      }
    } catch {
      // Ignore parse errors
    }
  }
  
  if (!userId && !userEmail) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  
  try {
    // Try to load by ID first
    let userData = userId ? await loadUserData(userId) : null;
    
    // If not found and we have email, try to find by email
    if (!userData && userEmail) {
      userData = await findUserByEmail(userEmail);
    }
    
    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    // Different actions return different data
    switch (action) {
      case "channels":
        return NextResponse.json({
          channels: userData.channels,
          activeChannelId: userData.activeChannelId,
        });
      
      case "drafts":
        return NextResponse.json({ drafts: userData.drafts });
      
      case "templates":
        return NextResponse.json({ templates: userData.templates });
      
      case "history":
        return NextResponse.json({ uploadHistory: userData.uploadHistory });
      
      case "scheduled":
        return NextResponse.json({ scheduledVideos: userData.scheduledVideos });
      
      case "settings":
        return NextResponse.json({ settings: userData.settings });
      
      default:
        // Return all data (excluding sensitive tokens)
        return NextResponse.json({
          id: userData.id,
          channels: userData.channels.map(ch => ({
            id: ch.id,
            title: ch.title,
            thumbnailUrl: ch.thumbnailUrl,
            subscriberCount: ch.subscriberCount,
            videoCount: ch.videoCount,
            connectedAt: ch.connectedAt,
            accountEmail: ch.accountEmail,
            accountName: ch.accountName,
            isBrandAccount: ch.isBrandAccount,
            // Don't send tokens to client
          })),
          activeChannelId: userData.activeChannelId,
          drafts: userData.drafts,
          templates: userData.templates,
          uploadHistory: userData.uploadHistory,
          scheduledVideos: userData.scheduledVideos,
          settings: userData.settings,
          lastUpdated: userData.lastUpdated,
        });
    }
  } catch (error) {
    console.error("Error loading user data:", error);
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}

// POST - Save user data
export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("yt_user_id");
  const channelsCookie = cookieStore.get("yt_channels");
  
  let userId = userIdCookie?.value;
  
  // If no user ID but have channels, try to get user from channel email
  if (!userId && channelsCookie?.value) {
    try {
      const channels: StoredChannel[] = JSON.parse(channelsCookie.value);
      if (channels.length > 0 && channels[0].accountEmail) {
        userId = generateUserId(channels[0].accountEmail);
      }
    } catch {
      // Ignore
    }
  }
  
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  
  try {
    const body = await req.json();
    const { action, data } = body;
    
    let userData = await loadUserData(userId);
    
    if (!userData) {
      // Create new user data
      userData = {
        id: userId,
        channels: [],
        activeChannelId: null,
        drafts: [],
        templates: [],
        uploadHistory: [],
        scheduledVideos: [],
        settings: {
          defaultPrivacy: "private",
          defaultCategory: "22",
          defaultLanguage: "en",
          autoSaveDrafts: true,
          rememberLastChannel: true,
        },
        lastUpdated: new Date().toISOString(),
      };
    }
    
    switch (action) {
      case "drafts":
        userData.drafts = data as Draft[];
        break;
      
      case "templates":
        userData.templates = data as VideoTemplate[];
        break;
      
      case "history":
        userData.uploadHistory = data as UploadHistoryItem[];
        break;
      
      case "addHistory":
        const historyItem = data as UploadHistoryItem;
        userData.uploadHistory = [historyItem, ...userData.uploadHistory].slice(0, 100);
        break;
      
      case "scheduled":
        userData.scheduledVideos = data as ScheduledVideoItem[];
        break;
      
      case "settings":
        userData.settings = { ...userData.settings, ...data };
        break;
      
      case "activeChannel":
        userData.activeChannelId = data as string | null;
        break;
      
      case "sync":
        // Full sync - update everything except channels (handled by auth)
        if (data.drafts) userData.drafts = data.drafts;
        if (data.templates) userData.templates = data.templates;
        if (data.uploadHistory) userData.uploadHistory = data.uploadHistory;
        if (data.scheduledVideos) userData.scheduledVideos = data.scheduledVideos;
        if (data.settings) userData.settings = { ...userData.settings, ...data.settings };
        break;
      
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
    
    const saved = await saveUserData(userData);
    
    if (!saved) {
      return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, lastUpdated: userData.lastUpdated });
  } catch (error) {
    console.error("Error saving user data:", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
