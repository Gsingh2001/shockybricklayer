import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesSection = () => {
  return (
    <section id="services" className="py-5 bg-white">
      <Container>
        <h2 className="text-center display-6 fw-bold mb-5">Our Services</h2>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold">Bricklaying</Card.Title>
                <Card.Text>High-quality bricklaying services for residential and commercial projects.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold">Construction</Card.Title>
                <Card.Text>Full-service construction solutions from planning to execution.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold">Renovations</Card.Title>
                <Card.Text>Expert renovation services to enhance and restore your property.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
