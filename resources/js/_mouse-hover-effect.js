export default function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.opacity = 1;

            cards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.style.opacity = 0.5;
                }
            });
        });

        card.addEventListener('mouseleave', function () {
            cards.forEach(box => {
                box.style.opacity = 1;
            });
        });
    });
}