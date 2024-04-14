// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaefmJm1alklHChhYhbepE7eprWLM1rkE",
  authDomain: "netflixgpt-b65ed.firebaseapp.com",
  projectId: "netflixgpt-b65ed",
  storageBucket: "netflixgpt-b65ed.appspot.com",
  messagingSenderId: "930813291130",
  appId: "1:930813291130:web:82c54baeb7fa2b36abe9c3",
  measurementId: "G-M75RYTE053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();