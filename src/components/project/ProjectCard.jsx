import React from "react";
import { SiGithub } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";

import { SiTestinglibrary } from "react-icons/si";


import "./project-card.css";

function ProjectCard({ title, stack, icon }) {
  return (
    <div className="project-card">
      <div className="top-half">E-commerce app</div>
      <div className="bottom-card">
        <div className="card-link">
          <a className="info link" href="#">
          <SiGithub className="card-icon" /> <p>source code</p>
        </a>
        <div className="info">
          <RiNodejsLine  className="card-icon" /> <p>MERN stack</p>
        </div>
        <div className="info">
        <SiTestinglibrary className="card-icon" /> <p>React testing Library</p>
        </div>
        </div>
        <button className="card-btn">
          Live <TbWorld />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
