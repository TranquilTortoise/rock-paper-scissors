let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock"; }

    if (computerChoice === 1) {
        return "paper"; }

    if (computerChoice === 2) {
        return "scissors"; }
}

function getHumanChoice() {
    let humanChoice = prompt("Do you choose rock, paper, or scissors?")

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
}

console.log(getComputerChoice());
console.log(getHumanChoice());