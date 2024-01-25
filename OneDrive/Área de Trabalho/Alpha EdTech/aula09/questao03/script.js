console.log("DOM carregado. Script em execução...");

let sorteioArray = [];

document.getElementById("sortearButton").addEventListener("click", function () {
    sorteioArray = sortearNumeros();
    console.log("Números sorteados: ", sorteioArray);
});

document.getElementById("chutarButton").addEventListener("click", function () {
    const chute = parseInt(document.getElementById("chuteInput").value);

    if (sorteioArray.length === 0) {
        alert("Por favor, clique em Sortear primeiro.");
        return;
    }

    if (isNaN(chute)) {
        alert("Por favor, insira um número válido para o chute.");
        return;
    }

    const acertou = sorteioArray.includes(chute);

    if (acertou) {
        document.getElementById("mensagem").textContent = "Parabéns! Você acertou um dos números sorteados.";
    } else {
        document.getElementById("mensagem").textContent = "Você errou. Tente novamente!";
    }
});

function sortearNumeros() {
    const numerosSorteados = new Set();

    while (numerosSorteados.size < 6) {
        const numero = Math.floor(Math.random() * 30) + 1;
        numerosSorteados.add(numero);
    }

    return Array.from(numerosSorteados);
}
