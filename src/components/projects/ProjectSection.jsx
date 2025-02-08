import Title from "../title/Title";
import ProjectCard from "../project/ProjectCard";
import "./projects-section.css";

function ProjectSection() {
  return (
    <section className="projects" id="projects">
      <Title title="Projects" />
      <div className="container">
        <ProjectCard title="e-commerce" stack="MERN" />
        <ProjectCard title="e-commerce" stack="MERN" />
        <ProjectCard title="e-commerce" stack="MERN" />
        <ProjectCard title="e-commerce" stack="MERN" />
        <ProjectCard title="e-commerce" stack="MERN" />
        <ProjectCard title="e-commerce" stack="MERN" />
      </div>
    </section>
  );
}

export default ProjectSection;
