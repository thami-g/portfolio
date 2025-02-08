import Title from "../title/Title";
import "./contact.css";
import contactImage from '../../assets/images/me2.jpg'

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <Title title="Contact Me" />
      <div className="form-container">
        <div className="message-container">
          <img src={contactImage} alt="" />
           <p className="message">
          Great things are never built alone,
          let’s collaborate and create something groundbreaking together. <br /> No man
          is an island!
        </p>
        </div>
       
        <form className="form">
        
          <div className="form-controls">
          <div className="form-control">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required min={3} max={20} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Your Mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="message">Your Message</label>
            <textarea name="" id="message"></textarea>
          </div>
          <button type="submit" className="submit-btn">send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
