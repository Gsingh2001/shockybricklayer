import React from 'react';
import Banner from "../assets/images/4-1.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-dark text-light d-flex align-items-center vh-100"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">Welcome to Shoki Bricklayer Ltd</h1>
        <p className="lead mb-4">Your trusted partner in construction and bricklaying services.</p>
        <a href="#services" className="btn btn-primary btn-lg">Explore Our Services</a>
      </div>
    </section>
  );
};

export default HeroSection;
