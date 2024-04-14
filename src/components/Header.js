import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayName,
            photoUrl: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(addUser(removeUser()));
        navigate("/");
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="bg-gradient-to-b from-black p-2 relative z-10 flex justify-between">
      <div className="logo">
        <img
          className=" w-40 mt-2"
          alt="Logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      {user?.photoUrl && (
        <div className="top navigation">
          <ul className="flex m-2 text-sm">
            <li className="p-4 text-white">Movie</li>
            <li className="p-4 text-white">Search with AI</li>
            <li className="p-2">
              <button
                className=" text-cyan-50 rounded-md flex items-center"
                onClick={handleSignOut}
              >
                <img
                  className="w-8 rounded-md mr-2 border-solid"
                  alt="user icon"
                  src={user?.photoUrl}
                />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
