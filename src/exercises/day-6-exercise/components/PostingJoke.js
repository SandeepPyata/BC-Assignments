import React from "react";
import useAddJoke from "../hooks/AddJoke";

const PostingJoke = (props) => {
  const data = props;
  const { mutate: addJoke } = useAddJoke();
  const handleAddJokeClick = () => {
    addJoke(data);
  };
  return (
    <div>
      <button onClick={handleAddJokeClick}>Add to jokes</button>
    </div>
  );
};
export default PostingJoke;
