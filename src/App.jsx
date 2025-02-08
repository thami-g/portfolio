import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import ProjectsSection from "./components/projects/ProjectSection";
import SkillsSection from "./components/skills/SkillsSection";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
  
      <Footer />
    </main>
  );
}

export default App;
