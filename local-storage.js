const USERS = 'USERS';
const LOGGEDIN = 'LOGGED-IN';

function getUsers() {
    // if there's no USERS, set it
    if (!localStorage.getItem(USERS)) localStorage.setItem(USERS, JSON.stringify({}));

    // return users
    return JSON.parse(localStorage.getItem(USERS));
}

export function setUser(objUser) {
    // get users and set the user
    const users = getUsers();
    users[objUser.name] = objUser;

    // stringify the users
    const stringyUsers = JSON.stringify(users);

    // save to localstorage
    localStorage.setItem(USERS, stringyUsers);
}

export function getUser(username) {
    // get users and user
    const users = getUsers();
    const user = users[username];

    // return the user or an empty object if there's no user
    if (user) return user;
    else return {};
}

export function getLoggedIn() {
    const loggedIn = getUsers()[LOGGEDIN]
    return loggedIn; // might return undefined
}

export function logIn(username) {
    localStorage.setItem(LOGGEDIN, username);
}



export function completeTask(taskToCompleteId, user){
    // const user = getUser();
    
    const matchingTask = user.tasks.find((task) => task.id === taskToCompleteId);
    matchingTask.isComplete = true;
    

    setUser(user);


}


export function undoComplete(taskToCompleteId, user){
    
    const matchingTask = user.tasks.find((task) => task.id === taskToCompleteId);
    matchingTask.isComplete = false;
    setUser(user);

}