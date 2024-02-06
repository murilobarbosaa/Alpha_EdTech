import getPage from './router.js';

document.addEventListener('onstatechange', (e) => {
    const path = e.detail.path;
    const page = getPage(path);
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(page);
    history.pushState({ path }, '', path);
});

window.onload = () => {
    const root = document.getElementById('root');
    root.appendChild(getPage(window.location.pathname));
};
