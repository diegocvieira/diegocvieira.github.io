export default function() {
    initializeLanguage();

    document.querySelector('.languages-button').addEventListener('click', function (event) {
        event.preventDefault();

        openOrCloseDropdown();
    });

    document.querySelectorAll('.language-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const selectedLanguage = event.target.dataset.lang;

            setLanguage(selectedLanguage);
            initializeLanguage();
            openOrCloseDropdown();
        });
    });

    function initializeLanguage() {
        const storedLanguage = localStorage.getItem('language') || 'en';
        const elements = document.querySelectorAll(`[data-lang_${storedLanguage}]`);

        elements.forEach(element => {
            element.innerHTML = storedLanguage === 'en' ? element.dataset.lang_en : element.dataset.lang_pt;
        });
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    function openOrCloseDropdown() {
        const languagesDropdown = document.querySelector('.languages-dropdown');

        languagesDropdown.style.display = languagesDropdown.style.display !== 'block' ? 'block' : 'none';
    }
}
