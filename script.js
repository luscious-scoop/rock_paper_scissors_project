let humanScore = 0;
let computerScore = 0;
let result = "";
let playerChoice = getHumanChoice();
let computerChoice = getComputerChoice();

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
    console.log(
      `You picked ${humanChoice}. Computer picked ${computerChoice}. It's a Tie!`,
    );
    showScore();
  } else if (humanChoice === "rock") {
    if (computerChoice === "Paper") {
      result = "Lose";
      computerScore++;
      console.log(
        `You picked ${humanChoice}. Computer picked ${computerChoice}. It's a Lose!`,
      );
      showScore();
    } else if (computerChoice === "Scissors") {
      result = "Win";
      humanScore++;
      console.log(
        `You picked ${humanChoice}. Computer picked ${computerChoice}. It's a Win!`,
      );
      showScore();
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "Scissors") {
      result = "Lose";
      computerScore++;
      console.log(
        `You picked ${humanChoice}. Computer picked ${computerChoice}. It's a Lose!`,
      );
      showScore();
    } else if (computerChoice === "Rock") {
      result = "Win";
      humanScore++;
      console.log(
        `You picked ${humanChoice}. Computer picked ${computerChoice}. It's a Win!`,
      );
      showScore();
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "Paper") {
      result = "Win";
      humanScore++;
      console.log(
        `You picked ${humanChoice}. Computer picked ${computerChoice}. It's a Win!`,
      );
      showScore();
    } else if (computerChoice === "Rock") {
      result = "Lose";
      computerScore++;
      console.log(
        `You picked ${humanChoice}. Computer picked ${computerChoice}. It's a Lose!`,
      );
      showScore();
    }
  }
}
