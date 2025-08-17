'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        if (isMenuOpen) {
          toggleMenu();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
    
    // Close all dropdowns when toggling mobile menu
    if (!newState) {
      setActiveDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    setActiveDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Services data - same as in ServicesOverview
  const services = [
    { id: 'privatumzuege', label: 'Privatumzüge', href: '/leistungen/privatumzuege' },
    { id: 'firmenumzuege', label: 'Firmenumzüge', href: '/leistungen/firmenumzuege' },
    { id: 'entruempelungen', label: 'Entrümpelungen', href: '/leistungen/entruempelungen' },
    { id: 'internationale-umzuege', label: 'Internationale Umzüge', href: '/leistungen/internationale-umzuege' },
    { id: 'renovierung', label: 'Renovierung', href: '/leistungen/renovierung' },
    { id: 'lagerung', label: 'Lagerung', href: '/leistungen/lagerung' },
    { id: 'kuechenmontage', label: 'Küchenmontage', href: '/leistungen/kuechenmontage' },
    { id: 'umzugshelfer', label: 'Umzugshelfer', href: '/leistungen/umzugshelfer' }
  ];

  // Navigation items with potential dropdowns
  const navItems = [
    { id: 'home', label: 'Startseite', href: '/#start' },
    { 
      id: 'services', 
      label: 'Leistungen', 
      href: '/leistungen',
      dropdown: services
    },
    { id: 'about', label: 'Über uns', href: '/ueber-uns' },
    { id: 'career', label: 'Karriere', href: '/karriere' },
    { id: 'references', label: 'Referenzen', href: '/referenzen' },
    { id: 'contact', label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header 
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between" aria-label="Hauptnavigation">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md hover:no-underline"
            onClick={closeMenu}
            aria-label="Startseite"
          >
            <img 
              src="/images/a1-umzuege-burgdorf.png" 
              alt="A1 Umzüge Burgdorf - Ihr professioneller Umzugsservice" 
              className="h-20 w-auto"
              width={333}
              height={80}
              style={{ pointerEvents: 'none' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                      aria-controls={`${item.id}-dropdown`}
                    >
                      <span>{item.label}</span>
                      <FaChevronDown className={`ml-1 text-xs transition-transform ${activeDropdown === item.id ? 'transform rotate-180' : ''}`} />
                    </button>
                    
                    <div 
                      id={`${item.id}-dropdown`}
                      className={`absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-200 origin-top-left ${
                        activeDropdown === item.id 
                          ? 'opacity-100 scale-100 visible' 
                          : 'opacity-0 scale-95 invisible pointer-events-none'
                      }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          onClick={closeMenu}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-3 text-gray-700 hover:text-primary transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="ml-4">
              <a 
                href="tel:+4951368017632" 
                className="bg-primary text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                aria-label="Jetzt anrufen"
              >
                <FaPhoneAlt className="text-sm" />
                <span className="hidden xl:inline">Jetzt anrufen</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <a 
              href="tel:+4951368017632" 
              className="bg-primary text-white p-2.5 rounded-lg mr-3 hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="Jetzt anrufen"
            >
              <FaPhoneAlt className="text-sm" />
            </a>
            
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 p-1 rounded-md"
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          ref={mobileMenuRef}
          className={`lg:hidden fixed inset-0 bg-white z-40 mt-16 overflow-y-auto transition-all duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className="w-full flex items-center justify-between px-4 py-3 text-lg text-gray-800 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
                        aria-expanded={activeDropdown === item.id}
                        aria-controls={`mobile-${item.id}-dropdown`}
                      >
                        <span>{item.label}</span>
                        <FaChevronDown 
                          className={`text-xs transition-transform ${
                            activeDropdown === item.id ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <div 
                        id={`mobile-${item.id}-dropdown`}
                        className={`pl-6 overflow-hidden transition-all duration-200 ${
                          activeDropdown === item.id ? 'max-h-96 py-2' : 'max-h-0 py-0'
                        }`}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block py-2.5 px-4 text-gray-600 hover:text-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                            onClick={closeMenu}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-lg text-gray-800 hover:text-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4">
                <a 
                  href="tel:+4951368017632" 
                  className="w-full inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg space-x-2 hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                  onClick={closeMenu}
                >
                  <FaPhoneAlt />
                  <span>Jetzt anrufen</span>
                </a>
              </div>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">Kontakt</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:info@a1-umzuege.de" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <FaEnvelope className="mr-3 text-primary" />
                  info@a1-umzuege.de
                </a>
                <a 
                  href="tel:+4951368017632" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <FaPhoneAlt className="mr-3 text-primary" />
                  +49 5136 / 8017632
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
