// src/components/CustomNavbar.jsx
import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Logo from '../assets/images/dark-logo-2.png'; // Adjust the path if necessary
import QuoteModal from './QuoteModal'; // Adjust the path if necessary

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={Logo} alt="Shoki Bricklayer Ltd" height="40" />
            <span className="ms-2">Shoki Bricklayer Ltd</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button variant="primary" onClick={handleShow}>
                Get a Quote
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <QuoteModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default CustomNavbar;
