const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const secPlayer0 = document.querySelector(".player--0");
const sectPlayer1 = document.querySelector(".player--1");

const scores = [];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", event => {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        secPlayer0.classList.toggle("player--active");
        sectPlayer1.classList.toggle("player--active");
    }
})
