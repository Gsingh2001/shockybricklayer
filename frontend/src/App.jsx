// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './components-2/HeroSection';
import ServicesSection from './components-2/ServicesSection';
import PortfolioSection from './components-2/PortfolioSection';
import FAQSection from './components-2/FAQSection';
import ContactSection from './components-2/ContactSection';
import Footer from './components-2/Footer';
import OurWork from './components-2/OurWork';
import CustomNavbar from './components-2/Navbar'; // Import the new Navbar component
import Loader from './components-2/Loader'; // Import the loader component
import QuoteModal from './components-2/QuoteModal'; // Import the QuoteModal component
import { ToastContainer } from 'react-toastify';

function App() {
  const [loading, setLoading] = useState(true);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => setLoading(false), 1000); // Adjust time as needed

    // Show the QuoteModal after 5 seconds
    const timer = setTimeout(() => setShowQuoteModal(true), 8000); // 5 seconds delay

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => setShowQuoteModal(false);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomNavbar />
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <OurWork />
          <FAQSection />
          <ContactSection />
          <Footer />
          <QuoteModal show={showQuoteModal} handleClose={handleCloseModal} />
        </>
      )}
      <ToastContainer />

    </div>
  );
}

export default App;
