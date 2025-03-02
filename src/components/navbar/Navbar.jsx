import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { navLinksTexts } from "../../data";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Drawer from "./Drawer";
import "./navbar.css";

function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLinkId, setActiveLinkId] = useState("");
  const { id: homeId } = navLinksTexts[0];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const themeIcon =
    theme === "dark" ? (
      <MdOutlineWbSunny className="icon" />
    ) : (
      <FaMoon className="icon" />
    );

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <button
          className="menu-btn sm-nav-icon mobile-icon-nav"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <RxHamburgerMenu className="mobile-icon-nav" />
        </button>
        <Logo setActiveLinkId={setActiveLinkId} homeId={homeId} />
        <a href="#">
          <FaGithub className="sm-nav-icon mobile-icon-nav" />
        </a>
        <NavLinks
          setActiveLinkId={setActiveLinkId}
          activeLinkId={activeLinkId}
          navLinksTexts={navLinksTexts}
        />
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {themeIcon}
        </button>
      </nav>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </>
  );
}

export default Navbar;
