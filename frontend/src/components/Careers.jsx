import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const jobListings = [
  {
    id: 1,
    title: 'Senior Developer',
    description: 'Lead the development team and oversee project execution. Requires 5+ years of experience.',
    location: 'New York, NY',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Manager',
    description: 'Manage project timelines and coordinate between teams. Requires excellent organizational skills.',
    location: 'Los Angeles, CA',
    link: '#'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    description: 'Design user-friendly interfaces and improve user experience. Requires strong design portfolio.',
    location: 'San Francisco, CA',
    link: '#'
  }
];

const Careers = () => {
  return (
    <section id="careers" className="py-5 bg-light min-vh-90 d-flex flex-column">
      <Container className="flex-grow-1">
        <h2 className="text-center display-6 fw-bold mb-5">Careers</h2>
        <Row>
          <Col md={12}>
            <h3 className="text-center mb-4">Current Openings</h3>
            <Row>
              {jobListings.map((job) => (
                <Col md={4} key={job.id} className="mb-4">
                  <Card className="shadow-sm h-100">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{job.location}</Card.Subtitle>
                      <Card.Text className="flex-grow-1">
                        {job.description}
                      </Card.Text>
                      <a href={job.link} className="btn btn-primary mt-auto">Apply Now</a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Why Work With Us?</Card.Title>
                <Card.Text>
                  At Shoki BrickLayer, we value our employees and strive to create a positive and inclusive work environment. 
                  We offer competitive salaries, comprehensive benefits, and opportunities for professional growth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>How to Apply</Card.Title>
                <Card.Text>
                  Interested in joining our team? Please submit your resume and a cover letter detailing your experience 
                  and why you're a good fit for the role through our <a href="#contact">Contact Us</a> page. We look forward 
                  to hearing from you!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Careers;
