const mainCard = document.querySelector('.main-card');
const secondCard = document.querySelector('.second-card');

const numbers = document.querySelectorAll('.card__numbers .card__number');
const submit = document.querySelector('input.btn--submit');
const numberSelected = document.querySelector('#number-selected')

numbers.forEach(number=>{
    number.addEventListener('click', event=>{
        document.querySelector('.card__numbers .card__number.active')?.classList.remove('active')

        event.currentTarget.classList.add('active');
    })
})

submit.addEventListener('click', event => {
    event.preventDefault();
    numberSelected.textContent = document.querySelector('.card__number.active').dataset.number;

    // secondCard.style.display = 'block'
    mainCard.style.display = 'none';
    document.querySelector('#second-card').style.display = 'block'
    
})

