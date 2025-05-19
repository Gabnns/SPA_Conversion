
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 z-50 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
