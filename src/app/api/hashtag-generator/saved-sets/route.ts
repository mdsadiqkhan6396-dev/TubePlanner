import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

interface HashtagSet {
  id: string;
  name: string;
  description?: string;
  hashtags: string[];
  category?: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  usageCount: number;
}

const COOKIE_NAME = "hashtag_saved_sets";

async function getSavedSets(): Promise<HashtagSet[]> {
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

async function saveSetsToStorage(sets: HashtagSet[]): Promise<void> {
  const cookieStore = await cookies();
  
  cookieStore.set(COOKIE_NAME, JSON.stringify(sets), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });
}

// GET - Retrieve all saved sets
export async function GET() {
  try {
    const sets = await getSavedSets();
    
    return NextResponse.json({ 
      sets,
      meta: {
        total: sets.length,
      },
    });
  } catch (error) {
    console.error('Get saved sets error:', error);
    return NextResponse.json(
      { error: "Failed to retrieve saved sets" },
      { status: 500 }
    );
  }
}

// POST - Create a new saved set
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, hashtags, category } = body;
    
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    
    if (!hashtags || !Array.isArray(hashtags) || hashtags.length === 0) {
      return NextResponse.json({ error: "Hashtags array is required" }, { status: 400 });
    }
    
    const sets = await getSavedSets();
    
    // Check for duplicate name
    if (sets.some(s => s.name.toLowerCase() === name.trim().toLowerCase())) {
      return NextResponse.json({ error: "A set with this name already exists" }, { status: 409 });
    }
    
    const newSet: HashtagSet = {
      id: `set-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: name.trim(),
      description: description?.trim() || undefined,
      hashtags: hashtags.map((h: string) => h.replace(/^#/, '').toLowerCase()),
      category: category || 'general',
      isDefault: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      usageCount: 0,
    };
    
    sets.unshift(newSet); // Add to beginning
    await saveSetsToStorage(sets);
    
    return NextResponse.json({ 
      set: newSet,
      message: "Set saved successfully",
    });
  } catch (error) {
    console.error('Create set error:', error);
    return NextResponse.json(
      { error: "Failed to save set" },
      { status: 500 }
    );
  }
}

// PUT - Update an existing set
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, description, hashtags, category, isDefault } = body;
    
    if (!id) {
      return NextResponse.json({ error: "Set ID is required" }, { status: 400 });
    }
    
    const sets = await getSavedSets();
    const index = sets.findIndex(s => s.id === id);
    
    if (index === -1) {
      return NextResponse.json({ error: "Set not found" }, { status: 404 });
    }
    
    // Update set
    const updatedSet: HashtagSet = {
      ...sets[index],
      name: name?.trim() || sets[index].name,
      description: description?.trim() ?? sets[index].description,
      hashtags: Array.isArray(hashtags) ? hashtags.map((h: string) => h.replace(/^#/, '').toLowerCase()) : sets[index].hashtags,
      category: category || sets[index].category,
      isDefault: typeof isDefault === 'boolean' ? isDefault : sets[index].isDefault,
      updatedAt: new Date().toISOString(),
    };
    
    sets[index] = updatedSet;
    await saveSetsToStorage(sets);
    
    return NextResponse.json({ 
      set: updatedSet,
      message: "Set updated successfully",
    });
  } catch (error) {
    console.error('Update set error:', error);
    return NextResponse.json(
      { error: "Failed to update set" },
      { status: 500 }
    );
  }
}

// DELETE - Remove a saved set
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: "Set ID is required" }, { status: 400 });
    }
    
    const sets = await getSavedSets();
    const index = sets.findIndex(s => s.id === id);
    
    if (index === -1) {
      return NextResponse.json({ error: "Set not found" }, { status: 404 });
    }
    
    sets.splice(index, 1);
    await saveSetsToStorage(sets);
    
    return NextResponse.json({ 
      message: "Set deleted successfully",
    });
  } catch (error) {
    console.error('Delete set error:', error);
    return NextResponse.json(
      { error: "Failed to delete set" },
      { status: 500 }
    );
  }
}
