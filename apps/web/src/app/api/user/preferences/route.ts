import { db } from '@lmring/database';
import { userPreferences } from '@lmring/database/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { auth } from '@/libs/Auth';

export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    const [preferences] = await db
      .select()
      .from(userPreferences)
      .where(eq(userPreferences.userId, userId))
      .limit(1);

    if (!preferences) {
      const [newPreferences] = await db
        .insert(userPreferences)
        .values({
          userId,
          theme: 'system',
          language: 'en',
          configSource: 'manual',
        })
        .returning();

      return NextResponse.json({ preferences: newPreferences }, { status: 200 });
    }

    return NextResponse.json({ preferences }, { status: 200 });
  } catch (error) {
    console.error('Get preferences error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = (await request.json()) as {
      theme?: string;
      language?: string;
      defaultModels?: string[];
      configSource?: 'manual' | 'cherry-studio' | 'newapi';
    };

    const [existing] = await db
      .select()
      .from(userPreferences)
      .where(eq(userPreferences.userId, userId))
      .limit(1);

    if (existing) {
      const [updated] = await db
        .update(userPreferences)
        .set({
          theme: body.theme ?? existing.theme,
          language: body.language ?? existing.language,
          defaultModels: body.defaultModels ?? existing.defaultModels,
          configSource: body.configSource ?? existing.configSource,
          updatedAt: new Date(),
        })
        .where(eq(userPreferences.id, existing.id))
        .returning();

      return NextResponse.json({ preferences: updated }, { status: 200 });
    }

    const [newPreferences] = await db
      .insert(userPreferences)
      .values({
        userId,
        theme: body.theme || 'system',
        language: body.language || 'en',
        defaultModels: body.defaultModels,
        configSource: body.configSource || 'manual',
      })
      .returning();

    return NextResponse.json({ preferences: newPreferences }, { status: 201 });
  } catch (error) {
    console.error('Update preferences error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
