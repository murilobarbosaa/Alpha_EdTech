document.getElementById('formatButton').addEventListener('click', function () {
    formatEvents();
});

function formatEvents() {
    var eventList = document.getElementById('eventList').value;
    var formattedEvents = [];

    var lines = eventList.split('\n');

    lines.forEach(function (line) {
        if (line.trim() !== '') {
            var eventDetails = line.split(',');

            var eventName = eventDetails[0];
            var eventDate = new Date(eventDetails[1] + 'T' + eventDetails[2]);
            var formattedDate = formatDate(eventDate);
            var dayOfWeek = getDayOfWeek(eventDate);
            var eventTime = eventDetails[2];

            formattedEvents.push({
                name: eventName,
                dayMonthYear: formattedDate,
                dayOfWeek: dayOfWeek,
                hour: eventTime
            });
        }
    });

    formattedEvents.sort(function (a, b) {
        return new Date(b.dayMonthYear) - new Date(a.dayMonthYear);
    });

    var formattedTable = document.getElementById('formattedTable');
    formattedTable.innerHTML = '';

    formattedEvents.forEach(function (event) {
        var row = `<tr>
                        <td>${event.name}</td>
                        <td>${event.dayMonthYear}</td>
                        <td>${event.dayOfWeek}</td>
                        <td>${event.hour}</td>
                   </tr>`;
        formattedTable.innerHTML += row;
    });
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + '-' + month + '-' + year;
}

function getDayOfWeek(date) {
    var daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return daysOfWeek[date.getDay()];
}
