import About from "../components/About/About";
import Seo from "../components/Seo";
import { profile } from "../data/content";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Raunak Pandey | Flutter & Node.js Developer"
        description={profile.summary}
        path="/about"
      />
      <About />
    </>
  );
}
