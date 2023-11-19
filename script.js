// Begin with function called getComputerChoice
// Function will randomly return either 'Rock', 'Paper', or 'Scissors'.

// function getComputerChoice(min, max) {
//   let result = Math.floor(Math.random() * (max - min) + min);
//
//   if (result === 1) {
//       return 'rock';
//   } else if (result === 2) {
//       return 'paper';
//   } else {
//       return 'scissors';
//   }
// }
//
// const computerSelection =getComputerChoice(1,4)
// console.log(computerSelection);


// Use prompt() to get input from user

//  function getPlayerChoice() {
//      let playerPromptSelection = prompt('Play the game');
//     if (playerPromptSelection.toLowerCase() === 'rock') {
//         return 'rock';
//     } else if (playerPromptSelection.toLowerCase() === 'scissors') {
//         return 'scissors';
//     } else if (playerPromptSelection.toLowerCase() === 'paper') {
//         return 'paper';
//     } else {
//         return 'Please select rock, paper, or scissors';
//     }
// }
// const playerSelection = getPlayerChoice();
// console.log(playerSelection);

// Write a function that plays a single round of "Rock, Paper, Scissors".


// The function should take two parameters, playerSelection and computerSelection
//And then return a string that declares the winner of the round like so: "You Lose! Paper Beats Rock"
// String will probably use template literals

// function playRound(playerSelection, computerSelection) {
//     if(playerSelection === computerSelection) {
//         console.log('Tie! Play again!');
//     } else if (
//         playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
//         console.log(`Computer loses! ${playerSelection} beats ${computerSelection}! Player wins!`);
//     } else if (playerSelection !== 'rock' ||
//         playerSelection !== 'paper' ||
//         playerSelection !== 'scissors') {
//         console.log('This is Rock, Paper, Scissors dumbass!')
//     }
//     else {
//         console.log(`You lose! ${computerSelection} beats ${playerSelection}! Computer wins!`);
//     }
//
// }
// playRound(playerSelection, computerSelection);
// console.log(gameResults);


// Write a new function called game().
//Add the previous code inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

selectRock = document.querySelector('.select_rock');

function game() {

    // Add score count for player win, computer win or tie
    // Record player score
    // Record computer score
    // Max number of rounds is five
    // Declares a winner at the end

    let playerScore = 0;
    let computerScore = 0;
    let rounds = 1;

    // for (let i = 0; i < 5; i++) {


        function getComputerChoice(min, max) {
            let result = Math.floor(Math.random() * (max - min) + min);

            if (result === 1) {
                return 'rock';
            } else if (result === 2) {
                return 'paper';
            } else {
                return 'scissors';
            }
        }

        const computerSelection = getComputerChoice(1, 4)
        console.log("Computer Selection is " + computerSelection);


// document.querySelector("button").addEventListener("click", () => {
//
// });

        function getPlayerChoice() {
            let playerInput = prompt("Play this game");
            console.log(playerInput);
            if (playerInput === 'rock') {
                return 'rock';
            } else if (playerInput === 'scissors') {
                return 'scissors';
            } else if (playerInput === 'paper') {
                return 'paper';
            } else {
                return 'Please select rock, paper, or scissors';
            }
        }

        const playerSelection = getPlayerChoice();
        console.log("Player Selection is " + playerSelection);

        function playRound(playerSelection, computerSelection) {

            if (playerSelection === computerSelection) {
                console.log('Tie! Play again!');
            } else if (
                playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
                console.log(`Computer loses! ${playerSelection} beats ${computerSelection}! Player wins!`);
                return playerScore++;
            } else {
                console.log(`You lose! ${computerSelection} beats ${playerSelection}! Computer wins!`);
                return computerScore++;
            }


        }

        playRound(playerSelection, computerSelection);
        console.log('Computer score = ' + computerScore);
        console.log('Player score = ' + playerScore);
        console.log('Rounds = ' + rounds++);

        // if (rounds > 5) {
        //     if (computerScore > playerScore) {
        //         console.log('Game is over. Computer wins!');
        //     } else if (playerScore > computerScore) {
        //         console.log('Game is over. Player wins!');
        //     } else {
        //         console.log('Game is over. Game is a tie');
        //     }
        // }
    // }

}
game();


