function getSavedReminders() {
    return localStorage.getItem('dailyReminders') || '';
}

function saveReminders(reminders) {
    localStorage.setItem('dailyReminders', reminders);
}

function addReminder() {
    const reminderText = document.getElementById('reminderText').value;
    const reminderDate = document.getElementById('reminderDate').value;

    if (!reminderText || !reminderDate) {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const savedReminders = getSavedReminders();

    const newReminder = `${reminderDate}: ${reminderText}`;
    const updatedReminders = savedReminders ? `${savedReminders}\n${newReminder}` : newReminder;

    saveReminders(updatedReminders);

    document.getElementById('reminderText').value = '';
    document.getElementById('reminderDate').value = '';
}

function showTodayReminders() {
    const today = new Date().toISOString().split('T')[0];
    const savedReminders = getSavedReminders();

    if (!savedReminders) {
        document.getElementById('todayReminders').innerHTML = '<p>Não há lembretes salvos.</p>';
        return;
    }

    const remindersArray = savedReminders.split('\n');
    const todayReminders = remindersArray.filter(reminder => reminder.startsWith(today));

    if (todayReminders.length === 0) {
        document.getElementById('todayReminders').innerHTML = '<p>Não há lembretes para hoje.</p>';
    } else {
        const formattedReminders = todayReminders.map(reminder => {
            const [date, text] = reminder.split(':');
            return `<div class="reminder-item"><strong>${date}:</strong> ${text.trim()}</div>`;
        });

        document.getElementById('todayReminders').innerHTML = formattedReminders.join('');
    }
}
