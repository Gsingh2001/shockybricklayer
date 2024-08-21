import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Quality Construction',
    description: 'Learn why quality matters in construction and how it affects the longevity and safety of your building.',
    date: 'August 15, 2024',
    link: '#'
  },
  {
    id: 2,
    title: 'Top 5 Renovation Tips for Homeowners',
    description: 'Discover essential tips and tricks to make your home renovation project smooth and successful.',
    date: 'July 20, 2024',
    link: '#'
  },
  {
    id: 3,
    title: 'Innovative Building Materials to Watch',
    description: 'Explore the latest trends in building materials and how they can enhance your construction projects.',
    date: 'June 10, 2024',
    link: '#'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-5 bg-light min-vh-90 d-flex flex-column">
      <Container className="flex-grow-1">
        <h2 className="text-center display-6 fw-bold mb-5">Our Blog</h2>
        <Row>
          {blogPosts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                  <Card.Text className="flex-grow-1">
                    {post.description}
                  </Card.Text>
                  <a href={post.link} className="btn btn-primary mt-auto">Read More</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
