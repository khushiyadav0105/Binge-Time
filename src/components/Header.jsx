import React from 'react';
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/Constants';
const Header = () => {
  const navigate = useNavigate(); 

  const user=useSelector((store)=>store.user);

  const handleSignOut = () => {  
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const dispatch = useDispatch();

  useEffect(() =>  {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid,email,displayName,photoURL }=user;
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL}
              
              ));
              navigate("/browse");

        }
          else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return ()=>unsubscribe();

},[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0 "
        src={LOGO}
        alt="Netflix Logo"
      />
      {user && <div className="flex items-center gap-4">
        <img
          className="w-12 h-12"
          alt="user-icon"
          src={user.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
