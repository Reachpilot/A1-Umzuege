import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Privatumzug', href: '/leistungen/privatumzuege' },
    { name: 'Firmenumzug', href: '/leistungen/firmenumzuege' },
    { name: 'Lagerung', href: '/leistungen/lagerung' },
    { name: 'Renovierung', href: '/leistungen/renovierung' },
    { name: 'Internationale Umzüge', href: '/leistungen/internationale-umzuege' },
    { name: 'Umzugshelfer', href: '/leistungen/umzugshelfer' },
    { name: 'Entrümpelung', href: '/leistungen/entruempelungen' },
    { name: 'Küchenmontage', href: '/leistungen/kuechenmontage' },
  ];

  const company = [
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Karriere', href: '/karriere' },
    { name: 'Referenzen', href: '/referenzen' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const legal = [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
    { name: 'Cookie-Einstellungen', href: '/cookie-einstellungen' },
  ];

  const social = [
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/a1umzuege' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/4915787511940' },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/images/a1-umzuege-burgdorf.png" 
                alt="A1 Umzüge Burgdorf - Ihr professioneller Umzugsservice" 
                className="h-16 w-auto"
                width={266}
                height={64}
              />
            </div>
            <p className="text-gray-600">
              Ihr zuverlässiger Partner für stressfreie Umzüge in ganz Deutschland. Professioneller Service mit Herz und Verstand.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                    aria-label={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Leistungen</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="ml-3">
                  Bahnhofstraße 3b<br />
                  31303 Burgdorf
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+4951368017632" className="ml-3 hover:text-gray-900 transition-colors">
                  +49 5136 / 8017632
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:kontakt@a1umzuege.de" className="ml-3 hover:text-gray-900 transition-colors">
                  kontakt@a1umzuege.de
                </a>
              </li>
              <li className="flex items-start">
                <FaClock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="ml-3">
                  Mo-Fr: 8:00 - 20:00 Uhr<br />
                  Sa: 8:00 - 16:00 Uhr<br />
                  So: Geschlossen
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} A1 Umzüge. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            {legal.map((item, index) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  {item.name}
                </a>
                {index < legal.length - 1 && (
                  <span className="text-gray-600">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
