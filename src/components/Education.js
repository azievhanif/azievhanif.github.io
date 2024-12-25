import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { GraduationCap, Clock, ChevronRight } from "lucide-react";

function Education() {
  const [selectedEdu, setSelectedEdu] = useState(null);

  const education = [
    {
      school: "SMAN 2 Kota Mojokerto",
      degree: "Science Major",
      period: "2018 - 2021",
      description:
        "Completed high school education with a focus on science and mathematics.",
      image: require("../images/education/smanda.png"),
      details: {
        courses: ["Advanced Mathematics", "Physics", "Chemistry", "Biology"],
        activities: ["Futsal"],
      },
    },
    {
      school: "Universitas Negeri Surabaya",
      degree: "Information Systems Undergraduate",
      period: "2021 - Present",
      description:
        "Currently pursuing a bachelor's degree in Information Systems with focus on IT management and governance.",
      image: require("../images/education/unesa.png"),
      details: {
        courses: [
          "IT Service Management ",
          "IT Risk Management",
          "IS Project Management",
          "IT Audit",
          "Web Development",
        ],
        activities: ["Islamic Spiritual Activity Unit"],
      },
    },
  ];

  const handleClose = () => setSelectedEdu(null);
  const handleShow = (edu) => setSelectedEdu(edu);

  return (
    <section className="education-section" id="education">
      <Container>
        <h2 className="section-title text-center mb-4">
          My <span className="text-warning">Education</span>
        </h2>
        <p className="text-secondary text-center mb-5">
          My learning journey that's built up my knowledge and skills in
          Information Technology.
        </p>

        <div className="timeline-wrapper">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-badge bg-warning">
                <GraduationCap size={20} className="text-dark" />
              </div>

              <div
                className="timeline-content p-4 rounded-3 position-relative"
                onClick={() => handleShow(edu)}
                style={{ cursor: "pointer" }}
              >
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2 text-secondary mb-2">
                    <Clock size={16} />
                    <small>{edu.period}</small>
                  </div>
                  <h3 className="text-warning mb-2 fs-4">{edu.school}</h3>
                  <h5 className="mb-3">{edu.degree}</h5>
                </div>

                <div className="timeline-image mb-3">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="img-fluid rounded-3"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                  />
                </div>

                <p className="text-secondary mb-4">{edu.description}</p>

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
        show={selectedEdu !== null}
        onHide={handleClose}
        size="lg"
        centered
        contentClassName="bg-dark"
        className="text-white mobile-modal"
      >
        {selectedEdu && (
          <>
            <Modal.Header
              closeButton
              closeVariant="white"
              className="border-secondary"
            >
              <Modal.Title className="text-warning fs-5">
                {selectedEdu.school}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
              <div
                className="text-center mb-4 p-3 rounded"
                style={{ backgroundColor: "#0D1117" }}
              >
                <img
                  src={selectedEdu.image}
                  alt={selectedEdu.school}
                  className="img-fluid"
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                />
              </div>
              <h4 className="text-warning fs-5">{selectedEdu.degree}</h4>
              <p className="text-secondary fs-6">{selectedEdu.period}</p>
              <p className="fs-6">{selectedEdu.description}</p>

              <h5 className="mt-4 mb-3 text-warning fs-6">Key Courses</h5>
              <ul className="text-white fs-6 ps-3">
                {selectedEdu.details.courses.map((course, index) => (
                  <li key={index} className="mb-2">
                    {course}
                  </li>
                ))}
              </ul>

              <h5 className="mt-4 mb-3 text-warning fs-6">Activities</h5>
              <ul className="text-white fs-6 ps-3">
                {selectedEdu.details.activities.map((activity, index) => (
                  <li key={index} className="mb-2">
                    {activity}
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

export default Education;
