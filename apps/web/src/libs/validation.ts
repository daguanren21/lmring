import { z } from 'zod';

export const conversationSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(255, 'Title must be less than 255 characters')
    .trim(),
});

export const messageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z
    .string()
    .min(1, 'Content is required')
    .max(50000, 'Content must be less than 50000 characters'),
});

export const modelResponseSchema = z.object({
  messageId: z.string().uuid('Invalid message ID'),
  modelName: z.string().min(1).max(100),
  providerName: z.string().min(1).max(100),
  responseContent: z.string().min(1).max(50000),
  tokensUsed: z.number().int().min(0).max(1000000).optional(),
  responseTimeMs: z.number().int().min(0).max(3600000).optional(),
});

export const voteSchema = z.object({
  messageId: z.string().uuid('Invalid message ID'),
  modelResponseId: z.string().uuid('Invalid model response ID'),
  voteType: z.enum(['like', 'dislike', 'neutral']),
});

export const apiKeySchema = z.object({
  providerName: z.string().min(1).max(50),
  apiKey: z.string().min(10).max(500),
});

export const userPreferencesSchema = z.object({
  theme: z.string().max(50).optional(),
  language: z.string().max(10).optional(),
  defaultModels: z.array(z.string().max(100)).max(10).optional(),
  configSource: z.enum(['manual', 'cherry-studio', 'newapi']).optional(),
});

export const shareSchema = z.object({
  expiresInDays: z.number().int().min(1).max(365).optional(),
});

const allowedProviders = [
  'openai',
  'anthropic',
  'deepseek',
  'mistral',
  'xai',
  'openrouter',
  'google',
  'cohere',
  'together',
  'perplexity',
] as const;

export const arenaModelSchema = z.object({
  providerId: z.enum(allowedProviders),
  modelId: z.string().min(1).max(200),
  apiKey: z.string().min(10).max(500),
  options: z
    .object({
      temperature: z.number().min(0).max(2).optional(),
      maxTokens: z.number().int().min(1).max(100000).optional(),
      topP: z.number().min(0).max(1).optional(),
    })
    .optional(),
});

export const arenaCompareSchema = z.object({
  models: z.array(arenaModelSchema).min(1).max(10),
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant', 'system']),
        content: z.string().min(1).max(50000),
      }),
    )
    .min(1)
    .max(100),
  options: z
    .object({
      streaming: z.boolean().optional(),
      stopOnError: z.boolean().optional(),
    })
    .optional(),
});
