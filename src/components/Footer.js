import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-5">
      <Container>
        <Row className="border-top justify-content-center p-3">
          <Col md={6} sm={6}>
            &copy; 2024 Idin Code | Design By Intan Aulia | Assitant Cristin Julia
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
