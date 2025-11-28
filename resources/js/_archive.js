export default function () {
    const openModal = document.getElementById('open-archive-modal');
    openModal.addEventListener('click', function (event) {
        event.preventDefault();

        const modal = document.getElementById('archive-modal');
        modal.classList.add('is-active');

        window.location.hash = this.getAttribute('href');
    });

    const closeModal = document.getElementById('close-archive-modal');
    closeModal.addEventListener('click', function (event) {
        event.preventDefault();

        const modal = document.getElementById('archive-modal');
        modal.classList.remove('is-active');

        window.location.hash = '';
    });
}