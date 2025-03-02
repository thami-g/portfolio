import { TbWorld } from "react-icons/tb";
import "./project-card.css";

function Project({ projectInfo: data }) {
  const { name, stack } = data;

  const projectInfo = Object.entries(stack).map((s, index) => {
    const [name, icon] = s;
    return (
      <div key={index} className="project-info">
        {icon}
        <span>{name}</span>
      </div>
    );
  });

  return (
    <div className="project-card" data-aos="zoom-in">
      <div className="card-head">{name}</div>
      <div className="card-body">
        <div className="card-link">
          <a className=" link" href="#">
            {projectInfo}
          </a>
        </div>
      </div>
      <button className="card-btn">
        Live <TbWorld />
      </button>
    </div>
  );
}

export default Project;
