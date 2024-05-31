import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'; // Buat file CSS ini sesuai kebutuhan

const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <Container>
        <Navbar.Brand href="index.html" className="d-block d-lg-none">
          <h1 className="text-primary fw-bold m-0">Idin Code</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse" className="justify-content-between py-4 py-lg-0">
          <Nav className="ms-auto py-0">
            <Nav.Link href="#home" className="active">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
          </Nav>
          <Navbar.Brand href="index.html" className="bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
            <h1 className="text-primary fw-bold m-0">Idin Code</h1>
          </Navbar.Brand>
          <Nav className="me-auto py-0">
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
