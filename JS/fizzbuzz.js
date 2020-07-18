const fizzInput = document.querySelector(".fizz");
const fizzNumberInput = document.querySelector(".fizz-number");
const buzzInput = document.querySelector(".buzz");
const buzzNumberInput = document.querySelector(".buzz-number");
const userInput = document.querySelector(".user-input");
const outputSpan = document.querySelector(".output");

fizzNumberInput.addEventListener("keypress", function () {
  this.value = "";
});

buzzNumberInput.addEventListener("keypress", function () {
  this.value = "";
});

fizzNumberInput.addEventListener("change", function () {
  if (this.value == "0") {
    this.value = "";
  }
})

buzzNumberInput.addEventListener("change", function () {
  if (this.value == "0") {
    this.value = "";
  }
})

fizzInput.addEventListener("change", function () {
  this.value =
    this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();
});

buzzInput.addEventListener("change", function () {
  this.value =
    this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();
});

userInput.addEventListener("keypress", function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(1);
  }
});

userInput.addEventListener("change", () => {
  let entry = userInput.value;
  let fizz = fizzInput.value;
  let fizzNumber = parseInt(fizzNumberInput.value);
  let buzz = buzzInput.value;
  let buzzNumber = parseInt(buzzNumberInput.value);
  outputSpan.innerText = convertNumber(
    entry,
    fizz,
    fizzNumber,
    buzz,
    buzzNumber
  );
});

function convertNumber(entry, fizz, fizzNumber, buzz, buzzNumber) {
  if (entry % fizzNumber === 0 && entry % buzzNumber === 0) {
    return fizz + buzz;
  } else if (entry % fizzNumber === 0) {
    return fizz;
  } else if (entry % buzzNumber === 0) {
    return buzz;
  } else if (parseInt(entry) === 0) {
    return "Zero";
  } else {
    return getNumberAsWord(entry);
  }
}

function getNumberAsWord(entry) {
  let firstWord = getFirstNumber(entry);
  let middleWord = getMiddleNumber(entry);
  let lastWord = getLastNumber(entry);

  if (middleWord === "teen") {
    let newLastWord = getLastTeen(entry);
    return firstWord + " " + newLastWord;
  } else {
    return firstWord + " " + middleWord + " " + lastWord;
  }
}

function getFirstNumber(entry) {
  let word;
  switch (Math.floor(entry / 100)) {
    case 1:
      word = "One-Hundred";
      break;
    case 2:
      word = "Two-Hundred";
      break;
    case 3:
      word = "Three-Hundred";
      break;
    case 4:
      word = "Four-Hundred";
      break;
    case 5:
      word = "Five-Hundred";
      break;
    case 6:
      word = "Six-Hundred";
      break;
    case 7:
      word = "Seven-Hundred";
      break;
    case 8:
      word = "Eight-Hundred";
      break;
    case 9:
      word = "Nine-Hundred";
      break;
    default:
      word = "";
  }

  return word;
}

function getMiddleNumber(entry) {
  let word;
  switch (Math.floor((entry % 100) / 10)) {
    case 1:
      word = "teen";
      break;
    case 2:
      word = "Twenty";
      break;
    case 3:
      word = "Thirty";
      break;
    case 4:
      word = "Forty";
      break;
    case 5:
      word = "Fifty";
      break;
    case 6:
      word = "Sixty";
      break;
    case 7:
      word = "Seventy";
      break;
    case 8:
      word = "Eighty";
      break;
    case 9:
      word = "Ninety";
      break;
    default:
      word = "";
  }

  return word;
}

function getLastNumber(entry) {
  let word;
  switch (entry % 10) {
    case 1:
      word = "One";
      break;
    case 2:
      word = "Two";
      break;
    case 3:
      word = "Three";
      break;
    case 4:
      word = "Four";
      break;
    case 5:
      word = "Five";
      break;
    case 6:
      word = "Six";
      break;
    case 7:
      word = "Seven";
      break;
    case 8:
      word = "Eight";
      break;
    case 9:
      word = "Nine";
      break;
    default:
      word = "";
  }

  return word;
}

function getLastTeen(entry) {
  let word;
  switch (entry % 100) {
    case 10:
      word = "Ten";
      break;
    case 11:
      word = "Eleven";
      break;
    case 12:
      word = "Twelve";
      break;
    case 13:
      word = "Thirteen";
      break;
    case 14:
      word = "Fourteen";
      break;
    case 15:
      word = "Fifteen";
      break;
    case 16:
      word = "Sixteen";
      break;
    case 17:
      word = "Seventeen";
      break;
    case 18:
      word = "Eighteen";
      break;
    case 19:
      word = "Nineteen";
      break;
    default:
      word = "";
  }

  return word;
}
