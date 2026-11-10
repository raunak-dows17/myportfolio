import { Col, Row } from "react-bootstrap";
import {
  SiClaudecode,
  SiCursor,
  SiGithubcopilot,
  SiGit,
  SiLinux,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { tools } from "../../data/content";

const iconMap = {
  "VS Code": VscVscode,
  Cursor: SiCursor,
  "GitHub Copilot": SiGithubcopilot,
  "Claude Code": SiClaudecode,
  Postman: SiPostman,
  Vercel: SiVercel,
  Linux: SiLinux,
  Git: SiGit,
};

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => {
        const Icon = iconMap[tool.name];
        return (
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            key={tool.name}
            title={tool.name}
            aria-label={tool.name}
          >
            <Icon />
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
