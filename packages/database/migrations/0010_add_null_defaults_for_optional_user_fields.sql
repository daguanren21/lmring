-- Add DEFAULT NULL for optional user fields to allow Better-Auth Drizzle adapter
-- to use SQL 'default' keyword without errors
-- These fields are nullable and should default to NULL when not explicitly set

ALTER TABLE "users" ALTER COLUMN "username" SET DEFAULT NULL;
ALTER TABLE "users" ALTER COLUMN "github_id" SET DEFAULT NULL;
ALTER TABLE "users" ALTER COLUMN "google_id" SET DEFAULT NULL;
ALTER TABLE "users" ALTER COLUMN "linuxdo_id" SET DEFAULT NULL;
ALTER TABLE "users" ALTER COLUMN "inviter_id" SET DEFAULT NULL;
ALTER TABLE "users" ALTER COLUMN "deleted_at" SET DEFAULT NULL;
