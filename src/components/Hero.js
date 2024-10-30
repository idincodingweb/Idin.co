import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Hero.css'; // Buat file CSS ini sesuai kebutuhan

const Hero = () => {
  return (
    <div className="container-fluid my-6 mt-0" id="home">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6} className="py-6 pb-0 pt-lg-0">
            <h3 className="text-primary mb-3"> I'm </h3>
            <h1 className="display-3 mb-3">Idin Code</h1>
            <h2 className="typed-text-output d-inline"></h2>
            <p className="typed-text text-dark">Jelajahi Dunia, Melalui Lensa Penuh Kreativitas, Animasi dan Keajaiban Visual</p>
            <div className="d-flex align-items-center pt-5">
              <Button href="" className="btn btn-primary py-3 px-4 me-5">Download CV</Button>
              <Button variant="link" className="btn-play" data-bs-toggle="modal" data-src="video/newyork.mp4" data-bs-target="#videoModal">
                <span></span>
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img className="img-fluid" src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/IMG_20241031_001653.jpg" alt="Idin Ganteng" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
