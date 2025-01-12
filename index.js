const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissor = document.getElementById("Scissor");
const Results = document.getElementById("Results");
const computer = document.getElementById("computer");
const scorez = document.getElementById("score");
const Reset = document.getElementById("Reset");
let result ;
let randomNumber;
let playermove;
let computermove;


const scores = {
    wins : 0,
    losses : 0,
    ties : 0
};

function computerMove(){
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3){
        computermove = '✊';
        computer.innerHTML = `computer : ${computermove}`
    }
    else if (randomNumber >= 1 /3 && randomNumber < 2 /3){
        computermove = '🤚';
        computer.innerHTML = `computer : ${computermove}`
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1){
        computermove = '✌️';
        computer.innerHTML = `computer : ${computermove}`
    }
}

function playgame(playermove){
    let result;
    if (playermove === 'Rock'){
            if(computermove === '✊'){
                result = 'Tie';
            }
            else if (computermove === '🤚'){
                result = 'You Lose';
            }
            else if (computermove === '✌️'){
                result = 'You Win';
            }
        }
    else if(playermove === 'Paper'){
            if(computermove === '✊'){
                result = 'You Win';
            }
            else if (computermove === '🤚'){
                result = 'Tie';
            }
            else if (computermove === '✌️'){
                result = 'You Lose';
            }
        }
    else if (playermove === 'Scissor'){
            if(computermove === '✊'){
                result = 'You Lose';
            }
            else if (computermove === '🤚'){
                result = 'You Win';
            }
            else if (computermove === '✌️'){
                result = 'Tie';
            }
        }
    
    if (result === 'You Win'){
        Results.innerHTML=(`You Won 🏆`);
        scores.wins +=1;
    }
    else if (result === 'You Lose'){
        Results.innerHTML=(`You Lose`);
        scores.losses +=1;
    }
    else if (result === 'Tie'){
        Results.innerHTML=(`Tie`)
        scores.ties +=1;
    }
    Reset.onclick = function(){
        scores.wins=0;
        scores.losses=0;
        scores.ties=0;
    scorez.innerHTML = `Wins : ${scores.wins}, Losses : ${scores.losses}, Ties : ${scores.ties}`;}
    scorez.innerHTML = `Wins : ${scores.wins}, Losses : ${scores.losses}, Ties : ${scores.ties}`;
}




// Rock button Function
Rock.onclick = function(){
    computerMove();
playgame('Rock');
}
// Paper button Function
Paper.onclick = function(){
    computerMove();
playgame('Paper');
}
//scissor button Function
Scissor.onclick = function(){
    computerMove();
playgame('Scissor');
}
