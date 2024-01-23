function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDateInput = document.getElementById('taskDate').value;
    const taskDate = new Date(taskDateInput + 'T00:00:00Z');
    const dayOfWeek = taskDate.getUTCDay();

    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.textContent = taskName;

    document.getElementById('daysOfWeek').children[dayOfWeek].appendChild(taskElement);

    const daysDiff = Math.ceil((taskDate - new Date()) / (1000 * 60 * 60 * 24));

    taskElement.style.backgroundColor = daysDiff > 7 ? 'lightblue' :
                                       daysDiff > 0 ? 'lightcoral' : 'indianred';
    if (daysDiff > 0) {
        taskElement.classList.add(daysDiff > 7 ? 'due-soon' : 'overdue');
    }
}
