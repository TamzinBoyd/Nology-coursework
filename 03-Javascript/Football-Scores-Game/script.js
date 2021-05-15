//  This lesson is about problem solving & sudo coding

//  bigger problem - create an app to keep track of a score in a football match

// What kind of application?
// Scores for both teams?
// what else is involved - players, time limit etc. What's in scope.

// 2 teams in football so 2 scores are needed

let teamScore1 = 0;
let teamScore2 = 0;
let isGameStopped = false;

// When team 1 button is clicked, increment team 1 score

function handleTeam1Click() {
  teamScore1 = teamScore1 + 1;
  alert("The score for team one is now " + teamScore1);
}

// Same for team 2

function handleTeam2Click() {
  teamScore2 = teamScore2 + 1;
  alert("The score for team two is now " + teamScore2);
}

// when do we stop? Timer or another button?

function handleStopGame() {
  isGameStopped = true;
  alert(
    "The game has ended, team one have " +
      teamScore1 +
      " goals, and team two have " +
      teamScore2 +
      " goals"
  );
  if (teamScore1 > teamScore2) {
    alert("Team one win the game");
  } else if (teamScore2 > teamScore1) {
    alert("Team two win the game");
  } else {
    alert("It's a draw");
  }
}
