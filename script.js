// Variables

let turn='X'
let checkwins = true 
let gameover =false
let inputs = document.getElementsByClassName('box');



// Game

Array.from(inputs).forEach(element => {
    element.addEventListener('click',checku)  
});

function checku(x){
    if(gameover){
        return;
    }
    let str = turn;
    if(x.target.innerHTML !== ''){
        return;
    }
    x.target.innerHTML = str;
    tur();
    checkwin(str)
    if(checkwins){
        document.getElementById('win').innerHTML = turn  + "'s player" + " turn"
    }
    list=Array.from(inputs).filter(input => input.innerHTML === '')
    if (list.length === 0) {
        document.getElementById('win').innerHTML = "Game-over"
        gameover = true
        checkwin(str)
    }
}

function tur(){
    if (turn === 'X'){
        turn = 'O'}
    else{
        turn = 'X'
    }
}

function checkwin(str){
    let array = [[0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]]
    let input = document.getElementsByClassName('box');
    array.forEach(e => {
        if ((input[e[0]].innerHTML!=='')&&
    (input[e[0]].innerHTML === input[e[1]].innerHTML)&&
    (input[e[1]].innerHTML === input[e[2]].innerHTML)) 
    {
        document.getElementById('win').innerHTML = str + " is winner";
        checkwins = false;
        gameover = true
    }
    if (gameover){
        document.getElementById('primary').innerHTML = "PLAY AGAIN"
    }
    });
}

// BUtton control

document.getElementById('primary').addEventListener('click',reset)

function reset(){
    const texts = document.getElementsByClassName('box')
    for (let i = 0 ; i < texts.length ; i++){
    texts[i].textContent=""
    }
    gameover = false
    if (!gameover){
        document.getElementById('primary').innerHTML = "RESET"
    }
    checkwins = true
    document.getElementById('win').innerHTML = turn + "'s player" + " turn"
}