import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Badge } from "react-bootstrap";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Code2,
  Calendar,
  Bookmark,
} from "lucide-react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Bookgedebooks",
      description:
        "Bookgedebooks is a web-based digital library application designed to streamline modern library data management. ",
      image: require("../images/projects/bookgedebooks.png"),
      period: "2024",
      category: "Web Development",
      technologies: [
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
          icon: "https://skillicons.dev/icons?i=javascript&theme=dark",
        },
        {
          name: "Bootstrap",
          icon: "https://skillicons.dev/icons?i=bootstrap&theme=dark",
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
      ],
      features: [
        "User Management - Includes login, registration, profile management, and user authentication.",
        "Book Management - Features for adding, editing, deleting, displaying, and searching books with convenient filters.",
        "Borrowing Management - Handles book borrowing, returning, and viewing borrowing history efficiently.",
      ],
      links: {
        demo: "https://digital-library-rho-khaki.vercel.app/",
        github: "https://github.com/azievhanif/digital-library-frontend",
      },
    },
  ];

  const handleClose = () => setSelectedProject(null);
  const handleShow = (project) => setSelectedProject(project);

  return (
    <section className="projects-section" id="projects">
      <Container>
        <div className="section-header text-center mb-5">
          <Badge className="custom-badge mb-3">PORTFOLIO</Badge>
          <h2 className="section-title mb-4">
            Featured <span className="text-warning">Projects</span>
          </h2>
          <p className="text-secondary section-subtitle mx-auto">
            Explore my latest works that showcase my skills in web development
            and design.
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card
                className={`project-card ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleShow(project)}
              >
                <div className="project-image-wrapper">
                  <Card.Img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-category">
                      <Code2 size={18} className="me-2" />
                      {project.category}
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <div className="project-meta mb-2">
                    <span className="project-date">
                      <Calendar size={14} className="me-1" />
                      {project.period}
                    </span>
                    <span className="project-category-badge">
                      <Bookmark size={14} className="me-1" />
                      {project.category}
                    </span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="project-tech-icon">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          title={tech.name}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="project-link">
                    <span>View Details</span>
                    <ChevronRight size={16} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={selectedProject !== null}
        onHide={handleClose}
        size="lg"
        centered
        contentClassName="project-modal-content"
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton closeVariant="white">
              <Modal.Title>
                <h4 className="modal-project-title">{selectedProject.title}</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-project-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid"
                />
              </div>

              <div className="modal-project-meta">
                <span className="period">
                  <Calendar size={16} />
                  {selectedProject.period}
                </span>
                <Badge className="category-badge">
                  {selectedProject.category}
                </Badge>
              </div>

              <p className="modal-project-description">
                {selectedProject.description}
              </p>

              <div className="modal-section">
                <h5 className="modal-section-title">Technologies Used</h5>
                <div className="modal-tech-stack">
                  {selectedProject.technologies.map((tech, i) => (
                    <div key={i} className="modal-tech-icon">
                      <img src={tech.icon} alt={tech.name} title={tech.name} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h5 className="modal-section-title">Main Features</h5>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-project-links">
                {selectedProject.links.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Projects;
