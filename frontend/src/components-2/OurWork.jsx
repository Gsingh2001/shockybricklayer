import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Video1 from '../assets/vedios/6.mp4';
import Video2 from '../assets/vedios/7.mp4';

const OurWork = () => {
  return (
    <section id="our-work" className="py-5 bg-light">
      <div className="container">
        <h3 className="text-center fw-bold mb-5">Watch Our Work</h3>
        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-sm our-work-card">
              <video controls className="card-media">
                <source src={Video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm our-work-card">
              <video controls className="card-media">
                <source src={Video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurWork;
