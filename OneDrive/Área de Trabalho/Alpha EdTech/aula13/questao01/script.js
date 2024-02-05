let bombaTimeout;
const tempoExplosao = 10000;

const bomba = document.getElementById('bomba');
const somExplosao = document.getElementById('som-explosao');

bombaTimeout = setTimeout(function () {
    bomba.src = 'assets/explosao.png';
    somExplosao.play();
    bomba.removeEventListener('click', desarmarBomba);
}, tempoExplosao);

function desarmarBomba() {
    clearTimeout(bombaTimeout);
    bomba.src = 'assets/bomba.png';
}

bomba.addEventListener('click', desarmarBomba);
