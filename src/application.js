let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
const choices = document.querySelector('.choices');


function playRound(playerSelection) {

  let computerSelection = Math.random();

  if(computerSelection <= 0.33) {
    computerSelection = 'rock';
  } else if(computerSelection <= 0.67) {
    computerSelection = 'paper';
  } else {
    computerSelection = 'scissors';  
  }

  if(playerSelection === computerSelection) {
    choices.textContent = 'Your choice and computer choice is the same!';
    return;
  }

  if(playerSelection === 'rock') {
    if(computerSelection === 'paper') {
      choices.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}. Paper beats rock.`;
      computerScore += 1;
    } else {
      choices.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}. Rock beats scissors.`;
      playerScore += 1; 
    }
  }

  if(playerSelection === 'paper') {
    if(computerSelection === 'rock') {
      choices.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}. Paper beats rock.`;
      playerScore += 1;
    } else {
      choices.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}. Scissors beats paper.`;
      computerScore += 1;
    }
  }

  if(playerSelection === 'scissors') {
    if(computerSelection === 'paper') {
      choices.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}. Scissors beats paper.`;
      playerScore += 1;
    } else { 
      choices.textContent = `You chose ${playerSelection} and computer chose ${computerSelection}. Rock beats scissors.`;
      computerScore += 1;    
    }
  }

  scores(playerScore, computerScore);
}


function scores(playerScore, computerScore) {
  results.textContent = `You have ${playerScore} and computer has ${computerScore}.`;
  if(playerScore === 5) {
    results.textContent = `Congratulations, you win! You have 5 points. New game will begin in 10 seconds.`;
    timeout(10000);
  } else if(computerScore === 5) {
    results.textContent = `Computer has 5 points, computer wins! Sorry, more luck next time! New game will begin in 10 seconds.`;
    timeout(10000);
  }
} 

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    playRound(e.target.dataset.id);
  });
});

function timeout(miliseconds) {
  setTimeout(location.reload.bind(location), miliseconds);
}