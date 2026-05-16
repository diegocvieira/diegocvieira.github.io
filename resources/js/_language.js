import translations from '../files/languages.json';

export default function () {

    initializeLanguage();

    document.querySelector('.languages-button')?.addEventListener('click', event => {
        event.preventDefault();
        openOrCloseDropdown();
    });

    document.querySelectorAll('.language-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const selectedLanguage = event.target.dataset.lang;

            setLanguage(selectedLanguage);
            applyTranslations(selectedLanguage);
            openOrCloseDropdown();
        });
    });

    function initializeLanguage() {
        const storedLanguage = localStorage.getItem('language') || getBrowserLanguage();
        applyTranslations(storedLanguage);
    }

    function applyTranslations(lang) {
        if (!translations[lang]) {
            lang = 'en';
        }

        document.documentElement.lang = lang;

        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.dataset.i18n;
            const value = translations[lang][key];

            if (!value) return;

            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        });
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    function getBrowserLanguage() {
        const browserLang = navigator.language.slice(0, 2);

        return translations[browserLang] ? browserLang : 'en';
    }

    function openOrCloseDropdown() {
        const languagesDropdown = document.querySelector('.languages-dropdown');
        if (!languagesDropdown) return;

        languagesDropdown.style.display =
            languagesDropdown.style.display !== 'block' ? 'block' : 'none';
    }
}
