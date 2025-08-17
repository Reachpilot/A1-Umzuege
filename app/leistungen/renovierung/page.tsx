import { FaPaintRoller, FaTools, FaClipboardCheck, FaCalendarAlt, FaHome, FaBuilding, FaBroom, FaBox, FaQuoteLeft, FaPhone, FaCheckCircle } from 'react-icons/fa';

export default function RenovierungPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Renovierung vor oder nach dem Umzug – stressfrei mit A1 Umzüge</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ob besenreine Wohnungsübergabe oder frischer Anstrich im neuen Zuhause: Wir übernehmen alle gängigen Renovierungsarbeiten rund um Ihren Umzug.
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
              Sauber, zuverlässig und mit Material inklusive. Ideal für Mieter, Eigentümer, Vermieter und Unternehmen, die auf Qualität und Effizienz setzen.
            </p>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Alles aus einer Hand: Umzug, Renovierung, Endreinigung – schnell & professionell.
            </p>
            <div className="h-1 w-24 bg-primary my-12"></div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Was wir für Sie erledigen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaPaintRoller className="text-2xl text-primary" />, text: 'Malerarbeiten: Streichen, Tapezieren, Spachteln' },
                { icon: <FaTools className="text-2xl text-primary" />, text: 'Entfernen alter Dübel, Nägel, Tapeten' },
                { icon: <FaTools className="text-2xl text-primary" />, text: 'Ausbesserungen & Kleinreparaturen' },
                { icon: <FaPaintRoller className="text-2xl text-primary" />, text: 'Lackieren von Türrahmen, Heizkörpern, Fensterrahmen' },
                { icon: <FaClipboardCheck className="text-2xl text-primary" />, text: 'Übergabefertige Aufbereitung für Vermieter oder Käufer' },
                { icon: <FaTools className="text-2xl text-primary" />, text: 'Inklusive aller Materialien (Farbe, Abdeckfolie, Werkzeuge)' },
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

      {/* Typische Einsätze Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Typische Einsätze</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Renovierung vor Wohnungsabgabe an den Vermieter',
                'Aufwertung von Räumen vor Verkauf',
                'Einzugsfertige Vorbereitung der neuen Wohnung',
                'Endreinigung direkt im Anschluss möglich',
                'Auch für Büros und gewerbliche Räume'
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
          <h2 className="text-3xl font-bold text-center mb-12">So funktioniert's</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              {
                title: (
                  <>
                    <div>1. Kontaktaufnahme &</div>
                    <div>Besichtigung</div>
                  </>
                ),
                description: 'Wir begutachten die Räume und klären den Bedarf.'
              },
              {
                title: (
                  <>
                    <div>2. Individuelles</div>
                    <div>Angebot</div>
                  </>
                ),
                description: 'Zum Festpreis – inkl. Anfahrt & Material.'
              },
              {
                title: (
                  <>
                    <div>3. Terminvereinbarung</div>
                    <div>& Durchführung</div>
                  </>
                ),
                description: 'Schnell, sauber und zuverlässig – auch kurzfristig.'
              },
              {
                title: '4. Übergabe',
                description: 'Auf Wunsch mit Abnahmeprotokoll & Fotos'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600 mt-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kombinierbar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Kombinierbar mit</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Umzug & Möbeltransport',
                'Entrümpelung oder Haushaltsauflösung',
                'Endreinigung für Mietobjekte',
                'Möbellagerung oder Küchenmontage'
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
              „Ich hätte nie gedacht, dass eine Wohnungsübergabe so glatt laufen kann. A1 hat alles gestrichen, repariert und geputzt. Die Übergabe dauerte 5 Minuten.“
            </p>
            <p className="font-medium text-gray-800">– C. Jansen, Celle</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Wohnung oder Büro übergabefertig machen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Wir renovieren für Sie – stressfrei & fix.
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
