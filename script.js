let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', playerPlay)
})