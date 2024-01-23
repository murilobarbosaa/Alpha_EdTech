function validarNome(event) {
    const inputElement = event.target;
    const inputValue = inputElement.value;

    const nomeValido = inputValue.replace(/[^a-zA-Z\s]/g, '');

    if (nomeValido !== inputValue) {
        inputElement.value = nomeValido;
    }
}
