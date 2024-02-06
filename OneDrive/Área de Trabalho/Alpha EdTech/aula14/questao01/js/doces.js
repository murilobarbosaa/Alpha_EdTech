import navigate from './navigate.js';

export default function doces() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Doces</h1>
        <p>Uma variedade de doces tradicionais e gourmet.</p>
        <button class="button" id="voltar">Voltar</button>
    `;
    div.querySelector('#voltar').addEventListener('click', () => navigate('/'));
    return div;
}
