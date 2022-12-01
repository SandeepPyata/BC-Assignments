/*
2. Create a component called Counter that 
displays a number on screen with two buttons ( +, - ).
- On clicking of those buttons, 
  the number on screen should increase or decrease by 1.
- Default value of that number should be 0 and 
  parent should be able to override default value 
  using as prop called defaultValue."
*/
import React, { useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(props.number);

  function handleChange(event) {
    const symbol = event.target.textContent;
    if (symbol === "+") setCount(count + 1);
    else setCount(count - 1);
  }

  const element = (
    <div>
      Number of clicks: {count} <br />
      <button onClick={handleChange}>+</button>
      <button onClick={handleChange}>-</button>
    </div>
  );
  return element;
}

export default Counter;
