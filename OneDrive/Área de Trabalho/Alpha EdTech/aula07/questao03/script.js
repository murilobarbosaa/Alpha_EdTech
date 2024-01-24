// Função para obter o conteúdo salvo no armazenamento local
function getSavedContent() {
    return localStorage.getItem('noteContent') || '';
}

// Função para definir o conteúdo no armazenamento local
function saveContent(content) {
    localStorage.setItem('noteContent', content);
}

// Obtém a referência do elemento textarea
const noteArea = document.getElementById('noteArea');

// Configura o conteúdo inicial do textarea
noteArea.value = getSavedContent();

// Adiciona um ouvinte de eventos para salvar o conteúdo ao digitar
noteArea.addEventListener('input', function() {
    saveContent(noteArea.value);
});
