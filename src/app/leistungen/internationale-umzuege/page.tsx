import { FaGlobe, FaClipboardCheck, FaShieldAlt, FaTruck, FaShip, FaPlane, FaFileAlt, FaBox, FaMapMarkerAlt, FaQuoteLeft, FaPhone, FaUserTie, FaCheckCircle } from 'react-icons/fa';

export default function InternationaleUmzuegePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Internationale Umzüge – sicher & stressfrei ins Ausland mit A1 Umzüge</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ein Umzug ins Ausland ist mehr als nur ein Transport – es ist ein komplexes Projekt mit Zollvorgaben, Zeitdruck und vielen Unsicherheiten.
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
              A1 Umzüge begleitet Sie von der ersten Planung bis zur Ankunft in Ihrem neuen Zuhause – ob innerhalb der EU oder weltweit.
            </p>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Mit Erfahrung, Partnernetzwerk und Expertise im internationalen Speditionsverkehr sorgen wir dafür, dass alles reibungslos läuft – zuverlässig, rechtssicher und versichert.
            </p>
            <div className="h-1 w-24 bg-primary my-12"></div>
          </div>
        </div>
      </section>

      {/* Staerken Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Stärken im Auslandsumzug</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaClipboardCheck className="text-2xl text-primary" />, text: 'Über 10 Jahre Erfahrung in internationalen Umzügen' },
                { icon: <FaGlobe className="text-2xl text-primary" />, text: 'Europaweit & weltweit per Lkw, Luftfracht oder Container' },
                { icon: <FaFileAlt className="text-2xl text-primary" />, text: 'Komplette Zoll- & Einfuhrabwicklung' },
                { icon: <FaMapMarkerAlt className="text-2xl text-primary" />, text: 'Partnernetzwerk in über 20 Ländern' },
                { icon: <FaShieldAlt className="text-2xl text-primary" />, text: 'Internationale Transportversicherung' },
                { icon: <FaUserTie className="text-2xl text-primary" />, text: 'Persönlicher Ansprechpartner von Start bis Ziel' },
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

      {/* Ziele Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ziele & Routen (Beispiele)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Schweiz, Österreich, Frankreich, Spanien',
                'Skandinavien, Benelux, Italien',
                'Irland & Vereinigtes Königreich',
                'USA, Kanada, Dubai, Südafrika (per Seecontainer)'
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
          <h2 className="text-3xl font-bold text-center mb-12">Ablauf Ihres internationalen Umzugs</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
            {[
              {
                title: (
                  <>
                    <div>1. Beratung &</div>
                    <div>Bedarfsanalyse</div>
                  </>
                ),
                description: 'Wir besprechen Ihre Ziele, Fristen und Besonderheiten.'
              },
              {
                title: (
                  <>
                    <div>2. Planung &</div>
                    <div>Angebot</div>
                  </>
                ),
                description: 'Inklusive Transportmittel, Versicherung & Dokumentation.'
              },
              {
                title: (
                  <>
                    <div>3. Verpackung &</div>
                    <div>Abholung</div>
                  </>
                ),
                description: 'International transportsichere Verpackung durch Profis.'
              },
              {
                title: '4. Zoll & Logistik',
                description: 'Wir übernehmen alle Ausfuhr- und Einfuhrprozesse.'
              },
              {
                title: (
                  <>
                    <div>5. Lieferung &</div>
                    <div>Aufbau</div>
                  </>
                ),
                description: 'Optional: Auspacken & Montage im Zielland'
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

      {/* Zusatzservices Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zusatzservices für internationale Umzüge</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Lagerung bei zeitversetzter Wohnungsübernahme',
                'Export-Verpackung & Inventarliste',
                'Unterstützung bei Auswanderung & Rückkehr',
                'Koordination mit Zielspeditionen'
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
              „Der Umzug nach Spanien lief überraschend stressfrei. A1 kümmerte sich um alles – inklusive Papierkram und Zoll.“
            </p>
            <p className="font-medium text-gray-800">– Herr P., ehemals aus Hannover</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sie ziehen ins Ausland?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie sich jetzt kostenlos beraten – wir begleiten Sie international.
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
