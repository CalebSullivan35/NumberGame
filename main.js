
const number = document.getElementById("number");
const targetNumber = document.getElementById("targetNumber");
const heading = document.getElementById("heading");
let guesses = 0;
let count = 0;
let targetNumberCount = 0;


// gets a random number for target

function add5() {
  count = count + 5;
  number.innerHTML = count;
  guesses++;
  checkwin();

}

function multiplyBy3() {
  count = count * 3;
  number.innerHTML = count;
  guesses++;
  checkwin()
}

function reset() {
  count = 0;
  number.innerHTML = count;
  targetNumberCount = Math.ceil(Math.random() * 20);
  targetNumber.innerHTML = targetNumberCount;
  heading.innerHTML = "";
  guesses = 0;
}

function subtract4() {
  count = count - 4;
  number.innerHTML = count;
  checkwin();
  guesses++;
}

function divideBy3() {
  count = count / 3;
  number.innerHTML = count;
  checkwin();
  guesses++;
}

if (count === targetNumberCount) {
  console.log("You Win!")
}

function checkwin() {
  if (count === targetNumberCount) {
    heading.innerHTML = "Congrats You WIN!"
  }
  if (guesses >= 6){
    heading.innerHTML = "You Lose!"
  }
}

window.onload = function() {
  reset();
};




