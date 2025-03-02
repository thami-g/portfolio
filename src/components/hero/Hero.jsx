import "./hero.css";
import {EmblaCarousel} from '../carousel/Carousel'

function hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h2>Hi, my name is Thami</h2>
        <p className="text">
          I&apos;m a a passionate full-stack developer with a passion for crafting
          intuitive and engaging web applications. Let me bring your
          ideas to life and transform them into successful business
          solutions.
        </p>
        <div className="hero-buttons">
          <a type="button" href="" className="download-btn">download cv</a>
          <a type="button" href="#projects" className="cv-btn">View projects</a>
        </div>
      </div> 
      <EmblaCarousel />
          <a  href="#projects" className="hero-sm-button">Download Cv</a>
    </section>
  );
}

export default hero;
