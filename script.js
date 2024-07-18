import { db, auth } from './firebaseConfig.js';
import { collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Add functionality to the login button
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Logged in successfully!');
            loadNews();
        })
        .catch((error) => {
            console.error("Error signing in: ", error);
            alert("Error logging in. Please try again.");
        });
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
        alert('Message sent successfully!');
        event.target.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error sending message. Please try again.");
    }
});

// Load news stories from Firestore
async function loadNews() {
    const newsContainer = document.getElementById('news-content');
    newsContainer.innerHTML = '';
    const q = query(collection(db, "newsStories"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const story = doc.data();
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.content}</p>
            <p><small>${new Date(story.timestamp.seconds * 1000).toLocaleString()}</small></p>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Ensure user is authenticated before loading news
onAuthStateChanged(auth, (user) => {
    if (user) {
        loadNews();
    } else {
        document.getElementById('news-content').innerHTML = '<p>Please log in to view the latest news.</p>';
    }
});

// Search functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const newsItems = document.getElementsByClassName('news-item');
    Array.from(newsItems).forEach(item => {
        const title = item.getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
