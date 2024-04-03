let arr = ["rock", "paper", "scissors"];

function getComputerChoice(rock, paper, scissors) {
    console.log(arr[(Math.floor(Math.random() * arr.length))]);
}

getComputerChoice();