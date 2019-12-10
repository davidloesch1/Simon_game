const easy = document.querySelector(".levelEasy")
easySquares = Array.from(easy.children)
// console.log(easySquares)
const medium = document.querySelector(".levelMedium")
const hard = document.querySelector(".levelHard")
let start = document.querySelector("#start")



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

// console.log(easy)

let gameMemory = []
let level = gameMemory.length
let userMemory = []
createGameMemory(easySquares)


let i = 0
function userClick(event) {
    
    console.log(gameMemory[i].id)
    let target = event.target
    console.log(target)
    userMemory.push(target.id)
    console.log(userMemory[i])
    while(userMemory[i]){
        if(userMemory[i] === gameMemory[i].id){
            i++
        } else {
            alert("you lose")
            i = 0
        }
    }
    if(userMemory.length === gameMemory.length){
        alert("Awesome! Next: Level " + (level + 1))
        createGameMemory(easySquares)
        i = 0
    }
}

function createGameMemory(board){
    let i = numPicker(board.length)
    gameMemory.push(board[i])
    // console.log(gameMemory)
    parseGameMemory(gameMemory)
}
function parseGameMemory(gameMemory) {
    let i = 0
    let j = 0
    let action = setInterval(() => {
        if(gameMemory[i] && j < 2){
            makeActive(gameMemory[i])
            j++
        } else {
            clearInterval(action)
            easySquares.forEach(el => {
                el.addEventListener("click", (event)=> {
                    userClick(event)
                })
            });
        }
        if(j >= 2){
            i++
            j = 0
        }
    }, 500)
}
function makeActive(div) {
    div.classList.toggle("active")
}

function numPicker(length) {
    return Math.floor((Math.random() * length))
}