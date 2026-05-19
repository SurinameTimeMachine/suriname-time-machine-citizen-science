import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// ─── Fonts ───────────────────────────────────────────────────────────────────
// Geist is the STM standard. Both weights are loaded via CSS variables so
// Tailwind can reference --font-sans and --font-mono.
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// ─── SEO defaults ─────────────────────────────────────────────────────────────
// Override this in each page with generateMetadata() or page-level metadata.
export const metadata: Metadata = {
  keywords: [
    'Suriname',
    'Time Machine',
    'digital heritage',
    'Huygens Institute',
  ],
  authors: [{ name: 'Suriname Time Machine' }],
};

// ─── Root layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/*
         * Optionally uncomment BackToTop if copied from the main repo:
         * <BackToTop />
         */}
      </body>
    </html>
  );
}
