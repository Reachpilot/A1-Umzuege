import { FaCheckCircle, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaUserFriends } from 'react-icons/fa';

export const metadata = {
  title: 'Karriere | A1 Umzüge - Aktuelle Stellenangebote',
  description: 'Aktuelle Stellenangebote und Karrieremöglichkeiten bei A1 Umzüge. Wir freuen uns auf Ihre Initiativbewerbung!',
};

export default function Career() {
  const benefits = [
    'Attraktive Vergütung',
    'Moderne Arbeitsmittel',
    'Betriebliche Altersvorsorge',
    'Flexible Arbeitszeiten',
    'Flache Hierarchien',
    'Regelmäßige Weiterbildungen',
    'Betriebliche Gesundheitsvorsorge',
    'Team-Events',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Karriere bei A1 Umzüge</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Unser Team ist aktuell vollständig besetzt</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum Sie zu uns kommen sollten</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Bei A1 Umzüge schätzen wir jeden Einzelnen und fördern Ihre persönliche und berufliche Entwicklung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary text-3xl mb-4 flex justify-center">
                  <FaCheckCircle />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                <FaUserFriends className="text-4xl text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Unser Team ist aktuell vollständig besetzt</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vielen Dank für Ihr Interesse an einer Karriere bei A1 Umzüge. Zurzeit haben wir leider keine offenen Stellen zu besetzen. 
                Wir freuen uns jedoch über Initiativbewerbungen von motivierten Menschen, die unser Team in Zukunft bereichern möchten.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 text-left">
                <p className="text-blue-700">
                  <strong>Hinweis:</strong> Bitte beachten Sie, dass wir derzeit keine offenen Stellen haben. 
                  Bewerbungen auf nicht ausgeschriebene Positionen können wir leider nicht berücksichtigen.
                </p>
              </div>
              <a 
                href="/kontakt" 
                className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 md:p-12 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Initiativbewerbung</h2>
              <p className="text-gray-600">Kein passendes Stellenangebot gefunden? Bewerben Sie sich initiativ!</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">Vorname *</label>
                  <input type="text" id="first-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" required />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Nachname *</label>
                  <input type="text" id="last-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" required />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bewerbungsschreiben</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lebenslauf hochladen *</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full max-w-md px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Datei auswählen</span> oder hier ablegen</p>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX (max. 5MB)</p>
                    </div>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </label>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="privacy" name="privacy" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="font-medium text-gray-700">Ich stimme der Verarbeitung meiner Daten gemäß der <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu. *</label>
                </div>
              </div>
              
              <div>
                <button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition duration-300">
                  Bewerbung absenden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
