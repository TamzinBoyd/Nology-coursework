class Ship {
  constructor(shipType, currentPoints, pointsDeducted) {
    this.shipType = shipType;
    this.currentPoints = currentPoints;
    this.pointsDeducted = pointsDeducted;
  }

  deductPoints() {
    return (this.currentPoints = this.currentPoints - this.pointsDeducted);
  }
  // below not yet being used
  HTMLRender() {
    return `<div>Sunk ship</div>`;
  }
}

// create objects for each ship
let motherShip = new Ship("mother", 100, 9);
let defenseShip = new Ship("defense", 80, 10);
let defenseShip2 = new Ship("defense", 80, 10);
let defenseShip3 = new Ship("defense", 80, 10);
let defenseShip4 = new Ship("defense", 80, 10);
let defenseShip5 = new Ship("defense", 80, 10);
let attackShip = new Ship("attack", 48, 12);
let attackShip2 = new Ship("attack", 48, 12);
let attackShip3 = new Ship("attack", 48, 12);
let attackShip4 = new Ship("attack", 48, 12);
let attackShip5 = new Ship("attack", 48, 12);
let attackShip6 = new Ship("attack", 48, 12);
let attackShip7 = new Ship("attack", 48, 12);
let attackShip8 = new Ship("attack", 48, 12);

// put objects into an array
let shipArr = [
  motherShip,
  defenseShip,
  defenseShip2,
  defenseShip3,
  defenseShip4,
  defenseShip5,
  attackShip,
  attackShip2,
  attackShip3,
  attackShip4,
  attackShip5,
  attackShip6,
  attackShip7,
  attackShip8,
];

const element = document.querySelector(".defense");
const gameOverMessage = document.querySelector(".game-over");
const shootButton = document.querySelector(".shoot-button");
const restartButton = document.querySelector(".restart-button");
let messageToPlayer = document.querySelector(".message");
let randomShip = 0;

// loop over array to create ships in the HTML (none random)
for (let i = 0; i < shipArr.length; i++) {
  const createShips = document.createElement("h3");
  const textEl = document.createTextNode(shipArr[i].shipType);
  createShips.appendChild(textEl);
  element.appendChild(createShips);
}

// need to find way to hide just one element, below hides all
hideShip = (ship) => {
  element.classList.add("hide");
};

shootButton.addEventListener("click", function () {
  //   check if all ships have 0 points / mothership has 0
  if (motherShip.currentPoints === 0) {
    gameOver();
  } else if (
    defenseShip.currentPoints === 0 &&
    attackShip.currentPoints === 0
  ) {
    gameOver();
  } else {
    hitShip();
  }
});

const hitShip = () => {
  // choose random ship from array on each hit
  randomShip = shipArr[Math.floor(Math.random() * shipArr.length)];
  console.log(randomShip);
  // if the ship is already at 0 points then pick another ship
  if (randomShip.currentPoints <= 0) {
    hitShip();
    hideShip();
  } else {
    messageToPlayer.innerHTML = `Well done, you hit a ${randomShip.shipType} ship!`;
    // console.log(randomShip.currentPoints);
    // console.log(randomShip);
    randomShip.deductPoints();
  }
};

gameOver = () => {
  console.log("Game over");
  gameOverMessage.classList.remove("hidden");
  shootButton.classList.add("hidden");
};

restartButton.addEventListener("click", function () {
  gameOverMessage.classList.add("hidden");
  shootButton.classList.remove("hidden");
  // need to add something to reset point scores?
});
