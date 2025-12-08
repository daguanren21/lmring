-- Add enabled field to api_keys and create user_enabled_models table
-- This migration adds provider enable/disable functionality and per-model enable tracking

-- ============================================================================
-- MODIFY api_keys TABLE
-- ============================================================================

-- Add enabled column to api_keys table
ALTER TABLE "public"."api_keys" ADD COLUMN IF NOT EXISTS "enabled" BOOLEAN NOT NULL DEFAULT false;

-- Add unique constraint for user+provider combination
ALTER TABLE "public"."api_keys" DROP CONSTRAINT IF EXISTS "api_keys_user_provider_unique";
ALTER TABLE "public"."api_keys" ADD CONSTRAINT "api_keys_user_provider_unique" UNIQUE ("user_id", "provider_name");

-- ============================================================================
-- CREATE user_enabled_models TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS "public"."user_enabled_models" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" UUID NOT NULL REFERENCES "public"."users"("id") ON DELETE CASCADE,
  "api_key_id" UUID NOT NULL REFERENCES "public"."api_keys"("id") ON DELETE CASCADE,
  "model_id" TEXT NOT NULL,
  "enabled" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================================
-- INDEXES
-- ============================================================================

CREATE INDEX IF NOT EXISTS "user_enabled_models_user_id_idx" ON "public"."user_enabled_models"("user_id");
CREATE INDEX IF NOT EXISTS "user_enabled_models_api_key_id_idx" ON "public"."user_enabled_models"("api_key_id");

-- Add unique constraint for api_key_id + model_id combination
ALTER TABLE "public"."user_enabled_models" DROP CONSTRAINT IF EXISTS "user_enabled_models_api_key_model_unique";
ALTER TABLE "public"."user_enabled_models" ADD CONSTRAINT "user_enabled_models_api_key_model_unique" UNIQUE ("api_key_id", "model_id");

