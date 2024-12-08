"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL7J6xiFyXr58keDN0O4Y6WehiXJ1EvgM",
  authDomain: "isitphisy-cc26d.firebaseapp.com",
  projectId: "isitphisy-cc26d",
  storageBucket: "isitphisy-cc26d.firebasestorage.app",
  messagingSenderId: "340683301258",
  appId: "1:340683301258:web:074c6d8b56690c07e76873",
  measurementId: "G-VN85NSY4RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);