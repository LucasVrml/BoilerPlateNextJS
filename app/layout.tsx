import "../lib/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getSupabase } from "@/serverFunctions/utils";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Feed Me",
  description: "The fastest way to build apps with Next.js and Supabase",
};

import { Raleway } from "next/font/google";
import { redirect } from "next/navigation";
const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="themeMode"
        >
          <main className="w-full max-h-[100vh] min-h-[100vh] flex flex-col justify-center items-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
