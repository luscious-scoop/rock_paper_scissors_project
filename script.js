function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice = "";
  if (randomNumber >= 0 && randomNumber < 1 / 4) {
    computerChoice = "Rock";
  } else if (randomNumber >= 1 / 4 && randomNumber < 1 / 8) {
    computerChoice = "Paper";
  } else if (randomNumber >= 1 / 8 && randomNumber < 1) {
    computerChoice = "Scissors";
  }
}
