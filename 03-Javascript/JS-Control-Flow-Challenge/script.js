// Statement to check if figure is positive or negative
function getNumber(event) {
  let numb = event.target.value;
  if (numb >= 0) {
    alert("positive number");
  } else {
    alert("negative number");
  }
}

// If statement to determine greatest of 3 numbers
let one = 3;
let two = 9;
let three = 1;

if (one > two && one > three) {
  console.log(one + " is the highest number");
} else if (two > one && two > three) {
  console.log(two + " is the greatest number");
} else if (three > one && three > two) {
  console.log(three + " is the greatest number");
}
// console.log(Math.max(one, two, three));

// Days until the weekend. Switch case. When given a day show a message to state how many days left til the weekend
// If day not recognised, show not recognised.

switch (new Date().getDay()) {
  case 0:
    day = "Yay, it's the weweekend";
    break;
  case 1:
    day = "5 more days until the weekend";
    break;
  case 2:
    day = "4 more days until the weekend";
    break;
  case 3:
    day = "3 more days until the weekend";
    break;
  case 4:
    day = "2 more days until the weekend";
    break;
  case 5:
    day = "1 more day until the weekend";
    break;
  case 6:
    day = "Yay, it's the weweekend";
    break;
  default:
    day = "Sorry, we didn't recognise that day";
}

console.log(day);

// switch case for veg prices. Potatoes & carrots same price, broccoli, cabbage & asparagus different.
// let vegetable = "Potatoes";

let vegetable = "Potato";
switch (vegetable) {
  case "Potato":
  case "Carrots":
    console.log("40p per kg");
    break;
  case "Brocolli":
    console.log("60p per kg");
    break;
  case "Cabbage":
    console.log("20p per kg");
    break;
  case "Asparagus":
    console.log("90p per kg");
}

// Same as above but link to HTML dropbox box
function getVegetable(event) {
  let vegetableHtml = event.target.value;
  switch (vegetableHtml) {
    case "Potatoes":
    case "Carrots":
      vegetableHtml = alert("40p per kg");
      break;
    case "Brocolli":
      alert("60p per kg");
      break;
    case "Cabbage":
      alert("20p per kg");
      break;
    case "Asparagus":
      alert("90p per kg");
  }
}
