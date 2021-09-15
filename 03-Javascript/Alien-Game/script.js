class Ship {
  constructor(shipType, currentPoints, pointsDeducted) {
    this.shipType = shipType;
    this.currentPoints = currentPoints;
    this.pointsDeducted = pointsDeducted;
  }

  deductPoints() {
    return (this.currentPoints = this.currentPoints - this.pointsDeducted);
  }
}
let motherShip = new Ship("mother", 100, 100);
let defenseShip = new Ship("defense", 80, 10);
let attackShip = new Ship("attack", 48, 12);

let shipArr = [motherShip, defenseShip, attackShip];
let randomNum = 0;

let motherCurrentScore = document.querySelector(".mother-score");
let defenseCurrentScore = document.querySelector(".defense-score");
let attackCurrentScore = document.querySelector(".attack-score");

const shootButton = document.querySelector(".shoot-button");
shootButton.addEventListener("click", function () {
  //   check if all ships have 0 points
  if (
    motherShip.currentPoints === 0 &&
    defenseShip.currentPoints === 0 &&
    attackShip.currentPoints === 0
  ) {
    gameOver();
  } else {
    hitShip();
  }
});

function hitShip() {
  randomShip = shipArr[Math.floor(Math.random() * shipArr.length)];
  if (randomShip.currentPoints <= 0) {
    hitShip();
  } else {
    console.log(randomShip.currentPoints);
    randomShip.deductPoints();
    motherCurrentScore.innerHTML = motherShip.currentPoints;
    defenseCurrentScore.innerHTML = defenseShip.currentPoints;
    attackCurrentScore.innerHTML = attackShip.currentPoints;
  }
}

function gameOver() {
  alert("Game over");
  console.log(
    motherShip.currentPoints,
    defenseShip.currentPoints,
    attackShip.currentPoints
  );
}
