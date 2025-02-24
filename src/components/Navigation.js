import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
          <Nav className="nav-links">
            <Nav.Link onClick={() => scrollToSection('profile')} className="mx-2">HOME</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')} className="mx-2">ABOUT ME</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('skills')} className="mx-2">SKILLS</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('education')} className="mx-2">EDUCATION</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('experience')} className="mx-2">EXPERIENCE</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')} className="mx-2">PROJECTS</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('social')} className="mx-2">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;