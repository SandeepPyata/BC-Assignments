// "Integrate react router to an app
//  and have the following links.
// Each link should have its own component that
// occupies the full height and width of screen

// 1. /home/:username - Should have the Greetings component
//    from exercise 1 with default prop username from url,
//    default value is ""User""
// 2. /login - Should have a login form from previous exercise
// 3. /counter - Should have the counter component from exercise 2

import ContextForm from "../day-5/ContextForm";
import Counter from "../day-2-3/day-2-hooks";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Main from "./Components/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App2() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<ContextForm />} />
          <Route path="counter" element={<Counter />} />
          <Route path="home" element={<Home />}>
            <Route path=":userId" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
