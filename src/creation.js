import { addToStorage, storageAvailable } from "./storage.js";
const taskDisplay = document.querySelector("#task-list");
const projectsDisplay = document.querySelector("#projects-list");

export function resetProjectsList(taskList, projectList){
  projectList.length = 0;
  for (let i = 0; i < taskList.length; i++){
    let task = taskList[i];
    if (!projectList.includes(task.projectName) && task.projectName !== ""){
      projectList.push(task.projectName);
    }
  }
  return;
}

export function createProjectsButtons(projectsList){
  while(projectsDisplay.hasChildNodes()){
    projectsDisplay.removeChild(projectsDisplay.firstChild);
  }

  for(let i = 0; i < projectsList.length; i++){
    const projectName = projectsList[i];
    const buttonDiv = document.createElement("div");
  
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", projectName);
    checkbox.setAttribute("name", projectName);
    buttonDiv.append(checkbox);

    const label = document.createElement("label");
    label.setAttribute("for", projectName);
    label.textContent = projectName;
    buttonDiv.append(label);

    projectsDisplay.append(buttonDiv);
  }

  return;
}

export function createTaskBoxes(taskList){
  while(taskDisplay.hasChildNodes()){
    taskDisplay.removeChild(taskDisplay.firstChild);
  }

  for(let i = 0; i < taskList.length; i++){
    const task = taskList[i];
    const taskBox = document.createElement("div");
    taskBox.id = "task";
  
    const header = document.createElement("h1");
    header.textContent = task.name;
    const description = document.createElement("p");
    description.textContent = task.description;
    const finishButton = document.createElement("button");
    finishButton.className = "finish-button";

    taskBox.append(header, description, finishButton);

    taskDisplay.append(taskBox);
  }

  return;
}

