import React, { useState } from "react";
import "./NameInput.css";

const NameInput = () => {
  const [nameInput, setNameInput] = useState(false);
  const [submitValidation, setSubmitValidation] = useState(true);
  const [name, setName] = useState("");
  const validNameHandler = (name) => {
    if (/^[a-zA-Z\s]+$/.test(name)) {
      setNameInput(true);
    } else {
      setNameInput(false);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitValidation(validNameHandler(name));
    if (submitValidation) {
      console.log(nameInput);
    }
  };

  return (
    <div className="formClass">
      {nameInput ? (
        <div>Welcome, {name}</div>
      ) : (
        <form>
          <label htmlFor="name">
            Please enter your name for a personalized experience:
          </label>

          <input
            type="text"
            name="name"
            className="inputClass"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button
            type="submit"
            onClick={submitHandler}
            className="submitClass"
            style={{ backgroundColor: submitValidation ? "" : "red" }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default NameInput;
