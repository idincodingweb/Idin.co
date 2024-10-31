import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Team.css'; // Pastikan mengganti path sesuai dengan lokasi file CSS Anda

const Team = () => {
  return (
    <div className="container-xxl py-6 pb-5" id="team">
      <Container>
        <Row className="g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <Col lg={6}>
            <h1 className="display-5 mb-0 text-primary">Tim Kami</h1>
          </Col>
          
        </Row>
        <Row className="g-4">
          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <img className="img-fluid rounded" src="https://raw.githubusercontent.com/idincodingweb/packgambar/main/pink_nurulrr-27-05-2024-0001.jpg" alt="" />
              <div className="team-text bg-white rounded-end p-4">
                <div>
                  <h5>Diana febianti</h5>
                  <span>Designer</span>
                </div>
                <i className="fa fa-arrow-right fa-2x text-primary"></i>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative">
              <img className="img-fluid rounded" src="https://raw.githubusercontent.com/idincodingweb/packgambar/main/feel__la.26-27-05-2024-0001.jpg" alt=" " />
              <div className="team-text bg-white rounded-end p-4">
                <div>
                  <h5>Intan Aulia</h5>
                  <span>Assistant</span>
                </div>
                <i className="fa fa-arrow-right fa-2x text-primary"></i>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <img className="img-fluid rounded" src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/IMG_20241031_001653.jpg" alt=" " />
              <div className="team-text bg-white rounded-end p-4">
                <div>
                  <h5>Idin Code</h5>
                  <span>Development</span>
                </div>
                <i className="fa fa-arrow-right fa-2x text-primary"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
