import { validate } from "../../utils/utils";
import { useState } from "react";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const initialValidityValues = {
  name: true,
  email: true,
  message: true,
};
const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

function Form() {
  const [state, handleSubmit] = useForm("xldgyoqp");
  const [formInputs, setformInputs] = useState(initialFormValues);
  const [isInputsValid, setIsInputsValid] = useState(initialValidityValues);

  const showAlert = () => {
    MySwal.fire({
      title: <p>Message Sent</p>,
      icon: "success",
      background: "#333131",
      color: "#fff",
      borderRadius: "5px",
      showConfirmButton: false,
      timer: 1500,
    })
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformInputs({ ...formInputs, [name]: value });
    setIsInputsValid({ ...isInputsValid, [name]: validate(name, value) });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const isNameValid = validate("name", formInputs.name);
    const isEmailValid = validate("email", formInputs.email);
    const isMessageValid = validate("message", formInputs.message);

    if (isNameValid && isEmailValid && isMessageValid) {
      showAlert();
      handleSubmit(e);
      setformInputs(initialFormValues);
      setIsInputsValid(initialValidityValues);
      return;
    }

    setIsInputsValid({
      name: isNameValid,
      email: isEmailValid,
      message: isMessageValid,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmitForm} noValidate>
      <div className="form-controls">
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            min={3}
            max={20}
            onChange={handleChange}
            value={formInputs.name}
            className={`input ${isInputsValid.name ? "" : " invalid-text"}`}
          />
          {!isInputsValid.name && (
            <span className="invalid">Name must be more than 3 characters</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Your Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={formInputs.email}
            className={`input ${isInputsValid.email ? "" : "invalid-text"}`}
          />
          {!isInputsValid.email && (
            <span className="invalid">Please enter a valid email address</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea
            maxLength={600}
            className={` text-area ${
              isInputsValid.message ? "" : "invalid-input"
            }`}
            id="message"
            name="message"
            onChange={handleChange}
            value={formInputs.message}
          />
          {!isInputsValid.message && (
            <span className="invalid">
              Message must be at least 5 characters
            </span>
          )}
        </div>
      </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={state.submitting}
        >
          send
        </button>
    </form>
  );
}

export default Form;
