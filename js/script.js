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

// the function default render all the tasks in the array
// const renderEachTask = function (arr, appendElement) {
//    arr.forEach((task) => {
//       const saveTask = document.createElement("div");
//       saveTask.classList.add("saved-each-task");

//       const nameTask = `<div class="name-task">${task.taskName}</div>`;
//       const dateTask = `<div class="date-task">${task.taskDate}</div>`;
//       const timeTask = `<div class="time-task">${task.taskTime}</div>`;
//       const btnDelete = `<button onClick="btnDelete(event)" class="btn-delete">Delete</button>`;

//       const arrTaskData = [nameTask, dateTask, timeTask, btnDelete];

//       arrTaskData.forEach((value) => (saveTask.innerHTML += value));
//       appendElement.appendChild(saveTask);
//    });
// };

// for default this should render all the tasks contains
// renderEachTask(arrTasks, containerTasks);

// add task
// arrangeEachTask.addEventListener("submit", function (e) {
//    e.preventDefault();

//    //  insert data to a object and store them in tasks array
//    const task = {
//       taskName: document.getElementById("task-name").value,
//       taskDate: document.getElementById("task-date").value,
//       taskTime: document.getElementById("task-time").value,
//    };

//    //  create a div with the class name "saved-each-task"
//    let saveTask = document.createElement("div");
//    saveTask.classList.add("saved-each-task");

//    //  manca tempo
//    let modified = String(saveTask).replace(
//       '<div class="saved-each-task">',
//       '<div onClick="complete(event)" class="saved-each-task">'
//    );
//    console.log("befoer", saveTask, modified);

//    // covert data into html strings
//    const nameTask = `<div class="name-task">${task.taskName}</div>`;
//    const dateTask = `<div class="date-task">${task.taskDate}</div>`;
//    const timeTask = `<div class="time-task">${task.taskTime}</div>`;
//    const btnDelete = `<button onClick="btnDelete(event)" class="btn-delete">Delete</button>`;

//    // insert data into the div.saved-each-task
//    const arrTaskData = [nameTask, dateTask, timeTask, btnDelete];
//    arrTaskData.forEach((value) => (saveTask.innerHTML += value));

//    //  insert the created task into container-tasks
//    containerTasks.appendChild(saveTask);
//    //  console.log(
//    //     "inner: ",
//    //     saveTask.replace(/( )/, `onClick="btnDelete(event)"`)
//    //  );

//    // update array
//    arrTasks.push(task);

//    const savedTasks = document.querySelectorAll(".saved-each-task");

//    //  savedTasks.forEach((each) => {
//    //     each.addEventListener("click", (event) => {
//    //     });
//    //  });
//    taskComplete();
//    console.log(savedTasks);
// });
// renderEachTask(arrTasks, containerTasks);

// delete task
// const deleteTask = document.getElementsByClassName("btn-delete");
// document.addEventListener("click", (event) => {
//    console.log("btn", deleteTask[0]);
//    console.log("targe", event.target);
//    //  const card = event.target;
//    if (event.target.innerHtml === deleteTask[0].innerHtml) {
//       event.target.parentElement.remove();
//       console.log("can remove parent");
//    } else {
//       console.log("can't remove");
//    }
// });

const btnDelete = function (e) {
   const clickedButton = e.target;
   const reallyRemove = confirm("Do you really want to remove?");
   if (reallyRemove) {
      clickedButton.parentElement.remove();
   }
};
