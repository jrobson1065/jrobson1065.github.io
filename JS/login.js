let login = document.querySelector("#login-content");
let signup = document.querySelector("#signup-content");
let logintitle = document.querySelector("#login-title");
let signuptitle = document.querySelector("#signup-title");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#login-title").addEventListener("click", loginExpand);
  document
    .querySelector("#signup-title")
    .addEventListener("click", signupExpand);
  document.querySelector("#login").addEventListener("click", callSignIn);
  document.querySelector("#signup").addEventListener("click", callSignUp);
  document.querySelector("#recover").addEventListener("click", callRecoverPW);
});

document
  .querySelector("#login-first-name")
  .addEventListener("keyup", function () {
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
  });

  document
    .querySelector("#signup-first-name")
    .addEventListener("keyup", function () {
      this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    });

function loginExpand() {
  login.classList.add("pressed");
  signup.classList.remove("pressed");
  logintitle.classList.add("title-pressed");
  signuptitle.classList.remove("title-pressed");
}

function callRecoverPW() {
  alert("Disabled for Demo");
}

function signupExpand() {
  signup.classList.add("pressed");
  login.classList.remove("pressed");
  signuptitle.classList.add("title-pressed");
  logintitle.classList.remove("title-pressed");
}

function callSignIn() {
  alert("Disabled for Demo");
}

function callSignUp() {
  alert("Disabled for Demo");
}
