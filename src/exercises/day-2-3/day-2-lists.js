/* Create component called ListView which Render a list of numbers
- Default start and end numbers are 1 and 10,
 they should be able to be overridden from props
- There shouldn't be any warnings in the browser console.
- Explain the function and importance of key prop in a list
"
*/
import React from "react";

function ListView(props) {
  const element = props.array.map((num) => {
    return <li key={num.toString()}>{num}</li>;
  });

  return <ul>{element}</ul>;
}

export default ListView;
