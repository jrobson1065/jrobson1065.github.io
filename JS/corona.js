let character = document.querySelector("#character");
let block1 = document.querySelector("#block1");
let block2 = document.querySelector("#block2");
let background = document.querySelector("#game-background");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let lifeCount = 3;
let youWin = document.querySelector("#you-win");
let gameOver = document.querySelector("#gameover");
let life1 = document.querySelector("#life1");
let life2 = document.querySelector("#life2");
let life3 = document.querySelector("#life3");
let lifebar = document.querySelector("#life-bar");
let pointBar = document.querySelector("#point-bar");
let pointBox = document.querySelector("#points");
let points = 0;

document.body.addEventListener("keyup", function(e) {
  if (character.classList != "jump" && character.classList != "crouch") {
    if (e.keyCode == 32 || e.keyCode == 38) {
      jump();
    } else if (e.keyCode == 40) {
      crouch();
    }
  }
});

startButton.addEventListener("click", gameStart);

restartButton.addEventListener("click", gameRestart);

function gameStart() {
  character.style.display = "block";
  lifebar.style.visibility = "visible";
  pointBar.style.visibility = "visible";
  startButton.style.display = "none";
  background.classList.add("start");
  gameOver.style.display = "none";
  points = 1;
  gameLoop();
}

function gameRestart() {
  location.reload();
}

function gameLoop() {
  setInterval(function () {
    var x = Math.random() * 2;
    if (x > 1) {
      block1.classList.add("slide");
      setTimeout(function () {
        block1.classList.remove("slide");
      }, 2400);
    } else {
      block2.classList.add("slide");
      setTimeout(function () {
        block2.classList.remove("slide");
      }, 2400);
    }
  }, 2500);
}

function jump() {
  character.classList.add("jump");
  setTimeout(function () {
    character.classList.remove("jump");
  }, 1000);
}

function crouch() {
  character.classList.add("crouch");
  setTimeout(function () {
    character.classList.remove("crouch");
  }, 1000);
}

var checkHit = setInterval(function () {
  var characterBottom = parseInt(
    window.getComputedStyle(character).getPropertyValue("bottom")
  );
  var block1Right = parseInt(
    window.getComputedStyle(block1).getPropertyValue("right")
  );
  var block2Right = parseInt(
    window.getComputedStyle(block2).getPropertyValue("right")
  );
  if (
    (block1Right > 670 && block1Right < 780 && characterBottom <= 165) ||
    (block2Right > 670 && block2Right < 780 && characterBottom > 15)
  ) {
    lifeCount -= 1;
  }
}, 220);

var checkLife = setInterval(function () {
  if (lifeCount == 3) {
    life1.style.display = "flex";
    life2.style.display = "flex";
    life3.style.display = "flex";
  } else if (lifeCount == 2) {
    life1.style.display = "flex";
    life2.style.display = "flex";
    life3.style.display = "none";
  } else if (lifeCount == 1) {
    life1.style.display = "flex";
    life2.style.display = "none";
    life3.style.display = "none";
  } else {
    gameEnd();
    gameLose();
  }
}, 10);

var updatePoints = setInterval(function () {
  if (points > 0 && points < 500) {
    points += 1;
    pointBox.innerHTML = points;
  }
  if (points >= 500) {
    gameEnd();
    gameWin();
  }
}, 80);

function gameEnd() {
  block1.style.animation = "none";
  block2.style.animation = "none";
  background.classList.remove("start");
  restartButton.style.display = "block";
}

function gameLose() {
  gameOver.style.display = "block";
}

function gameWin() {
  youWin.style.display = "block";
}
