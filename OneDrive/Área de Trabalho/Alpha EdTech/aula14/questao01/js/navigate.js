export default function navigate(path) {
    const event = new CustomEvent('onstatechange', { detail: { path } });
    document.dispatchEvent(event);
}
