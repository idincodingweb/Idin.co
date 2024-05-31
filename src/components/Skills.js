import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Skills.css';

const Skills = () => {
  return (
   
    <div className="skills-section py-6" id="skill">
      <Container>
        <Row className="g-5 projekcuy">
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-5 text-primary">Pengalaman Saya</h1>
            <p className="mb-4">Sebagai seorang programer profesional, saya telah mengasah berbagai keterampilan yang memungkinkan saya untuk mengembangkan aplikasi web yang luar biasa. Berikut adalah beberapa keahlian utama yang saya miliki dan terus saya kembangkan:</p>
            
            <h3 className="mb-4 text-primary">Keahlian Saya</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <Skill name="HTML" percentage={95} variant="primary" />
                <Skill name="PYTHON" percentage={85} variant="warning" />
                <Skill name="JAVASCRIPT" percentage={90} variant="danger" />
                {/* Tambahkan keahlian lainnya di sini */}
              </div>
              <div className="col-md-6">
                <Skill name="JAVA" percentage={90} variant="danger" />
                <Skill name="CSS" percentage={95} variant="dark" />
                <Skill name="C++" percentage={85} variant="info" />
                {/* Tambahkan keahlian lainnya di sini */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
 
  );
};

const Skill = ({ name, percentage, variant }) => {
  return (
    <div className="skill mb-4">
      <div className="d-flex justify-content-between">
        <h6 className="font-weight-bold">{name}</h6>
        <h6 className="font-weight-bold">{percentage}%</h6>
      </div>
      <ProgressBar now={percentage} variant={variant} />
    </div>
  );
};
    
export default Skills;
