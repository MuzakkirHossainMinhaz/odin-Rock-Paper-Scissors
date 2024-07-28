let humanScore = 0;
let computerScore = 0;

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

function updateResults(roundResult) {
  document.getElementById("roundResult").textContent = roundResult;
  document.getElementById("score").textContent =
    "Score: Human " + humanScore + " - " + computerScore + " Computer";
  if (humanScore === 5 || computerScore === 5) {
    document.getElementById("winner").textContent =
      humanScore === 5
        ? "Congratulations! You won the game!"
        : "Sorry, you lost the game!";
    document
      .querySelectorAll("#buttons button")
      .forEach((button) => (button.disabled = true));
  }
}

document.getElementById("rock").addEventListener("click", () => {
  const humanChoice = "rock";
  const computerChoice = getComputerChoice();
  const roundResult = playRound(humanChoice, computerChoice);
  updateResults(roundResult);
});

document.getElementById("paper").addEventListener("click", () => {
  const humanChoice = "paper";
  const computerChoice = getComputerChoice();
  const roundResult = playRound(humanChoice, computerChoice);
  updateResults(roundResult);
});

document.getElementById("scissors").addEventListener("click", () => {
  const humanChoice = "scissors";
  const computerChoice = getComputerChoice();
  const roundResult = playRound(humanChoice, computerChoice);
  updateResults(roundResult);
});
