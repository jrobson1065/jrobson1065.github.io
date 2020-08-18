import { FileHelper } from "./FileHelper.js";

const nextContainer = document.querySelector(".next");
const currentContainer = document.querySelector(".current");
const previousContainer = document.querySelector(".previous");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");

document.addEventListener("DOMContentLoaded", () => {
  const fh = new FileHelper();
  const names = fh.pullTextFromFile("../roster.txt").split("\n");

  shuffle(names);
  addNamesToDocument(names);
  nextButton.addEventListener("click", callNextName);
  previousButton.addEventListener("click", undoLastName);
});

function shuffle(array) {
  const max = array.length;
  for (let i = 0; i < max; i++) {
    const j = Math.floor(Math.random() * max);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function addNamesToDocument(names) {
  names.forEach((name) => {
    const span = document.createElement("span");
    span.innerText = name;
    nextContainer.appendChild(span);
  });
}

const callNextName = () => {
  if (currentContainer.children.length > 1) {
    const el = currentContainer.lastChild;
    previousContainer.appendChild(el);
  }

  if (nextContainer.children.length > 1) {
    const el = nextContainer.children.item(1);
    currentContainer.appendChild(el);
  }
};

const undoLastName = () => {
  if (currentContainer.children.length > 1) {
    const el = currentContainer.lastChild;
    const secondEl = nextContainer.children.item(1);
    nextContainer.insertBefore(el, secondEl);
  }

  if (previousContainer.children.length > 1) {
    const el = previousContainer.lastChild;
    currentContainer.appendChild(el);
  }
};
