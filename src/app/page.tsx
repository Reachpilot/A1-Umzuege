import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaShieldAlt, FaTruckMoving, FaBoxOpen } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamische Imports für bessere Performance
const InstagramPhone = dynamic(() => import('@/components/InstagramPhone'), { ssr: false });
const ServicesOverview = dynamic(() => import('@/components/ServicesOverview'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { ssr: false });
const InquiryForm = dynamic(() => import('@/components/InquiryForm.client'), { ssr: false });

// SEO-Metadaten für die Startseite
export const metadata: Metadata = {
  title: 'A1 Umzüge Hannover | Ihr Umzugsunternehmen für Privat & Firma',
  description: 'Professionelle Umzüge in Hannover, Burgdorf & ganz Niedersachsen. Kostenloses Angebot für Privat- & Firmenumzüge. ☎ 05136 8017632',
  keywords: [
    'Umzugsunternehmen Hannover', 'Umzugsfirma Burgdorf', 'Umzug Niedersachsen', 
    'Möbeltransport Hannover', 'Entrümpelung Hannover', 'Firmenumzug Hannover',
    'Privatumzug Hannover', 'internationale Umzüge', 'Umzugshelfer buchen'
  ],
  openGraph: {
    title: 'A1 Umzüge Hannover | Professioneller Umzugsservice',
    description: 'Ihr zuverlässiges Umzugsunternehmen für Hannover und Umgebung. Komplettservice inkl. Verpackung, Transport und Montage.',
    url: 'https://www.a1-umzuege-hannover.de',
    siteName: 'A1 Umzüge',
    locale: 'de_DE',
    type: 'website',
  },
};

// Strukturierte Daten für besseres Google-Listing
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "A1 Umzüge",
  "image": "https://www.a1-umzuege-hannover.de/images/logo.png",
  "telephone": "+4951368017632",
  "url": "https://www.a1-umzuege-hannover.de",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1",
    "addressLocality": "Burgdorf",
    "postalCode": "31303",
    "addressCountry": "DE"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/a1umzuege",
    "https://www.instagram.com/a1umzuege"
  ]
};

export default function Home() {
  return (
    <main itemScope itemType="https://schema.org/MovingCompany">
      {/* Strukturierte Daten als JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative flex flex-col" itemScope itemType="https://schema.org/Service">
        <div className="relative h-screen max-h-[800px] min-h-[600px] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source 
                srcSet="/images/hintergrund-hero.webp" 
                type="image/webp"
              />
              <source 
                srcSet="/images/hintergrund-hero.jpg" 
                type="image/jpeg"
              />
              <img 
                src="/images/hintergrund-hero.webp" 
                alt="Umzugsunternehmen Hannover - Professioneller Möbeltransport" 
                className="w-full h-full object-cover"
                loading="eager"
                width={1920}
                height={1080}
                itemProp="image"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/80"></div>
          </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight animate-fade-in" itemProp="name">
              A1 Umzüge – Ihr <span className="text-primary">Umzugsunternehmen</span> für Hannover, Burgdorf & ganz Niedersachsen
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl" itemProp="description">
              Professionelle Umzüge in Hannover, Burgdorf & Umgebung. Kostenlose Besichtigung, fachgerechter Möbeltransport & Entrümpelungsservice. Jetzt Angebot anfordern!</p>
            <div className="flex flex-row flex-nowrap items-center">
              <Link 
                href="/kontakt" 
                className="inline-flex items-center justify-center bg-primary text-white hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 px-8 py-4 text-lg font-medium rounded-lg whitespace-nowrap"
              >
                Kostenloses Angebot anfordern
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-white"></div>
                  ))}
                </div>
                <span>700+ zufriedene Kunden jährlich</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-gray-900 font-bold">4.8</span>
                </div>
                <span>Ausgezeichnet auf Google</span>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        
        {/* Consultation Info Section - Now part of the hero section for seamless transition */}
        <div className="bg-white">
          <div className="bg-gray-50 py-8 border-t border-gray-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.994l-.353.354a.5.5 0 01-.708 0L10 7.293l-2.646 2.647a.5.5 0 01-.708 0l-.353-.354a.5.5 0 010-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 010 .708z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Kostenloser Besichtigungstermin vor Ort oder telefonisch</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-gray-200"></div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.994l-.353.354a.5.5 0 01-.708 0L10 7.293l-2.646 2.647a.5.5 0 01-.708 0l-.353-.354a.5.5 0 010-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 010 .708z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Individuelle Planung & schriftliches Angebot in kurzer Zeit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Instagram Phone Section */}
      <InstagramPhone />

      <TestimonialsSection />

      <InquiryForm />

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 -left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay"></div>
          <div className="absolute bottom-1/3 -right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für einen stressfreien Umzug?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Über 1.000 zufriedene Kunden vertrauen auf unseren professionellen Umzugsservice. 
              Lassen Sie sich jetzt von unserem Expertenteam beraten.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <FaPhoneAlt className="mr-2" />
                Kostenlose Beratung anfordern
              </a>
              <a 
                href="tel:+4951368017632" 
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Jetzt anrufen
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8/5 auf Google bewertet</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Zertifizierte Umzugsprofis</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-300 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span>Über 700 zufriedene Kunden jährlich</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}