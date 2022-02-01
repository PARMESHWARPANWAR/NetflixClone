import React from "react";
import { auth } from "../../firebase/firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = userRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
   
  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(emailRef.current.value, 
        passwordRef.current
        )
        .then((authUser) =>{

        })
        .catch((err) => alert(err.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sing In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
