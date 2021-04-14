import { setUser, getUser, logIn } from './local-storage.js';


const submit = document.getElementById('sign-in');

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(submit);
    const username = formData.get('name');
    const password = formData.get('password');

    if (getUser().name === username) { 
        if (getUser().password === password) {
            logIn(username);
        } 
        return false;
    } else { 
        const user = {
            name: username,
            password: password,
            task: []
        };
    
        setUser(user);
        
        logIn(username);
    }

    window.location = './todo-page';

});