const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissor = document.getElementById("Scissor");
const Results = document.getElementById("Results");
const computer = document.getElementById("computer");
let computermove = '';
let result = '';
let attempts = 0;


// Rock button Function
Rock.onclick = function(){
const randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1 / 3){
    computermove = '✊';
}
else if (randomNumber >= 1 /3 && randomNumber < 2 /3){
    computermove = '🤚';
}
else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computermove = '✌️';
}
console.log(computermove);

if(computermove === '✊'){
    result = 'Tie';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
else if (computermove === '🤚'){
    result = 'You Lose';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
else if (computermove === '✌️'){
    result = 'You Win';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
if(result === 'You Win'){
    attempts = 0;}
};

// Paper button Function
Paper.onclick = function(){
const randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1 / 3){
    computermove = '✊';
}
else if (randomNumber >= 1 /3 && randomNumber < 2 /3){
    computermove = '🤚';
}
else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computermove = '✌️';
}
console.log(computermove);
        
if(computermove === '✊'){
    result = 'You Win';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
else if (computermove === '🤚'){
    result = 'Tie';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
else if (computermove === '✌️'){
    result = 'You Lose';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
if(result === 'You Win'){
    attempts = 0;}
};

//scissor button Function
Scissor.onclick = function(){
const randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1 / 3){
    computermove = '✊';
}
else if (randomNumber >= 1 /3 && randomNumber < 2 /3){
    computermove = '🤚';
}
else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computermove = '✌️';
}
console.log(computermove);
    
if(computermove === '✊'){
    result = 'You Lose';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
else if (computermove === '🤚'){
    result = 'You Win';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
else if (computermove === '✌️'){
    result = 'Tie';
    attempts++;
    Results.innerHTML = `${result}.`;
    computer.innerHTML = `computer: ${computermove}`;
}
if(result === 'You Win'){
    attempts = 0;}
};
