const diasDaSemana = {
  0: 'Domingo',
  1: 'Segunda-feira',
  2: 'Terça-feira',
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado'
};

const meses = {
  0: 'Janeiro',
  1: 'Fevereiro',
  2: 'Março',
  3: 'Abril',
  4: 'Maio',
  5: 'Junho',
  6: 'Julho',
  7: 'Agosto',
  8: 'Setembro',
  9: 'Outubro',
  10: 'Novembro',
  11: 'Dezembro'
};

function exibirInformacoes() {
  const selectedDate = new Date(document.getElementById('selectedDate').value);
  const resultDiv = document.getElementById('result');

  const diaDoMes = selectedDate.getUTCDate();
  const diaDaSemana = diasDaSemana[selectedDate.getUTCDay()];
  const mesNumerico = selectedDate.getUTCMonth() + 1;
  const mesTexto = meses[selectedDate.getUTCMonth()];
  const ano = selectedDate.getUTCFullYear();

  resultDiv.innerHTML = `
      <p>Dia do mês: ${diaDoMes}</p>
      <p>Dia da semana: ${diaDaSemana}</p>
      <p>Mês (numérico): ${mesNumerico}</p>
      <p>Mês: ${mesTexto}</p>
      <p>Ano: ${ano}</p>
  `;
}
