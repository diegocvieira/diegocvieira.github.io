export default function () {
    const body = document.querySelector('body');

    body.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY + window.scrollY;
        const bgCover = document.getElementById('bg-cover');

        bgCover.style.background = `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    });
}