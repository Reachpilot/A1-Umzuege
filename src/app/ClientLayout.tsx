'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Dynamically import GoogleMaps with no SSR
const GoogleMaps = dynamic(() => import('@/components/GoogleMaps'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Karte wird geladen...</div>
    </div>
  ),
});

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <GoogleMaps />
      <Footer />
    </>
  );
}
