'use client';

import { FaCookieBite, FaCheck, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CookieSettings() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Lade gespeicherte Einstellungen
    const savedSettings = localStorage.getItem('cookieSettings');
    if (savedSettings) {
      setCookieSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const handleResetSettings = () => {
    const defaultSettings = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setCookieSettings(defaultSettings);
    localStorage.setItem('cookieSettings', JSON.stringify(defaultSettings));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-amber-50">
            <FaCookieBite className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Cookie-Einstellungen</h1>
          <p className="mt-2 text-gray-600">
            Verwalten Sie Ihre Cookie-Einstellungen für diese Website
          </p>
        </div>

        <div className="space-y-6">
          {/* Notwendige Cookies */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                    <FaCheck className="h-3 w-3 text-green-600" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Technisch notwendige Cookies
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Immer aktiv
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Diese Cookies sind für die grundlegenden Funktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
              </div>
              <div className="flex items-center h-5">
                <input
                  id="necessary"
                  name="necessary"
                  type="checkbox"
                  checked={cookieSettings.necessary}
                  disabled
                  className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className={`h-5 w-5 rounded-full ${cookieSettings.analytics ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                    {cookieSettings.analytics ? (
                      <FaCheck className="h-3 w-3 text-green-600" />
                    ) : (
                      <FaTimes className="h-3 w-3 text-gray-400" />
                    )}
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Analyse-Cookies
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Deaktiviert
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                  </p>
                </div>
              </div>
              <div className="flex items-center h-5">
                <input
                  id="analytics"
                  name="analytics"
                  type="checkbox"
                  checked={cookieSettings.analytics}
                  onChange={(e) => setCookieSettings({...cookieSettings, analytics: e.target.checked})}
                  className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className={`h-5 w-5 rounded-full ${cookieSettings.marketing ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                    {cookieSettings.marketing ? (
                      <FaCheck className="h-3 w-3 text-green-600" />
                    ) : (
                      <FaTimes className="h-3 w-3 text-gray-400" />
                    )}
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Marketing-Cookies
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Deaktiviert
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Diese Cookies werden verwendet, um Besuchern relevante Werbung anzuzeigen.
                  </p>
                </div>
              </div>
              <div className="flex items-center h-5">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  checked={cookieSettings.marketing}
                  onChange={(e) => setCookieSettings({...cookieSettings, marketing: e.target.checked})}
                  className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleResetSettings}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Auf Standard zurücksetzen
            </button>
            <button
              onClick={handleSaveSettings}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Einstellungen speichern
            </button>
          </div>

          {showConfirmation && (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaCheck className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Ihre Cookie-Einstellungen wurden erfolgreich gespeichert.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Weitere Informationen</h3>
            <p className="text-sm text-gray-600">
              Weitere Informationen zur Verwendung von Cookies und zum Datenschutz finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
