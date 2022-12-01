import axios from "axios";
import { useMutation } from "react-query";

const addJoke = (joke) => {
  return axios.post("http://localhost:4000/jokes", joke);
};
const useAddJoke = () => {
  return useMutation(addJoke);
};

export default useAddJoke;
