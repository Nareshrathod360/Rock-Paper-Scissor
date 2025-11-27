let userScore =0;
let compScore =0;

const choices =  document.querySelectorAll('.choice1, .choice2, .choice3');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genComputerChoice = () => {
const options = ['rock', 'paper', 'scissors'];
const randIdx = Math.floor(Math.random() * 3); 
return options[randIdx];   
//rock, paper, scissors
};

const drawGame = () => {
    msg.innerHTML = "Game was tie. Play again";
    msg.style.backgroundColor = " #eef530ff";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
      userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="#0edc1cff";
    }
    else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Loss! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="#fd1216ff";
    }
};
const playGame = (userChoice) => {
const compChoice = genComputerChoice();
if(userChoice === compChoice){
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
      // scissors, paper
      userWin = compChoice === "scissors" ? true : false;
    }
    else if(userChoice === "paper"){
        // rock, scissors
        userWin = compChoice === "rock" ? true : false;       
    } 
    else{
        // paper, rock
        userWin = compChoice === "rock" ? false : true;
}
showWinner(userWin, userChoice, compChoice);
}
};
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
