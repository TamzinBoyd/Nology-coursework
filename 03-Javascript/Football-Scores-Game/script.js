// create an app to keep track of a score in a football match

let teamScore1 = 0;
let teamScore2 = 0;
let isGameStopped = false;

const team1 = document.querySelector(".button__team1");
const team2 = document.querySelector(".button__team2");

// When team 1 button is clicked, increment team 1 score
const calculateTeam1Score = () => {
  teamScore1++;
  if (teamScore1 === 1) {
    team1.innerHTML = `Team 1 has ${teamScore1} goal`;
  } else if (teamScore1 > 1) {
    team1.innerHTML = `Team 1 has ${teamScore1} goals`;
  }
  alert("The score for team one is now " + teamScore1);
};

const handleTeam2Click = () => {
  teamScore2++;
  if (teamScore2 === 1) {
    team2.innerHTML = `Team 2 has ${teamScore2} goal`;
  } else if (teamScore2 > 1) {
    team2.innerHTML = `Team 2 has ${teamScore2} goals`;
  }
  alert("The score for team two is now " + teamScore2);
};

const handleStopGame = () => {
  isGameStopped = true;
  alert(
    `The game has ended, team one have ${teamScore1}
       goals, and team two have ${teamScore2}
       goals`
  );
  if (teamScore1 > teamScore2) {
    alert("Team one win the game");
  } else if (teamScore2 > teamScore1) {
    alert("Team two win the game");
  } else {
    alert("It's a draw");
  }
};

team1.addEventListener("click", calculateTeam1Score);
