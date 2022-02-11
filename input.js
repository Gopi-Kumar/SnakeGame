
let inputDirection = {x :0, y : 0}
let lastInputDirection = {x : 0, y: 0}

var elem = document.documentElement;
function openFullscreen(ele) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function moveUp(){
    if(lastInputDirection.y !== 0) return;
    inputDirection = {x : 0, y : -1};
}
function moveDown(){
    if(lastInputDirection.y !== 0) return;
    inputDirection = {x : 0, y : 1};
}

function moveLeft(){
    if(lastInputDirection.x !== 0) return;
    inputDirection = {x : -1, y : 0};
}

function moveRight(){
    if(lastInputDirection.x !== 0) return;
    inputDirection = {x : 1, y : 0};
}


window.addEventListener('keydown', e => {
    openFullscreen()
    switch (e.key){
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;

    }
})


//Mobile controller;
document.querySelector("#upButton").addEventListener("click",()=>{
	openFullscreen()
    moveUp();
})
document.querySelector("#leftButton").addEventListener("click",()=>{
openFullscreen()
    moveLeft();
})
document.querySelector("#downButton").addEventListener("click",()=>{
openFullscreen()
    moveDown();
})
document.querySelector("#rightButton").addEventListener("click",()=>{
openFullscreen()
    moveRight();
})

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}
