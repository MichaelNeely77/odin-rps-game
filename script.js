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


const rockBtn = document.querySelector('.select_rock');
const paperBtn = document.querySelector('.select_paper');
const scissorsBtn = document.querySelector('.select_scissors');
let playerScore = 0;
let computerScore = 0;
let rounds = 1;



function game() {

    // Add score count for player win, computer win or tie
    // Record player score
    // Record computer score
    // Max number of rounds is five
    // Declares a winner at the end



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





    rockBtn.addEventListener('click', () => {
        let playerSelection = 'rock';
        let computerSelection = getComputerChoice(1, 4);
        playRound(playerSelection, computerSelection);
    });
    paperBtn.addEventListener('click', () => {
        let playerSelection = 'paper';
        let computerSelection = getComputerChoice(1, 4);
        playRound(playerSelection, computerSelection);
    });
    scissorsBtn.addEventListener('click', () => {
        let playerSelection = 'scissors';
        let computerSelection = getComputerChoice(1, 4);
        playRound(playerSelection, computerSelection);
    });




        function playRound(playerSelection, computerSelection) {

            document.getElementById('round-result').innerHTML ="Computer Selection is " + computerSelection;

            console.log("Computer Selection is " + computerSelection);
            if (playerSelection === computerSelection) {
                document.getElementById('game-result').innerHTML = "Tie! Play again!";
                console.log('Tie! Play again!');
            } else if (
                playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
                document.getElementById('game-result').innerHTML = `Computer loses! ${playerSelection} beats ${computerSelection}! Player wins!`;
                console.log(`Computer loses! ${playerSelection} beats ${computerSelection}! Player wins!`);
                playerScore++;
            } else {
                document.getElementById('game-result').innerHTML = `You lose! ${computerSelection} beats ${playerSelection}! Computer wins!`;
                console.log(`You lose! ${computerSelection} beats ${playerSelection}! Computer wins!`);
                computerScore++;

            }


            document.getElementById('player-score').innerHTML = `${playerScore}`;
            document.getElementById('computer-score').innerHTML = `${computerScore}`;
            document.getElementById('round-display').innerHTML = `${rounds++}`;


            if (rounds == 6) {
                if (playerScore > computerScore) {
                    document.getElementById('winner-result').innerHTML = "Game Over. Player wins!"
                    } else if (computerScore > playerScore) {
                    document.getElementById('winner-result').innerHTML = "Game Over. Computer wins!"
                    } else {
                    document.getElementById('winner-result').innerHTML = "Game over, Tie Game."
                    }
                }
            }



    console.log('Player score = ' + playerScore);



        // if (rounds = 5) {
        //     if (computerScore > playerScore) {
        //         console.log('Game is over. Computer wins!');
        //     } else if (playerScore > computerScore) {
        //         console.log('Game is over. Player wins!');
        //     } else {
        //         console.log('Game is over. Game is a tie');
        //     }
        // }
    }


game();


