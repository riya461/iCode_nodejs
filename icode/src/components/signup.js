import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const SignUp = ({onLogInClick}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);
  const signUp = async (e) => {
    e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // navigate("/login")
            // code to navigate to login automatically
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              
          });

  };
  return (
    <div>
      <form>
        <input
          placeholder="Email.."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signUp}>Sign Up</button>
      </form>

      <button onClick={onLogInClick}>Log In</button>
    </div>
  );
};
