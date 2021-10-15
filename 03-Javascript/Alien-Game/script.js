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

// create objects for each ship & push into an array
let motherShip = new Ship("mother", 100, 9);
let defenceShip = new Ship("defence", 80, 10);
let defenceShip2 = new Ship("defence", 80, 10);
let defenceShip3 = new Ship("defence", 80, 10);
let defenceShip4 = new Ship("defence", 80, 10);
let defenceShip5 = new Ship("defence", 80, 10);
let attackShip = new Ship("attack", 48, 12);
let attackShip2 = new Ship("attack", 48, 12);
let attackShip3 = new Ship("attack", 48, 12);
let attackShip4 = new Ship("attack", 48, 12);
let attackShip5 = new Ship("attack", 48, 12);
let attackShip6 = new Ship("attack", 48, 12);
let attackShip7 = new Ship("attack", 48, 12);
let attackShip8 = new Ship("attack", 48, 12);

let shipArr = [];
shipArr.push(
  defenceShip,
  defenceShip2,
  defenceShip3,
  defenceShip4,
  defenceShip5,
  attackShip,
  attackShip2,
  attackShip3,
  attackShip4,
  attackShip5,
  attackShip6,
  attackShip7,
  attackShip8
);

// get each ship's ID from HTLML & push into array
const attackHtml1 = document.getElementById("attack1");
const attackHtml2 = document.getElementById("attack2");
const attackHtml3 = document.getElementById("attack3");
const attackHtml4 = document.getElementById("attack4");
const attackHtml5 = document.getElementById("attack5");
const attackHtml6 = document.getElementById("attack6");
const attackHtml7 = document.getElementById("attack7");
const attackHtml8 = document.getElementById("attack8");
const defenceHtml1 = document.getElementById("defence1");
const defenceHtml2 = document.getElementById("defence2");
const defenceHtml3 = document.getElementById("defence3");
const defenceHtml4 = document.getElementById("defence4");
const defenceHtml5 = document.getElementById("defence5");

let htmlArr = [
  attackHtml1,
  attackHtml2,
  attackHtml3,
  attackHtml4,
  attackHtml5,
  attackHtml6,
  attackHtml7,
  attackHtml8,
  defenceHtml1,
  defenceHtml2,
  defenceHtml3,
  defenceHtml4,
  defenceHtml5,
];

// get other elements
const element = document.querySelector(".defence");
const gameOverMessage = document.querySelector(".game-over");
const shootButton = document.querySelector(".shoot-button");
const restartButton = document.querySelector(".restart-button");

let messageToPlayer = document.querySelector(".message");
let randomShip = 0;

// shoot button ////////////////////////////////////////////////////////////////////////////////////
const shootShip = () => {
  if (
    (motherShip.currentPoints === 0) | (defenceShip.currentPoints === 0) &&
    attackShip.currentPoints === 0
  ) {
    gameOver();
  } else {
    hitShip();
  }
};

shootButton.addEventListener("click", shootShip);

const hitShip = () => {
  // choose random ship from array on each hit
  randomShip = shipArr[Math.floor(Math.random() * shipArr.length)];

  // if ship has already been sunk then hit another ship
  if (randomShip.currentPoints <= 0) {
    hitShip();
    // otherwise let player know the type of ship hit, deduct points and check if the ship now has run out of points
    // If so sink the ship
  } else {
    messageToPlayer.innerHTML = `${randomShip.shipType} ship has been hit!`;
    randomShip.deductPoints();

    if (randomShip.currentPoints <= 0) {
      hideShip();
      messageToPlayer.innerHTML = `Well done, you sunk one of the ${randomShip.shipType} ships!`;
    }
  }
};

// hiding the HTML elements of the ship once sunk (currently in an array) ////////////////////////////////////////////////////////////
hideShip = () => {
  // select random ship from array
  const randomHtml = htmlArr[Math.floor(Math.random() * htmlArr.length)];

  // if ship is already sunk then choose another ship in array. Mothership N/A as 0 points means game over
  if (randomHtml.classList.contains("sunk-ship")) {
    hideShip();
    // hide defence ship
  } else if (randomHtml.classList.contains("defenceship")) {
    randomHtml.classList.add("sunk-ship");

    //  hide attacked ship
  } else if (randomHtml.classList.contains("attackship")) {
    randomHtml.classList.add("sunk-ship");
  }
};

// show game over message and hide shoot button ///////////////////////////////////////////////////////////////////////////////////
gameOver = () => {
  gameOverMessage.classList.remove("hidden");
  shootButton.classList.add("hidden");
};

// reset button - currently doesn't work
restartGame = () => {
  gameOverMessage.classList.add("hidden");
  shootButton.classList.remove("hidden");
  messageToPlayer.innerHTML = "Hit shoot to start the game";

  // below doesn't work, says element isn't a function? /////////////////////////////////
  shipArr.forEach((element) => {
    if (element.shipType.contains("defence")) {
      element.currentPoints = 90;
    } else if (element.shipType.contains("attack")) {
      element.currentPoints = 48;
    } else {
      return shipArr;
    }
  });
  htmlArr.forEach((ship) => {
    ship.classList.remove("sunk-ship");
  });
  console.log(motherShip.currentPoints, defenceShip2.currentPoints);
};

restartButton.addEventListener("click", restartGame);

// below was adding HTML, but couldnt then add classes to it
// loop over array to create ships in the HTML (not random)
// for (let i = 0; i < shipArr.length; i++) {
//   const createShips = document.createElement("h3");
//   const textEl = document.createTextNode(shipArr[i].shipType);
//   createShips.appendChild(textEl);
//   element.appendChild(createShips);
// }
