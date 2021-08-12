const scoreLine = document.getElementById('current_score_value');
const highScoreLine = document.getElementById('high_score_value');
// console.log(highScoreLine)
export function updateScore(score){
   scoreLine.innerText = `${score}`
}

export function setHighScore(){
   let highScore = localStorage.getItem("snake-game-highscore");
   if(highScore == null){
      highScore = 0;
   }
   if(highScore < scoreLine){
      localStorage.setItem("snake-game-highscore", scoreLine)
   }
}


export function getAndSetHighScore(){
   let highScore = localStorage.getItem("snake-game-highscore");
   console.log(highScore)
   if(highScore != null){
      highScoreLine.innerText = highScore;;
   }
}
