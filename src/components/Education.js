import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

function Education() {
  const [selectedEdu, setSelectedEdu] = useState(null);

  const education = [
    {
      school: "SMAN 2 Kota Mojokerto",
      degree: "Science Major",
      period: "2018 - 2021",
      description: "Completed high school education with a focus on science and mathematics.",
      image: require('../images/education/smanda.png'),
      details: {
        courses: [
          "Advanced Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        activities: [
          "Futsal"
        ]
      }
    },
    {
      school: "Universitas Negeri Surabaya",
      degree: "Information Systems Undergraduate",
      period: "2021 - Present",
      description: "Currently pursuing a bachelor's degree in Information Systems with focus on IT management and governance.",
      image: require('../images/education/unesa.png'),
      details: {
        courses: [
          "IT Service Management ",
          "IT Risk Management",
          "IS Project Management",
          "IT Audit",
          "Web Development"
        ],
        activities: [
          "Islamic Spiritual Activity Unit",
        ]
      }
    },
  ];

  const handleClose = () => setSelectedEdu(null);
  const handleShow = (edu) => setSelectedEdu(edu);

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
              <Card 
                className="custom-card h-100" 
                onClick={() => handleShow(edu)}
                style={{ cursor: 'pointer' }}
              >
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

      <Modal 
        show={selectedEdu !== null} 
        onHide={handleClose}
        size="lg"
        centered
        contentClassName="bg-dark"
        className="text-white"
      >
        {selectedEdu && (
          <>
            <Modal.Header closeButton className="border-secondary">
              <Modal.Title className="text-warning">{selectedEdu.school}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
              <div className="text-center mb-4 p-4 rounded" style={{ backgroundColor: '#0D1117' }}>
                <img 
                  src={selectedEdu.image} 
                  alt={selectedEdu.school}
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
              </div>
              <h4 className="text-warning">{selectedEdu.degree}</h4>
              <p className="text-secondary">{selectedEdu.period}</p>
              <p>{selectedEdu.description}</p>
              
              <h5 className="mt-4 mb-3 text-warning">Key Courses</h5>
              <ul className="text-white">
                {selectedEdu.details.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>

              <h5 className="mt-4 mb-3 text-warning">Activities</h5>
              <ul className="text-white">
                {selectedEdu.details.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer className="border-secondary">
              <Button variant="warning" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Education;