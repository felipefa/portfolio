import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import { josefinSans, otomanopeeOne } from '@/shared/styles/fonts';

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
      <body className={`${otomanopeeOne.variable}  ${josefinSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
