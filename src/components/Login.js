import React, { useState } from "react";
import "../App.css";
import Header from "./Header";

const Login = () => {
    const [inSignIn, setIsSignIn] = useState(true);

    const handleSignUp = ()=> {
        setIsSignIn(!inSignIn);
    }
  return (
    <section className="login-page">
      <Header />
      <div className="login-form z-20">
        <h1 className="text-white font-medium text-4xl mb-7">{inSignIn ? "Sign In":"Sign Up"}</h1>
        <form>
          {!inSignIn && <input className="input" type="text" placeholder="Full Name" />}  
          <input className="input" type="text" placeholder="Email or phone number" />
          <input className="input" type="password" placeholder="Password" />
          <button className="button bg-red-600 p-">{inSignIn ? "Sign In":"Sign Up"}</button>
        </form>
        <p className=" text-slate-400 mt-20 cursor-pointer" onClick={handleSignUp}>{inSignIn ? "Already a User Sign In now.":"New to Netflix? Sign up now."}</p>
        <p className="text-slate-400 mt-5">This page is protected by Google CAPTCHA to ensure you're not a bot. Learn more.</p>
      </div>
    </section>
  );
};

export default Login;
