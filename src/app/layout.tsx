import type { ReactNode } from "react";
import { geistSans, geistMono } from "@/lib";
import { metadata as siteMetadata } from "@/config";

import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-full`}
      >
        {children}

        <footer className="p-4 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            AI agent may make mistakes. Please verify information independently.
          </p>
        </footer>
      </body>
    </html>
  );
}
