import dynamic from "next/dynamic";
import { Row } from "react-bootstrap";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="raunak-dows17"
        blockSize={15}
        blockMargin={5}
        color="#7088f0"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
