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
let randomShip = 0;

const shootButton = document.querySelector(".shoot-button");
shootButton.addEventListener("click", function () {
  //   check if all ships have 0 points
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

checkHtmlTest = () => {
  // used attack as example to see if could delete a random ship on the screen
  if (randomShip.currentPoints <= 0 && randomShip.shipType === "attack") {
    // collect all ships with classlist
    const shootShip = document.querySelectorAll(".attackship");
    // as gives Node list, tried to push these into an array
    const testArr = [];
    shootShip.forEach((word) => {
      testArr.push(word);
      // console.log(testArr);
    });

    for (let i = 0; i < testArr.length; i++) {
      // is the ship in current array already hidden?
      if (testArr[i].classList.contains("hide")) {
        // if yes do the test again to access the next ship
        checkHtmlTest();
        // if not add hide to current element then break out as don't want to hide more than one ship
      } else {
        // when reach this point it shows the console log but doesn't add a classlist
        testArr[i].classList.add("hide");
        console.log("reached else statement");
        console.log(testArr[i].classList);
        break;
      }
    }
  }

  // check score of current ship

  // if 0 then delete ship
};
const hitShip = () => {
  // choose random ship
  randomShip = shipArr[Math.floor(Math.random() * shipArr.length)];

  if (randomShip.currentPoints <= 0) {
    hitShip();
    checkHtmlTest();
  } else {
    console.log(randomShip.currentPoints);
    console.log(randomShip);
    randomShip.deductPoints();
  }
};

const gameOver = () => {
  alert("Game over");
};

// add a hidden class list
// need to get the ship from HTML - not sure how as need to link it to the object

// create an HTML element for game over that is only visible when game over is activated - class list
