// import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import {Auth} from "./components/auth"
import {SignUp} from "./components/signup"
function App() {
  const [currentForm, setCurrentForm] = useState('signup')
  return (
    <div classname="App">
{
  currentForm === "signup" ? <SignUp /> : <Auth />
}
    </div>

  );
}

export default App;
