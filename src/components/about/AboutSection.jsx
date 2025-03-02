import Title from "../title/Title";

import aboutImage from "../../assets/images/about-img.svg";
import "./about.css";

function AboutSection() {
  return (
    <section   className="about-container" id="about" >
      <Title title="About Me" />
      <div className="about"  data-aos="zoom-in">
        <div className="left-section" >
          <img src={aboutImage} alt="about image" />
        </div>
          <div className="about-text">
          <header className="title-container">
            <h2 className="title">Fullstack developer</h2>
            <div className="underline"></div>
          </header>
            <p>
              My journey in tech began in 2022, and since then, I’ve developed a
              strong foundation in both front-end and back-end technologies. I
              thrive on the challenge of transforming complex problems into
              seamless user experiences.
            </p>
            <p className="second-paragraph">
              Whether it’s designing a responsive layout or building robust
              server-side logic, I enjoy every aspect of the development
              process. I believe that great software should not only function
              well but also provide an enjoyable experience for users. Let's
              collaborate and craft something innovative and impactful.
            </p>
          </div>
        </div>
    </section>
  );
}

export default AboutSection;
