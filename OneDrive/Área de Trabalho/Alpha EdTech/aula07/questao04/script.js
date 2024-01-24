function getSavedStyles() {
    return JSON.parse(localStorage.getItem('noteStyles')) || {};
}

function saveStyles(styles) {
    localStorage.setItem('noteStyles', JSON.stringify(styles));
}

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

const noteArea = document.getElementById('noteArea');

const savedStyles = getSavedStyles();
noteArea.style.fontSize = savedStyles.fontSize + 'px' || '';
noteArea.style.fontFamily = savedStyles.fontFamily || '';
noteArea.style.backgroundColor = savedStyles.backgroundColor || '';

noteArea.value = getSavedContent();

noteArea.addEventListener('input', function() {
    saveContent(noteArea.value);
});
