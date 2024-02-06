document.getElementById('consultarBtn').addEventListener('click', function () {
    const cep = document.getElementById('cepInput').value;
    if (cep.match(/^\d{5}-?\d{3}$/)) {
        document.body.style.cursor = 'wait';
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    throw new Error('CEP inválido!');
                } else {
                    document.getElementById('endereco').textContent = data.logradouro;
                    document.getElementById('bairro').textContent = data.bairro;
                    document.getElementById('cidade').textContent = data.localidade;
                    document.getElementById('estado').textContent = data.uf;
                    // Suponha que a API CEP retorne latitude e longitude (na prática, você precisará de uma API que forneça esses dados)
                    document.getElementById('latitude').textContent = 'Exemplo Latitude'; // Substituir pelo valor real
                    document.getElementById('longitude').textContent = 'Exemplo Longitude'; // Substituir pelo valor real
                    document.getElementById('resultado').style.display = 'block';
                    document.getElementById('exibirMapaBtn').classList.remove('oculto');
                }
            })
            .catch(error => {
                document.getElementById('erro').textContent = error.message;
                document.getElementById('erro').style.visibility = 'visible';
                document.getElementById('resultado').style.display = 'none';
                document.getElementById('exibirMapaBtn').classList.add('oculto');
                document.getElementById('mapa').classList.add('oculto');
            })
            .finally(() => {
                document.body.style.cursor = 'default';
            });
    } else {
        document.getElementById('erro').textContent = 'CEP inválido!';
        document.getElementById('erro').style.visibility = 'visible';
    }
});

document.getElementById('exibirMapaBtn').addEventListener('click', function () {
    const latitude = document.getElementById('latitude').textContent;
    const longitude = document.getElementById('longitude').textContent;
    const mapaUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=pt&z=14&output=embed`;
    document.getElementById('mapa').src = mapaUrl;
    document.getElementById('mapa').classList.remove('oculto');
});
