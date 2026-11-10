import Projects from "../components/Projects/Projects";
import Seo from "../components/Seo";

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects | Raunak Pandey"
        description="Flutter, Node.js, and Agentic AI projects by Raunak Pandey."
        path="/projects"
      />
      <Projects />
    </>
  );
}
