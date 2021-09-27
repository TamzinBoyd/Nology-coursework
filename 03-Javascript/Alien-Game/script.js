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

const gameOverMessage = document.querySelector(".game-over");
const shootButton = document.querySelector(".shoot-button");
const restartButton = document.querySelector(".restart-button");

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

  // if the ship is already at 0 points then pick another ship
  if (randomShip.currentPoints <= 0) {
    hitShip();
    checkHtmlTest();
  } else {
    console.log(randomShip.currentPoints);
    console.log(randomShip);
    randomShip.deductPoints();
  }
};

// below trying to figure out how to delete a ship on the page when they are at 0 points
// could get it to work for first one but not additional
checkHtmlTest = () => {
  console.log("test");
  //   // used attack as example to see if could delete a random ship on the screen
  //   if (randomShip.currentPoints <= 0 && randomShip.shipType === "attack") {
  //     // collect all ships with classlist
  //     const shootShip = document.querySelectorAll(".attackship");
  //     // as gives Node list, tried to push these into an array
  //     const testArr = [];
  //     shootShip.forEach((word) => {
  //       testArr.push(word);
  //     });

  // below deoesn't work
  //   for (let i = 0; i < testArr.length; i++) {
  //     // is the ship in current array already hidden?
  //     if (testArr[i].classList.contains("hide")) {
  //       // if yes do the test again to access the next ship
  //       checkHtmlTest();
  //       // if not add hide to current element then break out as don't want to hide more than one ship
  //     } else {
  //       // when reach this point it shows the console log but doesn't add a classlist
  //       testArr[i].classList.add("hide");
  //       console.log("reached else statement");
  //       console.log(testArr[i].classList);
  //       break;
  //     }
  //   }
  // }
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
