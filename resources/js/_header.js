export default function () {
    const headerLinks = document.querySelectorAll('.header-link');
    const sections = document.querySelectorAll('.section');

    headerLinks.forEach(element => element.addEventListener('click', event => {
        event.preventDefault();

        headerLinks.forEach(link => link.classList.remove('is-active'));
        event.target.classList.add('is-active');
    }));

    window.addEventListener('scroll', event => {
        highlightMenu();
    });

    function highlightMenu() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

        headerLinks.forEach(link => link.classList.remove('is-active'));
        headerLinks[index].classList.add('is-active');
    }
}