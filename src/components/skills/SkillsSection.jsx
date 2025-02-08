import Title from "../title/Title";
import { backend, frontend, mobile,testing } from "../../data";
import "./skills.css";
import { useState } from "react";

function SkillsSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="skills-section" id="skills">
      <Title title="skills" />
      <div
        className="skills"
        onMouseOver={(e) => {
          const id = e.target.getAttribute("data-id");
          if (id !== null) {
            setHoveredId(id);
          }
        }}
        onMouseOut={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setHoveredId(null);
          }
        }}
      >
        <div className="backend-container">
          <h2 className="skills_title">backend</h2>
          <div className="backend">
            {backend.map((item) => {
              const { icon, name, framework, level, id } = item;
              return (
                <article
                  className={`skill ${hoveredId === id ? "active" : ''} `}
                  title={name}
                  key={id}
                  data-id={id}
                >
                  <i className="icon">
                    {icon} {framework}
                  </i>
                  <p>{level}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="frontend-container">
          <h2 className="skills_title">frontend</h2>
          <div className="frontend">
            {frontend.map((item) => {
              const { icon, name, framework, level, id } = item;
              return (
                <article
                  className={`skill ${hoveredId === id ? "active": ''} `}
                  title={name}
                  key={id}
                  data-id={id}
                >
                  <i className="icon">
                    {icon} {framework}
                  </i>
                  <p>{level}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="testing-container">
          <h2 className="skills_title">testing</h2>
          <div className="testing">
            {testing.map((item) => {
              const { icon, name, framework, level, id } = item;
              return (
                <article
                  className={`skill ${hoveredId === id && "active"} `}
                  title={name}
                  key={id}
                  data-id={id}
                >
                  <i className="icon">
                    {icon} {framework}
                  </i>
                  <p>{level}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mobile-container">
          <h2 className="skills_title">mobile</h2>
          <div className="mobile">
            {mobile.map((item) => {
              const { icon, name, framework, level, id } = item;
              return (
                <article
                  className={`skill ${hoveredId === id && "active"} `}
                  title={name}
                  key={id}
                  data-id={id}
                >
                  <i className="icon">
                    {icon} {framework}
                  </i>
                  <p>{level}</p>
                </article>
              );
            })}
          </div>
        </div>

     
      </div>
    </section>
  );
}

export default SkillsSection;
