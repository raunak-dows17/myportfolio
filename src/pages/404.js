import Link from "next/link";

import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Raunak Pandey"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <section className="project-section not-found-section">
        <h1 className="project-heading">
          4<strong className="purple">0</strong>4
        </h1>
        <p className="not-found-text">
          The page you are looking for does not exist.
        </p>
        <Link href="/" className="btn btn-primary not-found-button">
          Back to Home
        </Link>
      </section>
    </>
  );
}
