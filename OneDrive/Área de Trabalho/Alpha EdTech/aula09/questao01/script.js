document.getElementById("listButton").addEventListener("click", () => {
    const startInput = document.getElementById("start").value.trim();
    const endInput = document.getElementById("end").value.trim();

    if (!isInteger(startInput) || !isInteger(endInput)) {
        alert("Por favor, insira números inteiros nos campos Início e Fim.");
        return;
    }

    const start = parseInt(startInput);
    const end = parseInt(endInput);

    if (start >= end) {
        alert("O número 'Início' deve ser menor que o número 'Fim'.");
        return;
    }

    displayNumbers(start, end);
});

const isInteger = (value) => {
    return /^\d+$/.test(value);
};

const displayNumbers = (start, end) => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    const ul = document.createElement("ul");
    for (let i = start; i < end; i++) {
        const li = document.createElement("li");
        li.textContent = i;
        ul.appendChild(li);
    }
    resultDiv.appendChild(ul);
};
