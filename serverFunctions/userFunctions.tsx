import { redirect } from "next/navigation";
import { getSupabase } from "./utils";
import { createClient } from "@/utils/supabase/client";

export async function getUserInfos() {
  const { supabase, user } = await getSupabase();
  return await supabase.from("user").select("*").eq("id", user.id);
}

export const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/login");
};
