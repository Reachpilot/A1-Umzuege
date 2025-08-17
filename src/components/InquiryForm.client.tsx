'use client';

import dynamic from 'next/dynamic';

// Dynamically import the InquiryForm component with no SSR
const InquiryForm = dynamic(
  () => import('./InquiryForm').then((mod) => mod.default),
  { ssr: false }
);

export default InquiryForm;
