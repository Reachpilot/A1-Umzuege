'use client';

import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { MotionDiv, MotionSection } from './Animated';

const testimonials = [
  {
    id: 1,
    name: 'Ursula Stridde',
    role: 'Privatkundin',
    content: 'Suuuuper geklappt, pünktlich, freundlich, keine Schäden, preisgünstig. Sehr empfehlenswert.',
    rating: 5,
    image: '/images/testimonials/person1.jpg',

  },
  {
    id: 2,
    name: 'Felix Noack',
    role: 'Firmenkunde',
    content: 'Der Umzug verlief erstklassig – sehr schnelle und umsichtige Arbeit. Großes Lob ans gesamte Team.',
    rating: 5,
    image: '/images/testimonials/person2.jpg',

  },
  {
    id: 3,
    name: 'Lars Riemann',
    role: 'Privatkunde',
    content: 'A1 Umzüge hat uns unglaublich viel Zeit und Nerven gespart. Kompetent, freundlich und perfekt organisiert.',
    rating: 5,
    image: '/images/testimonials/person3.jpg',

  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <MotionSection
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Über 1.000 zufriedene Kunden vertrauen auf unseren professionellen Umzugsservice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <MotionDiv
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start mb-6">
                <div className="relative w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mr-5 flex-shrink-0 shadow-md">
                  <FaUserCircle className="w-12 h-12 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="bg-primary/10 p-1 rounded">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative flex-1">
                <FaQuoteLeft className="text-gray-200 text-4xl absolute -top-2 left-0 -z-10" />
                <p className="text-gray-700 pl-6">{testimonial.content}</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verifizierter Kunde
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=A1+Umz%C3%BCge+GmbH+Bewertungen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary-dark hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Alle Bewertungen anzeigen
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.8/5 aus 50+ Bewertungen</span>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
