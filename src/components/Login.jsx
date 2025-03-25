import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignedIn,setIsSignedIn]=useState(true);

  const toggleSignInForm = ( ) =>{
    setIsSignedIn(!isSignedIn);
  } 
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
        <form className="bg-black opacity-75 p-8 rounded-lg text-white w-3/12">
          <h1 className="text-3xl font-bold mb-4">{isSignedIn ? "Sign In": "Sign Up"}</h1>

          {!isSignedIn && <input type="email" placeholder="Full Name"
            className="w-full p-3 my-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white-600"
          />}

          <input type="email" placeholder="Email or mobile number"
            className="w-full p-3 my-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white-600"
          />
          
          <input type="password" placeholder="Password"
            className="w-full p-3 my-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-white-600 border-white"
          />
          <a href="#" className="hover:underline mt-4">Forgot password?</a>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded my-4 font-bold">{isSignedIn ? "Sign In" :"Sign Up"}
            
          </button>

          <div className="text-gray-400 text-sm flex justify-between">
            <label>
              <input type="checkbox" className="mr-2 mt-5" /> Remember me
            </label>
            
          </div>

          <p className="text-gray-400 text-sm mt-4 text-center">
            {isSignedIn ? 'New to Netflix?' : 'Already a User?'}
            
            <a href="#" className="text-white hover:underline " onClick={toggleSignInForm} >{" "}{isSignedIn?'Sign up now.': "Sign in now"}</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
