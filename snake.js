import { getInputDirection } from './input.js';
import { updateScore } from './score.js'
export const SNAKE_SPEED = 7;
const snakeBody = [
    {x : 11, y : 11},
];
let newSegments = 0;
let score = 0;

export function update(){
    addSegments();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
   
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount){
    newSegments += amount;
    score += 5;
    updateScore(score);
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
    })
}
  

export function getSnakeHead(){
    return snakeBody[0];
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead : true})
}

function addSegments(){
    for(let i=0; i<newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0;
}