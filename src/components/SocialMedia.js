import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SocialMedia() {
  const socials = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/azievhanif",
      icon: require('../images/social/linkedin.png'),
      description: "Connect with me professionally and stay updated with my career journey."
    },
    {
      platform: "GitHub",
      url: "https://github.com/azievhanif",
      icon: require('../images/social/github.png'),
      description: "Check out my projects and contributions to open source."
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/azievhanif",
      icon: require('../images/social/instagram.png'),
      description: "Follow my personal life and daily activities."
    },
    {
      platform: "Email",
      url: "mailto:azievh@gmail.com",
      icon: require('../images/social/mail.png'),
      description: "Reach out to me directly via email for any inquiries."
    }
  ];

  return (
    <section className="experience-section" id="social">
      <Container>
        <h2 className="section-title mb-4">
          Connect <span className="text-warning">With Me</span>
        </h2>
        <p className="text-secondary mb-5">
          Feel free to connect with me on social media or reach out directly via email.
        </p>

        <Row>
          {socials.map((social, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-decoration-none"
              >
                <Card className="custom-card h-100 social-card">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <div className="social-icon-wrapper mb-4">
                      <img 
                        src={social.icon} 
                        alt={social.platform}
                        className="social-icon"
                      />
                    </div>
                    <h3 className="h5 text-warning mb-3">{social.platform}</h3>
                    <p className="text-secondary mb-0">{social.description}</p>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SocialMedia;