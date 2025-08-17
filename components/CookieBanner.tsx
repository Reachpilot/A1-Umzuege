'use client';

import { useState, useEffect } from 'react';
import { FaCookieBite, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Prüfen, ob der Benutzer bereits zugestimmt hat
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Zustimmung speichern
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    // Ablehnung speichern (nur für die Dauer der Sitzung)
    sessionStorage.setItem('cookieConsent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <FaCookieBite className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-700">
                Wir verwenden ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. 
                Durch die Nutzung unserer Website stimmen Sie der Verwendung dieser Cookies zu. 
                Weitere Informationen finden Sie in unserer{' '}
                <Link href="/datenschutz" className="text-primary hover:underline font-medium">
                  Datenschutzerklärung
                </Link>.
              </p>
            </div>
          </div>
          <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            <button
              type="button"
              onClick={handleAccept}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Verstanden
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
