/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aktiviert die statische HTML-Export-Option für Netlify
  output: 'export',
  
  // Deaktiviert die Generierung von .html-Erweiterungen für saubere URLs
  trailingSlash: true,
  
  // Optimierte Bildformate
  images: {
    unoptimized: true, // Deaktiviert die Bildoptimierung für statische Exporte
    domains: [],
  },
  
  // Aktiviert strenge Modus für React
  reactStrictMode: true,
  
  // Deaktiviert die Generierung von .next/server Verzeichnis für statische Exporte
  outputFileTracing: false,
  
  // Konfiguration für statische Exporte
  distDir: 'out',
  
  // Webpack Konfiguration
  webpack: (config, { isServer }) => {
    // Fügen Sie hier benutzerdefinierte Webpack-Konfigurationen hinzu
    return config;
  },
  
  // Internationalisierung (falls benötigt)
  // i18n: {
  //   locales: ['de'],
  //   defaultLocale: 'de',
  // },
  
  // Erlaubt die Verwendung von externen Bildquellen
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  
  // Aktiviert Komprimierung für statische Assets
  compress: true,
  
  // Aktiviert React Fast Refresh in der Entwicklung
  reactRefresh: true,
};

module.exports = nextConfig;
