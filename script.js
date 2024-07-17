// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

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

// Add functionality to the login button
document.getElementById('login-btn').addEventListener('click', function() {
    alert('Login functionality is not implemented yet.');
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    try {
        await addDoc(collection(db, "contactMessages"), {
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });
        alert("Your message has been sent!");
        event.target.reset();
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error sending message. Please try again later.");
    }
});

// Search functionality
document.getElementById('search-btn').addEventListener('click', async function() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const results = await getDocs(collection(db, "articles"));
    results.forEach(doc => {
        const article = doc.data();
        if (article.title.toLowerCase().includes(searchQuery) || article.content.toLowerCase().includes(searchQuery)) {
            document.getElementById(article.section).style.display = 'block';
        }
    });
});
