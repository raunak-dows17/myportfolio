import { stats } from "../../data/content";

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        <h1 className="project-heading">
          By the <strong className="purple">Numbers</strong>
        </h1>
        <div className="stats-grid">
          {stats.map((item) => (
            <div className="stats-box" key={item.label}>
              <h3 className="stats-number">{item.number}</h3>
              <p className="stats-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
