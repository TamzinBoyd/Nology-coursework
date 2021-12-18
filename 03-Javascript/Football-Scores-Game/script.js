// create an app to keep track of a score in a football match

let teamScore1 = 0;
let teamScore2 = 0;
let isGameStopped = false;

const team1HTML = document.querySelector(".button__team1");
const team2HTML = document.querySelector(".button__team2");
const endGame = document.querySelector(".endGameButton");

// When team 1 button is clicked, increment team 1 score
const calculateteam1Score = (score) => {
  score++;
  if (score === 1) {
    team1HTML.innerHTML = `Team 1 has ${score} goal`;
  } else if (score > 1) {
    team1HTML.innerHTML = `Team 1 has ${score} goals`;
  }
  alert("The score for team one is now " + score);
};

const calculateTeam2Score = (score) => {
  score++;
  if (score === 1) {
    team2HTML.innerHTML = `Team 2 has ${score} goal`;
  } else if (score > 1) {
    team2HTML.innerHTML = `Team 2 has ${score} goals`;
  }
  alert("The score for team two is now " + score);
};

// show final goals
const handleStopGame = (score1, score2) => {
  isGameStopped = true;
  if (score1 > score2) {
    alert("Team one win the game");
  } else if (score2 > score1) {
    alert("Team two win the game");
  } else {
    alert("It's a draw");
  }
  team1HTML.innerHTML = "Team 1 Scores";
  team2HTML.innerHTML = "Team 2 Scores";
};

// click events
team1HTML.addEventListener(
  "click",
  (getScore1 = () => {
    calculateTeam1Score(teamScore1);
  })
);

team2HTML.addEventListener(
  "click",
  (getScore2 = () => {
    calculateTeam2Score(teamScore2);
  })
);

endGame.addEventListener(
  "click",
  (getScore2 = () => {
    handleStopGame(teamScore1, teamScore2);
  })
);
