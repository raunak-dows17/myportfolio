import { useEffect, useRef, useState } from "react";

import { journey } from "../../data/content";

function Journey() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const total = journey.length;

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const item = track.children[index];
    if (!item) return;

    track.scrollTo({
      left: item.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.children);
    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
      const distance = Math.abs(
        item.offsetLeft - track.offsetLeft - track.scrollLeft
      );
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActive(closest);
  };

  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        trackRef.current.scrollTo({ left: 0 });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="journey-section" id="journey">
      <div className="journey-inner">
        <h1 className="project-heading">
          My <strong className="purple">Journey</strong>
        </h1>
        <p className="journey-subtitle">
          From frontend engineering to Agentic AI and real-time systems.
        </p>

        <ul className="journey-track" ref={trackRef} onScroll={handleScroll}>
          {journey.map((item, index) => (
            <li className="journey-item" key={item.year}>
              <h4 className="journey-year">{item.year}</h4>
              <span className="journey-line" aria-hidden="true" />
              <p className="journey-text">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="journey-dots" role="tablist" aria-label="Journey milestones">
          {journey.map((item, index) => (
            <button
              key={item.year}
              type="button"
              className={`journey-dot ${active === index ? "active" : ""}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to ${item.year}`}
              aria-selected={active === index}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
