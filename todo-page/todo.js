import { completeTask, undoComplete, getUser, setUser, getLoggedIn, logIn } from '../local-storage.js';
import { makeTask } from '../utils-dom.js';

const form = document.querySelector('#make-task');
const taskList = document.querySelector('#todo-list');


let user = getLoggedIn();
console.log(user);
renderTasks(user);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    user = getLoggedIn();
    const formData = new FormData(form);
    const newTask = {
        id: user.tasks.length,
        task: formData.get('write-task'),
        isComplete: false
    };

    user.tasks.push(newTask);
   

    taskList.innerHTML = '';
    renderTasks(user);

    form.reset();
    setUser(user);
});

function renderTasks(user) {
    
    for (let task of user.tasks) {
        const listItem = makeTask(task);
        listItem.addEventListener('click', () => {
            if (!task.isComplete){
                completeTask(task.id, user);
                listItem.classList.add('completed-task');
            } else {
                undoComplete(task.id, user);
                listItem.classList.remove('completed-task');
            }
            
           
            
        });
        taskList.appendChild(listItem);

    }
}

const signOutButton = document.querySelector('#sign-out');
signOutButton.addEventListener('click', () => {
    logIn(null);
    window.location = '../';
});
