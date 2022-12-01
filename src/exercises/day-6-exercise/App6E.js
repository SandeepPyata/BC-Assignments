/*"Integrate react-query

1. Make a get call using useQuery to 
https://official-joke-api.appspot.com/random_joke and 
show jokes on screen.
2. Make a post call using useMutation from a free REST API
 service or mock API.
{"id":154,
"type":"general",
"setup":"Want to hear a joke about construction?",
"punchline":"Nah, I'm still working on it."}
" */
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowJokes from "./components/ShowJokes";

const queryClient = new QueryClient();
const App6E = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowJokes />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
export default App6E;
