let sw = window.innerWidth;

if (sw >= 1300) {
  loadup();
  fullscreenAboutClick();
}

if (sw < 1300) {
    document.querySelector(".disabled").style.display = "block";
}

if (sw > 800 && sw < 1300) {

}

window.addEventListener("resize", () => {
  location.reload();
});
