import { completeTask, getUser, setUser } from '../local-storage.js';
import { makeTask } from '../utils-dom.js';

const form = document.querySelector('#make-task');
const taskList = document.querySelector('#todo-list');

let user = getUser();
renderTasks(user);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    user = getUser();
    const formData = new FormData(form);
    const newTask = {
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
            completeTask(task.task, user);
            setUser(user);
            listItem.classList.add('completed-task');
            // listItem.disabled = true;
            
        });
        taskList.appendChild(listItem);

    }
}
