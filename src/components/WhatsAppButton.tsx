
import React from 'react';

const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=918884456466&text=Hey%20JCD%2C%20I%20want%20to%20discuss%20about%20your%20interior%20services";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" 
        alt="WhatsApp" 
        className="w-6 h-6 filter invert"
      />
    </a>
  );
};

export default WhatsAppButton;
