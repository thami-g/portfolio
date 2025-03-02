import { FaCode } from "react-icons/fa";

function Logo({homeId,setActiveLinkId }) {
  return (
    <a
    href="#home"
    className="logo"
    onClick={() => setActiveLinkId(homeId)}
  >
    <span className="logo-text">fullstack</span>
    <FaCode className="logo-icon" />
  </a>
  )
}

export default Logo
