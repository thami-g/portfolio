import Title from "../title/Title";

import "./projects-section.css";
import { projects as data } from "../../data";
import Project from "../project/Project";

function ProjectSection() {
  const projects = data.map((project) => {
    return <Project key={project.id} projectInfo={project} />;
  });

  return (
    <section className="projects" id="projects">
      <Title title="Projects" />
      <div className="container">{projects}</div>
    </section>
  );
}

export default ProjectSection;
