import $ from 'jquery';
import swal from 'sweetalert2';

$(document).ready(function(){
  $('button').on('click', function(){
    game();
  });
});

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

  if(playerSelection.toLowerCase() === computerSelection) {
    console.log('The result is a tie!');
    return;
  }

  if(playerSelection.toLowerCase() === 'rock') {
    if(computerSelection === 'paper') {
      console.log('Computer wins! Paper beats rock.');
      computerScore += 1;
      console.log(computerScore);
    } else {
      console.log('You win! Rock beats scissors.');
      playerScore += 1; 
      console.log(playerScore);
    }
  }

  if(playerSelection.toLowerCase() === 'paper') {
    if(computerSelection === 'rock') {
      console.log('You win! Paper beats rock.');
      playerScore += 1;
      console.log(playerScore);
    } else {
      console.log('Computer wins! Scissors beats paper.');
      computerScore += 1;
      console.log(computerScore);
    }
  }

  if(playerSelection.toLowerCase() === 'scissors') {
    if(computerSelection === 'paper') {
      console.log('You win! Scissors beats paper.');
      playerScore += 1;
      console.log(playerScore);
      
    } else { 
      console.log('Computer wins! Rock beats scissors.');
      computerScore += 1;    
      console.log(computerScore);
    }
  }
}

function game() {
  for(let i = 0; i < 5; i ++) {
    let playerChoice = prompt('What is your choice: rock, paper or scissors?'); 
    let computerChoice = Math.random();

    if(!validInput(playerChoice.toLowerCase())) {
      swal('Enter rock, paper or scissors!');
      return;
    } 

    if(computerChoice <= 0.33) {
      computerChoice = 'rock';
    } else if(computerChoice <= 0.67) {
      computerChoice = 'paper';
    } else {
      computerChoice = 'scissors';  
    }

    console.log(`Player choice is: ${playerChoice}`);
    console.log(`Computer choice is: ${computerChoice}`);
    playRound(playerChoice, computerChoice);
    winner(playerScore, computerScore);
  }
}

function validInput(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  return choices.includes(playerChoice);
}

function winner(playerScore, computerScore) {
  if(playerScore > computerScore) {
    console.log(`You have ${playerScore} and computer has ${computerScore}. Congratulations! You are the winner`)
  } else if(playerScore < computerScore) {
    console.log(`Sorry, you lost. You have ${playerScore} wins and computer has ${computerScore} wins. More luck next time!`);
  } else {
    console.log(`The result is a tie! You have ${playerScore} wins and computer has ${computerScore} wins.`);
  }
}


