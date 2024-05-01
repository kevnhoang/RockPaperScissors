let arr = ["rock", "paper", "scissors"];
let userInput = prompt("Welcome to the Great Battle of Office Supplies! The one between the never ending debate of which is the better choice.             Rock, Paper, or Scissors? Whichever you ask, will be granted. And you will fight to the death to see who reigns victorious.");


function getComputerChoice(rock, paper, scissors) {
    let cpuSelection = arr[(Math.floor(Math.random() * arr.length))];
    return cpuSelection;
}
function playRound(playerSelection, computerSelection) {
    // your code here!

        /*  Scissors loses to rock  */
        if(userInput === "scissors" && computerSelection === "rock") {
            console.log("You lose! You're tried to stab the cpu with scissors, but a rock hit you in the head, sending you to a coma.");
        }
        /*  Scissors beats paper */
        else if (userInput === "scissors" && computerSelection === "paper") {
            console.log("You won! The cpu tried to give you a paper cut, but you shredded it with your cutting skills!");
        }
        /*  Rock loses to paper    */
        else if(userInput === "rock" && computerSelection === "paper") {
            console.log("You lose! You threw the biggest rock you see on the floor, just to have a piece of paper that happens to be floating in the wind, block your rock?! Thats pretty much a loss.");
        }
        /*  Rock beats scissor  */
        else if(userInput === "rock" && computerSelection === "scissor") {
            console.log("You win! You picked up a rock, but then..... out of thin air comes a flying scissor thrown at your head. Thanks to your reflexes, you throw the rock at the scissors for a perfect block.");
        }
        /*  Paper beats rock    */
        else if(userInput === "paper" && computerSelection === "rock") {
            console.log("You won! Your spider senses tingle.... a rock comes flying towards your genitals! You quickly steal a sheet of paper from a 7 year old, and perfectly block the rock.");
        }
        /*  Paper loses to scissors */
        else if(userInput === "paper" && computerSelection === "scissors"){
            console.log("You lost! God gave you a fat wad of cash, acting almost like a shield in your pocket.... out of nowhere a pair of scissors come flying at your nuts, cutting both...your nuts and your money. ");
        }
        /*      Tie             */
        else {
            console.log("Somehow you both asked for the same thing. Then all of a sudden, you both started to admire each other's taste in weapon choice.... yall agree to rerun a round.");
        }
    }
  
  
  const playerSelection = userInput;
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  