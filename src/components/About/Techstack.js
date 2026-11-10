import { Col, Row } from "react-bootstrap";
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

import { skills } from "../../data/content";

const iconMap = {
  Flutter: SiFlutter,
  Dart: SiDart,
  "Node.js": SiNodedotjs,
  React: SiReact,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Git: SiGit,
};

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => {
        const Icon = iconMap[skill.name];
        return (
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            key={skill.name}
            title={skill.name}
            aria-label={skill.name}
          >
            <Icon />
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;
