import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const FAQSection = () => {
  return (
    <section id="faq" className="py-5 bg-white">
      <Container>
        <h2 className="text-center display-6 fw-bold mb-5">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What services do you offer?</Accordion.Header>
            <Accordion.Body>
              We offer high-quality bricklaying, construction, and renovation services for both residential and commercial projects.
            </Accordion.Body>
          </Accordion.Item>
         
          <Accordion.Item eventKey="2">
            <Accordion.Header>Are you licensed and insured?</Accordion.Header>
            <Accordion.Body>
              Yes, we are fully licensed and insured to provide construction and renovation services.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What is your typical project timeline?</Accordion.Header>
            <Accordion.Body>
              The timeline for a project can vary depending on its size and complexity. We will provide you with an estimated timeline when we discuss your project in detail.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Do you offer warranties for your work?</Accordion.Header>
            <Accordion.Body>
              Yes, we offer warranties on our work to ensure your satisfaction. The specifics of the warranty will be discussed and detailed in your project agreement.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Can I make changes to the project once it has started?</Accordion.Header>
            <Accordion.Body>
              Changes can be made to the project; however, they may affect the timeline and cost. We recommend discussing any changes with us as soon as possible to make necessary adjustments.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>How do you handle unexpected issues during a project?</Accordion.Header>
            <Accordion.Body>
              Our team is experienced in handling unforeseen issues. We will communicate any problems and potential solutions with you promptly to ensure minimal disruption to the project.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>What payment methods do you accept?</Accordion.Header>
            <Accordion.Body>
              We accept various payment methods, including credit/debit cards, bank transfers, and checks. Payment details will be outlined in your project agreement.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQSection;
