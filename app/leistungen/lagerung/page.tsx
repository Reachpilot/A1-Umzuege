import { FaWarehouse, FaLock, FaCalendarAlt, FaUserTie, FaTruck, FaShieldAlt, FaBox, FaHome, FaBuilding, FaFileAlt, FaBoxes, FaQuoteLeft, FaPhone, FaCheckCircle } from 'react-icons/fa';

export default function LagerungPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Möbel & Güter sicher lagern – Lagerung in Hannover, Burgdorf & Umgebung</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ob Zwischenlagerung während eines Umzugs, Renovierung oder Auslandsaufenthalts – mit A1 Umzüge lagern Sie Ihr Hab und Gut sicher, sauber und flexibel.
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
              Unsere Lagerräume sind trocken, alarmgesichert und flexibel mietbar – tageweise, wochenweise oder über Monate.
            </p>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Für Privatkunden, Unternehmen und Behörden – kurzfristig oder langfristig.
            </p>
            <div className="h-1 w-24 bg-primary my-12"></div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ihre Vorteile bei der Einlagerung mit A1</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaWarehouse className="text-2xl text-primary" />, text: 'Zugang zu sauberen, gesicherten Lagerräumen' },
                { icon: <FaCalendarAlt className="text-2xl text-primary" />, text: 'Kurz- oder Langzeitlagerung ab 1 m²' },
                { icon: <FaUserTie className="text-2xl text-primary" />, text: 'Persönlicher Ansprechpartner vor Ort' },
                { icon: <FaTruck className="text-2xl text-primary" />, text: 'Abholung & Transport Ihrer Güter durch uns' },
                { icon: <FaShieldAlt className="text-2xl text-primary" />, text: 'Versicherungsschutz während der Lagerzeit' },
                { icon: <FaLock className="text-2xl text-primary" />, text: 'Diskret, sauber & jederzeit kündbar' },
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

      {/* Geeignet für Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Geeignet für z. B.:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Möbel & Hausrat während Renovierung',
                'Zwischenlagerung beim Wohnungswechsel',
                'Aktenlager & saisonale Firmeneinrichtung',
                'Lagerung während Auslandsaufenthalt',
                'Aufbewahrung von Nachlässen oder Erbschaften'
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
          <h2 className="text-3xl font-bold text-center mb-12">Ablauf der Lagerung</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              {
                title: (
                  <>
                    <div>1. Anfrage &</div>
                    <div>Bedarfsklärung</div>
                  </>
                ),
                description: 'Wir besprechen, was eingelagert wird und wie lange.'
              },
              {
                title: (
                  <>
                    <div>2. Angebot &</div>
                    <div>Abholung</div>
                  </>
                ),
                description: 'Wir holen Ihr Lagergut ab – verpackt & geschützt.'
              },
              {
                title: '3. Einlagerung',
                description: 'In gekennzeichneten, einzeln zugänglichen Lagerbereichen.'
              },
              {
                title: '4. Auslagerung',
                description: 'Flexible Rückgabe mit Voranmeldung – auch Teilauslagerung möglich.'
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

      {/* Ausstattung Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ausstattung unserer Lagerräume</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Alarmgesichert & videoüberwacht',
                'Trockene Lagerhallen – beheizt & belüftet',
                'Keine Selbstbedienung → Zugang nur durch Personal',
                'Inklusive Karton- & Verpackungsservice auf Wunsch'
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

      {/* Testimonial Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FaQuoteLeft className="text-primary/30 text-5xl mx-auto mb-6" />
            <p className="text-xl md:text-2xl italic text-gray-700 mb-6">
              „Wir mussten unsere Wohnung kurzfristig räumen und hatten keine Lösung. A1 Umzüge hat alles eingelagert und nach 4 Wochen perfekt zurückgebracht.“
            </p>
            <p className="font-medium text-gray-800">– M. & T. Schmidt, Hannover</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Platzproblem?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lagern Sie sicher & flexibel bei A1 Umzüge in Burgdorf.
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
