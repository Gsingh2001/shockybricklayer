import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.jpg';
import Image3 from '../assets/images/3.jpg';
import Image4 from '../assets/images/4.jpg';
import Image5 from '../assets/images/5.jpg';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <Container>
        <h2 className="text-center display-6 fw-bold mb-5">Our Portfolio</h2>
        <Carousel 
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="carousel-item">
            <img src={Image1} alt="Work in progress 1" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Image2} alt="Work in progress 2" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Image3} alt="Work in progress 3" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Image4} alt="Work in progress 4" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Image5} alt="Work in progress 5" className="d-block w-100" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default PortfolioSection;
