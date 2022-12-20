const card = document.querySelector('.card-inner');
const toggleButton = document.querySelector('.toggle-button-front');
const toggleButtonBack = document.querySelector('.toggle-button-back');
const arrowBack = document.querySelector('.arrow-back');

toggleButton.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
});

toggleButtonBack.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
});