let bombaTimeout, tickInterval;
const tempoExplosao = 60000;
let tempoRestante = tempoExplosao / 1000;

const bomba = document.getElementById('bomba');
const somExplosao = document.getElementById('som-explosao');
const somTick = document.getElementById('som-tick');
const contador = document.getElementById('contador');

contador.textContent = `Tempo restante: ${tempoRestante} segundos`;

function atualizarContador() {
    tempoRestante--;
    contador.textContent = `Tempo restante: ${tempoRestante} segundos`;
    
    somTick.pause();
    somTick.currentTime = 0;
    somTick.play();
}

tickInterval = setInterval(atualizarContador, 1000);

bombaTimeout = setTimeout(function () {
    bomba.src = 'assets/explosao.png';
    somExplosao.play();
    clearInterval(tickInterval);
    bomba.removeEventListener('click', desarmarBomba);
}, tempoExplosao);

function desarmarBomba() {
    clearTimeout(bombaTimeout);
    clearInterval(tickInterval);
    bomba.src = 'assets/bomba.png';
}

bomba.addEventListener('click', desarmarBomba);
