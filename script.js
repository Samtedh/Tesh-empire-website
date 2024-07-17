document.addEventListener('DOMContentLoaded', function () {
    // Firebase Authentication
    const auth = firebase.auth();

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const userInfo = document.getElementById('user-info');
    const userEmail = document.getElementById('user-email');
    const logoutButton = document.getElementById('logout-button');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                loginForm.reset();
                toggleAuthUI(userCredential.user);
            })
            .catch(error => {
                console.error(error.message);
            });
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                registerForm.reset();
                toggleAuthUI(userCredential.user);
            })
            .catch(error => {
                console.error(error.message);
            });
    });

    logoutButton.addEventListener('click', function () {
        auth.signOut().then(() => {
            toggleAuthUI(null);
        });
    });

    auth.onAuthStateChanged(function (user) {
        toggleAuthUI(user);
    });

    function toggleAuthUI(user) {
        if (user) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('register-container').style.display = 'none';
            userInfo.style.display = 'block';
            userEmail.textContent = `Logged in as: ${user.email}`;
        } else {
            document.getElementById('login-container').style.display = 'block';
            document.getElementById('register-container').style.display = 'block';
            userInfo.style.display = 'none';
            userEmail.textContent = '';
        }
    }
});
