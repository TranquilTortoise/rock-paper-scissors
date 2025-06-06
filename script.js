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

function playGame() {
    
    for (i=0; i <= 4; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    declareScore(humanScore, computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
        resetScores();
        return;
    }
    if (humanScore < computerScore) {
        console.log("Sorry! You lost... Try again next time.");
        resetScores();
        return;
    }
    if (humanScore === computerScore) {
        console.log("It's a tie! Perhaps a rematch is in order here.");
        resetScores();
        return;
    }
    console.log("Error");
    return;
}

function declareScore(humanScore, computerScore) {

    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer's Score: ${computerScore}`);
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
}

playGame();