import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Phạm Nguyễn Thuận - Fullstack Developer',
  description: 'Fullstack Developer specializing in 3D Web Applications with Next.js, React, and Three.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
