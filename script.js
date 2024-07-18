// Function to toggle side menu
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.left === '-200px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-200px';
    }
}

// Firebase authentication setup
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // User is signed in
        console.log('User signed in:', user);
    } else {
        // User is signed out
        console.log('No user signed in');
    }
});

// Function to handle user registration
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Registered
            console.log('User registered:', userCredential.user);
        })
        .catch(error => {
            console.error('Error registering:', error);
        });
});

// Function to handle user login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Signed in
            console.log('User signed in:', userCredential.user);
        })
        .catch(error => {
            console.error('Error signing in:', error);
        });
}

// Function to handle user logout
function logout() {
    firebase.auth().signOut().then(() => {
        console.log('User signed out');
    }).catch(error => {
        console.error('Error signing out:', error);
    });
}

// Search functionality
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

// CMS: Function to post new story
function postStory() {
    const storyTitle = document.getElementById('storyTitle').value;
    const storyContent = document.getElementById('storyContent').value;
    const newStory = document.createElement('section');
    newStory.innerHTML = `<h2>${storyTitle}</h2><p>${storyContent}</p>`;
    document.querySelector('main').appendChild(newStory);
    console.log('New story posted');
}
