import { TbWorld } from "react-icons/tb";
import "./project-card.css";
import { useRef } from "react";

function Project({ projectInfo: data }) {
  const { name, stack } = data;

  const projectInfo = Object.entries(stack).map((s, index) => {
    const [name, icon] = s;
    return (
      <div key={index} className="project-info">
        {icon}
        <span>{name}</span>
      </div>
    );
  });

  // Create a ref to attach to the video element
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // Optional: Reset video to the beginning
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="project-card" data-aos="zoom-in">
      <div className="project-video-container" >
        <video className="project-video"
        ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          muted
          loop
          preload="metadata">
          <source src="/videos/default.mp4" type="video/mp4"></source></video>
      </div>
      <div className="project-text-container">
        <h2 className="project-title">Nextjs E-commerce</h2>
        <p className="project-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium suscipit doloremque perferendis, deleniti possimus officia ipsum animi aperiam perspiciatis sed id vel? Quod, suscipit officiis fugiat amet cumque quidem.</p>
        <h3 className="project-features">Key Features</h3>
        <ul>
          <li>Authentication</li>
          <li>Cart Logic</li>
          <li>Admin Dashboard</li>
          <li>Integrated Payment gateway</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
