import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = isSignedIn ? null : nameRef.current?.value; // Name is required only in Sign Up

    console.log("Checking: ", email, password, name);

    const message = checkValidData(email, password, name);
    setErrorMessage(message); // If message is null, no error

    if(message) return;

    if(!isSignedIn){
      //sign up logic
    }
    else{
      //sign in logic

    }
  };

  const toggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
    setErrorMessage(null); 
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Header />

      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black opacity-75 p-8 rounded-lg text-white w-3/12"
        >
          <h1 className="text-3xl font-bold mb-4">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignedIn && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 my-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white-600"
            />
          )}

          <input
            ref={emailRef}
            type="email"
            placeholder="Email or mobile number"
            className="w-full p-3 my-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white-600"
          />

          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="w-full p-3 my-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white-600 border border-white"
          />
          {errorMessage && <p className="text-red-700">{errorMessage}</p>}

          <button
            type="button"
            className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded my-4 font-bold cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-400 text-sm mt-4 text-center">
            {isSignedIn ? "New to Netflix?" : "Already a User?"}
            <button type="button"
              className="text-white hover:underline"
              onClick={toggleSignInForm}>
              {" "}{isSignedIn ? "Sign up now." : "Sign in now"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
