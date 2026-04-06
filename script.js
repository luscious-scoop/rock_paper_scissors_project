let humanScore = 0;
let computerScore = 0;
let result = "";
let playerChoice = null;
let computerChoice = null;

function getComputerChoice() {
  let randomNumber = Math.random();

  let computerChoice = "";
  if (randomNumber >= 0 && randomNumber < 1 / 4) {
    computerChoice = "Rock";
  } else if (randomNumber >= 1 / 4 && randomNumber < 3 / 4) {
    computerChoice = "Paper";
  } else if (randomNumber >= 3 / 4 && randomNumber < 1) {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function showMessage() {
  if (result === "Tie") {
    console.log(
      `You picked ${playerChoice}. Computer picked ${computerChoice}. It's a Tie!`,
    );
  } else if (result === "Win") {
    console.log(
      `You picked ${playerChoice}. Computer picked ${computerChoice}. It's a Win!`,
    );
  } else if (result === "Lose") {
    console.log(
      `You picked ${playerChoice}. Computer picked ${computerChoice}. It's a Lose!`,
    );
  }
}
function getHumanChoice() {
  let humanChoice = prompt("Chose  Rock , Paper or Scissors ").toLowerCase();
  return humanChoice;
}

function showScore() {
  console.log(`Player score: ${humanScore}. Computer Score: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice.toLowerCase()) {
    result = "Tie";
  } else if (humanChoice === "rock") {
    if (computerChoice === "Paper") {
      result = "Lose";
      computerScore++;
    } else if (computerChoice === "Scissors") {
      result = "Win";
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "Scissors") {
      result = "Lose";
      computerScore++;
    } else if (computerChoice === "Rock") {
      result = "Win";
      humanScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "Paper") {
      result = "Win";
      humanScore++;
    } else if (computerChoice === "Rock") {
      result = "Lose";
      computerScore++;
    }
  }
  showMessage();
  showScore();
}
function playGame() {
  playerChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playerChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  playRound(playerChoice, computerChoice);
  playerChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playerChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playerChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);

  if (humanScore > computerScore) {
    alert("It's a victory for the humans ");
  } else if (computerScore > humanScore) {
    alert("It's a victory for the Machines.");
  } else if (humanScore === computerScore) {
    alert("It's a Tie.");
  }
}

playGame();
