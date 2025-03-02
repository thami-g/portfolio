import Title from "../title/Title";
import "./contact.css";
import Form from "./Form";
import Icons from "./Icons";
import Message from "./Message";


function ContactSection() {

  return (
    <section className="contact" id="contact">
      <Title title="Contact" />
      <div className="form-container" data-aos="zoom-in">
      <Message />
       <Form />
       </div>
      <Icons />
    </section>
  );
}

export default ContactSection;
