let contadorInterval;
let tempoTotal;
const minutosSelect = document.getElementById('minutos');
const segundosSelect = document.getElementById('segundos');
const botaoAlarme = document.getElementById('botaoAlarme');
const contadorDisplay = document.getElementById('contador');
const somAlarme = document.getElementById('somAlarme');
const alarmeDiv = document.getElementById('alarme');

function popularSeletores() {
    const minutosSelect = document.getElementById('minutos');
    const segundosSelect = document.getElementById('segundos');

    for (let i = 0; i < 60; i++) {
        minutosSelect.options.add(new Option(i, i));
        segundosSelect.options.add(new Option(i, i));
    }
}

popularSeletores();

function atualizarContador(tempoRestante) {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    contadorDisplay.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function finalizarAlarme() {
    clearInterval(contadorInterval);
    somAlarme.loop = true;
    somAlarme.play();
    botaoAlarme.textContent = 'Desarmar Alarme';
    botaoAlarme.classList.remove('armar');
    botaoAlarme.classList.add('desarmar');
}

function verificarTempoAcabando(tempoRestante) {
    if (tempoRestante / tempoTotal <= 0.05) {
        alarmeDiv.classList.add('tempoAcabando');
    } else {
        alarmeDiv.classList.remove('tempoAcabando');
    }
}

botaoAlarme.addEventListener('click', function () {
    if (this.classList.contains('armar')) {
        const minutos = parseInt(minutosSelect.value);
        const segundos = parseInt(segundosSelect.value);
        tempoTotal = minutos * 60 + segundos;
        let tempoRestante = tempoTotal;

        atualizarContador(tempoRestante);

        contadorInterval = setInterval(function () {
            tempoRestante--;
            atualizarContador(tempoRestante);
            verificarTempoAcabando(tempoRestante);

            if (tempoRestante <= 0) {
                finalizarAlarme();
                clearInterval(contadorInterval);
            }
        }, 1000);

        this.textContent = 'Desarmar Alarme';
        this.classList.remove('armar');
        this.classList.add('desarmar');
    } else {
        clearInterval(contadorInterval);
        somAlarme.pause();
        somAlarme.currentTime = 0;
        somAlarme.loop = false;
        this.textContent = 'Armar Alarme';
        this.classList.remove('desarmar');
        this.classList.add('armar');
        alarmeDiv.classList.remove('tempoAcabando');
    }
});

botaoAlarme.classList.add('armar');
