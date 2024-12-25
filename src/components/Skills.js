import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const techStack = [
    {
      name: "HTML",
      icon: "https://skillicons.dev/icons?i=html&theme=dark",
    },
    {
      name: "CSS",
      icon: "https://skillicons.dev/icons?i=css&theme=dark",
    },
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=js&theme=dark",
    },
    {
      name: "Bootstrap",
      icon: "https://skillicons.dev/icons?i=bootstrap&theme=dark",
    },
    {
      name: "Git",
      icon: "https://skillicons.dev/icons?i=git&theme=dark",
    },
    {
      name: "Python",
      icon: "https://skillicons.dev/icons?i=python&theme=dark",
    },
    {
      name: "React",
      icon: "https://skillicons.dev/icons?i=react&theme=dark",
    },
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs&theme=dark",
    },
    {
      name: "Express.js",
      icon: "https://skillicons.dev/icons?i=express&theme=dark",
    },
    {
      name: "PostgreSQL",
      icon: "https://skillicons.dev/icons?i=postgresql&theme=dark",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="section-title text-center mb-4">
          My <span className="text-warning">Skills</span>
        </h2>
        <p className="text-secondary text-center mb-5">
          Technical skills and technologies I've worked with in my projects and
          studies.
        </p>

        <Row className="g-5">
          {techStack.map((tech, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className="d-flex flex-column align-items-center skill-item"
            >
              <div className="tech-icon-wrapper">
                <div className="tech-icon-inner">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="tech-icon grayscale"
                  />
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="tech-icon color"
                  />
                </div>
              </div>
              <span className="tech-name">{tech.name}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
