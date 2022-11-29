import React, { useState, useContext } from "react";
import SignupForm from "../day-2-3/day-2-forms";

export const UserContext = React.createContext();

export const ContextForm = () => {
  const [toggle_state, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle_state);
  }
  return (
    <div>
      <button onClick={handleClick}>Hide Name</button>
      <UserContext.Provider value={toggle_state}>
        <SignupForm />
      </UserContext.Provider>
    </div>
  );
};
