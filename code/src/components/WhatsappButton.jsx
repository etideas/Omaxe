import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/qr/R27I7XHCE6PFL1"; // WhatsApp link of user

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-[#25D366] text-white py-2 px-3 rounded-full shadow-lg hover:bg-[#1ebe59] transition-colors duration-300"
      style={{ zIndex: 1000 }} // Ensures the button stays above other content
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        size="lg"
      />{" "}
      {/* Change size here */}
    </a>
  );
};

export default WhatsAppButton;
