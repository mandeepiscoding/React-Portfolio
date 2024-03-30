import { useParams, Link } from "react-router-dom";
import Projects from "../data/cards.js";

export default function ProjectPage() {
  const { id } = useParams();
  const projectList = Projects();
  const project = projectList[id - 1];

  return (
    <section className="project">
      <div className="card-column">
        <figure className="project-card">
          <h3 className="card-header">{project.title}</h3>
          <img
            className="card-image"
            src={project.image}
            alt={project.altText}
          />
          <h4>Description</h4>
          <div className="card-body">{project.description}</div>
          <h4>Technologies Used</h4>
          <ul>
            {project.tech.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <h4>Links</h4>
          {project.link && <a href={project.link} target="_blank" className="project-links">
            Deployed Application
          </a>}
          {project.gitHub && <a href={project.gitHub} target="_blank" className="project-links">
            GitHub Repo
          </a>}
          {project.video && <a href={project.video} target="_blank" className="project-links">
            Video Demonstration
          </a>}
        </figure>
      </div>
      <div className="projectBtn">
        <Link className="go-back" to="/portfolio">Go Back</Link>
      </div>
    </section>
  );
}
