import React from 'react';
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/Constants';
import { toggleSearchView } from '../utils/searchSlice';
import {changeLanguage} from '../utils/configSlice';
import useLanguage from '../hooks/useLanguage';
import lang from '../utils/LanguageConstants';

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

  const langKey=useLanguage();

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

      },[]);

      const handelSearchClick=()=>{
        // Toggle Search ......
        dispatch(toggleSearchView());
      }

    const handelLanguageChange = (e) => {
      
      dispatch(changeLanguage(e.target.value));
      
    }



  return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 z-10 flex flex-row items-center justify-between bg-transparent">
      <img className="w-44"
        src={LOGO}
        alt="Netflix Logo"
      />
      {user && 
      <div className="flex items-center gap-4">
        <select className='p-2 m-2 bg-gray-800 text-white' onChange={handelLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=> <option 
            key={lang.identifier}
            value={lang.identifier}>
            {lang.name}
          </option>)}
         
        </select>
        <button className='py-2 px-4 m-2 bg-purple-600 text-white rounded-lg mx-4 my-2' onClick={handelSearchClick}
        > 
          {lang[langKey].search} 
        </button>
        <img
          className="w-12 h-12"
          alt="user-icon"
          src={user.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">
        {lang[langKey].SignOut}
        </button>
        
      </div>}
    </div>
  );
};

export default Header;
