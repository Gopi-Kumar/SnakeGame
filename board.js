const gameEndedBoard = document.querySelector("#game_end_board_container");

export function showGameEndedBoard(){
    gameEndedBoard.style.display="flex"
}

export function hideGameEndedBoard(){
    gameEndedBoard.style.display="none"
}