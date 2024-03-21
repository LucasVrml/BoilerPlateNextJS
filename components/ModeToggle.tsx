"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <SunIcon size={20} className="black dark:hidden" />
      <MoonIcon size={20} className="hidden dark:block" />
    </button>
  );
}
