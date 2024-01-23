function createTaskManager() {
    const tasks = [];

    function addTask(taskText) {
        tasks.push({ text: taskText, priority: "low" });
        renderTasks();
    }

    function updatePriority(index) {
        const task = tasks[index];

        switch (task.priority) {
            case "low":
                task.priority = "medium";
                break;
            case "medium":
                task.priority = "high";
                break;
            case "high":
                task.priority = "low";
                break;
        }

        renderTasks();
    }

    function renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            li.classList.add(`priority-${task.priority}`);
            li.onclick = () => updatePriority(index);
            taskList.appendChild(li);
        });
    }

    return {
        addTask,
        renderTasks
    };
}

const taskManager = createTaskManager();

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        taskManager.addTask(taskText);
        taskInput.value = "";
    }
}
