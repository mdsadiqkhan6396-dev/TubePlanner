import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

interface HashtagHistory {
  id: string;
  hashtags: string[];
  videoTitle?: string;
  videoId?: string;
  usedAt: string;
  performance?: {
    views: number;
    clicks: number;
  };
}

const COOKIE_NAME = "hashtag_history";

async function getHistory(): Promise<HashtagHistory[]> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  
  if (!cookie?.value) {
    return [];
  }
  
  try {
    return JSON.parse(cookie.value);
  } catch {
    return [];
  }
}

async function saveHistory(history: HashtagHistory[]): Promise<void> {
  const cookieStore = await cookies();
  
  cookieStore.set(COOKIE_NAME, JSON.stringify(history), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });
}

// GET - Retrieve hashtag history
export async function GET() {
  try {
    const history = await getHistory();
    
    return NextResponse.json({ 
      history,
      meta: {
        total: history.length,
      },
    });
  } catch (error) {
    console.error('Get history error:', error);
    return NextResponse.json(
      { error: "Failed to retrieve history" },
      { status: 500 }
    );
  }
}

// POST - Add entry to history (called when copying hashtags)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { hashtags, videoTitle, videoId } = body;
    
    if (!hashtags || !Array.isArray(hashtags) || hashtags.length === 0) {
      return NextResponse.json({ error: "Hashtags array is required" }, { status: 400 });
    }
    
    const history = await getHistory();
    
    const newEntry: HashtagHistory = {
      id: `history-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      hashtags: hashtags.map((h: string) => h.replace(/^#/, '').toLowerCase()),
      videoTitle: videoTitle?.trim() || undefined,
      videoId: videoId || undefined,
      usedAt: new Date().toISOString(),
    };
    
    // Add to beginning
    history.unshift(newEntry);
    await saveHistory(history);
    
    return NextResponse.json({ 
      entry: newEntry,
      message: "History updated",
    });
  } catch (error) {
    console.error('Add to history error:', error);
    return NextResponse.json(
      { error: "Failed to update history" },
      { status: 500 }
    );
  }
}

// DELETE - Clear history or remove specific entry
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const clearAll = searchParams.get('clearAll') === 'true';
    
    if (clearAll) {
      await saveHistory([]);
      return NextResponse.json({ message: "History cleared" });
    }
    
    if (!id) {
      return NextResponse.json({ error: "Entry ID or clearAll=true is required" }, { status: 400 });
    }
    
    const history = await getHistory();
    const index = history.findIndex(h => h.id === id);
    
    if (index === -1) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }
    
    history.splice(index, 1);
    await saveHistory(history);
    
    return NextResponse.json({ message: "Entry deleted" });
  } catch (error) {
    console.error('Delete history error:', error);
    return NextResponse.json(
      { error: "Failed to delete history" },
      { status: 500 }
    );
  }
}
