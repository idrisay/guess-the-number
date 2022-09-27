let guessNumber = 0;
let originalNumber = randomInt(0, 100);

console.log(originalNumber);

let numberInput = document.getElementById("number");
let checkBtn = document.getElementById("check-btn");
let result = document.querySelector("#last-div");

checkBtn.onclick = function () {
  var value = Number(numberInput.value);

  console.log(originalNumber, value);
  if (originalNumber > value) {
    result.style.color = 'red';
    result.innerHTML = "Daha buyuk sayi giriniz...";
  } else if (originalNumber < value) {
    result.style.color = 'blue';
    result.innerHTML = "Daha kucuk sayi giriniz...";
  } else {
    result.style.color = 'green';
    result.innerHTML = "Bravo dogru bildiniz...";
  }

  //   guessNumber = guessNumber + value;
  //   console.log("Butona tiklandi", value, guessNumber);
  //   result.innerHTML = "Result : " + guessNumber;
  //   numberInput.value = 0;
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
