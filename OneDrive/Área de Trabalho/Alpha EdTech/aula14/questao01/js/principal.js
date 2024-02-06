import navigate from './navigate.js';

export default function principal() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Bem-vindo à Doceria</h1>
        <button class="button" id="brigadeiros">Brigadeiros</button>
        <button class="button" id="cupcakes">Cupcakes</button>
        <button class="button" id="doces">Doces</button>
    `;
    div.querySelector('#brigadeiros').addEventListener('click', () => navigate('/brigadeiros'));
    div.querySelector('#cupcakes').addEventListener('click', () => navigate('/cupcakes'));
    div.querySelector('#doces').addEventListener('click', () => navigate('/doces'));
    return div;
}
