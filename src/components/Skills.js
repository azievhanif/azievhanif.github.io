import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-success';
      case 'Intermediate':
        return 'bg-warning';
      case 'Beginner':
        return 'bg-info';
      default:
        return 'bg-warning';
    }
  };

  const techStack = [
    {
      name: "HTML",
      icon: "https://skillicons.dev/icons?i=html&theme=dark",
      level: "Advanced",
      description: "Semantic HTML, accessibility practices, and modern HTML5 features"
    },
    {
      name: "CSS",
      icon: "https://skillicons.dev/icons?i=css&theme=dark",
      level: "Advanced",
      description: "Responsive design, animations, and CSS frameworks"
    },
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=js&theme=dark",
      level: "Intermediate",
      description: "ES6+, async programming, and DOM manipulation"
    },
    {
      name: "Bootstrap",
      icon: "https://skillicons.dev/icons?i=bootstrap&theme=dark",
      level: "Intermediate",
      description: "Responsive layouts, components, and customization"
    },
    {
      name: "Git",
      icon: "https://skillicons.dev/icons?i=git&theme=dark",
      level: "Intermediate",
      description: "Version control and collaboration"
    },
    {
      name: "Python",
      icon: "https://skillicons.dev/icons?i=python&theme=dark",
      level: "Beginner",
      description: "Data processing, automation, and scripting"
    },
    {
      name: "React",
      icon: "https://skillicons.dev/icons?i=react&theme=dark",
      level: "Intermediate",
      description: "Component lifecycle, hooks, and state management"
    },
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs&theme=dark",
      level: "Intermediate",
      description: "Server-side JavaScript and API development"
    },
    {
      name: "Express.js",
      icon: "https://skillicons.dev/icons?i=express&theme=dark",
      level: "Intermediate",
      description: "RESTful APIs and middleware implementation"
    },
    {
      name: "PostgreSQL",
      icon: "https://skillicons.dev/icons?i=postgresql&theme=dark",
      level: "Intermediate",
      description: "Database design and query optimization"
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="section-title mb-4">
          My <span className="text-warning">Skills</span>
        </h2>
        <p className="text-secondary mb-5">
          Technical skills and technologies I've worked with in my projects and studies.
        </p>
        
        <Row className="g-4">
          {techStack.map((tech, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="custom-card h-100 hover-card">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="tech-icon-wrapper mb-3">
                    <img 
                      src={tech.icon}
                      alt={tech.name}
                      className="tech-icon"
                      title={tech.name}
                    />
                  </div>
                  <Card.Title className="text-center mb-2">{tech.name}</Card.Title>
                  <div className={`badge ${getLevelBadgeClass(tech.level)} mb-2`}>
                    {tech.level}
                  </div>
                  <Card.Text className="text-center text-secondary small">
                    {tech.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;