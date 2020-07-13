function fullscreenLoadup() {
  mainBubble.style.opacity = "1";

  showAllBubbles();
  closeAbout();
  closeProjects();
  closeContact();
  closeResume();

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.bottom = "-200px";
    bubbles[i].style.top = "";
  }

  homeBubble.style.left = "200px";
  homeBubble.style.bottom = "20px";
  aboutBubble.style.left = "200px";
  projectsBubble.style.left = "500px";
  resumeBubble.style.left = "800px";
  contactBubble.style.left = "1100px";

  homeBubble.style.display = "none";
  bubblesPopUp();
}

function bubblesPopUp() {
  setTimeout(() => {
    bubbles[0].style.bottom = "80px";
  }, 1000);

  setTimeout(() => {
    bubbles[0].style.bottom = "20px";
  }, 2000);

  setTimeout(() => {
    bubbles[1].style.bottom = "70px";
  }, 1300);

  setTimeout(() => {
    bubbles[1].style.bottom = "20px";
  }, 2300);

  setTimeout(() => {
    bubbles[2].style.bottom = "60px";
  }, 1600);

  setTimeout(() => {
    bubbles[2].style.bottom = "20px";
  }, 2600);

  setTimeout(() => {
    bubbles[3].style.bottom = "50px";
  }, 1900);

  setTimeout(() => {
    bubbles[3].style.bottom = "20px";
  }, 2900);
}

function fullscreenHomeClick() {
  homeBubble.addEventListener("click", () => {
    fullscreenLoadup();
  });
}
