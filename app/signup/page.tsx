import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { List } from "lucide-react";

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          full_name: `${surname} ${name}`,
          first_name: `${surname}`,
          last_name: `${name}`,
        },
      },
    });
    if (error || !data.user?.id) {
      return redirect("/signup?message=Erreur lors de la création du compte");
    }
      return redirect("/protected/pageRoute");
  };

  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="hidden min-w-[50%] h-[100vh] md:flex justify-center items-start relative border-r bg-custo shadow-2xl">
        <Link href={"/welcome"} passHref>
          <div className="flex justify-center items-center gap-x-3 top-8 left-8 absolute">
            <List />
            <h1 className="text-2xl font-bold">FeedMe</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col min-w-[50%] h-full px-8 justify-center items-center gap-y-10">
        <h1 className="text-center font-extrabold text-4xl">
          Crée ton compte pour accéder à l'application !
        </h1>
        <form className="animate-in flex flex-col w-full justify-center gap-2 text-foreground max-w-md">
          <label className="text-md" htmlFor="surname">
            Prénom
          </label>
          <Input
            className="rounded-md px-4 py-2 border mb-6"
            name="surname"
            placeholder="John"
            required
          />
          <label className="text-md" htmlFor="name">
            Nom
          </label>
          <Input
            className="rounded-md px-4 py-2 border mb-6"
            name="name"
            placeholder="Smith"
            required
          />
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <Input
            className="rounded-md px-4 py-2 border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Mot de passe
          </label>
          <Input
            className="rounded-md px-4 py-2 border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton
            formAction={signUp}
            className="bg-primary/50 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Création du compte..."
          >
            Créer le compte
          </SubmitButton>
          <Link href="/login" className="w-full">
            <Button variant="outline" className="w-full">
              Se connecter
            </Button>
          </Link>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
