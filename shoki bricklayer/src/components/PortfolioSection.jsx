import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';

const PortfolioSection = () => {
  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  }, []);

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5">Our Portfolio</h2>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <img src="1.jpg" alt="Work in progress 1" />
          </div>
          <div className="item">
            <img src="2.jpg" alt="Work in progress 2" />
          </div>
          <div className="item">
            <img src="3.jpg" alt="Work in progress 3" />
          </div>
          <div className="item">
            <img src="4.jpg" alt="Work in progress 4" />
          </div>
          <div className="item">
            <img src="5.jpg" alt="Work in progress 5" />
          </div>
        </div>
        <h3 className="text-center fw-bold my-5">Watch Our Work</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <video controls className="w-100">
                <source src="6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h4 className="card-title">Video 1</h4>
                <p className="card-text">Video 1 description.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
