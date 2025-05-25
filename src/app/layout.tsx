import type { ReactNode } from "react";
import { geistSans, geistMono } from "@/lib";
import { metadata as siteMetadata } from "@/config";

import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
