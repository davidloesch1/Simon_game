var colorPicker = {
    0: "one",
    1: "two",
    2: "three",
    3: "four"
}
const gameBoardSquares = {
    "easy": 4,
    "medium": 9,
    "hard": 16,
    "ludicrous": 90
}

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
            let x = i % 4
            x = colorPicker[x]
            cell.classList.add(x, "cell")
            gameBoard.appendChild(cell)
        }
        this.boardArray = Array.from(gameBoard.children)
    }
}

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

function newBoard(event) {
    let target = event.target
    let difficulty = target.id 
    let squares = gameBoardSquares[difficulty]
    myBoard = new GameBoard(difficulty, squares,) 
    myBoard.createBoard(squares)
}

function startGame(){
    myGame = new Game([],[], 0 ,1)
    console.log(myGame)
    myGame.createGameMemory()
    console.log(myGame)
}


function userClick(event){
    let target = event.target
    console.log(target)
    let i = myGame.clicks
    console.log(myGame.game[i])
    if(target === myGame.game[i]){
        myGame.clicks ++
        console.log(myGame.clicks)
        if(myGame.clicks === myGame.game.length) {
            console.log("new level")
            myGame.clicks = 0
            myGame.createGameMemory()
        }
    } else {
        alert("you lose")
    }
    console.log(i)
    console.log(myGame.game[i])
    console.log(myGame.game)
}


function newRound(user, game) {
    if(user.length !== game.length){
        return false
    }
    for(let i = 0; i < user.length; i ++){
        if(user[i] !== game[i]){
            return false
        }
    }
    return true
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
            myBoard.boardArray.forEach(el => {
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