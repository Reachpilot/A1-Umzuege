import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontaktieren Sie uns</h1>
            <p className="text-xl text-white/90">
              Wir freuen uns auf Ihre Anfrage. Unser Team steht Ihnen gerne für Fragen zur Verfügung.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Contact Information */}
              <div className="md:w-1/3 bg-gray-900 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                      <FaPhoneAlt className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Telefon</h3>
                      <a href="tel:+4951368017632" className="text-gray-300 hover:text-white transition-colors">
                        +49 5136 / 8017632
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                      <FaEnvelope className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">E-Mail</h3>
                      <a href="mailto:kontakt@a1umzuege.de" className="text-gray-300 hover:text-white transition-colors">
                        kontakt@a1umzuege.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                      <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Adresse</h3>
                      <p className="text-gray-300">
                        Bahnhofstraße 3b<br />
                        31303 Burgdorf
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium mb-4">Erreichbarkeit</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Mo - Fr:</span>
                      <span>08:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sa:</span>
                      <span>08:00 - 14:00</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Senden Sie uns eine Nachricht</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere sie. *
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      <FaPaperPlane className="mr-2" />
                      Nachricht senden
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
