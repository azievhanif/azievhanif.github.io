import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Experience() {
  const experiences = [
    {
      period: "August 2023 - December 2023",
      title: "Quality Assurance",
      company: "A+A&Corp",
      description: "I conducted thorough testing of the mobile app and website to ensure they met all required functionalities and performed as expected.",
      image: require('../images/experiences/aacorp.png')
    },
    {
      period: "May 2024 - August 2024",
      title: "Information Technology Staff",
      company: "Titian Services Indonesia",
      description: "As a part of the IT staff, I took responsibility for ensuring the stability and smooth operation of the company's computer systems and networks.",
      image: require('../images/experiences/titian.png')
    },
    {
      period: "September 2024 - Present",
      title: "Full Stack Mentee",
      company: "Celerates",
      description: "Engaged as a mentee in the Celerates Acceleration Mastery Program (CAMP): Full Stack, focusing on both front-end and back-end development.",
      image: require('../images/experiences/celerates.png')
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <Container>
        <h2 className="section-title mb-4">
          My <span className="text-warning">Experiences</span>
        </h2>
        <p className="text-secondary mb-5">
            Professional experiences from the projects and roles I've taken on during my time as a student.
        </p>
        
        <Row>
          {experiences.map((exp, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="custom-card h-100">
                <div className="card-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={exp.image} 
                    alt={exp.company}
                    className="card-image"
                  />
                </div>
                <Card.Body>
                  <p className="text-secondary mb-2">{exp.period}</p>
                  <h3 className="text-warning mb-2">{exp.title}</h3>
                  <h5 className="mb-3">{exp.company}</h5>
                  <p className="text-secondary">{exp.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;