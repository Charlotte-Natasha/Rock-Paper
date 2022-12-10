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
}