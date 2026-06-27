import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiquidBackground from '@/components/LiquidBackground';
import GlobalScrollReveal from '@/components/GlobalScrollReveal';
import CursorTrail from '@/components/CursorTrail';

export const metadata: Metadata = {
  title: 'LUMEN & SHADOW | Architectural Lighting',
  description: 'High-end architectural lighting design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CursorTrail />
        <GlobalScrollReveal />
        <div className="flex flex-col min-h-screen">
          <LiquidBackground />
          <Navbar />
          <main className="flex-grow flex flex-col pt-24 md:pt-32">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
