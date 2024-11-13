import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Education() {
  const education = [
    {
      school: "SMAN 2 Kota Mojokerto",
      degree: "Science Major",
      period: "2018 - 2021",
      description: "Completed high school education with a focus on science and mathematics.",
      image: require('../images/education/smanda.png')
    },

    {
        school: "Universitas Negeri Surabaya",
        degree: "Information Systems Undergraduate",
        period: "2021 - Present",
        description: "Currently pursuing a bachelor's degree in Information Systems with focus on IT management and governance.",
        image: require('../images/education/unesa.png')
      },
  ];

  return (
    <section className="experience-section" id="education">
      <Container>
        <h2 className="section-title mb-4">
          My <span className="text-warning">Education</span>
        </h2>
        <p className="text-secondary mb-5">
            My learning journey that's built up my knowledge and skills in Information Technology.
        </p>
        
        <Row>
          {education.map((edu, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="custom-card h-100">
                <div className="card-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={edu.image} 
                    alt={edu.school}
                    className="card-image" 
                  />
                </div>
                <Card.Body>
                  <p className="text-secondary mb-2">{edu.period}</p>
                  <h3 className="text-warning mb-2">{edu.school}</h3>
                  <h5 className="mb-3">{edu.degree}</h5>
                  <p className="text-secondary">{edu.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;