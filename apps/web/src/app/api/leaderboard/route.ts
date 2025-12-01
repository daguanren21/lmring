import { db } from '@lmring/database';
import { modelRankings } from '@lmring/database/schema';
import { desc } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number.parseInt(searchParams.get('limit') || '50', 10);
    const offset = Number.parseInt(searchParams.get('offset') || '0', 10);

    const rankings = await db
      .select()
      .from(modelRankings)
      .orderBy(desc(modelRankings.rankingScore))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({ rankings }, { status: 200 });
  } catch (error) {
    console.error('Get leaderboard error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
