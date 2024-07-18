// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
