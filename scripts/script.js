function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice", "").toLowerCase();
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    return getHumanChoice();
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return "You win! " + humanChoice + " beats " + computerChoice + "!";
  } else {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice + "!";
  }
}

let roundNumber = 1;

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(
      "Round " + roundNumber + ": " + playRound(humanChoice, computerChoice)
    );
    roundNumber++;
  }
}

playGame();

console.log("Final score: " + humanScore + " - " + computerScore);
