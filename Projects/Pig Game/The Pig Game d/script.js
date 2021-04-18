'use strict';

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');

const diceEL = document.querySelector('.dice')
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const reset = function() {
  
  for(let n = 0; n <= 1;n++) {
    document.querySelector(`.player--${n}`).classList.remove('player--winner');
    document.querySelector(`.player--${n}`).classList.remove('player--active');
    scores[n] = 0;
    document.querySelector(`#score--${n}`).textContent = 0;
  } 
  document.querySelector(`.player--0`).classList.add('player--active');
  diceEL.classList.add('hidden');
  playing = true;
}

reset()


const switchPlayer = function() { 
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
}

btnRoll.addEventListener('click', function() {
 
  if(playing) {
    let dice = Math.trunc(Math.random() * 6) + 1
    
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    } else {
      switchPlayer();
    }
  };
});

btnHold.addEventListener('click', function() {
  
  if(playing) { 
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      
      diceEL.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
    } 
  }
})

btnNew.addEventListener('click', reset);

