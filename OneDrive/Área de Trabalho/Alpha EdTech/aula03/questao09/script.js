document.addEventListener("DOMContentLoaded", function() {
    function isInteger(value) {
        return /^\d+$/.test(value) && Number(value) >= 0;
    }

    function showError(message) {
        document.getElementById("estado").textContent = "Erro: " + message;
    }

    function sortearNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById("sortear").addEventListener("click", function() {
        let minimoInput = document.getElementById("minimo").value;
        let maximoInput = document.getElementById("maximo").value;

        if (!isInteger(minimoInput) || !isInteger(maximoInput)) {
            showError("Os valores inseridos não são numéricos.");
            return;
        }

        let minimo = Number(minimoInput);
        let maximo = Number(maximoInput);

        if (!isInteger(minimo) || !isInteger(maximo)) {
            showError("Os valores devem ser inteiros maiores ou iguais a zero.");
            return;
        }

        if (minimo >= maximo) {
            showError("O valor mínimo deve ser menor que o valor máximo.");
            return;
        }

        let numeroSorteado = sortearNumero(minimo, maximo);
        document.getElementById("estado").textContent = "Número: " + numeroSorteado;
    });
});
