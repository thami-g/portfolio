import { IoMdArrowBack } from "react-icons/io";
import { navlinks } from "../../data";
import { useState } from "react";
import Profile from "./Profile";

function Drawer({ isDrawerOpen, setIsDrawerOpen }) {
  const [activeId, setActiveId] = useState("");

  const link = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  const activatedId = (id) => (id === activeId ? "active" : "");
  const isDrawerActive =  `drawer  ${isDrawerOpen ? "open" : ""}`;

  const links = navlinks.map((navlink) => {
    const { id, text, icon } = navlink;
    return (
      <li
        className={activatedId(id)}
        key={id}
        onClick={() => {
          setActiveId(id);
          setIsDrawerOpen(false);
        }}
      >
        <a href={`#${text}`}>
          {icon}
          {link(text)}
        </a>
      </li>
    );
  });

  return (
    <div className={isDrawerActive}>
      <button onClick={() => setIsDrawerOpen(false)} className="close-btn">
        <IoMdArrowBack />
      </button>
      <Profile />
      <ul className="drawer-spacing drawer-links">{links}</ul>
    </div>
  );
}

export default Drawer;
