import React from 'react';

import wlcmImg1 from "./Images/wlcm_page_img1.png";
import wlcmImg2 from "./Images/wlcm_page_img2.png";
import { auth } from "../config/firebase-config";
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./css/auth.css"
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(auth?.currentUser?.email);
  const signUp = async (e) => {
    e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // code to navigate to login automatically
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              
          });

  };
  return (
    
    <div className="main auth">
    

    <div className="body">
      <div className="right ">
      <div className="logo ">iCode</div>

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
      <div className="left">
      <div className="section ">
      
        <div className="large-text1 ">Welcome </div>
        
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
        
          <div className='login-btn'>
          <button onClick={signUp} className="signin" >
          <NavLink  className="loginlanding">
          Sign Up
          
          </NavLink>
          
        </button>
        </div>
        <div className="bottom-text">
          Already have an account ?{" "}
          <NavLink to="/signup" className="loginMainLink">
            &nbsp;&nbsp;LogIn
          </NavLink>
         
        </div>
        </div>
        
      </div>
    </div>
  </div>
  
  );
};
