import React from 'react';

import { Home } from "./components/welcome";
import { Auth } from "./components/auth";
import { SignUp } from "./components/signup";
import { Landing } from "./components/landing";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        {/* <div className="text-3xl font-bold underline">Hello world!</div> */}
        <section>
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
