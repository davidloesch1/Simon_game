const easy = document.querySelector(".levelEasy")
const medium = document.querySelector(".levelMedium")
const hard = document.querySelector(".levelHard")
let start = document.querySelector("#start")
let boardSquares = document.querySelectorAll(".cell")
console.log(boardSquares)
boardSquares.forEach(el => {
    el.addEventListener("click", userClick(event))
})

const levels = [easy, medium, hard]
// console.log(levels)
function levelEasy() {
    easy.style.display = "grid"
    medium.style.display = "none"
    hard.style.display = "none"
    start.setAttribute("onclick", "createGameMemory(easy)")
}
function levelMedium() {
    easy.style.display = "none"
    medium.style.display = "grid"
    hard.style.display = "none"
    start.setAttribute("onclick", "createGameMemory(medium)")
}
function levelHard() {
    easy.style.display = "none"
    medium.style.display = "none"
    hard.style.display = "grid"
    start.setAttribute("onclick", "createGameMemory(hard)")
}

let level = 1
let gameMemory = []
let userMemory = []
createGameMemory(easy.children)
createGameMemory(easy.children)
createGameMemory(easy.children)
createGameMemory(easy.children)


function userClick(event) {
    target = event.target
    
}

function createGameMemory(board){
    let i = numPicker(board.length)
    gameMemory.push(board[i])
    console.log(gameMemory)
    // parseGameMemory(gameMemory)
}
function parseGameMemory(gameMemory) {
    var i = 0
    console.log(gameMemory[i])
    let action = setInterval(() => {
            if(gameMemory[i-1]){
                makeActive(gameMemory[i-1])
            }
            if(gameMemory[i]){
                makeActive(gameMemory[i])
            i++
            } else {
                clearInterval(action)
            }
        }, 1000)
}
function makeActive(div) {
    div.classList.toggle("active")
    // div2.classList.toggle("active")
}

function numPicker(length) {
    return Math.floor((Math.random() * length))
}