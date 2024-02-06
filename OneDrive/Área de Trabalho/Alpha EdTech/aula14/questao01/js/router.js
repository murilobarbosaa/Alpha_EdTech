import principal from './principal.js';
import brigadeiros from './brigadeiros.js';
import cupcakes from './cupcakes.js';
import doces from './doces.js';

const routes = {
    '/': principal,
    '/brigadeiros': brigadeiros,
    '/cupcakes': cupcakes,
    '/doces': doces,
};

export default function getPage(path) {
    return routes[path] ? routes[path]() : principal();
}
