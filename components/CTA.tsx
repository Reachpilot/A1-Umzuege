'use client';

import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTA({ 
  title, 
  description, 
  buttonText, 
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref
}: CTAProps) {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
          <p className="text-xl text-white/90 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href={buttonHref}
              className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {buttonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link 
                href={secondaryButtonHref}
                className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
