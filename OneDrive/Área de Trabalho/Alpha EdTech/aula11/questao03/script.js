document.getElementById("registerButton").addEventListener("click", function () {
    const name = document.getElementById("name-input").value.trim();
    const phone = document.getElementById("telephone-input").value.trim();

    if (!nameIsValid(name) || !phoneIsValid(phone)) {
        showError();
    } else {
        showSuccess();
    }
});

function nameIsValid(name) {
    return name.length >= 3;
}

function phoneIsValid(phone) {
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
}

function showError() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Dados inválidos";
    messageDiv.className = "error";
}

function showSuccess() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Cadastro bem sucedido";
    messageDiv.className = "success";
}
