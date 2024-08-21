import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { API_ENDPOINTS } from '../assets/helper/utils';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      setLoading(true);
      const response = await fetch(API_ENDPOINTS.SUBMIT_FORM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message || 'Thank you for your message!');
        form.reset();
      } else {
        throw new Error('There was a problem with the form submission.');
      }
    } catch (err) {
      toast.error('There was an error submitting your message.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 bg-light" id="contact">
      <Container>
        <h2 className="text-center display-6 fw-bold mb-5">Contact Us</h2>
        <Row className="g-4">
          {/* Contact Information Card */}
          <Col lg={6}>
            <Card className="d-flex h-100">
              <Card.Body>
                <Card.Title>Contact Information</Card.Title>
                <ul className="list-unstyled">
                  <li><strong>Shoki Bricklayer Ltd</strong></li>
                  <li>9 Melrose Drive</li>
                  <li>Southall</li>
                  <li>UB1 3QA</li>
                  <li>Phone: 07735445930</li>
                  <li>Email: shokikailey@gmail.com</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form Card */}
          <Col lg={6}>
            <Card className="d-flex h-100">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={4} placeholder="Enter your message" required />
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Google Maps Embed */}
        <div className="mt-5">
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

export default ContactSection;
