import React from "react";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {};
  return (
    <div className="login">
      <img
        src="http://www.mahesh-europe.com/wp-content/uploads/2020/07/Linkedin-Logo-2011%E2%80%932019.png"
        alt=""
      />

      <form>
        <input placeholder="Full name(required)" type="text" />

        <input placeholder="Profile pic URL(optional)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />

        <button type="submit" onClick>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
