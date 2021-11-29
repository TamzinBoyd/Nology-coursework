const bill = document.querySelector(".bill-total");
const percentage = document.querySelector(".percentage");
const button = document.querySelector(".button");
const percentageNo = document.querySelector(".percentageNo");

let billAmount;
let percentageAmount;

// get user inputs & store
const generateTotal = () => {
  getBillAmount();
  getPercentage();
  percentageNo.innerHTML = percentageAmount;
};
const getBillAmount = () => {
  billAmount = bill.value;
};

const getPercentage = () => {
  percentageAmount = percentage.value;
};

button.addEventListener("click", generateTotal);

const compute = (arr1, arr2) => {
  let counter = 0;
  let array = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      array.push(arr1[i]);
    } else {
    }
    counter++;
  }
  const noErrors = array.length;
  console.log(noErrors);
};
const test1 = ["a", "b", "c", "e"];
const test2 = ["a", "d", "c", "j"];
compute(test1, test2);
