import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';
import dynamic from 'next/dynamic';

// Dynamisches Import für das Cookie-Banner (wird nur clientseitig gerendert)
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false, // Deaktiviere serverseitiges Rendering für diese Komponente
});

// Load fonts with preloading
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata = {
  title: 'A1 Umzüge | Umzugsunternehmen Hannover & ganz Deutschland',
  description: 'A1 Umzüge – Ihr Partner für stressfreie Privat- & Firmenumzüge in Hannover, Niedersachsen & bundesweit. Kostenloses Angebot & Versicherung inklusive.',
  keywords: 'Umzugsunternehmen, Privatumzug, Firmenumzug, Entrümpelung, Umzugsservice Hannover, Umzug Deutschland, A1 Umzüge, Möbeltransport, Umzugshelfer',
  openGraph: {
    title: 'A1 Umzüge | Professionelles Umzugsunternehmen in Hannover & bundesweit',
    description: 'Ihr zuverlässiger Partner für Privat- und Firmenumzüge in Hannover, Niedersachsen und ganz Deutschland',
    url: 'https://www.a1-umzuege.de',
    siteName: 'A1 Umzüge',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A1 Umzüge - Professioneller Umzugsservice',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A1 Umzüge - Professioneller Umzugsservice',
    description: 'Ihr zuverlässiger Partner für Umzüge in ganz Deutschland',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IHR_GOOGLE_VERIFICATION_CODE',
    yandex: 'IHR_YANDEX_VERIFICATION',
  },
  alternates: {
    canonical: 'https://www.a1-umzuege-hannover.de',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-a1.png' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#25A9E0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicons/favicon-a1.png" type="image/png" />
        <link rel="shortcut icon" href="/favicons/favicon-a1.png" type="image/png" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <ClientLayout>
          {children}
          <CookieBanner />
        </ClientLayout>
      </body>
    </html>
  );
}
