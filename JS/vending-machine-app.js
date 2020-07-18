import { resetKeypad, letterKeyPress, numberKeyPress } from "./keypad.js";

const letterKeys = document.querySelectorAll(".letters .key");
const numberKeys = document.querySelectorAll(".numbers .key");
const keypadScreen = document.querySelector(".keypad-screen");

window.addEventListener("load", resetKeypad);

for (let i = 0; i < letterKeys.length; i++) {
  letterKeys[i].addEventListener("click", () => {
    if (!letterKeys[i].classList.contains("disabled")) {
      letterKeyPress(letterKeys[i]);
      keypadScreen.innerText = letterKeys[i].innerText;
    }
  });
}

for (let i = 0; i < numberKeys.length - 1; i++) {
  numberKeys[i].addEventListener("click", () => {
    if (keypadScreen.innerText !== "") {
      if (!numberKeys[i].classList.contains("disabled")) {
        numberKeyPress(numberKeys[i]);
        keypadScreen.innerText =
          keypadScreen.innerText[0] + numberKeys[i].innerText;
      }
    }
  });
}
