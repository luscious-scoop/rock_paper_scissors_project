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
function ShowMoves(playerMove, botMove) {
  let movesContainer = document.querySelector(".moves");
  let UserMoveImg = document.querySelector(".user-img");
  let computerMoveImg = document.querySelector(".computer-img");

  UserMoveImg.src = `images/${playerMove}-emoji.png`;
  computerMoveImg.src = `images/${botMove.toLowerCase()}-emoji.png`;
  movesContainer.style.display = "block";
}

function showMessage() {
  let resultDisplay = document.querySelector(".result-display");
  let finalResult = document.querySelector(".final-result");
  if (humanScore === 5) {
    finalResult.textContent = "You Won Against the Computer!";
    resultDisplay.textContent = "";
  } else if (computerScore === 5) {
    finalResult.textContent = `You Lost Against the Computer!`;
    resultDisplay.textContent = "";
  } else if (draws === 5) {
    finalResult.textContent = "It's a Draw against Computer";
    resultDisplay.textContent = "";
  } else {
    resultDisplay.textContent = `${result.toUpperCase()}!`;
  }

  ShowMoves(playerChoice, computerChoice);
}
/* function getHumanChoice(choice) {
  return choice;
} */

function showScore() {
  let scoreContainer = document.querySelector(".result-container");
  scoreContainer.style.display = "flex";
  console.log(`Player score: ${humanScore}. Computer Score: ${computerScore}`);
  let userScore = document.querySelector("#user-score");
  let computerCount = document.querySelector("#computer-score");
  userScore.textContent = `User : ${humanScore}`;
  computerCount.textContent = `Computer : ${computerScore}`;
  let drawCount = document.querySelector("#draws");
  drawCount.textContent = `Draws : ${draws}`;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice.toLowerCase()) {
    result = "Tie";
    draws++;
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
