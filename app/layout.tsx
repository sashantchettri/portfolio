// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sashant Chettri Portfolio',
  description: 'Electronics Engineering Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
        <header className="sticky top-0 bg-white shadow z-10 p-4">
          <nav className="flex gap-6 text-blue-600 font-semibold">
            <Link href="/">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="bg-gray-100 text-center p-4 text-sm">
          &copy; {new Date().getFullYear()} Sashant Chettri
        </footer>
      </body>
    </html>
  );
}
