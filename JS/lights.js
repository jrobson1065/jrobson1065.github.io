const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const c = canvas.getContext("2d");
const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const spaceInput = document.querySelector("#space");
const colorInput = document.querySelector("#color");
const brightnessInput = document.querySelector("#brightness");
const sizeInput = document.querySelector("#size");
let cw = 500;
let ch = 300;
let space = 15;
let color = "red";
let brightness = 10;
let size = 5;
canvas.width = cw;
canvas.height = ch;

widthInput.addEventListener("change", (event) => {
  cw = parseInt(widthInput.value);
  if (cw < 200) cw = 200;
  if (cw > 1000) cw = 1000;
  canvas.width = cw;
  run();
});

heightInput.addEventListener("change", (event) => {
  ch = parseInt(heightInput.value);
  if (ch < 200) ch = 200;
  if (ch > 600) ch = 600;
  canvas.height = ch;
  run();
});

spaceInput.addEventListener("change", (event) => {
  space = parseInt(spaceInput.value);
  if (space < 15) space = 15;
  if (space > 50) space = 50;
  run();
});

colorInput.addEventListener("change", (event) => {
  color = colorInput.value;
  run();
});

brightnessInput.addEventListener("change", (event) => {
  brightness = parseInt(brightnessInput.value);
  if (brightness < 3) brightness = 3;
  if (brightness > 20) brightness = 20;
  run();
});

sizeInput.addEventListener("change", (event) => {
  size = parseInt(sizeInput.value);
  if (size < 3) size = 3;
  run();
});

let x = 0;
let y = 0;

function run() {
  c.clearRect(0, 0, cw, ch);
  requestAnimationFrame(generateLights);
}

function generateLights() {
  lightsTop();
  lightsBottom();
  lightsLeft();
  lightsRight();
}

const lightsTop = function () {
  for (let i = 20 + size; i < cw - 15; i += space) {
    let randX = Math.random() * (5 + size);
    c.beginPath();
    c.arc(i, size + randX + 3, size, 0, Math.PI * 2);
    c.fillStyle = color;
    c.shadowBlur = brightness;
    c.shadowColor = color;
    c.fill();
  }
};

const lightsBottom = function () {
  for (let i = 20 + size; i < cw - 15; i += space) {
    let randX = Math.random() * (5 + size);
    c.beginPath();
    c.arc(i, ch - size - randX - 3, size, 0, Math.PI * 2);
    c.fillStyle = color;
    c.shadowBlur = brightness;
    c.shadowColor = color;
    c.fill();
  }
};

const lightsLeft = function () {
  for (let i = 20 + size; i < ch - 15; i += space) {
    let randX = Math.random() * (5 + size);
    c.beginPath();
    c.arc(size + randX + 3, i, size, 0, Math.PI * 2);
    c.fillStyle = color;
    c.shadowBlur = brightness;
    c.shadowColor = color;
    c.fill();
  }
};

const lightsRight = function () {
  for (let i = 20 + size; i < ch - 15; i += space) {
    let randX = Math.random() * (5 + size);
    c.beginPath();
    c.arc(cw - size - randX - 3, i, size, 0, Math.PI * 2);
    c.fillStyle = color;
    c.shadowBlur = brightness;
    c.shadowColor = color;
    c.fill();
  }
};
