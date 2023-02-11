export default function () {
    const headerLinks = document.querySelectorAll('.header-link');
    const sections = document.querySelectorAll('.section');
    const menuMobile = document.getElementById('menu-mobile');
    const header = document.getElementById('header');
    const pageBody = document.querySelector('body');
    let scrollPosition = 0;

    headerLinks.forEach(element => element.addEventListener('click', event => {
        event.preventDefault();

        headerLinks.forEach(link => link.classList.remove('current'));
        event.target.classList.add('current');

        pageBody.classList.remove('menu-is-open');
    }));

    menuMobile.addEventListener('click', event => {
        event.preventDefault();

        openHideMenu();
    });

    window.addEventListener("scroll", event => {
        showHeaderShadow();
        hideHeader();
        highlightMenu();
    });

    function openHideMenu() {
        if (pageBody.classList.contains('menu-is-open')) {
            pageBody.classList.remove('menu-is-open');
        } else {
            pageBody.classList.add('menu-is-open');
        }
    }

    function showHeaderShadow() {
        if (window.scrollY > 100) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }

    function hideHeader() {
        const clientRectTop = (document.body.getBoundingClientRect()).top;

        if (clientRectTop > scrollPosition) {
            header.classList.remove('is-scrolled-down');
        } else {
            header.classList.add('is-scrolled-down');
        }

        scrollPosition = clientRectTop;
    }

    function highlightMenu() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

        headerLinks.forEach(link => link.classList.remove('current'));
        headerLinks[index].classList.add('current');
    }
}