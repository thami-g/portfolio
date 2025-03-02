import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Icons() {
  return (
    <div className="contact-icons">
    <SiGithub className="contact-icon" />
    <FaLinkedin className="contact-icon" />
    <MdEmail className="contact-icon" />
  </div>
  )
}

export default Icons
