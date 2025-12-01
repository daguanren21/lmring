import { db } from '@lmring/database';
import {
  conversations,
  messages,
  modelRankings,
  modelResponses,
  userVotes,
} from '@lmring/database/schema';
import { and, eq, sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { auth } from '@/libs/Auth';

async function updateModelRanking(modelName: string, providerName: string) {
  const votes = await db
    .select({
      voteType: userVotes.voteType,
      count: sql<number>`count(*)::int`,
    })
    .from(userVotes)
    .innerJoin(modelResponses, eq(userVotes.modelResponseId, modelResponses.id))
    .where(
      and(eq(modelResponses.modelName, modelName), eq(modelResponses.providerName, providerName)),
    )
    .groupBy(userVotes.voteType);

  let totalLikes = 0;
  let totalDislikes = 0;
  let totalNeutral = 0;

  for (const vote of votes) {
    if (vote.voteType === 'like') totalLikes = vote.count;
    else if (vote.voteType === 'dislike') totalDislikes = vote.count;
    else if (vote.voteType === 'neutral') totalNeutral = vote.count;
  }

  const totalVotes = totalLikes + totalDislikes + totalNeutral;
  const rankingScore = totalVotes > 0 ? (totalLikes / totalVotes) * 100 : 0;

  await db
    .insert(modelRankings)
    .values({
      modelName,
      providerName,
      totalLikes,
      totalDislikes,
      totalNeutral,
      rankingScore,
    })
    .onConflictDoUpdate({
      target: [modelRankings.modelName, modelRankings.providerName],
      set: {
        totalLikes,
        totalDislikes,
        totalNeutral,
        rankingScore,
        updatedAt: new Date(),
      },
    });
}

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = (await request.json()) as {
      messageId: string;
      modelResponseId: string;
      voteType: 'like' | 'dislike' | 'neutral';
    };

    if (!body.messageId || !body.modelResponseId || !body.voteType) {
      return NextResponse.json(
        { error: 'messageId, modelResponseId, and voteType are required' },
        { status: 400 },
      );
    }

    const [message] = await db
      .select({
        id: messages.id,
        userId: conversations.userId,
      })
      .from(messages)
      .innerJoin(conversations, eq(messages.conversationId, conversations.id))
      .where(eq(messages.id, body.messageId))
      .limit(1);

    if (!message || message.userId !== userId) {
      return NextResponse.json({ error: 'Message not found or unauthorized' }, { status: 404 });
    }

    const [modelResponse] = await db
      .select()
      .from(modelResponses)
      .where(eq(modelResponses.id, body.modelResponseId))
      .limit(1);

    if (!modelResponse) {
      return NextResponse.json({ error: 'Model response not found' }, { status: 404 });
    }

    const [existing] = await db
      .select()
      .from(userVotes)
      .where(and(eq(userVotes.userId, userId), eq(userVotes.modelResponseId, body.modelResponseId)))
      .limit(1);

    if (existing) {
      const [updated] = await db
        .update(userVotes)
        .set({
          voteType: body.voteType,
          updatedAt: new Date(),
        })
        .where(eq(userVotes.id, existing.id))
        .returning();

      await updateModelRanking(modelResponse.modelName, modelResponse.providerName);

      return NextResponse.json({ vote: updated }, { status: 200 });
    }

    const [newVote] = await db
      .insert(userVotes)
      .values({
        userId,
        messageId: body.messageId,
        modelResponseId: body.modelResponseId,
        voteType: body.voteType,
      })
      .returning();

    await updateModelRanking(modelResponse.modelName, modelResponse.providerName);

    return NextResponse.json({ vote: newVote }, { status: 201 });
  } catch (error) {
    console.error('Create/update vote error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const { searchParams } = new URL(request.url);
    const messageId = searchParams.get('messageId');

    const query = db.select().from(userVotes).where(eq(userVotes.userId, userId));

    if (messageId) {
      query.where(and(eq(userVotes.userId, userId), eq(userVotes.messageId, messageId)));
    }

    const votes = await query;

    return NextResponse.json({ votes }, { status: 200 });
  } catch (error) {
    console.error('Get votes error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const { searchParams } = new URL(request.url);
    const voteId = searchParams.get('id');

    if (!voteId) {
      return NextResponse.json({ error: 'Vote ID is required' }, { status: 400 });
    }

    const [existing] = await db
      .select()
      .from(userVotes)
      .where(and(eq(userVotes.id, voteId), eq(userVotes.userId, userId)))
      .limit(1);

    if (!existing) {
      return NextResponse.json({ error: 'Vote not found' }, { status: 404 });
    }

    const [modelResponse] = await db
      .select()
      .from(modelResponses)
      .where(eq(modelResponses.id, existing.modelResponseId))
      .limit(1);

    await db.delete(userVotes).where(eq(userVotes.id, voteId));

    if (modelResponse) {
      await updateModelRanking(modelResponse.modelName, modelResponse.providerName);
    }

    return NextResponse.json({ message: 'Vote deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Delete vote error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
