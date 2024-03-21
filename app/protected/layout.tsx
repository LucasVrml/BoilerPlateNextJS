import { NavBar } from "@/components/NavBar";
import { getSupabase } from "@/serverFunctions/utils";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { supabase, user } = await getSupabase();
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="w-full max-h-[100vh] min-h-[100vh] flex flex-row justify-start items-center">
      <NavBar user={user} />
      {children}
    </div>
  );
}
