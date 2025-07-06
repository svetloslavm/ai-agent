import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';

import { geistSans } from '@/lib';
import { metadata as siteMetadata } from '@/config';
import { Footer, Header, ThemeSwitcher } from '@/components';

import './globals.css';

export const metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full flex justify-end border-b border-b-foreground/10 h-16">
                <div className="w-full flex items-center p-3 px-5 text-sm justify-end gap-8">
                  <ThemeSwitcher />
                  <Header />
                </div>
              </nav>

              <ToastContainer position="top-center" toastStyle={{ width: '100%' }} />
              {children}
            </div>
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
