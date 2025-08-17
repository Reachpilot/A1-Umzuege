'use client';

import dynamic from 'next/dynamic';

// Dynamically import the TestimonialsSection component with no SSR
const TestimonialsSection = dynamic(
  () => import('./TestimonialsSection').then((mod) => mod.default),
  { ssr: false }
);

export default TestimonialsSection;
