export default function() {
    initializeLanguage();

    window.addEventListener('click', function (event) {
        const languagesDropdown = document.querySelector('.languages-dropdown');
        const languagesButton = document.querySelector('.languages-button');

        if (languagesDropdown && languagesButton && !languagesDropdown.contains(event.target)) {
            event.preventDefault();

            openOrCloseDropdown(event.target);
        }
    });

    const languagesLinks = document.querySelectorAll('.language-link');
    languagesLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const selectedLanguage = event.target.dataset.lang;

            setLanguage(selectedLanguage);
            initializeLanguage();
            openOrCloseDropdown();
        });
    });

    function initializeLanguage() {
        const storedLanguage = localStorage.getItem('language') || 'pt';
        const elements = document.querySelectorAll(`[data-lang_${storedLanguage}]`);

        elements.forEach(element => {
            element.innerHTML = localStorage.getItem('language') === 'en' ? element.dataset.lang_en : element.dataset.lang_pt;
        });
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    function openOrCloseDropdown(target = null) {
        const languagesDropdown = document.querySelector('.languages-dropdown');

        if (languagesDropdown) {
            const languagesButton = document.querySelector('.languages-button');
            const isButtonClicked = languagesButton && languagesButton.contains(target);

            languagesDropdown.style.display = (languagesDropdown.style.display !== 'block' && isButtonClicked) ? 'block' : 'none';
        }
    }
}
