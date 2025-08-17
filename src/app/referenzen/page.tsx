'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaShieldAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const clients = [
  { name: 'CGI Global', category: 'IT & Technologie' },
  { name: 'Symths Toys Deutschland GmbH', category: 'Einzelhandel' },
  { name: 'Care Full Colours Kosmetik', category: 'Beauty & Kosmetik' },
  { name: 'Rednux GmbH', category: 'IT & Technologie' },
  { name: 'Baustoffhandel Friedrich Dohrs', category: 'Bau & Handwerk' },
  { name: 'BBS Burgdorf Berliner Ring', category: 'Bildung' },
  { name: 'BBS Burgdorf Celler Tor', category: 'Bildung' },
  { name: 'Architekten Höhlich & Schmotz', category: 'Architektur' },
  { name: 'Kanat Immobilien', category: 'Immobilien' },
  { name: 'Roomers Immobilien', category: 'Immobilien' },
  { name: 'Postbank Immobilien', category: 'Finanzen & Immobilien' },
  { name: 'WBG Kleefeld-Buchholz', category: 'Wohnungswesen' },
  { name: 'Movinga GmbH', category: 'Umzug & Logistik' },
  { name: 'Kirchenkreisamt Großburgwedel', category: 'Gemeinnützig' },
  { name: '88 Services GmbH', category: 'Dienstleistungen' },
  { name: 'Confern Möbeltransport', category: 'Umzug & Logistik' },
  { name: 'Kluwe Containerdienst', category: 'Entsorgung' },
  { name: 'Kanzlei Anochin Roters', category: 'Recht' },
  { name: 'Ev. Kirchengemeinde', category: 'Gemeinnützig' },
  { name: 'CKT Folientechnik', category: 'Industrie' }
];

// Get unique categories from clients
const categories = Array.from(new Set(clients.map(client => client.category)));

export default function References() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  
  const filteredClients = activeCategory === 'Alle' 
    ? clients 
    : clients.filter(client => client.category === activeCategory);

  const stats = [
    { 
      number: '20+', 
      label: 'Zufriedene Firmenkunden',
      icon: <FaBuilding className="text-3xl text-primary" />
    },
    { 
      number: '100%', 
      label: 'Zuverlässigkeit',
      icon: <FaShieldAlt className="text-3xl text-primary" />
    },
    { 
      number: 'Burgdorf', 
      label: 'Ihr lokaler Partner',
      icon: <FaMapMarkerAlt className="text-3xl text-primary" />
    },
    { 
      number: '24/7', 
      label: 'Verfügbarkeit',
      icon: <FaClock className="text-3xl text-primary" />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-foreground bg-white/20 rounded-full backdrop-blur-sm">
              Unsere Referenzen
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Vertrauen Sie auf unsere Erfahrung
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Entdecken Sie unsere zufriedenen Kunden aus verschiedenen Branchen, die uns ihr Vertrauen schenken.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col items-center text-center"
              >
                <div className="mb-3 p-3 bg-primary/10 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Referenzen</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Wir sind stolz darauf, Unternehmen und Institutionen verschiedenster Branchen zu unseren Kunden zu zählen.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveCategory('Alle')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === 'Alle' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Alle
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredClients.map((client, index) => (
              <motion.div 
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <FaBuilding className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{client.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-primary to-primary-dark py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Werden Sie Teil unserer Erfolgsgeschichte</h2>
            <p className="text-xl text-white/90 mb-8">
              Vertrauen Sie auf unsere Erfahrung und Professionalität für Ihren nächsten Umzug.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a 
                href="/kontakt" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Jetzt Angebot anfordern</span>
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
