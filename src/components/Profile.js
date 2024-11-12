import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Profile() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="profile-section" id="profile">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h3 className="text-warning mb-4">Hi, Welcome 👋🏻</h3>
            <h1 className="display-4 fw-bold mb-4">
              I'm Aziev Hanif
            </h1>
            <p className="text-secondary mb-4">
              an Information Systems student at Universitas Negeri Surabaya (State University of Surabaya) 
              with a deep interest in IT management and governance.
            </p>
            <Button 
              variant="warning" 
              size="lg" 
              className="px-4"
              onClick={() => scrollToSection('social')}
            >
              Contact Me
            </Button>
          </Col>
          <Col md={6}>
            <div className="profile-image-wrapper">
              <img
                src={require('../images/profile/profile.jpeg')}
                alt="Profile"
                className="img-fluid rounded-4 profile-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Profile;