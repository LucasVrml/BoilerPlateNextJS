// pages/index.js
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

const WelcomePage = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <div className="bg-animated"></div>
      <header className="fixed w-full left-0 top-0 h-[80px] flex justify-between items-center px-[8%] z-10">
        <div>
          <Logo />
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <Link href={"/login"}>
            <Button variant="outline">Se Connecter</Button>
          </Link>
          <Link href={"/signup"}>
            <Button className="gap-x-1">
              Commencer gratuitement <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </header>
      <main>
        <footer className="w-full flex justify-center items-center py-[100px]">
          <p>
            Fait avec ❤️ par <span className="font-bold"> Lucas Vermeulen</span>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default WelcomePage;
