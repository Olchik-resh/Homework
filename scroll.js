const headerButtonEl = document.querySelector ('.header__button');
const headerButtonMob = document.querySelector ('.header__button_mob');
const cardGameEl = document.getElementById ("card-game");
const miniGameEl = document.getElementById ("mini-game");


headerButtonEl.addEventListener('click', () => {
    cardGameEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start', duration: 2000
    })
});

headerButtonMob.addEventListener('click', () => {
    miniGameEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start', duration: 2000
    })
});


// const gameCardGuessEl = document.querySelector ('.game__card_guess');
// const guessEl = document.querySelector ('#guess.card');

// gameCardGuessEl.addEventListener('click', () => {
//     guessEl.scrollIntoView({
//         behavior: 'smooth',
//         block:  'end', duration: 2000
//     })
// });

// const gameCardArithmeticEl = document.querySelector ('.game__card_arithmetic');
// const arithmeticEl = document.getElementById ("arithmetic");

// gameCardArithmeticEl.addEventListener('click', () => {
//     arithmeticEl.scrollIntoView({
//         behavior: 'smooth',
//         block:  'end', duration: 2000
//     })
// });