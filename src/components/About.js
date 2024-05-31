import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css';

const About = () => {

  return (
    <div className="about-section py-6" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <h2 className="about-title mb-4 text-primary fw-bold">Tentang Kami</h2>
            <p className="about-text mb-4">Selamat datang di dunia visual yang dipenuhi dengan karya seni dari Idin Code dan Intan Aulia. Di sini, setiap gambar memiliki kisah yang unik dan memukau. Sebagai seorang programer, Idin Code menghadirkan setiap detail dengan presisi, sedangkan sebagai seorang desainer, Intan Aulia menambahkan sentuhan kreatif yang memukau. Kami percaya bahwa setiap momen memiliki keindahan tersendiri yang patut untuk diabadikan. Melalui karya kami, kami berusaha untuk menangkap keindahan dunia dan menyampaikannya kepada Anda dalam bentuk visual yang memukau dan menginspirasi.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
