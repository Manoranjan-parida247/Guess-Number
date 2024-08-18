'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //const -> let
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //input no number
    document.querySelector('.message').textContent = '👎 NO NUMBER';
  } else if(guess > 20){
    document.querySelector('.message').textContent = '> 20 🤡';
  }
  else if (secretNumber === guess) {
    //guess correct number
    document.querySelector('.message').textContent = 'correct number🥳';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector(".again").textContent = "PLAY AGAIN";

    if(score > highScore){
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
    }
    
    
  } else {
    if (score > 1) {
      if (secretNumber < guess) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME🫡';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//AFTER WINNING IF PLAYER WANT TO PLAY THE GAME AGAIN

document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".again").textContent = "AGAIN!";
    document.querySelector(".message").textContent = "Start guessing.....";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value= "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})


