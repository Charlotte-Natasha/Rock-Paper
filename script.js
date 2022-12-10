let computerScore = 0;
let playerScore = 0;



let buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
currentBtn.addEventListener('click', playerPlay)
})

function playerPlay(e){
    let playerChoice = e.target.id;
    console.log(`Player choice is: ${playerChoice}`);    
    if (computerScore < 5 && playerScore < 5){

        result = playRound(playerChoice, computerPlay())
        console.log(result);    
        document.getElementById("current_play").innerHTML = result; 
        document.getElementById("player_score").innerHTML = playerScore; 
        document.getElementById("computer_score").innerHTML = computerScore; 
    }
    else{
        console.log("GAME OVER!!!")
        endGame();
    }
}

const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
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

const endGame = () => {
    document.getElementById("current_play").innerHTML = ""; 

    buttons.forEach(function(currentBtn){
        currentBtn.disabled = true;
    })
    if (playerScore > computerScore ) {
        document.getElementById("still_playing").innerHTML = `Game Over! \nFinal score: <br> Player: ${playerScore} -- Computer: ${computerScore}`
        
    } else if (computerScore > playerScore) {
        document.getElementById("still_playing").innerHTML = `Game Over! \nFinal score: <br> Player: ${playerScore} -- Computer: ${computerScore}`
        
    } else {
        document.getElementById("still_playing").innerHTML =  `Game Over! \nIt's a tie!!🍻 <br> Final score: <br> Player: ${playerScore} -- Computer: ${computerScore}`
        
    }
    
    setTimeout(function(){
        window.location.reload();
    }, 5000);
}

