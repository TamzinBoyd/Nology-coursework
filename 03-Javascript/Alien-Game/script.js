// re-watch car object video for ideas on how functions interact

// Create a text based alien shooting game

// 3 types of ship - store in classes/objects
// each ship contains a score & function for when they are hit
// Game is over when all scores = 0
// scores will need to accessable throughout.

class Ship {
  constructor(shipType, pointsTotal, pointsDeducted) {
    this.shipType = shipType;
    this.pointsTotal = pointsTotal;
    this.pointsDeducted = pointsDeducted;
  }

  deductPoints() {
    return this.pointsTotal - this.pointsDeducted;
  }

  currentPoints() {
    return (this.currentPoints = currentPoints);
  }
}

let MotherShip = new Ship("mother", 100, 100);
let DefenseShip = new Ship("de0....................fense", 80, 10);
let AttackShip = new Ship("Attack", 45, 12);

if (
  MotherShip.deductPoints() === 0 &&
  DefenseShip.deductPoints() === 0 &&
  AttackShip.deductPoints() === 0
) {
  // return
  gameOver();
}
// what happens when click shoot button
// a random ship object is hit.
// Check if ship has points left
// if not - hit another ship
// if so deduct the points and update current points
// so each ship can take a different number of hits, so decide how when you click shoot it decides which
// ship to hit, and how to know when a ship has been sunk
// when ship is hit it activtes the function to deduct points
// checks if points totals = 0, if so run game over function
const shootButton = document.querySelector(".shoot-button");
shootButton.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * 83);
  console.log(randomNum);
});

// mother ship - can take 1 hit
// each defence ship (5 of) can take 8 hits (40)
// each attack ship(8 of) can take 4 (32)

function gameOver() {
  alert("Game over");
}
