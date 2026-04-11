let humanScore = 0;
let computerScore = 0;
let result = "";
let playerChoice = null;
let computerChoice = null;
let draws = 0;

/* const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn"); */
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.dataset.name;
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
});
//don't need to change this
function getComputerChoice() {
  let randomNumber = Math.random();

  let computerChoice = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
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
function getHumanChoice(choice) {
  return choice;
}

function showScore() {
  console.log(`Player score: ${humanScore}. Computer Score: ${computerScore}`);
  let userScore = document.querySelector("#user-score");
  let computerCount = document.querySelector("#computer-score");
  userScore.textContent = `User : ${humanScore}`;
  computerCount.textContent = `Computer ${computerScore}`;
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
