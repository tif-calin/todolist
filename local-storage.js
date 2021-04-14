const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    if (stringyUser) return JSON.parse(stringyUser);
    else return {};
}

const LOGGEDIN = 'LOGGED-IN';

export function logIn(username) {
    localStorage.setItem(LOGGEDIN, username);
}


export function completeTask(taskToComplete, user){
    // const user = getUser();
    const matchingTask = user.tasks.find((task) => task.task === taskToComplete);

    matchingTask.isComplete = true;
    console.log(matchingTask);
    // setUser(user);


}