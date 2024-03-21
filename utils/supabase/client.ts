import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  return createBrowserClient(
    process.env.NODE_ENV === "development" ? "http://127.0.0.1:54321" : process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NODE_ENV === "development" ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0" : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
};
