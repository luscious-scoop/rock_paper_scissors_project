let humanScore = 0;
let computerScore = 0;
let result = "";

let playerChoice = "";
let draws = 0;

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.dataset.name);
  });
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  let computerChoice = "";
  if (randomNumber === 0) {
    computerChoice = "Rock";
  } else if (randomNumber === 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}
function ShowMoves(playerMove, botMove) {
  let UserMoveImg = document.querySelector(".user-img");
  let computerMoveImg = document.querySelector(".computer-img");

  UserMoveImg.src = `images/${playerMove}-emoji.png`;

  computerMoveImg.src = `images/${botMove.toLowerCase()}-emoji.png`;
  let movesContainer = document.querySelector(".moves");
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
  } else {
    resultDisplay.textContent = `${result.toUpperCase()}!`;
  }

  ShowMoves(playerChoice, computerChoice);
}

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
function playGame(playerMove) {
  playerChoice = playerMove;
  computerChoice = getComputerChoice();
  playRound(playerMove, computerChoice);

  if (humanScore === 5 || computerScore === 5) {
    resetGame();
  }
}

function resetGame() {
  buttons.forEach((button) => {
    button.disabled = "true";
  });
  let resetButton = document.querySelector(".reset-btn");
  resetButton.style.display = "block";
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
}
