// Variables

let turn='X'
let option = 'X'
let checkwins = true 
let gameover =false
let win = false
let inputs = document.getElementsByClassName('box');


// starter

let con = document.getElementById("fmg")
let conte =  document.getElementById("stgm")

let choices = document.getElementsByClassName("chc")
Array.from(choices).forEach(e=>{
    e.addEventListener("click",starter)
})

function starter(t){
    if(t.target.innerHTML === "Turn O"){
        turn = 'O'
        option = 'O'
        con.style.display = "block"
        conte.style.display = "none"
        document.getElementById('win').innerHTML = turn + "'s player"  + " turn"
        console.log(option)
        return
    }
    else if(t.target.innerHTML === "Turn X"){
        turn = 'X';
        option = 'X'
        con.style.display = "block";
        conte.style.display = "none";
        document.getElementById('win').innerHTML = turn + "'s player"  + " turn"
        console.log(option)
        return
    }
}


// Game
Array.from(inputs).forEach(e=>{
        e.addEventListener('click',checku)
    })


function checku(x){
    
// user  
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
    if(win){
        return
    }
    if(checkwins){
        document.getElementById('win').innerHTML = turn + "'s player" + " turn"
    }
    list=Array.from(inputs).filter(input => input.innerHTML === '')
    if (list.length === 0) {
        document.getElementById('win').innerHTML = "Game-over"
        gameover = true
        checkwin(str)
    }


// computer
    str = turn
    array=Array.from(inputs).filter(input => input.innerHTML === '')
    let R = Randomelement(array)
    R.innerHTML = turn
    tur();
    checkwin(str)
    if(checkwins){
        document.getElementById('win').innerHTML = turn + "'s player"  + " turn"
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
        win = true
        gameover = true;

    }
    if (gameover)
    {
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
    win = false
    gameover = false
    if (!gameover){
        document.getElementById('primary').innerHTML = "RESET"
    }
    con.style.display = "none"
    conte.style.display = "block"
    checkwins = true
    document.getElementById('win').innerHTML = turn + "'s player" + " turn"
}

// Random---element
function Randomelement(array){
    return array[Math.floor(Math.random() * array.length)];
}