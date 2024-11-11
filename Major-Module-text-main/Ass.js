const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

rockButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = getResult('Rock', computerChoice);
});

paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = getResult('Paper', computerChoice);
});

scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = getResult('Scissors', computerChoice);
});