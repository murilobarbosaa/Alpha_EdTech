document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('numero');
    const buttonElement = document.getElementById('verificar');

    buttonElement.addEventListener('click', function() {
        const inputValue = inputElement.value;

        const telefoneRegex = /^(\(\d{2}\)\s\d{4,5}-\d{4})$/;

        if (telefoneRegex.test(inputValue)) {
            alert('Telefone aceito');
        } else {
            alert('Não é um telefone válido');
        }
    });
});