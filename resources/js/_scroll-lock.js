export default function () {
    document.querySelector('.scroll-lock').addEventListener('wheel', function (event) {
        event.preventDefault();
    });
}