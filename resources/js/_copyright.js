export default function() {
    const yearEl = document.querySelector('.copyright-year');

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
