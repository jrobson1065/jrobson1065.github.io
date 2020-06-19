var character = document.getElementById("character");
var block = document.getElementsByClassName("block");

document.body.onkeyup = function (e) {
  if (character.classList != "jump" && character.classList != "crouch") {
    if (e.keyCode == 32 || e.keyCode == 40) {
      jump();
    }
    if (e.keyCode == 40) {
      crouch();
    }
  }
};

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
