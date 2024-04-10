let arr = ["rock", "paper", "scissors"];

function getComputerChoice(rock, paper, scissors) {
    let cpuSelection = arr[(Math.floor(Math.random() * arr.length))];
    return cpuSelection;
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  