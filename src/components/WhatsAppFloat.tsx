import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = "212656393165"; // Format: country code + number without + and spaces
  const message = "السلام عليكم، أرغب في استشارة قانونية";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        تواصل عبر واتساب
      </span>
    </button>
  );
};

export default WhatsAppFloat;