const stateSelect = document.getElementById("state-select");
const citySelect = document.getElementById("city-select");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const tableTitle = document.getElementById("city-table-head");
const body = document.querySelector("body");
const message = document.getElementById("message-content");

async function fetchData(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error("Request Error");
    }
    return response.json();
}

function createElement(tag, properties = {}) {
    const element = document.createElement(tag);
    Object.keys(properties).forEach(prop => element[prop] = properties[prop]);
    return element;
}

function showMessage(status, text) {
    message.textContent = text;
    message.className = `${status} visible`;
    setTimeout(() => message.className = 'hidden', 1000);
}

function createOption(parent, text, value = '') {
    const option = createElement('option', { textContent: text, value: value });
    if (!value) option.disabled = true;
    parent.appendChild(option);
}

async function initializeStateSelect() {
    try {
        const states = await fetchData("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
        createOption(stateSelect, "Selecione um estado");
        states.forEach(state => createOption(stateSelect, state.nome, state.sigla));
    } catch (error) {
        console.error(error);
    }
}

async function updateCitySelect(UF) {
    try {
        citySelect.innerHTML = "";
        const cities = await fetchData(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`);
        createOption(citySelect, "Selecione um município");
        cities.forEach(city => createOption(citySelect, city.nome, city.id));
    } catch (error) {
        console.error(error);
    }
}

function addRow(data, period, date) {
    const tr = createElement('tr');
    const tdDate = createElement('td', { textContent: date });
    tr.appendChild(tdDate);

    const tdPeriod = createElement('td', { textContent: period || '-' });
    tr.appendChild(tdPeriod);

    const tdWeekday = createElement('td', { textContent: data.dia_semana || '-' });
    tr.appendChild(tdWeekday);

    const tdIcon = createElement('td');
    if (data.icone) {
        const imgIcon = createElement('img', { src: data.icone });
        tdIcon.appendChild(imgIcon);
    }
    tr.appendChild(tdIcon);

    const tdSummary = createElement('td', { textContent: data.resumo || '-' });
    tr.appendChild(tdSummary);

    const tdTempMin = createElement('td', { textContent: data.temp_min || '-' });
    tr.appendChild(tdTempMin);

    const tdTempMax = createElement('td', { textContent: data.temp_max || '-' });
    tr.appendChild(tdTempMax);

    tbody.appendChild(tr);
}

async function updateWeatherInfo(idCity) {
    try {
        table.classList.remove("hidden");
        tbody.innerHTML = "";
        body.style.cursor = "wait";

        const weatherData = await fetchData(`https://apiprevmet3.inmet.gov.br/previsao/${idCity}`);
        const cityData = weatherData[idCity];
        tableTitle.textContent = cityData ? Object.keys(cityData)[0] : "Previsão do Tempo";

        for (const date in cityData) {
            const periods = cityData[date];
            for (const periodKey in periods) {
                if (['manha', 'tarde', 'noite'].includes(periodKey)) {
                    addRow(periods[periodKey], periodKey, date);
                }
            }
        }

        showMessage("success", "Requisição realizada com sucesso");
    } catch (error) {
        showMessage("fail", "Falha na requisição");
        console.error(error);
    } finally {
        body.style.cursor = "default";
    }
}

stateSelect.addEventListener("change", () => updateCitySelect(stateSelect.value));
citySelect.addEventListener("change", () => updateWeatherInfo(citySelect.value));
initializeStateSelect();
