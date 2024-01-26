import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import { audiowide, sourceSans } from '@/shared/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Felipe Araujo',
  description: "A website to showcase Felipe Araujo's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={`${audiowide.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
