import { education, experience } from "../../data/content";

function Experience() {
  return (
    <>
      <h1 className="project-heading">
        Professional <strong className="purple">Experience</strong>
      </h1>

      <div className="resume experience-block">
        <div className="resume-left">
          {experience.map((job) => (
            <div className="resume-item" key={`${job.company}-${job.period}`}>
              <h4 className="resume-title">{job.role}</h4>
              <h5 className="experience-company">
                {job.company} <span>• {job.location}</span>
              </h5>
              <p className="experience-period">{job.period}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <h1 className="project-heading">
        My <strong className="purple">Education</strong>
      </h1>

      <div className="resume education-block">
        <div className="resume-left">
          {education.map((item) => (
            <div className="resume-item" key={item.institution}>
              <h4 className="resume-title">{item.degree}</h4>
              <h5 className="experience-company">{item.institution}</h5>
              <p className="experience-period">
                {item.period} • {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
