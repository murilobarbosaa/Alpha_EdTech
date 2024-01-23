document.getElementById('exibir').addEventListener('click', function() {
    const numeroDigitado = Number(document.getElementById('numero').value);
    
    switch(numeroDigitado)  {
        case 0:
            alert("zero");
            break;
        case 1:
            alert("um");
            break;
        case 2:
            alert("dois");
            break;
        case 3:
            alert("três");
            break;
        case 4:
            alert("quatro");
            break;
        case 5:
            alert("cinco");
            break;
        case 6:
            alert("seis");
            break;
        case 7:
            alert("sete");
            break;
        case 8:
            alert("oito");
            break;
        case 9:
            alert("nove");
            break;
        case 10:
            alert("dez");
            break;
        default:
            alert("Insira um número entre 0 e 10");
            break;
    }
});