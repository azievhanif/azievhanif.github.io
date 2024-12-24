import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowDownToLine } from "lucide-react";
import resume from "../assets/Aziev Hanif Bahtiar-resume copy.pdf";

function AboutMe() {
  return (
    <section className="about-section" id="about">
      <Container>
        <h2 className="section-title mb-4">
          About <span className="text-warning">Me</span>
        </h2>

        <Row className="align-items-center g-4">
          <Col lg={7} md={12}>
            <div className="about-content pe-lg-4">
              <div className="about-text-wrapper">
                <p className="text-secondary mb-4">
                  Hi! I'm Aziev, an Information Systems student with a focus on{" "}
                  <span className="text-warning">
                    IT Management and Governance
                  </span>
                  . I'm also skilled in Web Development as a{" "}
                  <span className="text-warning">Full Stack Developer</span>,
                  working across both frontend and backend to bring ideas to
                  life.
                </p>
                <p className="text-secondary mb-4">
                  When I'm not coding or diving into IT strategies, I enjoy
                  starting my mornings with a{" "}
                  <span className="text-warning">5-10 km run</span> or a{" "}
                  <span className="text-warning">calisthenic workout</span>.
                  Every few months, I like to challenge myself by{" "}
                  <span className="text-warning">hiking</span> and taking in the
                  beauty of nature. Staying balanced and active keeps me
                  motivated to take on new challenges!
                </p>
              </div>
              <div className="mt-2">
                <Button
                  variant="warning"
                  size="lg"
                  className="px-4 d-inline-flex align-items-center gap-2 hover-grow"
                  href={resume}
                  target="_blank"
                >
                  Check Out My Resume
                  <ArrowDownToLine size={20} />
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={5} md={12}>
            <div className="about-image-container">
              <div className="image-stack">
                <div className="image-stack-item image-stack-item-top">
                  <img
                    src={require("../images/about/hiking.jpeg")}
                    alt="Hiking"
                    className="img-fluid rounded-4"
                  />
                  <span className="image-caption">Hiking</span>
                </div>
                <div className="image-stack-item image-stack-item-bottom">
                  <img
                    src={require("../images/about/running.jpeg")}
                    alt="Morning Run"
                    className="img-fluid rounded-4"
                  />
                  <span className="image-caption">Morning Run</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
