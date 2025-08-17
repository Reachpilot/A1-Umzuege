import { FaHome, FaBuilding, FaTrashAlt, FaTruck, FaPaintRoller, FaBoxOpen, FaTools, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: <FaHome className="text-4xl mb-4 text-primary" />,
      title: 'Privatumzüge',
      subtitle: 'Sorgenfreie Umzüge für Privathaushalte in Hannover und Umgebung',
      features: [
        'Kostenlose Besichtigung',
        'Flexible Terminvereinbarung',
        'Umfassender Verpackungsservice',
        'Halteverbotszonen inklusive'
      ],
      slug: 'privatumzuege'
    },
    {
      id: 2,
      icon: <FaBuilding className="text-4xl mb-4 text-primary" />,
      title: 'Firmenumzüge',
      subtitle: 'Professionelle Betriebsverlagerung ohne Betriebsunterbrechung',
      features: [
        'Minimale Ausfallzeiten',
        'EDV-/IT-Umzüge',
        'Termingenaue Durchführung',
        'Nachtdienst möglich'
      ],
      slug: 'firmenumzuege'
    },
    {
      id: 3,
      icon: <FaTrashAlt className="text-4xl mb-4 text-primary" />,
      title: 'Entrümpelungen',
      subtitle: 'Schnelle und zuverlässige Entrümpelung in ganz Niedersachsen',
      features: [
        'Privat & Gewerbe',
        'Fachgerechte Entsorgung',
        'Besenreine Übergabe',
        'Mit Recyclingnachweis'
      ],
      slug: 'entruempelungen'
    },
    {
      id: 4,
      icon: <FaTruck className="text-4xl mb-4 text-primary" />,
      title: 'Internationale Umzüge',
      subtitle: 'Weltweite Umzüge mit persönlicher Betreuung',
      features: [
        'EU- und weltweite Transporte',
        'Vollständige Zollabwicklung',
        'Sichere Verpackung',
        'Lagerung möglich'
      ],
      slug: 'internationale-umzuege'
    },
    {
      id: 5,
      icon: <FaPaintRoller className="text-4xl mb-4 text-primary" />,
      title: 'Renovierung',
      subtitle: 'Professionelle Renovierungsarbeiten nach Maß',
      features: [
        'Malerarbeiten',
        'Tapezieren & Spachteln',
        'Bodenverlegung',
        'Komplettsanierung'
      ],
      slug: 'renovierung'
    },
    {
      id: 6,
      icon: <FaBoxOpen className="text-4xl mb-4 text-primary" />,
      title: 'Lagerung',
      subtitle: 'Sichere Aufbewahrung Ihrer Möbel und Waren',
      features: [
        'Ab 1 m² buchbar',
        'Kurz- & Langzeitlagerung',
        'Klimakontrolliert',
        '24/7 Zutritt möglich'
      ],
      slug: 'lagerung'
    },
    {
      id: 7,
      icon: <FaTools className="text-4xl mb-4 text-primary" />,
      title: 'Küchenmontage',
      subtitle: 'Fachgerechte Montage Ihrer neuen Küche',
      features: [
        'Komplettmontage',
        'Anschlussarbeiten',
        'IKEA & alle Marken',
        'Aufmaß & Beratung'
      ],
      slug: 'kuechenmontage'
    },
    {
      id: 8,
      icon: <FaBoxOpen className="text-4xl mb-4 text-primary" />,
      title: 'Umzugshelfer',
      subtitle: 'Unterstützung bei Eigenleistung',
      features: [
        'Stundenweise buchbar',
        'Erfahrung & Know-how',
        'Eigene Fahrzeuge',
        'Flexible Einsatzzeiten'
      ],
      slug: 'umzugshelfer'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Komplettlösungen rund ums Umziehen, Renovieren und Lagern – maßgeschneidert für Ihre Bedürfnisse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100 overflow-hidden"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.subtitle}</p>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    href={`/leistungen/${service.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
                  >
                    Mehr erfahren
                    <FaChevronRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/leistungen" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark hover:shadow-md transition-all duration-300"
          >
            Alle Leistungen im Überblick
            <FaChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
