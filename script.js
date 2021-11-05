function rockPaperSic() {
  let playerScore = 0;
  let compScore = 0;
  let gameCount = 0;

  while (gameCount < 6) {
    const arr = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    const compIn = arr[randNum];
    const playerIn = prompt("Rock, Paper Or Scissors?").toLowerCase();
    if (playerIn === compIn) {
      console.log(
        `Draw. Scores: Player: ${playerScore} & Computer: ${compScore}`
      );
    } else if (playerIn === "rock" && compIn === "scissors") {
      playerScore++;
      console.log(
        `Player Wins ${playerIn} beats ${compIn}. Scores: Player: ${playerScore} & Computer: ${compScore}`
      );
    } else if (playerIn === "paper" && compIn === "rock") {
      playerScore++;
      console.log(
        `Player Wins ${playerIn} beats ${compIn}. Scores: Player: ${playerScore} & Computer: ${compScore}`
      );
    } else if (playerIn === "scissors" && compIn === "paper") {
      playerScore++;
      console.log(
        `Player Wins ${playerIn} beats ${compIn}. Scores: Player: ${playerScore} & Computer: ${compScore}`
      );
    } else {
      compScore++;
      console.log(
        `You Lose ${compIn} beats ${playerIn}. Scores: Player: ${playerScore} & Computer: ${compScore}`
      );
    }
    gameCount++;
  }

  return `finalScore is: ${playerScore} & ${compScore}`;
}

console.log(rockPaperSic());
