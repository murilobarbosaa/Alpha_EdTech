let reminders = JSON.parse(localStorage.getItem('reminders')) || [];

function addReminder() {
    const titleInput = document.getElementById('titleInput');
    const dateInput = document.getElementById('dateInput');
    const title = titleInput.value.trim();
    const date = dateInput.value;

    if (title !== '' && date !== '') {
        const reminder = { title, date };
        reminders.push(reminder);
        saveRemindersToLocal();
        titleInput.value = '';
        dateInput.value = '';
    }
}

function saveRemindersToLocal() {
    localStorage.setItem('reminders', JSON.stringify(reminders));
}

function showReminders() {
    const showDateInput = document.getElementById('showDateInput');
    const showDate = showDateInput.value;

    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = '';

    const filteredReminders = reminders.filter(reminder => reminder.date === showDate);

    if (filteredReminders.length > 0) {
        filteredReminders.forEach(reminder => {
            const li = document.createElement('li');
            li.textContent = `${reminder.title} - ${reminder.date}`;
            reminderList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Nenhum lembrete para esta data.';
        reminderList.appendChild(li);
    }
}

showReminders();
