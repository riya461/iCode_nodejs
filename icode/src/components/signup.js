import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const SignUp = ({onLogInClick}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);
  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
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
