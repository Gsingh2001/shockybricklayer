import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light full-screen-section">
      <Container>
        <h2 className="text-center display-6 fw-bold mb-5">About Us</h2>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to deliver top-notch construction and renovation services, 
                  ensuring the highest standards of quality and customer satisfaction. 
                  We are committed to building strong, lasting relationships with our clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Our History</Card.Title>
                <Card.Text>
                  Founded in [Year], we have a rich history of successful projects and satisfied clients. 
                  Our team brings decades of experience and expertise to every job, from small renovations to 
                  large-scale constructions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Meet the Team</Card.Title>
                <Card.Text>
                  Our team is composed of dedicated professionals who are passionate about what they do. 
                  From project managers to skilled craftsmen, each member of our team plays a crucial role 
                  in delivering exceptional results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
