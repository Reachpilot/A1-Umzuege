'use client';

import { useState } from 'react';
import { MotionDiv, MotionP, MotionForm } from './Animated';
import { FaPaperPlane, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    startAddress: '',
    endAddress: '',
    message: '',
    moveType: 'private',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        moveDate: '',
        startAddress: '',
        endAddress: '',
        message: '',
        moveType: 'private',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="kontakt" className="py-16 bg-white">
      <MotionDiv 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kostenloses Angebot anfordern
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot bei Ihnen.
          </p>
        </div>

        <MotionForm 
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MotionDiv variants={item} className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border"
                  placeholder="Ihre E-Mail-Adresse"
                />
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhoneAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border"
                  placeholder="Ihre Telefonnummer"
                />
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="relative">
              <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700 mb-1">
                Gewünschter Umzugstermin <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  id="moveDate"
                  name="moveDate"
                  value={formData.moveDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border"
                />
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="relative">
              <label htmlFor="moveType" className="block text-sm font-medium text-gray-700 mb-1">
                Art des Umzugs <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="moveType"
                  name="moveType"
                  value={formData.moveType}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border bg-white"
                  required
                >
                  <option value="private">Privatumzug</option>
                  <option value="business">Firmenumzug</option>
                  <option value="international">Internationaler Umzug</option>
                  <option value="partial">Teilumzug</option>
                </select>
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="relative">
              <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-1">
                Wohnungsgröße (ca.)
              </label>
              <div className="relative">
                <select
                  id="volume"
                  name="volume"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border bg-white"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="1-room">1-Zimmer-Wohnung (bis 30 m²)</option>
                  <option value="2-room">2-Zimmer-Wohnung (30-60 m²)</option>
                  <option value="3-room">3-Zimmer-Wohnung (60-90 m²)</option>
                  <option value="4-room">4-Zimmer-Wohnung (90-120 m²)</option>
                  <option value="5-room">5+ Zimmer-Wohnung (ab 120 m²)</option>
                  <option value="house">Haus (ab 150 m²)</option>
                </select>
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="relative md:col-span-2">
              <label htmlFor="startAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Abholadresse <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-start pt-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="startAddress"
                  name="startAddress"
                  value={formData.startAddress}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border"
                  placeholder="Straße, Hausnummer, PLZ, Ort, Etage"
                />
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="relative md:col-span-2">
              <label htmlFor="endAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Zieladresse <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-start pt-3">
                  <FaHome className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="endAddress"
                  name="endAddress"
                  value={formData.endAddress}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border"
                  placeholder="Straße, Hausnummer, PLZ, Ort, Etage"
                />
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="relative md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Weitere Informationen
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 p-3 border"
                placeholder="Besondere Anforderungen, Möbelstücke, Parkmöglichkeiten, etc."
              />
            </MotionDiv>

            <MotionDiv variants={item} className="md:col-span-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="font-medium text-gray-700">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                    <a href="#datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{' '}
                    zu. <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv variants={item} className="pt-2 md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2 h-4 w-4" />
                    Kostenloses Angebot anfordern
                  </>
                )}
              </button>
            </MotionDiv>

            <MotionDiv variants={item} className="md:col-span-2">
              <p className="text-xs text-gray-500">
                * Pflichtfelder. Wir geben Ihre Daten nicht an Dritte weiter und verwenden sie ausschließlich zur Bearbeitung Ihrer Anfrage.
              </p>
            </MotionDiv>
          </div>
        </MotionForm>

        {submitStatus && (
          <div className={`mt-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className={submitStatus.success ? 'text-green-800' : 'text-red-800'}>{submitStatus.message}</p>
          </div>
        )}
      </MotionDiv>
    </div>
  );
};

export default InquiryForm;
