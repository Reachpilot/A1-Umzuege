import { FaTools, FaCheckCircle, FaCalendarAlt, FaClipboardCheck, FaTruck, FaRuler, FaHome, FaPlug, FaQuoteLeft } from 'react-icons/fa';

export default function KuechenmontagePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Küchenmontage in Hannover, Braunschweig & Umgebung – professionell & passgenau</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Sie ziehen um oder haben eine neue Küche bestellt? Unsere erfahrenen Monteure übernehmen die komplette Küchenmontage – vom Transport über den Aufbau bis zum Anschluss.
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
              Ob IKEA, Markenküche oder Maßanfertigung: Wir passen an, schneiden zu und schließen fachgerecht an – inkl. Wasser, Strom und Elektrogeräte.
            </p>
            <div className="h-1 w-24 bg-primary my-12"></div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Warum A1 Umzüge für Küchenmontage?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaTools className="text-2xl text-primary" />, text: 'Passgenauer Aufbau durch erfahrene Küchenmonteure' },
                { icon: <FaPlug className="text-2xl text-primary" />, text: 'Anschluss von Spüle, Herd, Backofen, Geschirrspüler, Dunstabzug' },
                { icon: <FaRuler className="text-2xl text-primary" />, text: 'Umbauten und Zuschnitte direkt vor Ort' },
                { icon: <FaTruck className="text-2xl text-primary" />, text: 'Alte Küche abbauen und entsorgen lassen' },
                { icon: <FaHome className="text-2xl text-primary" />, text: 'Auch bei Umzug in neue Wohnung oder Haus' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
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

      {/* Leistungen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Typische Leistungen im Überblick</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Abbau der alten Küche inkl. Verpacken & Transport',
                'Neue Küche aufbauen, anpassen, schneiden',
                'E-Geräte anschließen (inkl. Herd, Backofen, Spüle)',
                'Arbeitsplatten zuschneiden & montieren',
                'Zusätzliche Schränke einpassen oder montieren'
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
          <h2 className="text-3xl font-bold text-center mb-12">Ablauf – So läuft's ab</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '1. Termin & Planung',
                description: 'Telefonisch oder über unser Anfrageformular.'
              },
              {
                title: '2. Abholung',
                description: 'Sicherer Transport Ihrer Küche zum neuen Standort.'
              },
              {
                title: '3. Montage vor Ort',
                description: 'Präzise, sauber und schnell – mit Erfahrung.'
              },
              {
                title: '4. Abnahme & Erklärung',
                description: 'Sie prüfen – wir erklären alle Anschlüsse.'
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
            <h2 className="text-3xl font-bold text-center mb-12">Optional zubuchbar</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Entsorgung der alten Küche',
                'Möbellift bei engen Treppen',
                'Einlagerung bei Zeitverzögerung',
                'Kombination mit Umzug, Renovierung oder Entrümpelung'
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
              "Die Küche passte trotz neuer Raumaufteilung perfekt. Zuschnitt, Anschluss, alles top. Ich hätte es alleine nie geschafft."
            </p>
            <p className="font-medium text-gray-800">– Herr F., Braunschweig</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Professionelle Küchenmontage gesucht?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Wir montieren Ihre Küche fachgerecht & stressfrei.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Jetzt anfragen
          </a>
        </div>
      </section>
    </div>
  );
}
