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
import { Search, Home, ChevronDown } from "lucide-react";



const Header = () => {

  const navigate = useNavigate(); 

  const user=useSelector((store)=>store.user);

  const showSearch = useSelector((store) => store.search.showSearch);

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

      const handleSearchClick=()=>{
        // Toggle Search ......
        dispatch(toggleSearchView());
      }

    const handleLanguageChange = (e) => {
      
      dispatch(changeLanguage(e.target.value));
      
    }



    return (
      <div className="absolute top-0 left-0 w-full px-6 py-3 z-10 flex items-center justify-between bg-gradient-to-b from-black via-black/80 to-transparent">
        <img className="w-40" src={LOGO} alt="Netflix Logo" />
    
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <select
            className="bg-black/70 text-white text-sm px-3 py-1 rounded-md border border-gray-500 hover:bg-black/90 transition"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option className="bg-white text-black" key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
    
          {/* Search / Home Toggle */}
          {user && (
            <>
              <button
                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-200"
                onClick={handleSearchClick}
              >
                {showSearch ? <Home size={20} /> : <Search size={20} />}
              </button>
    
              {/* User Avatar and SignOut */}
              <div className="flex items-center gap-2">
                <img
                  className="w-9 h-9 rounded-full border border-white"
                  alt="user-icon"
                  src={user.photoURL}
                />
                <button
                  onClick={handleSignOut}
                  className="bg-white/10 border border-white/30 text-white text-sm px-4 py-1.5 rounded-md hover:bg-white/20 transition"
                >
                  {lang[langKey].SignOut}
                </button>

              </div>
            </>
          )}
        </div>
      </div>
    );
    
  };    

export default Header;
