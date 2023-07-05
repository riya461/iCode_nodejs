import "./css/welcome.css";

import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div className="main">
      <div className="top">
        <div className="logo">iCode</div>
        <div className="top-sub">
          <div className="about">About</div>
          <div className="blog">Blog</div>
          <div className="services">Services</div>
        </div>
        <button className="loginTop">
          <NavLink to="/login" className="loginTopLink">Log in</NavLink>
        </button>
      </div>

      <div className="body">
        <div className="left">
          <div className="large-text1">Let's Build</div>
          <div className="large-text2">Together</div>
          <div className="sub-text1">
            Find your partners, build something amazing and
          </div>
          <div className="sub-text2">showcase it to your peers</div>
          <button className="signup">
            <NavLink to="/signup" className="signupLink">Get Started</NavLink>
          </button>
          <div className="bottom-text">
            Already have an account? <NavLink to="/login" className="loginMainLink">Sign in</NavLink>
          </div>
        </div>
        <div className="right">ㅤ</div>
      </div>
    </div>
  );
};
