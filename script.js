// Begin with function called getComputerChoice
// Function will randomly return either 'Rock', 'Paper', or 'Scissors'.

function getComputerChoice(min, max) {
  let result = Math.floor(Math.random() * (max - min) + min);

  if (result === 1) {
      console.log('Rock');
  } else if (result === 2) {
      console.log('Paper');
  } else {
      console.log('Scissors');
  }

    // console.log(result);

}
console.log(getComputerChoice(1,4));

// Use prompt() to get input from user
function getPlayerChoice() {
    let playerSelection = prompt('Play the game');
    return playerSelection;
}

console.log(getPlayerChoice());





// Write a function that plays a single round of "Rock, Paper, Scissors".


// The function should take two parameters, playerSelection and computerSelection
//And then return a string that declares the winner of the round like so: "You Lose! Paper Beats Rock"
// String will probably use template literals

// function playRound(playerSelection, computerSelection) {
//
// }
//
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// Write a new function called game().
//Add the previous code inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.


