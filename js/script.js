const arrangeEachTask = document.getElementById("arrange-each-task");
const arrTasks = [];
const containerTasks = document.getElementsByClassName("container-tasks")[0];

const handleSubmit = function (e) {
   e.preventDefault();
   addTask();
   deleteTask();
};

const addTask = function () {
   //  insert data to a object and store them in tasks array
   const task = {
      taskName: document.getElementById("task-name").value,
      taskDate: document.getElementById("task-date").value,
      taskTime: document.getElementById("task-time").value,
   };

   const saveTask = document.createElement("div");
   saveTask.classList.add("saved-each-task");

   // attach click event listener to set complete or completed
   saveTask.addEventListener("click", function () {
      this.classList.toggle("done");
   });

   // covert data into html strings
   const nameTask = `<div class="name-task">${task.taskName}</div>`;
   const dateTask = `<div class="date-task">${task.taskDate}</div>`;
   const timeTask = `<div class="time-task">${task.taskTime}</div>`;
   const btnDelete = `<button onClick="btnDelete(event)" class="btn-delete">Delete</button>`;
   // const btnDelete = `<button class="btn-delete">Delete</button>`;

   // insert data into the div.saved-each-task
   const arrTaskData = [nameTask, dateTask, timeTask, btnDelete];
   arrTaskData.forEach((value) => (saveTask.innerHTML += value));

   //  insert the created task into container-tasks
   containerTasks.appendChild(saveTask);
};

window.onload = function () {
   const form = document.querySelector("#arrange-each-task");
   form.addEventListener("submit", handleSubmit);
};

// remove created  task on delete button click
const btnDelete = function (e) {
   const clickedButton = e.target;
   const reallyRemove = confirm("Do you really want to remove?");
   if (reallyRemove) {
      clickedButton.parentElement.remove();
   }
};
