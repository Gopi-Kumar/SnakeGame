
// console.log(highScoreLine)
export function updateScore(score){
   let scoreValue = document.getElementById('current_score_value');
   scoreValue.innerText =  score;
}

export function setHighScore(){
   let scoreValue = document.getElementById('current_score_value').innerText;
   let highScore = localStorage.getItem("snake-game-highscore");
   if(highScore == null){
      localStorage.setItem("snake-game-highscore", scoreValue)
   }

   if(Number(highScore) < Number(scoreValue)){
      console.log(highScore, scoreValue)
      console.log(highScore, scoreValue)
      localStorage.setItem("snake-game-highscore", scoreValue)
   }
   document.getElementById("currentScore").innerText = "Score : "+scoreValue;
   document.getElementById("highScore").innerText = "High Score : "+highScore;

}


export function getAndSetHighScore(){
   let highScoreValue = document.getElementById('high_score_value');
   let highScore = localStorage.getItem("snake-game-highscore");
   if(highScore != null){
      highScoreValue.innerText = highScore;;
   }else{
      highScoreValue.innerText = 0;
   }
}
