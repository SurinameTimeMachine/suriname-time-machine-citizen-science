import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://www.huygens.knaw.nl/en/projecten/suriname-time-machine/',
  ),
  title: 'Suriname Time Machine',
  description:
    "Discover how archives, maps, and citizen scientists bring Suriname's layered histories to life in the Suriname Tijdmachine.",
  keywords: [
    'Suriname',
    'Time Machine',
    'digital heritage',
    'citizen science',
    'Huygens Institute',
  ],
  openGraph: {
    title: 'Suriname Time Machine',
    description:
      'Explore the collective memory of Suriname through digitized archives, maps, and community stories.',
    url: 'https://www.huygens.knaw.nl/en/projecten/suriname-time-machine/',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suriname Time Machine',
    description:
      "Archives, maps, and citizen scientists keeping Suriname's heritage alive.",
  },
  authors: [{ name: 'Suriname Time Machine' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
