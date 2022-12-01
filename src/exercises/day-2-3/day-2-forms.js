/*
"1. Build a basic signup form which takes name, email, password and confirm password fields.
2. Add validations on submit button, validations are:

- no field should be empty
- password and confirm password should be same
- email should have @ and . symbols in it.

3. Show errors if the validations fail

Values entered in the input fields should be stored in state.
Error values should not be stored in state but should be calculated from above state.
"*/

import React, { useState, useContext } from "react";
import { UserContext } from "../day-5/ContextForm";

function SignupForm() {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [pass, setPass] = useState(""),
    [confirmPass, setConfirm] = useState(""),
    [validEmail, setValidEmail] = useState(false),
    [matchPass, setMatchPass] = useState(false);

  function handleSubmit(e) {
    pass !== confirmPass ? setMatchPass(true) : setMatchPass(false);
    !email.includes(".") ? setValidEmail(true) : setValidEmail(false);
    e.preventDefault();
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePass(e) {
    setPass(e.target.value);
  }
  function handleConfirmPass(e) {
    setConfirm(e.target.value);
  }

  const toggle_state = useContext(UserContext);
  const username = toggle_state ? (
    <div>
      <label>Name</label>
      <input
        type="text"
        defaultValue={name}
        onChange={handleName}
        id="name"
        required
      />
      <br />
    </div>
  ) : (
    <div></div>
  );

  const element = (
    <form onSubmit={handleSubmit}>
      {username}
      <label>Email</label>
      <input
        type="email"
        defaultValue={email}
        onChange={handleEmail}
        required
      />
      <br />
      {validEmail && (
        <span>
          Incorrect Email
          <br />
        </span>
      )}

      <label>Password</label>
      <input
        type="password"
        defaultValue={pass}
        onChange={handlePass}
        required
      />
      <br />

      <label>Confirm Password</label>
      <input
        type="password"
        defaultValue={confirmPass}
        onChange={handleConfirmPass}
        required
      />
      <br />
      {matchPass && (
        <span>
          Passwords didn't match.
          <br />
        </span>
      )}

      <input type="submit" name="submit-btn" value="Submit" />
    </form>
  );
  return element;
}

export default SignupForm;
