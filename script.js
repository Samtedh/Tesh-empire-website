import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const db = getFirestore();
const auth = getAuth();

// Story Form Submission
document.getElementById('storyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    try {
        await addDoc(collection(db, 'stories'), { title, content });
        alert('Story posted successfully!');
        document.getElementById('storyForm').reset();
        loadStories();
    } catch (error) {
        console.error('Error adding document: ', error);
    }
});

// Load Stories
const loadStories = async () => {
    const querySnapshot = await getDocs(collection(db, 'stories'));
    const storiesDiv = document.getElementById('stories');
    storiesDiv.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const story = doc.data();
        storiesDiv.innerHTML += `<article><h3>${story.title}</h3><p>${story.content}</p></article>`;
    });
};

// Search Functionality
document.getElementById('searchInput').addEventListener('input', async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const q = query(collection(db, 'stories'), where('title', '>=', searchTerm));
    const querySnapshot = await getDocs(q);
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const story = doc.data();
        searchResultsDiv.innerHTML += `<article><h3>${story.title}</h3><p>${story.content}</p></article>`;
    });
});

// Load stories on page load
window.addEventListener('load', loadStories);
