"use strict";
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scis-btn");
const nextGame = document.querySelector(".next-game");
let scores = document.querySelector(".scores");
let finalScore = document.querySelector(".final-scores");

let playerIn;
let playerScore = 0;
let compScore = 0;
let gameCount = 0;
let gameFinished = false;
let roundsDone = false;

function rockPaperSic() {
  if (roundsDone == false && playerScore < 5 && compScore < 5) {
    const arr = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    const compIn = arr[randNum];

    if (playerIn === compIn) {
      scores.textContent = `Draw. No One Scores: Player: ${playerScore} & Computer: ${compScore}`;
    } else if (playerIn === "rock" && compIn === "scissors") {
      playerScore++;
      scores.textContent = `Player Wins ${playerIn} beats ${compIn}. Scores: Player: ${playerScore} & Computer: ${compScore}`;
    } else if (playerIn === "paper" && compIn === "rock") {
      playerScore++;
      scores.textContent = `Player Wins ${playerIn} beats ${compIn}. Scores: Player: ${playerScore} & Computer: ${compScore}`;
    } else if (playerIn === "scissors" && compIn === "paper") {
      playerScore++;
      scores.textContent = `Player Wins ${playerIn} beats ${compIn}. Scores: Player: ${playerScore} & Computer: ${compScore}`;
    } else {
      compScore++;
      scores.textContent = `You Lose ${compIn} beats ${playerIn}. Scores: Player: ${playerScore} & Computer: ${compScore}`;
    }
  }
  nextGame.textContent = "Next Round";
  roundsDone = true;
  if (playerScore === 5) {
    finalScore.textContent = `Final Scores are ${playerScore} and ${compScore} Player Wins!!🎉`;
    nextGame.textContent = "New Game";
    if (compScore === 5) {
      finalScore.textContent = `Final Scores are ${playerScore} and ${compScore} Computer Wins!!🤥`;
      nextGame.textContent = "New Game";
    }
  }
}

nextGame.addEventListener("click", function (e) {
  roundsDone = false;
  if (nextGame.textContent == "New Game") {
    playerScore = 0;
    compScore = 0;
    roundsDone = false;
    finalScore.textContent = "";
    scores.textContent = "";
  }
});

rockBtn.addEventListener("click", function (e) {
  playerIn = e.target.value;
  rockPaperSic();
});

paperBtn.addEventListener("click", function (e) {
  playerIn = e.target.value;
  rockPaperSic();
});

scissorsBtn.addEventListener("click", function (e) {
  playerIn = e.target.value;
  rockPaperSic();
});
