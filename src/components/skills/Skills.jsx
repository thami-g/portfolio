import Skill from "../skill/Skill";

function Skills({ title, skills }) {
    
  const allSkills = skills.map((item) => {
    return <Skill key={item.id} {...item} />;
  });

  return (
    <div className="backend-container skills-mb">
      <h2>{title}</h2>
      <div className="backend" data-aos="zoom-in">
        {allSkills}
      </div>
    </div>
  );
}

export default Skills;
