import $ from 'jquery';
import swal from 'sweetalert2';

$(document).ready(function(){
  $('button').on('click', function(){
    game();
  });
});

function playRound(playerSelection, computerSelection) {

  if(playerSelection === computerSelection) {
    console.log('The result is a tie!');
  }
  if(playerSelection === 'rock') {
    if(computerSelection === 'paper') {
      console.log('Computer wins! Paper beats rock.');
    } else {
        if(computerSelection === 'scissors') {
          console.log('Player wins! Rock beats scissors.');
      }
    }
  }
  if(playerSelection === 'paper') {
    if(computerSelection === 'rock') {
      console.log('You win! Paper beats rock.');
    } else {
        if(computerSelection === 'scissors') {
          console.log('Computer wins! Scissors beats paper.'); 
      }
    }
  }
  if(playerSelection === 'scissors') {
    if(computerSelection === 'paper') {
      console.log('You win! Scissors beats paper.');
    } else { 
        if(computerSelection === 'rock') {
          console.log('Computer wins! Rock beats scissors.');
      }
    }
  }
}

function game() {
  for(let i = 0; i < 5; i ++) {

    let playerChoice = prompt('What is your choice: rock, paper or scissors?');
    let computerChoice = Math.random();

    if(playerChoice === null) {
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
  }
}