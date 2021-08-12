
// console.log(highScoreLine)
export function updateScore(score){
   let scoreValue = document.getElementById('current_score_value');
   console.log(scoreValue)
   scoreValue.innerText =  score;
}

export function setHighScore(){
   let scoreValue = document.getElementById('current_score_value');
   console.log(scoreValue.innerText)
  

   let highScore = localStorage.getItem("snake-game-highscore");
   console.log("high score form localstorage ",highScore)
   if(highScore == null){
      highScore = 0;
   }
   if(highScore < scoreValue){
      localStorage.setItem("snake-game-highscore", scoreValue.innerText)
   }
}


export function getAndSetHighScore(){
   let highScoreValue = document.getElementById('high_score_value');
   let highScore = localStorage.getItem("snake-game-highscore");
   if(highScore != null){
      highScoreValue.innerText = highScore;;
   }
}
