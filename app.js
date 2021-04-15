import { setUser, getUser, logIn } from './local-storage.js';

const submit = document.getElementById('sign-in');

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(submit);
    const username = formData.get('name');
    const password = formData.get('password');

    if (!getUser(username).name) {
        console.log('No such user exists!');
    } else if (getUser(username).password === password) { 
        logIn(username);
        window.location = './todo-page';
    } else {
        console.log('Wrong password!');
    }
});