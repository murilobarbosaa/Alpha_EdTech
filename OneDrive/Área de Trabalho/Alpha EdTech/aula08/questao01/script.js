let globalArray = JSON.parse(localStorage.getItem('array')) || [];

function updateArrayInfo() {
    const arrayInfoParagraph = document.getElementById('array-info');
    arrayInfoParagraph.textContent = JSON.stringify(globalArray);
}

function pushToArray() {
    const textInput = document.getElementById('textInput');
    const inputValue = textInput.value.trim();

    if (inputValue !== '') {
        globalArray.push(inputValue);
        updateArrayInfo();
        saveArrayToLocal();
    }
}

function popFromArray() {
    if (globalArray.length > 0) {
        globalArray.pop();
        updateArrayInfo();
        saveArrayToLocal();
    }
}

function saveArrayToLocal() {
    localStorage.setItem('array', JSON.stringify(globalArray));
}

updateArrayInfo();
