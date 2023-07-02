// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import { Welcome } from "./components/welcome";
import { Auth } from "./components/auth";
import { SignUp } from "./components/signup";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogInClick = () => {
    setShowWelcome(false);
    setShowSignUp(false);
    setShowAuth(true);
  };

  const handleSignUpClick = () => {
    setShowWelcome(false);
    setShowAuth(false);
    setShowSignUp(true);
  };

  return (
    <div classname="App">
      {showWelcome && (
        <Welcome
          onLogInClick={handleLogInClick}
          onSignUpClick={handleSignUpClick}
        />
      )}
      {showSignUp && <SignUp onLogInClick={handleLogInClick} />}
      {showAuth && <Auth onSignUpClick={handleSignUpClick} />}
    </div>
  );
}

export default App;
