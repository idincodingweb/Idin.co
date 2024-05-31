import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Testimonial.css'; // Pastikan mengganti path sesuai dengan lokasi file CSS Anda

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="testimonial" className="py-5 my-5">
      <Container className="py-5">
        <h1 className="display-5 text-center mb-5 text-primary">Testimonial</h1>
        <Row className="justify-content-center">
          <Col lg={3} className="d-none d-lg-block">
            <div className="testimonial-left h-100">
              <img className="img-fluid" src="https://via.placeholder.com/150" alt="Testimonial 1" />
              <img className="img-fluid mt-4" src="https://via.placeholder.com/150" alt="Testimonial 2" />
              <img className="img-fluid mt-4" src="https://via.placeholder.com/150" alt="Testimonial 3" />
            </div>
          </Col>
          <Col lg={6}>
            <Carousel activeIndex={index} onSelect={handleSelect} className="testimonial-carousel">
              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="https://via.placeholder.com/150" alt="Testimonial 1" />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">Karya fotografi Idin Code memukau! Setiap momen terabadikan dengan sempurna, menghadirkan keindahan dan emosi yang tak terlupakan. Inspiratif dan profesional!</p>
                  <hr className="w-25 mx-auto" />
                  <h5>Baby Sarah</h5>
                  <span>Makeup Over</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="https://via.placeholder.com/150" alt="Testimonial 2" />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">Idin Code menghadirkan karya-karya fotografi yang memukau dan berkesan. Setiap foto membawa cerita yang mendalam dan keindahan yang tiada tara. Kreativitas dan keahlian yang luar biasa!</p>
                  <hr className="w-25 mx-auto" />
                  <h5>Dani Alexander</h5>
                  <span>Teacher</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="https://via.placeholder.com/150" alt="Testimonial 3" />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">Foto-foto karya Idin Code sungguh memukau! Tiap jepretan menjadi kisah yang menggetarkan hati dan mata. Bravo untuk keahlian dan dedikasinya dalam dunia fotografi!</p>
                  <hr className="w-25 mx-auto" />
                  <h5>Jhon Martin</h5>
                  <span>Editor</span>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <div className="testimonial-right h-100">
              <img className="img-fluid" src="https://via.placeholder.com/150" alt="Testimonial 1" />
              <img className="img-fluid mt-4" src="https://via.placeholder.com/150" alt="Testimonial 2" />
              <img className="img-fluid mt-4" src="https://via.placeholder.com/150" alt="Testimonial 3" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
