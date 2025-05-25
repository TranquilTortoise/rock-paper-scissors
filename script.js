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
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a Tie!");
            return;
        }
        if (computerChoice === "paper") {
            console.log("You lose! Paper covers Rock!");
            computerScore++;
            return;
        }
        if (computerChoice === "scissors") {
            console.log("You win! Rock breaks Scissors!");
            humanScore++;
            return;
        }
        console.log("Error");
        return;
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper covers Rock!");
            humanScore++;
            return;
        }
        if (computerChoice === "paper") {
            console.log("It's a Tie!");
            return;
        }
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors cut Paper!");
            computerScore++;
            return;
        }
        console.log("Error");
        return;
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock breaks Scissors!");
            computerScore++;
            return;
        }
        if (computerChoice === "paper") {
            console.log("You win! Scissors cut Paper!");
            humanScore++;
            return;
        }
        if (computerChoice === "scissors") {
            console.log("It's a Tie!");
            return;
        }
        console.log("Error");
        return;
    }
}

playRound(getHumanChoice(), getComputerChoice());