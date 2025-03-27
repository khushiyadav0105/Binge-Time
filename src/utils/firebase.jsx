import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-XqxFjKHQuB2WfEfJp5IKGLoDmkkFO4k",
  authDomain: "binge-time-a143d.firebaseapp.com",
  projectId: "binge-time-a143d",
  storageBucket: "binge-time-a143d.appspot.com",  // Corrected typo
  messagingSenderId: "296683780538",
  appId: "1:296683780538:web:3e9afe02bc2877e962c583",
  measurementId: "G-76C7QTVFNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // Pass the app instance
