'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InstagramPhone() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Erleben Sie uns auf Instagram
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Folgen Sie uns für Einblicke in unsere Arbeit und aktuelle Angebote
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <motion.a 
              href="https://www.instagram.com/a1umzuege_gmbh/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full md:w-2/5 overflow-hidden md:pl-0 pl-4 block"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-xs">
                <div className="relative transform md:-translate-x-4">
                  <Image 
                    src="/images/phonea1.png" 
                    alt="A1 Umzüge auf Instagram"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </motion.a>
            
            <motion.div 
              className="w-full md:w-3/5 space-y-6 pr-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-primary">Ihre Umzugserfahrung</span>,<br/>unsere Leidenschaft
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Tauchen Sie ein in die Welt von A1 Umzüge und entdecken Sie, warum wir der <span className="font-semibold text-gray-800">vertrauenswürdigste</span> Partner für Ihren Umzug sind. 
                In unserer Instagram-Story zeigen wir Ihnen exklusive Einblicke hinter die Kulissen unserer <span className="text-primary font-medium">professionellen Umzugsdienste</span> – 
                von der sorgfältigen Verpackung Ihrer wertvollen Möbel bis hin zum präzisen Transport an den neuen Bestimmungsort.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Erfahrene Profis</h4>
                      <p className="text-gray-600 mt-1">Unser eingespieltes Team sorgt für einen reibungslosen Ablauf Ihres Umzugs.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Moderne Ausrüstung</h4>
                      <p className="text-gray-600 mt-1">Hochwertiges Material für den optimalen Schutz Ihrer Einrichtung.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://www.instagram.com/a1umzuege_gmbh/" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-lg hover:opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 shadow-md mt-6"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @a1umzuege_gmbh folgen
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
