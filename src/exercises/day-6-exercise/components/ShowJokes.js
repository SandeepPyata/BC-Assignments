import axios from "axios";
import { useQuery } from "react-query";
import PostingJoke from "./PostingJoke";
/*
1. Make a get call using useQuery to 
https://official-joke-api.appspot.com/random_joke and 
show jokes on screen.
2. Make a post call using useMutation from a free REST API
 service or mock API.
{"id":154,
"setup":"Want to hear a joke about construction?",
"type":"general",
"punchline":"Nah, I'm still working on it."}

 */
const fetchJokes = () => {
  return axios.get("https://official-joke-api.appspot.com/random_ten");
};
const ShowJokes = () => {
  const { isLoading, data, isFetching } = useQuery("show-jokes", fetchJokes);
  if (isLoading || isFetching) return <div>Loading</div>;
  return (
    <>
      <div>
        <h2>ShowJokes</h2>
        {data?.data.map((joke, num) => {
          return (
            <div key={num}>
              <p>
                <strong>Joke {num + 1}</strong> : {joke.setup}
              </p>
              <p>{joke.punchline} &#128516;</p>
            </div>
          );
        })}

        {/* Posting */}
        <PostingJoke jokes={data} />
      </div>
    </>
  );
};
export default ShowJokes;
