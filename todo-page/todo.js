import { completeTask, undoComplete, getUser, setUser } from '../local-storage.js';
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
