-- Allow inserts into public.users while row level security is enabled.
-- Better Auth server instance runs with a service connection, so we permit inserts unconditionally.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'users'
      AND policyname = 'Service can insert users'
  ) THEN
    CREATE POLICY "Service can insert users"
      ON "users" FOR INSERT
      WITH CHECK (true);
  END IF;
END;
$$;
