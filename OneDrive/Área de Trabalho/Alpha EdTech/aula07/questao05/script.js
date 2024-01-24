function getSavedContent() {
    return localStorage.getItem('noteContent') || '';
}

function saveContent(content) {
    localStorage.setItem('noteContent', content);
}

function getSavedStyles() {
    return JSON.parse(localStorage.getItem('noteStyles')) || {};
}

function saveStyles(styles) {
    localStorage.setItem('noteStyles', JSON.stringify(styles));
}

const noteArea = document.getElementById('noteArea');
const savedStyles = getSavedStyles();

noteArea.style.fontSize = savedStyles.fontSize + 'px' || '';
noteArea.style.fontFamily = savedStyles.fontFamily || '';
noteArea.style.backgroundColor = savedStyles.backgroundColor || '';

noteArea.value = getSavedContent();

noteArea.addEventListener('input', function() {
    saveContent(noteArea.value);
});

function applyStyles() {
    const fontSize = document.getElementById('fontSize').value;
    const fontFamily = document.getElementById('fontFamily').value;
    const backgroundColor = document.getElementById('backgroundColor').value;

    noteArea.style.fontSize = fontSize + 'px';
    noteArea.style.fontFamily = fontFamily;
    noteArea.style.backgroundColor = backgroundColor;

    saveStyles({
        fontSize,
        fontFamily,
        backgroundColor
    });
}

function exportData() {
    const exportData = {
        text: noteArea.value,
        fontSize: savedStyles.fontSize,
        fontFamily: savedStyles.fontFamily,
        backgroundColor: savedStyles.backgroundColor
    };

    const exportModal = document.getElementById('exportModal');
    const exportTextarea = document.getElementById('exportTextarea');

    exportModal.style.display = 'block';
    exportTextarea.value = JSON.stringify(exportData);
}

function importData() {
    const importModal = document.getElementById('importModal');
    const importTextarea = document.getElementById('importTextarea');
    const importError = document.getElementById('importError');

    importModal.style.display = 'block';
    importError.textContent = '';

    document.getElementById('importOkButton').addEventListener('click', function() {
        try {
            const importedData = JSON.parse(importTextarea.value);

            noteArea.value = importedData.text;
            noteArea.style.fontSize = importedData.fontSize + 'px';
            noteArea.style.fontFamily = importedData.fontFamily;
            noteArea.style.backgroundColor = importedData.backgroundColor;

            saveContent(noteArea.value);
            saveStyles({
                fontSize: importedData.fontSize,
                fontFamily: importedData.fontFamily,
                backgroundColor: importedData.backgroundColor
            });

            importModal.style.display = 'none';
        } catch (error) {
            importError.textContent = 'Os dados fornecidos não são válidos. Por favor, tente novamente.';
        }
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.getElementById('exportButton').addEventListener('click', exportData);
document.getElementById('importButton').addEventListener('click', importData);
document.getElementById('exportModal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
document.getElementById('importModal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
