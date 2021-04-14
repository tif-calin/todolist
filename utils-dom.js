export function makeTask(task) {
    const item = document.createElement('li');
    item.textContent = task.task;

    if (task.isComplete) {
        item.classList.add('completed-task');
    }

    return item;
}