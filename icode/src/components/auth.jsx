import React from 'react';
import wlcmImg1 from "./Images/wlcm_page_img1.png";
import wlcmImg2 from "./Images/wlcm_page_img2.png";
import { auth } from "../config/firebase-config";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "./css/auth.css"

export const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);
  const signIn = async (e) => {
    e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/landing")
            // code to navigate to home screen
            console.log(auth?.currentUser?.email);
            
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
  };
 
  return (
<>
      
    <div className="main auth">
    

    <div className="body">
      <div className="left ">
      <div className="section ">
      <div className="logo ">iCode</div>
      
        <div className="large-text1 ">Welcome Back</div>
        
        <div className="sub-text1">
          Email
        </div>
        <input className='input' placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
        <div className="sub-text1">
          Password
        </div>
        <input className='input'
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
        <NavLink to="/reset" className="reset">
            Forgot password?
          </NavLink>
          <div className='login-btn'>
          <button onClick={signIn} className="signin" >
          <NavLink  className="loginlanding">
          Log In
          
          </NavLink>
          
        </button>
        </div>
        <div className="bottom-text">
          Dont have an account yet?{" "}
          <NavLink to="/signup" className="loginMainLink">
            &nbsp;&nbsp;SignUp
          </NavLink>
         
        </div>
        </div>
      </div>
      <div className="right">
        <div className="block1">
          <div className="image1">
            <img src={wlcmImg1} alt="lap1" />
          </div>
          <div className="purple-box">ㅤ</div>
        </div>
        <div className="block2">
          <div className="image2">
            <img src={wlcmImg2} alt="lap2" />
          </div>
          <div className="peach-box">ㅤ</div>
        </div>
      </div>
    </div>
  </div>
  
 
</>
);
};