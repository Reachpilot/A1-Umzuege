import Link from 'next/link';
import { FaHome, FaPhoneAlt } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Seite nicht gefunden</h2>
        <p className="text-gray-600 text-lg mb-8">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
          <br />
          Keine Sorge, wir helfen Ihnen gerne weiter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            <FaHome className="mr-2" />
            Zur Startseite
          </Link>
          
          <Link 
            href="/kontakt" 
            className="flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FaPhoneAlt className="mr-2" />
            Kontakt aufnehmen
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-200 max-w-lg mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sie suchen etwas Bestimmtes?</h3>
          <p className="text-gray-600 mb-4">
            Nutzen Sie die Navigation oder die Suchfunktion, um das Gewünschte zu finden.
          </p>
          <Link 
            href="/leistungen" 
            className="text-primary hover:underline font-medium"
          >
            Zu unseren Leistungen →
          </Link>
        </div>
      </div>
    </div>
  );
}
