import { Col, Container, Row } from "react-bootstrap";

import { projects } from "../../data/content";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the <strong className="purple">projects</strong> I&apos;ve
          built and shipped.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCards
                imgPath={project.image}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.source}
                demoLink={project.visit}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
