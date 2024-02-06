const filiais = [
    {
        cidade: "São Paulo",
        endereco: "Rua das Flores, 123",
        telefone: "11 1234-5678",
        gerente: "Carlos Silva",
    },
    {
        cidade: "Rio de Janeiro",
        endereco: "Av. Atlântica, 456",
        telefone: "21 2345-6789",
        gerente: "Ana Costa",
    },
    {
        cidade: "Belo Horizonte",
        endereco: "Av. Amazonas, 789",
        telefone: "31 3456-7890",
        gerente: "Pedro Santos",
    },
    {
        cidade: "Porto Alegre",
        endereco: "Rua dos Andradas, 1011",
        telefone: "51 4567-8901",
        gerente: "Juliana Rocha",
    },
    {
        cidade: "Curitiba",
        endereco: "Rua XV de Novembro, 1213",
        telefone: "41 5678-9012",
        gerente: "Marcos Pereira",
    },
    {
        cidade: "Salvador",
        endereco: "Av. Sete de Setembro, 1415",
        telefone: "71 6789-0123",
        gerente: "Luisa Oliveira",
    },
    {
        cidade: "Recife",
        endereco: "Rua da Aurora, 1617",
        telefone: "81 7890-1234",
        gerente: "Clara Dias",
    },
    {
        cidade: "Fortaleza",
        endereco: "Av. Beira Mar, 1819",
        telefone: "85 8901-2345",
        gerente: "José Araújo",
    },
    {
        cidade: "Brasília",
        endereco: "SQS 210, Bloco B",
        telefone: "61 9012-3456",
        gerente: "Mariana Gomes",
    },
    {
        cidade: "Manaus",
        endereco: "Av. Eduardo Ribeiro, 2021",
        telefone: "92 0123-4567",
        gerente: "Roberto Castro",
    },
];

document.getElementById('buscarBtn').addEventListener('click', function () {
    const cidadeBuscada = document.getElementById('cidadeInput').value;
    const resultadoDiv = document.getElementById('resultado');
    const filial = filiais.find(filial => filial.cidade.toLowerCase() === cidadeBuscada.toLowerCase());

    if (filial) {
        resultadoDiv.innerHTML = `
        <p>Endereço: ${filial.endereco}</p>
        <p>Telefone: ${filial.telefone}</p>
        <p>Gerente: ${filial.gerente}</p>
      `;
    } else {
        resultadoDiv.textContent = 'Não há lojas na cidade buscada';
    }
});
