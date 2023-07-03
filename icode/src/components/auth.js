import { auth } from "../config/firebase-config";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { useState } from "react";

export const Auth = ({onSignUpClick}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);
  const signIn = async (e) => {
    e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // navigate("/home")
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
    <div>
      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
      <button onClick={onSignUpClick}>Sign Up</button>
    </div>
  );
};
