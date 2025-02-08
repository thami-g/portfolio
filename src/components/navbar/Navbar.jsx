import { useEffect, useState } from "react";
import "./navbar.css";
import { FaCode, FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Set up event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ?'scrolled':''}`}>
      <a href="#home" className="logo">
        <p className="logo-text">fullstack</p>
        <FaCode size={30} className="logo-icon" />
      </a>
      <div className="nav">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
      
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
      <button className="theme-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <MdOutlineWbSunny className="icon" /> : <FaMoon className="icon" />}
      </button>
    </nav>
  );
}

export default Navbar;
