import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/Constants";
import { NETFLIX_BG } from "../utils/Constants";




const Login = () => {

  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  

  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = isSignedIn ? null : nameRef.current?.value; // Name is required only in Sign Up

    console.log("Checking: ", email, password, name);

    const message = checkValidData(email, password, name);
    setErrorMessage(message); 

    if(message) return;

    if(!isSignedIn){
      //sign up logic
      createUserWithEmailAndPassword(auth,
        emailRef.current.value,
        passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        
        updateProfile(user, {
          displayName: nameRef.current.value, photoURL:USER_AVATAR
        }).then(() => {
          const { uid,email,displayName,photoURL }=auth.currentUser;
          dispatch(addUser({
            uid:uid,email:email,
            displayName:displayName,
            photoURL:photoURL,
            })
          )
        })
        .catch((error) => {
         
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage);
      });
    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        dispatch(
          addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage);
      });

    }
  };

  const toggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
    setErrorMessage(null); 
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 ">
        <img
          src={NETFLIX_BG}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <Header />

      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black opacity-80 p-8 rounded-lg text-white w-3/12"
        >
          <h1 className="text-3xl font-bold mb-6 mt-6 ">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignedIn && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 my-2 border text-white rounded focus:outline-none focus:ring-2 focus:ring-white-600"
            />
          )}

          <input
            ref={emailRef}
            type="email"
            placeholder="Email or mobile number"
            className="w-full p-3 my-2 text-white rounded border border-white focus:outline-none focus:ring-2 focus:ring-white-600 "
          />

          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="w-full p-3 my-2 mb-4 text-white rounded border border-white focus:outline-none focus:ring-2 focus:ring-white-600"
          />
          {errorMessage && <p className="text-red-700">{errorMessage}</p>}

          <button
            type="button"
            className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded my-4 font-bold cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>
          <input type="checkbox" className="  text-blue-600 rounded focus:ring-blue-500" />
      <span className="">{" "}Remember Me</span>

          <p className="text-gray-400 text-sm mt-6 mb-8">
            {isSignedIn ? "New to Netflix?" : "Already a User?"}{" "} 
            <button type="button"
              className="text-white hover:underline"
              onClick={toggleSignInForm}>
              {isSignedIn ? "Sign up now." : "Sign in now"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
