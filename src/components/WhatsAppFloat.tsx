const WhatsAppFloat = () => {
  const phoneNumber = "212674506084";
  const message = "السلام عليكم، أرغب في استشارة قانونية";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 group focus:outline-none focus:ring-0"
      aria-label="تواصل معنا عبر واتساب"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0012 0C5.37 0 0 5.37 0 12a11.82 11.82 0 001.72 6.08L0 24l6.13-1.61A11.84 11.84 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.21-3.48-8.52zM12 22a9.84 9.84 0 01-5.01-1.37l-.36-.21-3.64.95.97-3.55-.23-.37A9.81 9.81 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.46-7.54c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.03 8.03 0 01-2.36-1.45 8.9 8.9 0 01-1.64-2.05c-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.11 3.23 5.12 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.41-.08-.11-.28-.17-.58-.32z"/>
      </svg>

      <span className="absolute right-full mr-3 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        تواصل عبر واتساب
      </span>
    </button>
  );
};

export default WhatsAppFloat;
