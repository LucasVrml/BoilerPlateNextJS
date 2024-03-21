import { getSupabase } from "@/serverFunctions/utils";
import { redirect } from "next/navigation";

export default async function home() {

  const { supabase, user } = await getSupabase()
    if(!user) {
        redirect("/login")
    } else {
      redirect("/protected/pageRoute")
    }

  return (
    <></>
  );
}
