import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RPG Idle Game',
  description: 'An idle RPG game built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}