// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-XqxFjKHQuB2WfEfJp5IKGLoDmkkFO4k",
  authDomain: "binge-time-a143d.firebaseapp.com",
  projectId: "binge-time-a143d",
  storageBucket: "binge-time-a143d.firebasestorage.app",
  messagingSenderId: "296683780538",
  appId: "1:296683780538:web:3e9afe02bc2877e962c583",
  measurementId: "G-76C7QTVFNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
