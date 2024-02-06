import navigate from './navigate.js';

export default function brigadeiros() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Brigadeiros</h1>
        <p>Deliciosos brigadeiros feitos com chocolate de alta qualidade.</p>
        <button class="button" id="voltar">Voltar</button>
    `;
    div.querySelector('#voltar').addEventListener('click', () => navigate('/'));
    return div;
}
