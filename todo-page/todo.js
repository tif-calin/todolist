import { getUser } from '../local-storage.js';
import { makeTask } from '../utils-dom.js';

const form = document.querySelector('#make-task');
const taskList = document.querySelector('#todo-list');

const user = getUser();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const newTask = {
        task: formData.get('write-task'),
        isComplete: false
    };

    user.tasks.push(newTask);

    taskList.innerHTML = '';
    for (let task of user.tasks) {
        const listItem = makeTask(task);
        taskList.appendChild(listItem);
    }

    form.reset();
});