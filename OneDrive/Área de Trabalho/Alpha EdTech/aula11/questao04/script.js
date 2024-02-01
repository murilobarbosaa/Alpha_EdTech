document.getElementById('verifyButton').addEventListener('click', () => {
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    const daysToDeath = calculateDaysToDeath(birthdate, gender);

    document.getElementById('result').innerText = `Dias restantes até a morte: ${daysToDeath}`;
});

function calculateDaysToDeath(birthdate, gender) {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const lifeExpectancy = (gender === 'male') ? 73.1 * 365 : 80.1 * 365;
    const ageInMilliseconds = currentDate - birthDate;
    const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
    const daysToDeath = lifeExpectancy - ageInDays;
    return Math.round(daysToDeath);
}
