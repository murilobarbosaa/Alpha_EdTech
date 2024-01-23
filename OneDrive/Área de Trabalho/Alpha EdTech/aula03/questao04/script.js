document.addEventListener('DOMContentLoaded', () => {
    function calcularIMC() {
        let peso = Number(document.getElementById('peso').value);
        let altura = Number(document.getElementById('altura').value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        let imc = peso / ((altura / 100) * (altura / 100));

        document.getElementById('resultadoIMC').textContent = 'IMC: ' + imc.toFixed(2);

        let classificacao = '';
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'Sobrepeso (acima do peso desejado)';
        } else {
            classificacao = 'Obesidade';
        }

        document.getElementById('estado').textContent = 'Estado: ' + classificacao;
    }

    document.getElementById('calcular').addEventListener('click', calcularIMC);
});
