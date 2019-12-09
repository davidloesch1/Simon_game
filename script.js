const easy = document.querySelector(".levelEasy")
const medium = document.querySelector(".levelMedium")
const hard = document.querySelector(".levelHard")
let start = document.querySelector("#start")
console.log(start)
const levels = [easy, medium, hard]
// console.log(levels)
function levelEasy() {
    easy.style.display = "grid"
    medium.style.display = "none"
    hard.style.display = "none"
    start.setAttribute("onclick", "game(easy)")
}
function levelMedium() {
    easy.style.display = "none"
    medium.style.display = "grid"
    hard.style.display = "none"
    start.setAttribute("onclick", "game(medium)")
}
function levelHard() {
    easy.style.display = "none"
    medium.style.display = "none"
    hard.style.display = "grid"
    start.setAttribute("onclick", "game(hard)")
}

let level = 0
let gameMemory = []
let userMemory = []

// levelEasy ()

function game(board) {
    let timer = 300
    let boardLength = board.children.length
    let boardArray = []
    for(var j = 0; j < boardLength; j++) {
        boardArray.push(board.children[j])
    }
    // console.log(boardArray)
    let i = numPicker(boardLength)
    console.log(boardArray[i])
    // makeActive(boardArray[i])
    boardArray[i].classList.toggle("active")
    setTimeout(function(){ boardArray[i].classList.toggle("active")}, timer)
    console.log(i)
    gameMemory.push(boardArray[i])
    console.log(gameMemory)
}

function numPicker(length) {
    return Math.floor((Math.random() * length))
}