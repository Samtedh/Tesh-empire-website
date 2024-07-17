// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADzp17XgOO9cwtC6pmOHJpBZLvyj3Ro-0",
  authDomain: "tesh-empire-website.firebaseapp.com",
  projectId: "tesh-empire-website",
  storageBucket: "tesh-empire-website.appspot.com",
  messagingSenderId: "172517224816",
  appId: "1:172517224816:web:e7a6227546c181ad3ddfb5",
  measurementId: "G-6M7L4BWHMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
