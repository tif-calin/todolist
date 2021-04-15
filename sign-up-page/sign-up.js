import { setUser, getUser, logIn } from '../local-storage.js';

const signUpForm = document.querySelector('#sign-up');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);
    const username = formData.get('name');
    const password = formData.get('password');

    if (getUser(username).name === username) {
        alert('user already exist');
        window.location = '../';
    } else { 
        const user = {
            name: username,
            password: password,
            tasks: []
        };
        setUser(user);

        logIn(username);

        window.location = '../todo-page';
    }

    
});