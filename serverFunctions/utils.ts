"use server";

import { createClient } from "@/utils/supabase/server";
import { unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

export async function getSupabase() {
  unstable_noStore();
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return { supabase, user };
}
