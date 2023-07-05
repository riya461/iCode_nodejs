// import logo from './logo.svg';
// import React, {useState, useEffect} from 'react';
import "./App.css";
import { Home } from "./components/welcome";
import { Auth } from "./components/auth";
import { SignUp } from "./components/signup";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
