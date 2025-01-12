const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissor = document.getElementById("Scissor");
const Results = document.getElementById("Results");
const computer = document.getElementById("computer");
const attempt = document.getElementById("attempt");
let result ;
let attempts = 0;
let randomNumber;
let playermove;
let computermove;

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
    console.log(computermove);
}

function playgame(playermove){
    let result;
    if (playermove === 'Rock'){
            if(computermove === '✊'){
                result = 'Tie';
                attempts++;
            }
            else if (computermove === '🤚'){
                result = 'You Lose';
                attempts++;
            }
            else if (computermove === '✌️'){
                result = 'You Win';
                attempts++;
            }
        }
    else if(playermove === 'Paper'){
            if(computermove === '✊'){
                result = 'You Win';
                attempts++;
            }
            else if (computermove === '🤚'){
                result = 'Tie';
                attempts++;
            }
            else if (computermove === '✌️'){
                result = 'You Lose';
                attempts++;
            }
        }
    else if (playermove === 'Scissor'){
            if(computermove === '✊'){
                result = 'You Lose';
                attempts++;
            }
            else if (computermove === '🤚'){
                result = 'You Win';
                attempts++;
            }
            else if (computermove === '✌️'){
                result = 'Tie';
                attempts++;
            }
        }
    attempt.textContent = `Attempts:${attempts}`
    if (result === 'You Win'){
        Results.innerHTML=(`You Won. It took you ${attempts} attempts`);
    }
    else{
        Results.innerHTML=(`Result : ${result}`);
    }

    if(result === 'You Win'){
        attempts++;
        attempts = 0;
    }

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