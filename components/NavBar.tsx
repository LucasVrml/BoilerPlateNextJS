"use client";

import Link from "next/link";
import { Soup, User } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { signOut } from "@/serverFunctions/userFunctions";
import { User as Usr } from "@supabase/supabase-js";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function NavBar({user} : {user: Usr | null}) {
  const pathname = usePathname();
  const name = user?.email as string;

  return (
    <div className="w-[5vw] h-[100vh] flex flex-col justify-start items-center border-r pt-2 px-4 bg-card">
      <Logo />
      <div className="flex flex-col w-full h-full items-start justify-start gap-y-6 mt-7">
        <Link className="w-full" href="/protected/pageRoute" passHref>
          <div
            className={`${pathname.includes("protected/recipes") ? "bg-slate-100 dark:bg-neutral-800" : "hover:bg-slate-100 dark:hover:bg-neutral-800"} gap-x-2 py-2 px-2 w-full flex justify-center items-center cursor-pointer rounded-md transition-all`}
          >
            <Soup size={20} />
          </div>
        </Link>
      </div>
      <div className="flex flex-col w-full items-start justify-start gap-y-2 mb-4">
        <div className=" hover:bg-slate-100 dark:hover:bg-neutral-800 gap-x-2 py-2 px-2 w-full flex justify-center items-center cursor-pointer rounded-md transition-all">
          <ModeToggle />
        </div>
        <div className=" hover:bg-slate-100 dark:hover:bg-neutral-800 gap-x-2 py-2 px-2 w-full flex justify-center items-center cursor-pointer rounded-full border transition-all">
        <Drawer direction="right">
          <DrawerTrigger>
            <User size={20} />
          </DrawerTrigger>
          <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] max-w-[90vw] rounded-none flex flex-col justify-start items-center">
            <DrawerHeader className="mt-[10vh] w-full flex flex-col justify-center items-center">
              <Avatar className="scale-[300%] mb-16">
                <AvatarFallback className="capitalize">{name[0]}</AvatarFallback>
              </Avatar>
              <h1 className="text-xl">{name}</h1>
            </DrawerHeader>
            <DrawerFooter className="flex flex-row justify-center items-center gap-x-2 mb-4">
              <DrawerClose>
                <Button variant="outline">Annuler</Button>
              </DrawerClose>
              <form action={signOut}>
                <Button variant="outline" className="hover:bg-destructive/80">
                  Se déconnecter
                </Button>
              </form>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </div>
      </div>
    </div>
  );
}
