let guessNumber = 0;
let originalNumber = randomInt(0, 100);
let numberInput = document.getElementById("number");
let checkBtn = document.getElementById("check-btn");
let result = document.querySelector("#last-div");
let guessNumberHtml = document.querySelector('#guess-number')


checkBtn.onclick = function () {
  let value = Number(numberInput.value);
  guessNumber += 1;
  guessNumberHtml.textContent = guessNumber;

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

  let buton = document.createElement("button");
  buton.innerHTML = "Tıkla";

  document.body.appendChild(buton);

  //   guessNumber = guessNumber + value;
  //   console.log("Butona tiklandi", value, guessNumber);
  //   result.innerHTML = "Result : " + guessNumber;
  //   numberInput.value = 0;
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
