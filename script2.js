//these two objects help with creating the boards dynamically with JS

var colorPicker = {
    0: "one",
    1: "two",
    2: "three",
    3: "four",
    4: "five",
    5: "six",
    6: "seven",
    7: "eight",
    8: "nine",
    9: "ten"
}
const gameBoardSquares = {
    "easy": 4,
    "medium": 9,
    "hard": 16,
    "ludicrous": 100
}


//this creates the board based off which difficulty you want to play
class GameBoard {
    constructor(difficulty, squares) {
        this.difficulty = difficulty,
        this.squares = squares

    }
    createBoard(squares){
        let gameBoard = document.querySelector(".gameBoard")
        gameBoard.innerHTML = ""
        gameBoard.classList.remove("easy", "medium", "hard", "ludicrous")
        gameBoard.classList.add(this.difficulty)
        for(let i = 0; i < squares; i++){
            let cell = document.createElement("div")
            cell.id = i
            let x = Math.floor((Math.random() * 10))
            x = colorPicker[x]
            cell.classList.add(x, "cell")
            gameBoard.appendChild(cell)
        }
        this.boardArray = Array.from(gameBoard.children)
        this.boardArray.forEach(el => {
            el.addEventListener("click", e => {
                userClick(e)
            })
        });
    }
}


//this creates a new game object for each restart
class Game {
    constructor(gameArray, userArray, clicks, level){
        this.game = gameArray,
        this.user = userArray,
        this.clicks = clicks
        this.level = level
    }
    createGameMemory(){
        let i = numPicker(myBoard.squares)
        myGame.game.push(myBoard.boardArray[i])
        parseGameMemory(myGame.game)
    }
}
//this creates a new board and player with each difficulty selection
function newBoard(event) {
    let target = event.target
    let difficulty = target.id 
    let squares = gameBoardSquares[difficulty]
    myBoard = new GameBoard(difficulty, squares,) 
    myBoard.createBoard(squares)
}
//this creates the first instance of a game board and player
window.onload = () => {
    myBoard = new GameBoard("easy", 4)
    myBoard.createBoard(4)
}

//this is the start button function of actually starting 
//the game
function startGame(){
    myGame = new Game([],[], 0 ,1)
    myGame.createGameMemory()
    let level = document.querySelector("#level")
    level.innerHTML = "Level - " + myGame.level
}

//this tracks the user clicks and compares it to the 
//position of the gameMemory array
function userClick(event){
    let target = event.target
    myGame.user.push(target)
    let i = myGame.user.length - 1
    if(myGame.user[i] === myGame.game[i]){
        if(myGame.user.length === myGame.game.length){
            myGame.user = []
            myGame.level ++
            level.innerHTML = "Level - " + myGame.level
            myGame.createGameMemory()
        }
    } else {
        document.querySelector("#tryAgain").style.display = "flex"
    }
}
//this closes the instruction modal
function closeInstructions() {
    let modal = document.querySelector("#modal")
    modal.style.display = "none"
    let button = document.querySelector("#openBtn")
    button.style.display = "block"
}
//this opens the instruction modal
function openInstructions() {
    let modal = document.querySelector("#modal")
    modal.style.display = "flex"
    let button = document.querySelector("#openBtn")
    button.style.display = "none"
}
//this shows the player/user the pattern by calling each div
//in the gameMemory array twice, once to light it up, another 
//to turn it off
function parseGameMemory(gameMemory) {
    let i = 0
    let j = 0
    let action = setInterval(() => {
        if(gameMemory[i] && j < 2){
            makeActive(gameMemory[i])
            j++
        } else {
            clearInterval(action)
            myGame.user = []
        }
        if(j >= 2){
            i++
            j = 0
        }
    }, 500)
}
//the actual function to turn the div "on" and "off"
function makeActive(div) {
    div.classList.toggle("active")
}
//Randomaizer for picking the next div for the gameMemory Array
function numPicker(length) {
    return Math.floor((Math.random() * length))
}
//this is button for after losing, you can start again.
function startOver() {
    document.querySelector("#tryAgain").style.display = "none"
    startGame()
}