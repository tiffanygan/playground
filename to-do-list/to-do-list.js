const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.querySelector('#new-task');
const ul = document.getElementById('tasks');
const clearTaskBtn = document.getElementById('clearTaskBtn');
const filterInput = document.getElementById('filter-tasks');

function appendLiElement(newTask) {
    const iElement = document.createElement('i');
    iElement.className = 'material-icons';
    iElement.textContent = 'remove_circle';

    const aElement = document.createElement('a');
    aElement.className = 'secondary-content';
    aElement.appendChild(iElement);

    const liElement = document.createElement('li');
    liElement.className = 'collection-item';
    liElement.textContent = newTask;
    liElement.appendChild(aElement);

    const ul = document.getElementById('tasks');
    ul.appendChild(liElement);
}

function addTask() {
    const newTask = taskInput.value;

    if (!newTask) {
        return;
    }

    appendLiElement(newTask);
    taskInput.value = '';
    saveToLocalStorage(newTask);
}

function submitTask(e) {
    const keyValue = e.keyCode;
    if (keyValue === 13) {
        addTask();
    }
}

function saveToLocalStorage(taskText) {
    const taskString = localStorage.getItem('tasks');
    const taskArray = taskString ? JSON.parse(taskString) : new Array();
    taskArray.push(taskText);
    const newTaskString = JSON.stringify(taskArray);
    localStorage.setItem('tasks', newTaskString);
}

function removeFromLocalStorage(task) {
    const taskString = localStorage.getItem('tasks');
    const taskArray = JSON.parse(taskString);
    const newTaskArray = taskArray.filter(function(e) {
        return (e != task.childNodes[0].textContent);
    });
    const newTaskString = JSON.stringify(newTaskArray);
    localStorage.setItem('tasks', newTaskString);
}

function recoverTask() {
    const retrievedTasksString = localStorage.getItem('tasks');
    if (retrievedTasksString) {
        const retrievedTasks = JSON.parse(retrievedTasksString);
        retrievedTasks.forEach(appendLiElement)
    }
}

function deleteTask(e) {
    if (e.target.nodeName === 'I') {
        removeFromLocalStorage(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
}

function clearTasks() {
    localStorage.removeItem('tasks');
    while (ul.children.length > 0) {
        ul.children[0].remove();
    }
}

function filterTasks(event) {
    Array.from(document.querySelector('#tasks').children).forEach(function(ele) {
        if (ele.firstChild.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    })
}

taskInput.addEventListener('keyup', submitTask);
addTaskBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', recoverTask);
ul.addEventListener('click', deleteTask);
clearTaskBtn.addEventListener('click', clearTasks);
filterInput.addEventListener('keyup', filterTasks);