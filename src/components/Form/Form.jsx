import { useContext, useRef, useState } from "react";
import "./Form.css";
import Input from "../Input/Input";
import { FormContext } from "../../providers/FormContext";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";
function Form() {
  const { formInput } = useContext(FormContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const addressRef = useRef(null);

  const [step, setStep] = useState(1);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleInvalidEmail();
    handleInvalidPassword();
  };

  const handleInvalidEmail = () => {
    if (!validateEmail(formInput.email)) {
      emailRef.current.setInvalid();
      emailRef.current.shake();
    }
  };
  const handleInvalidPassword = () => {
    if (!validatePassword(formInput.password)) {
      passwordRef.current.setInvalid();
      passwordRef.current.shake();
    }
  };
  if (step == 1) {
    return (
      <div>
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="wrapper email-input-wrapper">
            <Input
              type="email"
              id="email-input"
              label="email"
              placeholder="Email"
              ref={emailRef}
              key={1}
              checkOnBlur={handleInvalidEmail}
            />
          </div>
          <div className="wrapper password-input-wrapper">
            <Input
              type="password"
              id="password-input"
              label="password"
              placeholder="password"
              key={2}
              ref={passwordRef}
              checkOnBlur={handleInvalidPassword}
            />
          </div>
          <input type="submit" />
          <button
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Next
          </button>
        </form>
      </div>
    );
  } else if (step == 2) {
    return (
      <div>
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="wrapper username-input-wrapper">
            <Input
              type="text"
              id="username-input"
              label="username"
              placeholder="username"
              key={3}
              ref={usernameRef}
              checkOnBlur={() => {
                console.log("empty");
              }}
            />
          </div>
          <input type="submit" />
        </form>
        <button
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Previous
        </button>
      </div>
    );
  } else if (step == 3) {
    return (
      <div>
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="wrapper address-input-wrapper">
            <Input
              type="text"
              id="address-input"
              label="address"
              key={4}
              placeholder="address"
              ref={addressRef}
            />
          </div>
          <input type="submit" />
        </form>
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Previous
        </button>
        <button>Submit</button>
      </div>
    );
  }
}

export default Form;
