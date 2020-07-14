function fullscreenLoadup() {
  mainBubble.style.opacity = "1";

  stopRays();
  showAllBubbles();
  closeAbout();
  closeProjects();
  closeContact();
  closeResume();

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.bottom = "-200px";
    bubbles[i].style.top = "";
  }

  homeBubble.style.left = sw / 5 + "px";
  homeBubble.style.bottom = "20px";
  aboutBubble.style.left = sw / 5 + "px";
  projectsBubble.style.left = (sw / 5) * 2 + "px";
  resumeBubble.style.left = (sw / 5) * 3 + "px";
  contactBubble.style.left = (sw / 5) * 4 + "px";

  homeBubble.style.display = "none";
  bubblesPopUp();

  setTimeout(() => {
    startRays();
  }, 3000);
}

function bubblesPopUp() {
  setTimeout(() => {
    bubbles[0].style.bottom = "80px";
  }, 1000);

  setTimeout(() => {
    bubbles[0].style.bottom = "20px";
  }, 1400);

  setTimeout(() => {
    bubbles[1].style.bottom = "70px";
  }, 1300);

  setTimeout(() => {
    bubbles[1].style.bottom = "20px";
  }, 1700);

  setTimeout(() => {
    bubbles[2].style.bottom = "60px";
  }, 1600);

  setTimeout(() => {
    bubbles[2].style.bottom = "20px";
  }, 2000);

  setTimeout(() => {
    bubbles[3].style.bottom = "50px";
  }, 1900);

  setTimeout(() => {
    bubbles[3].style.bottom = "20px";
  }, 2300);
}

function fullscreenHomeClick() {
  homeBubble.addEventListener("click", () => {
    fullscreenLoadup();
  });
}
