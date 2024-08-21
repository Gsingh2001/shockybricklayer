import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-white min-vh-90 d-flex flex-column">
      <Container className="flex-grow-1">
        <h2 className="text-center display-6 fw-bold mb-5">Contact Us</h2>
        <Row>
          <Col lg={6} className="contact-details">
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Get in Touch</Card.Title>
                <Card.Text>
                  <strong>Address:</strong> 9 Melrose Drive, Southall, UB1 3QA
                </Card.Text>
                <Card.Text>
                  <strong>Phone:</strong> <a href="tel:+447735445930" className="text-dark">07735445930</a>
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> <a href="mailto:shokikailey@gmail.com" className="text-dark">shokikailey@gmail.com</a>
                </Card.Text>
                <Card.Text>
                  <strong>Website:</strong> <a href="https://www.shokibricklayer.uk" className="text-dark">www.Shokibricklayer.uk</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Send Us a Message</Card.Title>
                <Form>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" required />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" required />
                  </Form.Group>
                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="map-container mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.774345971837!2d-0.3652703846601662!3d51.50347987963638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876098e4b62bb7b%3A0x5bd72b8b79a59571!2s9%20Melrose%20Dr%2C%20Southall%2C%20UB1%203QA!5e0!3m2!1sen!2suk!4v1619445582863!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
