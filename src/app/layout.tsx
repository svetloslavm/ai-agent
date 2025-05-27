import type { ReactNode } from "react";
import { geistSans } from "@/lib";
import { metadata as siteMetadata } from "@/config";
import { ThemeProvider } from "next-themes";
import { HeaderAuth, ThemeSwitcher } from "@/components";

import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full flex justify-end border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex items-center p-3 px-5 text-sm justify-end gap-8">
                  <ThemeSwitcher />
                  <HeaderAuth />
                </div>
              </nav>

              <div className="flex flex-col max-w-5xl m-auto">{children}</div>
            </div>
          </main>

          <footer className="p-4 text-center fixed bottom-0 w-full">
            <p className="text-[12px] text-muted-foreground">
              AI agent may make mistakes. Please verify information
              independently.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
