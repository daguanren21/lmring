-- Align account table with Better Auth >= 1.3.33 expected schema
ALTER TABLE "account" 
  ADD COLUMN IF NOT EXISTS "access_token_expires_at" TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS "refresh_token_expires_at" TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS "scope" TEXT;

