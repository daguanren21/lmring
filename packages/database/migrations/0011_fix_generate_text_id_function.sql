-- Fix the generate_text_id function to avoid name collision with built-in length() function
-- The parameter was renamed from "length" to "id_length"
CREATE OR REPLACE FUNCTION generate_text_id(id_length INTEGER DEFAULT 32)
RETURNS TEXT AS $$
DECLARE
  chars TEXT := 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  result TEXT := '';
  i INTEGER;
  chars_length INTEGER;
BEGIN
  chars_length := length(chars);
  FOR i IN 1..id_length LOOP
    result := result || substr(chars, floor(random() * chars_length + 1)::INTEGER, 1);
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;
