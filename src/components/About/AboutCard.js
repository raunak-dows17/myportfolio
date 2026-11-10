import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import { profile } from "../../data/content";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I&apos;m <span className="purple">{profile.name}</span> from{" "}
            <span className="purple">{profile.location}</span>.
            <br />
            I&apos;m a Flutter &amp; Node.js developer with 2+ years of
            experience building scalable, real-time, cross-platform
            applications.
            <br />
            I hold a B.Tech in Artificial Intelligence from{" "}
            <span className="purple">
              Jaipur National University, Jaipur
            </span>
            .
            <br />
            <br />
            What I focus on:
          </p>
          <ul>
            {profile.focus.map((item) => (
              <li className="about-activity" key={item}>
                <ImPointRight /> {item}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
