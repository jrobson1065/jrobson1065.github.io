var character = document.getElementById("character");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var background = document.getElementById("game-background");
var startButton = document.getElementById("start-btn");
var lifeCount = 3;
var gameState = "off";

document.body.onkeyup = function (e) {
  if (character.classList != "jump" && character.classList != "crouch") {
    if (e.keyCode == 32 || e.keyCode == 38) {
      jump();
    }
    if (e.keyCode == 40) {
      crouch();
    }
  }
};

startButton.addEventListener("click", gameStart);

function gameStart() {
  startButton.classList.add("hide");
  background.classList.add("start");
  gameLoop();
}

function gameLoop() {
  while (true) {
    var x = Math.random() * 2;
    setTimeout(function () {
      if (x > 1) {
        block1.classList.add("slide");
        setTimeout(function () {
          block1.classList.remove("slide");
        }, 4000);
      } else {
        block2.classList.add("slide");
        setTimeout(function () {
          block1.classList.remove("slide");
        }, 4000);
      }
    }, 3000);
  }
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
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var block1Left = parseInt(
    window.getComputedStyle(block1).getPropertyValue("left")
  );
  var block2Left = parseInt(
    window.getComputedStyle(block2).getPropertyValue("left")
  );
  if (block1Left < 130 && block1left > 20 && characterBottom <= 165) {
    block1.style.animation = "none";
    block2.style.animation = "none";
    background.classList.remove("start");
    alert("You lose");
  }
  if (block2Left < 130 && block2left > 20 && characterTop >= 110) {
    block1.style.animation = "none";
    block2.style.animation = "none";
    background.classList.remove("start");
    alert("You lose");
  }
}, 10);

var checkDead = setInterval(function () {
  if (lifeCount == 0) {
    gameLose();
  }
}, 10);

var checkPoints = setInterval(function () {
  if (points > 50) {
    gameWin();
  }
}, 10);
