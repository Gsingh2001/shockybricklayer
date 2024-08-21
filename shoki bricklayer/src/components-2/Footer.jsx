// Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="text-center">
        <p className="mb-1">&copy; 2024 Shoki Bricklayer Ltd. All rights reserved.</p>
      </Container>
      <a
        href="https://wa.me/+447735445930" // WhatsApp link
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with us on WhatsApp"
      >
        <FaWhatsapp size={40} /> {/* WhatsApp icon with a size of 40 */}
      </a>
    </footer>
  );
};

export default Footer;
