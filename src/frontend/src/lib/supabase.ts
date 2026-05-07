import { createClient } from "@supabase/supabase-js";

const env =
  (import.meta as unknown as { env: Record<string, string> }).env ?? {};

const SUPABASE_URL =
  env.VITE_SUPABASE_URL ??
  env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://pvtjnsevpxdzbdtmxptb.supabase.co";

const SUPABASE_ANON_KEY =
  env.VITE_SUPABASE_ANON_KEY ??
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dGpuc2V2cHhkemJkdG14cHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MTYzODgsImV4cCI6MjA5MzQ5MjM4OH0.uOIl4vi6aXS20rqA9UMof6xPYMpxCq3wUnZsgDaBE_o";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
