import ResumeNew from "../components/Resume/ResumeNew";
import Seo from "../components/Seo";

export default function ResumePage() {
  return (
    <>
      <Seo
        title="Resume | Raunak Pandey"
        description="Download the resume of Raunak Pandey, Flutter and Node.js developer."
        path="/resume"
      />
      <ResumeNew />
    </>
  );
}
