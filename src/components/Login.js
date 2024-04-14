import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "../App.css";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [inSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const dispatch = useDispatch();

  const handleButtonSubmit = () => {
    const message = validateFormData(
      nameRef.current?.value,
      emailRef.current.value,
      pwdRef.current.value
    );
    setErrMsg(message);

    if (message) return;

    if (!inSignIn) {
      // Signed up
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        pwdRef.current.value
      )
        .then((userCredential) => {
          //const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: nameRef.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/2987117?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayname: displayName,
                  photoUrl: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        pwdRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
         
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + errorMessage);
        });
    }

    setErrMsg(message);
  };
  const handleSignUp = () => {
    setIsSignIn(!inSignIn);
  };
  return (
    <section className="login-page">
      <Header />
      <div className="login-form z-20">
        <h1 className="text-white font-medium text-4xl mb-7">
          {inSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {!inSignIn && (
            <input
              ref={nameRef}
              className="input"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={emailRef}
            className="input"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            ref={pwdRef}
            className="input"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-500 mb-5 text-center">{errMsg}</p>
          <button
            className="button bg-red-600 font-extralight"
            onClick={handleButtonSubmit}
          >
            {inSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p
          className=" text-slate-400 mt-20 cursor-pointer"
          onClick={handleSignUp}
        >
          {inSignIn
            ? "Already a User Sign In now."
            : "New to Netflix? Sign up now."}
        </p>
        <p className="text-slate-400 mt-5">
          This page is protected by Google CAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </div>
    </section>
  );
};

export default Login;
