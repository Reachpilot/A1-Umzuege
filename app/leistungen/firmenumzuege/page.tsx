import { FaBuilding, FaClipboardCheck, FaLaptop, FaShieldAlt, FaTags, FaUserTie, FaBoxes, FaFileAlt, FaDesktop, FaBroom, FaQuoteLeft, FaPhone, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function FirmenumzuegePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Firmenumzüge in Hannover, Braunschweig & Umgebung</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ein Standortwechsel im Unternehmen ist eine logistische Herausforderung – besonders wenn Ausfallzeiten vermieden werden müssen.
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
              A1 Umzüge ist Ihr Partner für professionelle Firmenumzüge: strukturiert, diskret, termintreu und auf Wunsch außerhalb der Geschäftszeiten.
            </p>
            <div className="h-1 w-24 bg-primary my-12"></div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Was uns für Firmen besonders macht</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaClock className="text-2xl text-primary" />, text: 'Umzug auch abends oder am Wochenende' },
                { icon: <FaClipboardCheck className="text-2xl text-primary" />, text: 'Planung durch erfahrene Umzugsberater' },
                { icon: <FaLaptop className="text-2xl text-primary" />, text: 'Transportsichere Verpackung von IT & Technik' },
                { icon: <FaShieldAlt className="text-2xl text-primary" />, text: 'Einhaltung von Datenschutz & internen Sicherheitsrichtlinien' },
                { icon: <FaTags className="text-2xl text-primary" />, text: 'Beschriftungssysteme für schnelles Wiederauffinden' },
                { icon: <FaUserTie className="text-2xl text-primary" />, text: 'Ein Ansprechpartner von Planung bis Abschluss' },
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
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Umzüge von Büros, Praxen & Agenturen',
                'Schul-, Labor- & Archivumzüge',
                'Behördenumzüge & staatliche Einrichtungen',
                'Aktenumzug mit Sicherheitsprotokoll',
                'Demontage & Montage von Büroeinrichtungen'
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
          <h2 className="text-3xl font-bold text-center mb-12">Ablauf für Unternehmen</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
            {[
              {
                title: '1. Vor-Ort-Termin',
                description: 'Bedarfsanalyse und Planung'
              },
              {
                title: '2. Ablaufplanung',
                description: 'Detaillierter Umzugsplan'
              },
              {
                title: '3. Vorbereitung',
                description: 'Verpackung & Sicherung'
              },
              {
                title: '4. Durchführung',
                description: 'Professioneller Transport'
              },
              {
                title: '5. Abschluss',
                description: 'Wiederaufbau & Übergabe'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-2 whitespace-nowrap">{step.title}</h3>
                <p className="text-gray-600 mt-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zusatzleistungen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zusatzleistungen für Unternehmen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Lagerung von Akten & Mobiliar',
                'Entsorgung alter Einrichtung nach Umzug',
                'Wiederherstellung von IT-Arbeitsplätzen',
                'Reinigung der alten Räume nach Übergabe'
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
              "Unser gesamter Standortwechsel wurde über ein Wochenende realisiert – ohne Datenverlust, ohne Ausfallzeit. Sehr professionell."
            </p>
            <p className="font-medium text-gray-800">– Leitung, IT-Systemhaus Hannover</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Firmenumzug geplant?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jetzt professionell, schnell & sicher mit A1 Umzüge umziehen.
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
