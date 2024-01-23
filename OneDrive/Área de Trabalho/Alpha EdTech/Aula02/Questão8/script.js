const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('close-btn');

openModalBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});
