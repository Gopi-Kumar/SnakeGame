
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
    inputDirection = {x : 0, y : -1};
}
function moveDown(){
    inputDirection = {x : 0, y : 1};
}

function moveLeft(){
    inputDirection = {x : -1, y : 0};
}

function moveRight(){
    inputDirection = {x : 1, y : 0};
}


window.addEventListener('keydown', e => {
    openFullscreen()
    switch (e.key){
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break;
            moveUp();
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break;
            moveDown();
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break;
            moveLeft();
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break;
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
