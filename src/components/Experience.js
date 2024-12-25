import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { Building2, Clock, ChevronRight } from "lucide-react";

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
        <h2 className="section-title text-center mb-4">
          My <span className="text-warning">Experience</span>
        </h2>
        <p className="text-secondary text-center mb-5">
          Professional experiences from the projects and roles I've taken on
          during my time as a student.
        </p>

        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-badge bg-warning">
                <Building2 size={20} className="text-dark" />
              </div>

              <div
                className="timeline-content p-4 rounded-3 position-relative"
                onClick={() => handleShow(exp)}
                style={{ cursor: "pointer" }}
              >
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2 text-secondary mb-2">
                    <Clock size={16} />
                    <small>{exp.period}</small>
                  </div>
                  <h3 className="text-warning mb-2 fs-4">{exp.title}</h3>
                  <h5 className="mb-3">{exp.company}</h5>
                </div>

                <div className="timeline-image mb-3">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="img-fluid rounded-3"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                  />
                </div>

                <p className="text-secondary mb-4">{exp.description}</p>
                <div className="d-flex align-items-center text-warning view-details">
                  <span className="me-2">View details</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
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
