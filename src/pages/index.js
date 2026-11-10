import Home from "../components/Home/Home";
import Journey from "../components/Journey/Journey";
import Seo from "../components/Seo";
import Stats from "../components/Stats/Stats";
import { profile } from "../data/content";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Raunak Pandey | Flutter & Node.js Developer"
        description={profile.summary}
        path="/"
      />
      <Home />
      <Journey />
      <Stats />
    </>
  );
}
