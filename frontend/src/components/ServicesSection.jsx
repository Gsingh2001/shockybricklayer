import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5">Our Services</h2>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="card-title fw-bold">Bricklaying</h3>
                <p className="card-text">High-quality bricklaying services for residential and commercial projects.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="card-title fw-bold">Construction</h3>
                <p className="card-text">Full-service construction solutions from planning to execution.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="card-title fw-bold">Renovations</h3>
                <p className="card-text">Expert renovation services to enhance and restore your property.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
