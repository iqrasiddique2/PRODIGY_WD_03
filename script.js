console.log("Welcome to Tic Tac Toe")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let Turn = "X"
let gameover1 = false

// Function to change the turn
const changeTurn = () => {
    return Turn === "X" ? "O" : "X"
}

// Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && 
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"; 
            gameover1 = true;
            gameover.play();
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover1) {
            boxtext.innerText = Turn;
            audioturn.play();
            checkWin();
            if (!gameover1) {
                Turn = changeTurn();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
        }
    })
})
// add on click listener to reset button
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=" "
    });
    Turn="X"
    gameover1=false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    


}
)
