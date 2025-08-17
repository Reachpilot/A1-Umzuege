'use client';

import { MotionDiv } from './Animated';
import { FaHome, FaBuilding, FaBoxes, FaTools, FaTrashAlt, FaWarehouse } from 'react-icons/fa';

const services = [
  {
    title: 'Privatumzug',
    description: 'Sorgloser Umzug für Privathaushalte jeder Größe. Wir kümmern uns um alles - von der Planung bis zum letzten Karton.',
    icon: <FaHome className="text-4xl text-primary mb-4" />,
  },
  {
    title: 'Firmenumzug',
    description: 'Minimale Betriebsunterbrechung durch professionelle Planung und Durchführung Ihres Firmenumzugs.',
    icon: <FaBuilding className="text-4xl text-primary mb-4" />,
  },
  {
    title: 'Verpackungsservice',
    description: 'Professionelle Verpackung Ihrer Wertsachen mit hochwertigen Materialien für einen sicheren Transport.',
    icon: <FaBoxes className="text-4xl text-primary mb-4" />,
  },
  {
    title: 'Möbelmontage',
    description: 'Fachgerechter Auf- und Abbau von Möbeln durch unsere erfahrenen Monteure.',
    icon: <FaTools className="text-4xl text-primary mb-4" />,
  },
  {
    title: 'Entrümpelung',
    description: 'Schnelle und saubere Entsorgung von Altmöbeln und nicht mehr benötigten Gegenständen.',
    icon: <FaTrashAlt className="text-4xl text-primary mb-4" />,
  },
  {
    title: 'Lagerung',
    description: 'Sichere Aufbewahrung Ihrer Möbel in unseren klimakontrollierten Lagern.',
    icon: <FaWarehouse className="text-4xl text-primary mb-4" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Leistungsspektrum für einen reibungslosen Umzug
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8 text-center">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Kostenloses Angebot anfordern
          </a>
        </div>
      </div>
    </section>
  );
}
