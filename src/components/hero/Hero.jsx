import "./hero.css";
import heroImage from "../../assets/images/hero-image.svg";
import {EmblaCarousel} from '../carousel/Carousel'

function hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h2 className="title">Hi, my name is Thami</h2>
        <p className="text">
          I'm a a passionate full-stack developer with a love for crafting
          <br /> intuitive and engaging web applications. Let me bring your
          ideas <br /> to life and transform them into successful business
          solutions.
        </p>
        <div className="hero-buttons">
          <a type="button" href="" className="download-btn">download cv</a>
          <a type="button" href="#projects" className="cv-btn">View projects</a>
        </div>
      </div>
      <EmblaCarousel />
    </section>
  );
}

export default hero;
