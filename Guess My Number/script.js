'use strict'
let  secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let tip = "";

console.log(`Secret number: ${secrectNumber}`);

const displayMessage = function(message) {
  document.querySelector('check').textContent = message;

}

document.querySelector('.check').addEventListener('click', function() {
  let guess = Number(document.querySelector('.guess').value);

  if(!guess) {
    displayMessage( "❌ No number ");
  
  } else if (guess === secrectNumber) {
    
    displayMessage( '🎉 Correct Answer!');
    document.querySelector('.number').textContent = secrectNumber;

    //Styling
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  
  } else if(guess !== secrectNumber) {
    
    if (score > 1) {  
      document.querySelector('.score').textContent = score--;
      displayMessage(guess > secrectNumber ? '🔺 Too hight'  : '🔻 Too low');

    } else {
      displayMessage( '🛑 You Lost');
      document.querySelector('.score').textContent = 0;

    }
  } 
})


document.querySelector('.again').addEventListener('click', function() {

  document.querySelector('.guess').value = ""
  document.querySelector('.number').textContent = "?";
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'
  secretNumber = Math.trunc(Math.random() * 20) + 1
})