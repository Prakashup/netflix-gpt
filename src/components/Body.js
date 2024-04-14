import { useEffect } from "react";
import appRouter from "../appRouter";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayname: displayName, photoUrl: photoURL }));
      } else {
        // User is signed out
        dispatch(addUser(removeUser()));
      }
    });
  }, []);

  return (
    <RouterProvider router={appRouter}>
      <Login />
    </RouterProvider>
  );
};

export default Body;
