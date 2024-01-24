function getSavedContent() {
    return localStorage.getItem('noteContent') || '';
}

function saveContent(content) {
    localStorage.setItem('noteContent', content);
}

const noteArea = document.getElementById('noteArea');

noteArea.value = getSavedContent();

noteArea.addEventListener('input', function() {
    saveContent(noteArea.value);
});
