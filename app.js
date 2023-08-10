const choices = ["rock", "paper", "scissors"];
const resultEl = document.getElementById("result");
const messageEl = document.getElementById("message");
const newGameEl = document.getElementById("newGame");

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultEl.textContent = "Draw";
        messageEl.textContent = "It's a TIE!";
    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")
     ) {
        resultEl.textContent = "You Win!";
        messageEl.textContent = "Player's " + (playerChoice).toUpperCase() + " beats " + (computerChoice).toUpperCase();
    } 
    else {
        console.log("Player: " + playerChoice);
        console.log("Opponent: " + computerChoice);
        resultEl.textContent = "You Lose!";
        messageEl.textContent = "Computer's " + (computerChoice).toUpperCase() + " beats " + (playerChoice).toUpperCase();
    }
}

function game(playerChoice) {
    const computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
}

const choiceButtons = document.querySelectorAll(".choice");
choiceButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const playerChoice = button.id;
        game(playerChoice);
    });
});

newGameEl.addEventListener("click", function newGame() {
    window.location.reload();
})
