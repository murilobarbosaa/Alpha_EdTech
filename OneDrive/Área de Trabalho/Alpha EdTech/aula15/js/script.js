const inputCEP = document.getElementById("inputCEP");
const botaoConsultar = document.getElementById("consultarCEP");
const divResultado = document.getElementById("resultado");
const divMapa = document.getElementById("mapa");
const body = document.querySelector("body");

botaoConsultar.addEventListener("click", function () {
    botaoConsultar.disabled = true;
    botaoConsultar.style.cursor = "wait";
    body.classList.add("carregando");
    divMapa.innerHTML = "";
    divResultado.innerHTML = "";

    if (inputCEP.value.length !== 8 || isNaN(inputCEP.value)) {
        divResultado.innerText = "Insira um CEP válido";
        botaoConsultar.disabled = false;
        botaoConsultar.style.cursor = "pointer";
        body.classList.remove("carregando");
        return;
    }

    fetch(`https://cep.awesomeapi.com.br/json/${inputCEP.value}`)
        .then(response => {
            if (!response.ok) throw new Error('Erro na consulta do CEP');
            return response.json();
        })
        .then(data => {
            body.classList.remove("carregando");

            if (!data.address) {
                throw new Error("CEP não encontrado.");
            }

            divResultado.innerHTML = `
                    <p>Endereço: ${data.address || 'Não disponível'}</p>
                    <p>Bairro: ${data.district || 'Não disponível'}</p>
                    <p>Cidade: ${data.city || 'Não disponível'}</p>
                    <p>Estado: ${data.state || 'Não disponível'}</p>
                    <p>Latitude: ${data.lat || 'Não disponível'}</p>
                    <p>Longitude: ${data.lng || 'Não disponível'}</p>
                `;

            const botaoMapa = document.createElement("button");
            botaoMapa.innerText = "Exibir Mapa";
            botaoMapa.addEventListener("click", function () {
                const url = `https://maps.google.com/maps?q=${data.lat},${data.lng}&hl=pt&z=14&output=embed`;
                divMapa.innerHTML = `<iframe src="${url}"></iframe>`;
                botaoMapa.disabled = true;
                botaoMapa.style.cursor = "not-allowed";
            });

            divResultado.appendChild(botaoMapa);
        })
        .catch(error => {
            divResultado.innerText = error.message;
        })
        .finally(() => {
            botaoConsultar.disabled = false;
            botaoConsultar.style.cursor = "pointer";
            body.classList.remove("carregando");
        });
});