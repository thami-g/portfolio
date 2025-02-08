import Title from "../title/Title";

import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./about.css";
import aboutImage from "../../assets/images/about-img.svg";

function AboutSection() {
  return (
    <section  className="about-container" id="about">
      <Title title="About Me" />
      <div className="about">
        <div className="left-section">
          <img src={aboutImage} alt="about image" />
          <div className="about-icons">
            <SiGithub className="about-social" />
            <FaLinkedin className="about-social" />
            <MdEmail className="about-social" />
          </div>
        </div>

        <div>
          <header className="title-container">
            <h2 className="title">Fullstack developer</h2>
            <div className="underline"></div>
          </header>
          <div className="text">
            <p className="paragraph">
              My journey in tech began in 2022, and since then, I’ve developed a
              strong foundation in both front-end and back-end technologies. I
              thrive on the challenge of transforming complex problems into
              seamless user experiences.
            </p>
            <p>
              Whether it’s designing a responsive layout or building robust
              server-side logic, I enjoy every aspect of the development
              process. I believe that great software should not only function
              well but also provide an enjoyable experience for users. Let's
              collaborate and craft something innovative and impactful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
