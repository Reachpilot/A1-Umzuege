import { FaUsers, FaClock, FaTools, FaShieldAlt, FaCalendarAlt, FaTruck, FaBox, FaHome, FaUniversity, FaQuoteLeft, FaPhone, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';

export default function UmzugshelferPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Erfahrene Umzugshelfer in Hannover, Celle & Umgebung</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Manchmal braucht man einfach helfende Hände – ob beim Tragen, Ein- oder Ausladen, beim Verpacken oder für einen ganzen Umzugstag.
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
              Unsere erfahrenen Umzugshelfer unterstützen Sie genau dort, wo Sie Hilfe benötigen.
            </p>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Flexibel buchbar – stundenweise oder für den gesamten Umzug.
            </p>
            <div className="h-1 w-24 bg-primary my-12"></div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Was unsere Umzugshelfer auszeichnet</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaHandsHelping className="text-2xl text-primary" />, text: 'Gepackt mit Erfahrung, Kraft & Sorgfalt' },
                { icon: <FaUsers className="text-2xl text-primary" />, text: 'Freundliches Auftreten & pünktlich vor Ort' },
                { icon: <FaTools className="text-2xl text-primary" />, text: 'Auf Wunsch mit Werkzeug & Ausrüstung' },
                { icon: <FaShieldAlt className="text-2xl text-primary" />, text: 'Versichert & zuverlässig' },
                { icon: <FaClock className="text-2xl text-primary" />, text: 'Kurzfristig verfügbar – auch am Wochenende' },
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

      {/* Einsatzbereiche Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Typische Einsatzbereiche</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Unterstützung beim Eigenumzug',
                'Be- & Entladen von gemieteten Transportern',
                'Tragehilfe bei Möbeltransport',
                'Verpacken von Kartons & Haushaltsgut',
                'Unterstützung für Senioren, Studierende, Alleinstehende'
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
          <h2 className="text-3xl font-bold text-center mb-12">Ablauf bei Buchung</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              {
                title: (
                  <>
                    <div>1. Anfrage &</div>
                    <div>Bedarf klären</div>
                  </>
                ),
                description: 'Wie viele Helfer, wie lange, wofür?'
              },
              {
                title: (
                  <>
                    <div>2. Unverbindliches</div>
                    <div>Angebot</div>
                  </>
                ),
                description: 'Transparent und fair – auch stundenweise buchbar.'
              },
              {
                title: (
                  <>
                    <div>3. Helfer kommt</div>
                    <div>zum Wunschtermin</div>
                  </>
                ),
                description: 'Mit Muskelkraft, System und Motivation.'
              },
              {
                title: '4. Kombination möglich',
                description: 'Auf Wunsch mit Transport & Zusatzleistungen'
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

      {/* Zusatzleistungen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Optional zubuchbar</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Möbellift bei schweren oder sperrigen Teilen',
                'Verpackungsmaterial & Kartonservice',
                'Möbelmontage oder Demontage',
                'Halteverbot organisieren lassen'
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
              „Ich habe zwei Helfer für 3 Stunden gebucht – super nett, super schnell. Ohne sie hätte ich doppelt so lange gebraucht.“
            </p>
            <p className="font-medium text-gray-800">– L. Weber, Hannover</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Jetzt Umzugshelfer anfragen</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kurzfristig, stark & professionell.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Jetzt Helfer buchen
          </a>
        </div>
      </section>
    </div>
  );
}
