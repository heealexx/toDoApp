import {createProjectsButtons, resetProjectsList, createTaskBoxes} from "./creation.js";
import { startFromStorage, storageAvailable, changeStorage } from "./storage.js";
var taskList = [];
var projectList = [];

// Creates a "task" object for our taskList
function newTask(event){
  event.preventDefault();
  const task = {};
  const form = document.querySelector("#new-task");
  const taskName = form.elements.taskName.value;
  const description = form.elements.description.value;
  const projectName = form.elements.projectName.value;

  task.name = taskName;
  task.description = description;
  task.projectName = projectName;

  taskList.push(task);
  if (!projectList.includes(projectName) && projectName !== ""){
    resetProjectsList(taskList, projectList);
    createProjectsButtons(projectList);
  }

  createTaskBoxes(taskList);
  const finishButtons = document.querySelectorAll(".finish-button");
  finishButtons.forEach(function(button){
    button.addEventListener("click", finishTask);
  });

  if (storageAvailable("localStorage")){
    changeStorage(taskList);
  }

  form.reset();
  return;

}

function finishTask(event){
  const element = event.target.parentNode.querySelector("h1");
  taskList = taskList.filter(task => (task.name !== element.textContent));
  event.target.parentNode.remove();
  resetProjectsList(taskList, projectList);
  createProjectsButtons(projectList);
  changeStorage(taskList);

  return;
}

const form = document.querySelector("#new-task");
form.addEventListener("submit", newTask);

if (storageAvailable("localStorage")){
  const storedTasks = JSON.parse(startFromStorage());
  for (let i = 0; i < storedTasks.length; i++){
    taskList.push(storedTasks[i]);
  }
  createTaskBoxes(taskList);
  resetProjectsList(taskList, projectList);
}
createProjectsButtons(projectList);

const finishButtons = document.querySelectorAll(".finish-button");
finishButtons.forEach(function(button){
  button.addEventListener("click", finishTask);
});
