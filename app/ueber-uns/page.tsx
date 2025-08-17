'use client';
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaMapMarkerAlt, FaShieldAlt, FaUsers, FaTruckMoving, FaBuilding, FaUserTie, FaHandshake, FaTools, FaBoxes, FaWarehouse, FaClipboardCheck } from 'react-icons/fa';
import CTA from '../../components/CTA';

export default function AboutUs() {
  const features = [
    { 
      icon: <FaUserTie className="text-2xl" />, 
      text: 'Persönliche Betreuung – Ihr direkter Ansprechpartner' 
    },
    { 
      icon: <FaHandshake className="text-2xl" />, 
      text: 'Feste Teams – keine Leiharbeiter' 
    },
    { 
      icon: <FaMapMarkerAlt className="text-2xl" />, 
      text: 'Lokale Expertise – bundesweite Mobilität' 
    },
    { 
      icon: <FaShieldAlt className="text-2xl" />, 
      text: 'Umfassender Versicherungsschutz inklusive' 
    },
    { 
      icon: <FaTools className="text-2xl" />, 
      text: 'Moderne Ausstattung – von Möbelliften bis Spezialfahrzeugen' 
    },
    { 
      icon: <FaClipboardCheck className="text-2xl" />, 
      text: 'Zertifizierte Qualität – nach DIN EN 12522' 
    },
    { 
      icon: <FaBoxes className="text-2xl" />, 
      text: 'Maßgeschneiderte Verpackungslösungen' 
    },
    { 
      icon: <FaWarehouse className="text-2xl" />, 
      text: 'Sichere Zwischenlagerung in eigenen Hallen' 
    }
  ];

  const certificates = [
    'Vollständige Transportversicherung',
    'Erfahrung mit Behördenumzügen & öffentlichen Trägern',
    'Diskrete Abwicklung bei Nachlassräumungen',
    'DSGVO-konformer Umgang mit sensiblen Daten',
    'Zahlreiche Stammkunden & Weiterempfehlungen'
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Herzlich willkommen bei <span className="text-primary">A1 Umzüge</span></h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Ihr <span className="font-semibold">vertrauenswürdiger Partner</span> für Umzüge in <span className="font-semibold">Burgdorf, Hannover</span> und ganz Deutschland
              </p>
              <div className="w-32 h-1 bg-yellow-300 mx-auto mb-12"></div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
                Seit über einem Jahrzehnt begleiten wir Menschen und Unternehmen bei ihren Umzügen – <span className="font-semibold">professionell, zuverlässig und mit viel Herzblut</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Ihr <span className="text-primary">vertrauensvoller Partner</span> für jeden Umzug</h2>
            
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="leading-relaxed mb-6">
                <span className="font-semibold text-primary">A1 Umzüge</span> steht seit über 10 Jahren für <span className="font-semibold">saubere Arbeit, faire Preise und absolut stressfreie Umzüge</span> in ganz Hannover, Niedersachsen und deutschlandweit. Was auch immer Sie bewegen möchten – ob ein <span className="font-semibold">kompletter Privathaushalt</span>, ein anspruchsvoller <span className="font-semibold">Firmenumzug</span> oder ein <span className="font-semibold">internationales Projekt</span> – bei uns sind Sie genau richtig.
              </p>
              
              <p className="leading-relaxed mb-6">
                Wir verstehen, dass jeder Umzug einzigartig ist. Deshalb bieten wir <span className="font-semibold">maßgeschneiderte Lösungen</span>, die genau auf Ihre Bedürfnisse zugeschnitten sind. Mit unserem <span className="text-primary font-semibold">eigenen Fuhrpark</span>, <span className="text-primary font-semibold">erfahrenen Teams</span> und einem echten <span className="text-primary font-semibold">Rundum-sorglos-Paket</span> machen wir Ihren Umzug zum Erfolg.
              </p>
              
              <p className="text-xl text-gray-900 font-medium italic text-center mt-12 mb-8 px-4 py-6 bg-gray-50 rounded-lg border-l-4 border-primary">
                „Ein Umzug ist mehr als nur ein Ortswechsel – es ist der Beginn von etwas Neuem. Und diesen wichtigen Schritt begleiten wir Sie mit <span className="text-primary">Kompetenz, Leidenschaft und Verlässlichkeit</span>.“
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 max-w-4xl mx-auto my-12"></div>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Warum sich <span className="text-primary">Kunden immer wieder</span> für uns entscheiden</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Stärken machen den Unterschied – für Ihren perfekten Umzug
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.text}
                </h3>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mehr als nur ein Umzugsunternehmen</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Bei A1 Umzüge bekommen Sie nicht nur einen <span className="text-primary font-semibold">professionellen Dienstleister</span>, sondern einen <span className="text-primary font-semibold">verlässlichen Partner</span> an Ihrer Seite. Unser Anspruch ist es, jeden Umzug so reibungslos wie möglich zu gestalten – <span className="font-medium">damit Sie sich auf das Wesentliche konzentrieren können: Ihr neues Zuhause oder Büro.</span>
              </p>
              <div className="w-20 h-1 bg-primary mx-auto my-8"></div>
              <p className="text-lg text-gray-600">
                <span className="font-semibold">Überzeugen Sie sich selbst</span> von unserer Arbeit – wir beraten Sie gerne persönlich und unverbindlich zu Ihrem geplanten Umzug.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Unsere Geschichte</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-6">
                Gegründet in Burgdorf, zwischen Hannover und Celle, ist A1 Umzüge über die Jahre zu einem gefragten 
                Umzugsdienstleister in der Region geworden – für Privatkunden genauso wie für Unternehmen, 
                Verwaltungen, Senioren oder Familien.
              </p>
              <p className="text-gray-700">
                Was klein begann, ist heute ein gut organisiertes Unternehmen mit modernem Fuhrpark, motivierten 
                Mitarbeitenden und einem klaren Fokus: Umzüge mit System, Menschlichkeit und Verlässlichkeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Unser Team</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700">
                Unsere Mitarbeitenden sind mehr als nur Möbelträger: Sie sind geschult, versichert, freundlich im 
                Auftreten und erfahren im Umgang mit empfindlichen Gütern. Wir setzen auf ein festes Team mit festen 
                Werten – Qualität, Sorgfalt und Hilfsbereitschaft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Unser Selbstverständnis</h2>
            <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
              <p className="text-xl italic text-gray-700 mb-4">
                "Wir sind nicht die Günstigsten – aber die Fleißigsten."
              </p>
              <p className="text-gray-700">
                Denn ein guter Umzug ist kein Glücksfall, sondern das Ergebnis klarer Planung, transparenter 
                Kommunikation und harter Arbeit. Wir begegnen unseren Kundinnen und Kunden auf Augenhöhe – 
                ob Studentenumzug, Kanzlei oder Großfamilie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Regionale Verankerung – überregional aktiv</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <FaMapMarkerAlt className="text-5xl text-primary" />
              </div>
              <div>
                <p className="text-gray-700">
                  Unser Firmensitz liegt in 31303 Burgdorf, nahe Hannover, Braunschweig und Celle.
                  Von hier aus betreuen wir Umzüge in ganz Niedersachsen, Berlin, NRW oder Bayern – und auch europaweit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Zertifikate & Vertrauen</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <ul className="space-y-3">
                {certificates.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Bereit für einen stressfreien Umzug?"
        description="Kontaktieren Sie uns noch heute für ein unverbindliches Angebot."
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </main>
  );
}
