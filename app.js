const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
const message = document.getElementById("message");
const rock = rockEl.value;
const paper = paperEl.value;
const scissors = scissorsEl.value;



const items = [rock, paper, scissors];
const player = items[Math.floor(Math.random() * items.length)];
const playerAi = items[Math.floor(Math.random() * items.length)];

rockEl.addEventListener("click", playGame);
paperEl.addEventListener("click", playGame);
scissorsEl.addEventListener("click", playGame);

function playGame() {
    if(player === playerAi) {
        console.log("Player: " + player);
        console.log("Opponent: "+ playerAi);
        message.textContent = "Draw";
    } 
    else if (
        player === rock && playerAi === scissors || player === paper && playerAi === rock || player === scissors && playerAi === paper) {
        console.log("Player: " + player);
        console.log("Opponent: "+ playerAi);
        message.textContent = "You Win";
    } 
    else {
        console.log("Player: " + player);
        console.log("Opponent: "+ playerAi);
        message.textContent = "You Win";
    }
}