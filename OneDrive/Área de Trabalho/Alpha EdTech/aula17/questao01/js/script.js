function criarCartela() {
    const numeros = [];
    while (numeros.length < 10) {
        const num = Math.floor(Math.random() * 75) + 1;
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }

    const marcados = [];

    return {
        listarNumeros: function() { return numeros; },
        marcarNumero: function(num) {
            if (numeros.includes(num) && !marcados.includes(num)) {
                marcados.push(num);
                return true;
            }
            return false;
        },
        verificarCompleta: function() { return marcados.length === numeros.length; }
    };
}

function criarSorteador(min, max) {
    const numerosPossiveis = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    const sorteados = [];

    return {
        sortear: function() {
            if (numerosPossiveis.length > 0) {
                const index = Math.floor(Math.random() * numerosPossiveis.length);
                const numSorteado = numerosPossiveis.splice(index, 1)[0];
                sorteados.push(numSorteado);
                return numSorteado;
            }
            return null;
        },
        verificarSorteado: function(num) { return sorteados.includes(num); }
    };
}

const sorteador = criarSorteador(1, 75);
const cartelas = [criarCartela(), criarCartela(), criarCartela(), criarCartela(), criarCartela()];

function iniciarSorteio() {
    const intervalo = setInterval(() => {
        const numSorteado = sorteador.sortear();
        if (numSorteado === null) {
            clearInterval(intervalo);
            alert("Todos os números foram sorteados.");
            return;
        }
        document.getElementById('numeroSorteado').innerText = `Número Sorteado: ${numSorteado}`;

        cartelas.forEach((cartela, index) => {
            cartela.listarNumeros().forEach((num, i) => {
                if (num === numSorteado) {
                    const el = document.getElementById(`cartela${index}_num${i}`);
                    el.classList.add('sorteado');
                    cartela.marcarNumero(num);
                }
            });

            if (cartela.verificarCompleta()) {
                clearInterval(intervalo);
                alert(`Cartela ${index + 1} ganhou!`);
            }
        });
    }, 5000);
}

document.getElementById('iniciarSorteio').addEventListener('click', iniciarSorteio);

function mostrarCartelas() {
    const container = document.getElementById('cartelasContainer');
    cartelas.forEach((cartela, index) => {
        const cartelaDiv = document.createElement('div');
        cartelaDiv.className = 'cartela';
        cartela.listarNumeros().forEach((num, i) => {
            const numDiv = document.createElement('div');
            numDiv.id = `cartela${index}_num${i}`;
            numDiv.innerText = num;
            numDiv.addEventListener('click', function() {
                if (sorteador.verificarSorteado(num)) {
                    numDiv.classList.add('sorteado');
                    cartela.marcarNumero(num);
                }
            });
            cartelaDiv.appendChild(numDiv);
        });
        container.appendChild(cartelaDiv);
    });
}

mostrarCartelas();
