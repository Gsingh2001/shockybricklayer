// src/components-2/HeroSection.js
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Banner from '../assets/images/4-1.jpg';
import QuoteModal from './QuoteModal';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center vh-100"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center'
      }}
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="display-3 fw-bold mb-4 hero-title">
              Welcome to Shoki Bricklayer Ltd
            </h1>
            <p className="lead mb-4 hero-text">
              Expert bricklaying and construction services tailored to your needs.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="hero-button"
              onClick={handleShow}
            >
              Get a Quote
            </Button>
          </Col>
        </Row>
      </Container>

      <QuoteModal show={showModal} handleClose={handleClose} />
    </section>
  );
};

export default HeroSection;
