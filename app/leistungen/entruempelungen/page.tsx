import Image from 'next/image';
import { FaCheckCircle, FaCalendarAlt, FaClipboardCheck, FaTruck, FaBroom, FaHome, FaWarehouse, FaBuilding, FaQuoteLeft } from 'react-icons/fa';

export default function EntruempelungenPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entrümpelung & Haushaltsauflösung in Hannover, Celle & Umgebung</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ob Keller, Dachboden, Garage oder ganze Haushalte – mit A1 Umzüge wird Entrümpeln einfach.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform translate-y-1/2 rounded-t-3xl"></div>
      </section>

      {/* Intro Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Wir räumen besenrein, entsorgen fachgerecht und halten alle Termine zuverlässig ein. Ob private Entrümpelung, Nachlassauflösung oder gewerbliche Flächen – wir stehen diskret und effizient an Ihrer Seite.
            </p>
            <p className="text-lg font-medium text-gray-800">
              Für private & gewerbliche Kunden, Vermieter, Hausverwaltungen und Nachlassverwalter.
            </p>
            <div className="h-1 w-24 bg-primary my-12"></div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Vorteile unserer Entrümpelung</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaCalendarAlt className="text-2xl text-primary" />, text: 'Besichtigung kostenlos & kurzfristig möglich' },
                { icon: <FaHome className="text-2xl text-primary" />, text: 'Bis zu 10.000 m² Räumfläche möglich' },
                { icon: <FaClipboardCheck className="text-2xl text-primary" />, text: 'Fachgerechte Entsorgung nach § KrWG' },
                { icon: <FaTruck className="text-2xl text-primary" />, text: 'Bereitstellung eigener Container & Transportfahrzeuge' },
                { icon: <FaBroom className="text-2xl text-primary" />, text: 'Optional: Nachreinigung, Renovierung, Wertanrechnung' },
                { icon: <FaCheckCircle className="text-2xl text-primary" />, text: 'Auf Wunsch auch anonym & diskret' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Einsatzgebiete Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Typische Einsatzgebiete</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Haushaltsauflösungen (auch mit Sozialdienst oder Behörden)',
                'Messi-Wohnungen & Notfälle',
                'Nachlass- und Zwangsräumungen',
                'Geschäftsräume, Lagerhallen, Dachböden, Garagen'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unser Ablauf – Schritt für Schritt</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '1. Kontakt & Besichtigung',
                description: 'Sie rufen uns an oder senden eine Anfrage – wir kommen kurzfristig vorbei oder begutachten digital.'
              },
              {
                title: '2. Angebot zum Festpreis',
                description: 'Transparent, nachvollziehbar – inkl. Anfahrt, Entsorgung, Arbeitszeit.'
              },
              {
                title: '3. Durchführung',
                description: 'Schnell, sauber, mit eigenem Personal – auch am Wochenende möglich.'
              },
              {
                title: '4. Entsorgung & Nachbereitung',
                description: 'Übergabe besenrein inkl. Entsorgungsnachweis oder Wertabrechnung.'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zusatzleistungen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zusätzliche Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Möbeleinlagerung bei Umzug oder Renovierung',
                'Endreinigung für Übergabe an Vermieter',
                'Renovierung (Streichen, Spachteln etc.)',
                'Halteverbotsschilder & Möbellift bei sperrigen Objekten'
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FaQuoteLeft className="text-primary/30 text-5xl mx-auto mb-6" />
            <p className="text-xl md:text-2xl italic text-gray-700 mb-6">
              "Die Entrümpelung war perfekt organisiert. Trotz einer chaotischen Wohnung lief alles diskret, schnell und sehr freundlich ab."
            </p>
            <p className="font-medium text-gray-800">– Familie B., Celle</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Entrümpelung gewünscht?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Wir räumen für Sie – schnell, fair und besenrein.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Kostenloses Angebot anfordern
          </a>
        </div>
      </section>
    </div>
  );
}
