'use client';

import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function GoogleMaps() {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9710.24098317092!2d10.00732697634882!3d52.44240436039202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b5f1f0f8a7c5a5%3A0x8f1e3f1e3f1e3f1e!2sBahnhofstra%C3%9Fe%203b%2C%2031303%20Burgdorf!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde';

  return (
    <div className="w-full h-[500px] relative">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="A1 Umzüge Standort"
        className="w-full h-full"
      />
      <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg z-10 max-w-xs">
        <h3 className="font-bold text-lg mb-2 text-gray-800">A1 Umzüge</h3>
        <p className="text-gray-600 mb-2">
          <FaMapMarkerAlt className="inline mr-2 text-blue-500" />
          Bahnhofstrasse 3b<br />
          31303 Burgdorf
        </p>
        <a 
          href="https://www.google.com/maps/dir//Bahnhofstra%C3%9Fe+3b,+31303+Burgdorf/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-sm font-medium inline-flex items-center mt-2"
        >
          <FaExternalLinkAlt className="mr-1" size={12} />
          In Google Maps öffnen
        </a>
      </div>
    </div>
  );
}
