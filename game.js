import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import  { showGameEndedBoard, hideGameEndedBoard } from './board.js'
import {setHighScore, getAndSetHighScore} from './score.js'
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')




// var elem = document.documentElement;
// elem.requestFullscreen().catch(err => {
//   console.log(err)
// })

getAndSetHighScore();
function main(currentTime) {
  if (gameOver) {
    document.getElementById("dieSound").play();
    setHighScore();
    showGameEndedBoard();
    return
  }


  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
const startNewGameButton = document.querySelector("#startNewGame")

startNewGameButton.addEventListener("click", ()=>{
  window.location.href = "/"  
})


