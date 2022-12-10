let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', playerPlay)
})

function playerPlay(e){
    let playerChoice = e.target.id;
    console.log(`Player choice is : ${playerChoice}`);

    result = playRound(playerChoice, computerPlay())
    console.log(result);

    document.getElementById("current_play").innerHTML = result;
    document.getElementById("player_score").innerHTML = playerScore;
    document.getElementById("computer_score").innerHTML = computerScore;
}

const computerPlay = () => {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 0:
            return "rock";
        case 0:
            return "rock";        
    }
};

const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === computerSelection) {
        return `It's a tie! <br> You played: ${playerSelection.toUpperCase()}. Computer played: ${computerSelection.toUpperCase()}`;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            return `Sorry player, Computer won! <br> You played: ${playerSelection.toUpperCase()}. Computer played: ${computerSelection.toUpperCase()} `;
        } else {
            playerScore += 1;
            return `Congratulations, you won! <br> You played: ${playerSelection.toUpperCase()}. Computer played: ${computerSelection.toUpperCase()}`;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            return `Sorry player, Computer won! <br> You played: ${playerSelection.toUpperCase()}. Computer played: ${computerSelection.toUpperCase()}`;
        } else {
            playerScore +=1
            return `Congratulations, you won! <br> You played: ${playerSelection.toUpperCase()}. Computer played: ${computerSelection.toUpperCase()}`;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            return `Sorry player, Computer won! <br> You played: ${playerSelection.toUpperCase()}. Computer played: ${computerSelection.toUpperCase()}`;
        } else {
            playerScore += 1;
            return `Congratulations, you won! <br> You played: ${playerSelection.toUpperCase()}. Computer played: ${computerSelection.toUpperCase()}`;
        }
    }
};