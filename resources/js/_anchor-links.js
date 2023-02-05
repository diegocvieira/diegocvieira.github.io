export default function () {
    const anchorLinks = document.querySelectorAll('.anchor-link');

    anchorLinks.forEach(el => el.addEventListener('click', event => {
        event.preventDefault();

        const hash = event.currentTarget.hash;
        const targetId = hash.replace('#', '');
        const target = document.getElementById(targetId);
        const targetPosition = target.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        history.pushState(null, null, hash);
    }));
}