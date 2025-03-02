function Skill({ icon, framework, level, name }) {
  return (
    <article className="skill" title={name}>
      <i className="icon">
        {icon} {framework}
      </i>
      <p>{level}</p>
    </article>
  );
}

export default Skill;
