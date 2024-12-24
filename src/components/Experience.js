import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { ChevronRight } from "lucide-react";

function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      period: "August 2023 - December 2023",
      title: "Quality Assurance",
      company: "A+A&Corp",
      description:
        "I conducted thorough testing of the mobile app and website to ensure they met all required functionalities and performed as expected.",
      image: require("../images/experiences/aacorp.png"),
      details: {
        responsibilities: [
          "Developed and executed test cases for mobile and web applications",
          "Performed functional and regression testing",
          "Documented and tracked software bugs using issue tracking systems",
          "Collaborated with developers to resolve identified issues",
        ],
        technologies: ["Selenium", "Postman", "JIRA", "TestRail"],
        achievements: [
          "Reduced bug detection time by 30%",
          "Improved test coverage by implementing automated testing",
          "Successfully delivered 5 major releases with minimal post-release issues",
        ],
      },
    },
    {
      period: "May 2024 - August 2024",
      title: "Information Technology Staff",
      company: "Titian Services Indonesia",
      description:
        "As a part of the IT staff, I took responsibility for ensuring the stability and smooth operation of the company's computer systems and networks.",
      image: require("../images/experiences/titian.png"),
      details: {
        responsibilities: [
          "Managed and maintained IT infrastructure",
          "Provided technical support to employees",
          "Implemented security measures and backup systems",
          "Monitored system performance and network stability",
        ],
        technologies: [
          "Windows Server",
          "Active Directory",
          "Network Management Tools",
          "Help Desk Systems",
        ],
        achievements: [
          "Improved system uptime to 99.9%",
          "Implemented new backup solution reducing recovery time by 50%",
          "Successfully managed IT support for 100+ employees",
        ],
      },
    },
    {
      period: "September 2024 - December 2024",
      title: "Full Stack Mentee",
      company: "Celerates",
      description:
        "Engaged as a mentee in the Celerates Acceleration Mastery Program (CAMP): Full Stack, focusing on both front-end and back-end development.",
      image: require("../images/experiences/celerates.png"),
      details: {
        responsibilities: [
          "Developing full-stack web applications",
          "Learning modern web development technologies",
        ],
        technologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Git",
        ],
        achievements: [
          "Completed multiple full-stack projects",
          "Contributed to team development initiatives",
        ],
      },
    },
  ];

  const handleClose = () => setSelectedExp(null);
  const handleShow = (exp) => setSelectedExp(exp);

  return (
    <section className="experience-section" id="experience">
      <Container>
        <h2 className="section-title mb-4">
          My <span className="text-warning">Experiences</span>
        </h2>
        <p className="text-secondary mb-5">
          Professional experiences from the projects and roles I've taken on
          during my time as a student.
        </p>

        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card
                className="custom-card h-200"
                onClick={() => handleShow(exp)}
                style={{ cursor: "pointer" }}
              >
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
                  <h3 className="text-warning mb-2 fs-5">{exp.title}</h3>
                  <h5 className="mb-3 fs-6">{exp.company}</h5>
                  <p className="text-secondary">{exp.description}</p>
                  <div
                    className="d-flex align-items-center text-warning mt-3"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <span>View details</span>
                    <ChevronRight size={16} style={{ marginLeft: "4px" }} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={selectedExp !== null}
        onHide={handleClose}
        size="lg"
        centered
        contentClassName="bg-dark"
        className="text-white mobile-modal"
      >
        {selectedExp && (
          <>
            <Modal.Header
              closeButton
              closeVariant="white"
              className="border-secondary"
            >
              <Modal.Title className="text-warning fs-5">
                {selectedExp.title} at {selectedExp.company}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
              <div
                className="text-center mb-4 p-3 rounded"
                style={{ backgroundColor: "#0D1117" }}
              >
                <img
                  src={selectedExp.image}
                  alt={selectedExp.company}
                  className="img-fluid"
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                />
              </div>
              <p className="text-secondary fs-6">{selectedExp.period}</p>
              <p className="fs-6">{selectedExp.description}</p>

              <h5 className="mt-4 mb-3 text-warning fs-6">
                Key Responsibilities
              </h5>
              <ul className="text-white fs-6 ps-3">
                {selectedExp.details.responsibilities.map(
                  (responsibility, index) => (
                    <li key={index} className="mb-2">
                      {responsibility}
                    </li>
                  )
                )}
              </ul>

              <h5 className="mt-4 mb-3 text-warning fs-6">Technologies Used</h5>
              <ul className="text-white fs-6 ps-3">
                {selectedExp.details.technologies.map((tech, index) => (
                  <li key={index} className="mb-2">
                    {tech}
                  </li>
                ))}
              </ul>

              <h5 className="mt-4 mb-3 text-warning fs-6">Key Achievements</h5>
              <ul className="text-white fs-6 ps-3">
                {selectedExp.details.achievements.map((achievement, index) => (
                  <li key={index} className="mb-2">
                    {achievement}
                  </li>
                ))}
              </ul>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Experience;
