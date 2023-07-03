import "./css/welcome.css";

import { NavLink} from 'react-router-dom';
export const Home = ({ onLogInClick, onSignUpClick }) => {
  return (
    <div className="main">
      <div className="top">
        <div className="logo">iCode</div>
        <div className="top-sub">
          <div className="about">About</div>
          <div className="blog">Blog</div>
          <div className="services">Services</div>
        </div>
        <button onClick={onLogInClick} className="loginTop">
          Log In
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
          <button onClick={onSignUpClick} className="signup">
            Get Started
          </button>
          <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>   
        </div>
        <div className="right">ㅤ</div>
      </div>
    </div>
  );
};
