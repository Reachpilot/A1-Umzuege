'use client';

import dynamic from 'next/dynamic';

// Dynamically import the ServicesSection component with no SSR
const ServicesSection = dynamic(
  () => import('./ServicesSection').then((mod) => mod.default),
  { ssr: false }
);

export default ServicesSection;
