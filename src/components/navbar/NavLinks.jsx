function NavLinks({ setActiveLinkId, activeLinkId, navLinksTexts }) {
    
  return (
    <ul className="nav">
      {navLinksTexts.map((navLinkText) => {
        const { text, id } = navLinkText;
        return (
          <li key={id} onClick={() => setActiveLinkId(id)}>
            <a
              href={`#${text}`}
              className={`nav-link ${id === activeLinkId ? "activeLink" : ""}`}
            >
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
