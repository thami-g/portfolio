import contactImage from "../../assets/images/small-me.jpg";

function Message() {
  return (
    <div className="message-container">
    <img src={contactImage} alt="" />
    <p className="message">
      <span className="contact-bg-screen">
        Great things are never built alone,
      </span>
      let’s collaborate and create something groundbreaking together.
    </p>
  </div>
  )
}

export default Message
