import { FaTruck, FaHome, FaClipboardCheck, FaBoxes, FaTools, FaCalendarAlt, FaShieldAlt, FaQuoteLeft, FaMapMarkerAlt, FaPhone, FaBoxOpen, FaBroom, FaBuilding, FaCheckCircle } from 'react-icons/fa';

export default function PrivatumzuegePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privatumzüge in Hannover, Burgdorf, Celle & ganz Niedersachsen</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ein Umzug ist mehr als nur Möbeltransport – es geht um Sicherheit, Vertrauen und einen Neuanfang.
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
              A1 Umzüge steht seit über 10 Jahren für reibungslose, sorgfältig geplante Privatumzüge – ob innerhalb der Stadt, überregional oder ins Ausland. Wir übernehmen alles: Verpackung, Transport, Halteverbotszonen, Montage – zuverlässig und versichert.
            </p>
            <div className="h-1 w-24 bg-primary my-12"></div>
          </div>
        </div>
      </section>

      {/* Warum Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Warum mit A1 umziehen?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaPhone className="text-2xl text-primary" />, text: 'Persönlicher Ansprechpartner von Anfang bis Ende' },
                { icon: <FaMapMarkerAlt className="text-2xl text-primary" />, text: 'Kostenlose Vor-Ort-Besichtigung oder per Video' },
                { icon: <FaShieldAlt className="text-2xl text-primary" />, text: 'Erfahrene Fachkräfte – kein Subunternehmen' },
                { icon: <FaBuilding className="text-2xl text-primary" />, text: 'Eigener Möbellift (bis 7. OG)' },
                { 
                  icon: <FaClipboardCheck className="text-2xl text-primary" />, 
                  text: (
                    <div>
                      <div>Pünktlich, freundlich und</div>
                      <div>100 % versichert</div>
                    </div>
                  ) 
                },
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

      {/* Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unser Service im Überblick</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Komplette Haushaltsumzüge (1-Zimmer bis Villa)',
                'Kleinumzüge & Studentenbudgets',
                'Umzug von Senioren inkl. Zusatzbetreuung',
                'Verpackungsservice & Lieferung von Kartons',
                'Möbelmontage & Küchenumzug',
                'Entsorgung von Altmöbeln auf Wunsch'
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
          <h2 className="text-3xl font-bold text-center mb-12">So läuft der Umzug ab</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '1. Kontakt & Termin',
                description: 'Kontaktaufnahme & Terminvereinbarung'
              },
              {
                title: '2. Beratung',
                description: 'Besichtigung & individuelles Angebot'
              },
              {
                title: '3. Vorbereitung',
                description: 'Ein- & Auspacken, Demontage der Möbel'
              },
              {
                title: '4. Transport & Abschluss',
                description: 'Sicherer Transport, Aufbau, Montage & Übergabe'
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
            <h2 className="text-3xl font-bold text-center mb-12">Zusätzliche Leistungen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Halteverbotsschilder mit Genehmigung',
                'Zwischenlagerung bei Terminlücken',
                'Reinigungs- & Renovierungsarbeiten nach Auszug',
                'Umzüge auch an Wochenenden & Feiertagen'
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
              "Es lief alles nach Plan. Super Team, schnelle Arbeit, keine Schäden – und sogar günstiger als erwartet."
            </p>
            <p className="font-medium text-gray-800">– Familie K., Hannover</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Jetzt Privatumzug planen</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kostenlos & unverbindlich beraten lassen.
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
