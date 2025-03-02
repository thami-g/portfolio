import Title from "../title/Title";
import { allSkills } from "../../data";
import "./skills.css";
import Skills from "./Skills";

function SkillsSection() {
  const skillsList = Object.entries(allSkills);

  const skills = skillsList.map((skill) => {
    const [name, category] = skill;
    return <Skills key={name} title={name} skills={category} />;
  });

  return (
    <section className="skills-section skills-mb" id="skills">
      <Title title="skills" />
      <div className="skills">{skills}</div>
    </section>
  );
}

export default SkillsSection;
