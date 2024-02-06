// script.js
let filmes = []; // Armazenará a lista filtrada de filmes

function carregarDadosFilmes() {
    fetch('movie_metadata.json')
        .then(resposta => resposta.json())
        .then(dados => {
            filmes = dados.filter(filme => filme.budget && filme.budget.trim() !== '');
            exibirFilmes();
        })
        .catch(erro => console.error('Erro ao carregar dados dos filmes:', erro));
}

function exibirFilmes() {
    const corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = '';
    filmes.forEach(filme => {
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${filme.movie_title.trim()}</td><td>$${Number(filme.budget).toLocaleString()}</td>`;
        corpoTabela.appendChild(linha);
    });
}

function filtrarFilmes() {
    const orcamentoMinimo = document.getElementById('orcamentoMinimo').value;
    const orcamentoMaximo = document.getElementById('orcamentoMaximo').value;
    filmes = filmes.filter(filme => {
        const orcamento = parseInt(filme.budget, 10);
        return (!orcamentoMinimo || orcamento >= orcamentoMinimo) && (!orcamentoMaximo || orcamento <= orcamentoMaximo);
    });
    exibirFilmes();
}

function ordenarPorOrcamento(crescente) {
    filmes.sort((a, b) => {
        return crescente ? a.budget - b.budget : b.budget - a.budget;
    });
    exibirFilmes();
}

document.addEventListener('DOMContentLoaded', carregarDadosFilmes);
