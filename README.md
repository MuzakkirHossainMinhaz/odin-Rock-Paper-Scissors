# odin-Rock-Paper-Scissors

This project is part of **The Odin Project's** _Foundations_ course. The goal was to apply the knowledge gained from the _JavaScript Basics_ chapter by implementing a "Rock Paper Scissors" game.

## Table of Contents

- [General Information](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Steps](#project-steps)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## General Information

The "Odin Rock Paper Scissors" project is a simple console-based game where a player competes against the computer in a classic game of Rock Paper Scissors. This project focuses on applying basic JavaScript concepts such as functions, variables, and user input handling.

## Technologies Used

- HTML5
- JavaScript

## Features

- Console-based gameplay
- Random computer choices
- Human player input
- Score tracking
- Best of 5 rounds gameplay

## Project Steps

### Step 1: Setup the project structure

1. Create a new Git repository for your project.
2. Create a blank HTML document with a script tag.
3. Check if JavaScript is linked correctly:
   - Write `console.log("Hello World")` in JavaScript.
   - Check if “Hello World” is logged in the browser console once you open your webpage.
4. Link to an external JavaScript file inside the script tag. Using an external JavaScript file keeps your HTML file clean and organized.
5. Note: You don’t have to write additional code in the HTML file. This game is played entirely via the console.

### Step 2: Write the logic to get the computer choice

1. Create a new function named `getComputerChoice`.
2. Write the code so that `getComputerChoice` will randomly return one of the following string values: “rock”, “paper” or “scissors”.
3. Hint: The `Math.random` method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
4. Test that your function returns what you expect using `console.log` or the browser developer tools before advancing to the next step.

### Step 3: Write the logic to get the human choice

1. Create a new function named `getHumanChoice`.
2. Write the code so that `getHumanChoice` will return one of the valid choices depending on what the user inputs.
3. Hint: Use the `prompt` method to get the user’s input.
4. Test what your function returns by using `console.log`.

### Step 4: Declare the players score variables

1. Create two new variables named `humanScore` and `computerScore` in the global scope.
2. Initialize those variables with the value of 0.

### Step 5: Write the logic to play a single round

1. Create a new function named `playRound`.
2. Define two parameters for `playRound`: `humanChoice` and `computerChoice`. Use these two parameters to take the human and computer choices as arguments.
3. Make your function’s `humanChoice` parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
4. Write the code for your `playRound` function to `console.log` a string value representing the round winner, such as: “You lose! Paper beats Rock”.
5. Increment the `humanScore` or `computerScore` variable based on the round winner.

```javascript
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
```

### Step 6: Write the logic to play the entire game

1. Create a new function named `playGame`.
2. Move your `playRound` function and score variables so that they’re declared inside of the new `playGame` function.
3. Play 5 rounds by calling `playRound` 5 times.
4. Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
5. Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
6. If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

## Setup

To set up this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/MuzakkirHossainMinhaz/odin-Rock-Paper-Scissors.git
   ```
2. Navigate to the project directory:
   ```sh
   cd odin-Rock-Paper-Scissors
   ```

## Usage

Open the `index.html` file in your preferred web browser to play the game via the console.

## Acknowledgements

This project was created as part of **The Odin Project's** _Foundations_ course. Special thanks to the community and the maintainers of The Odin Project for providing such a comprehensive and free curriculum.
