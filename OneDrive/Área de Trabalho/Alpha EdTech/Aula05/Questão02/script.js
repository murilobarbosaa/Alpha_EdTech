document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskListUl = document.getElementById("task-list");
    const inputTask = document.getElementById("input-task");
  
    taskForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const task = inputTask.value;
      inputTask.value = "";
  
      taskListUl.innerHTML += `<li>${task}</li>`;
    });
  
    document.getElementById("add-button").addEventListener("click", function () {
      taskForm.dispatchEvent(new Event("submit"));
    });
  });
  