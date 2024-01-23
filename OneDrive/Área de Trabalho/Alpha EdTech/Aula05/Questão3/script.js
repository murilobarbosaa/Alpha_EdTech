document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const outputArea = document.getElementById('outputArea');

    inputText.addEventListener('input', function () {
        const inputValue = inputText.value;
        outputArea.innerHTML = inputValue;
    });
});
