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

function mobileBubbles() {
  homeBubble.style.display = "none";
  aboutBubble.style.left = (sw - (4 * bubbleHeight)) / 5 + "px";
  projectsBubble.style.left = ((sw - (4 * bubbleHeight)) / 5) * 2 + bubbleHeight + "px";
  resumeBubble.style.left = ((sw - (4 * bubbleHeight)) / 5) * 3 + (2 * bubbleHeight) + "px";
  contactBubble.style.left = ((sw - (4 * bubbleHeight)) / 5) * 4 + (3 * bubbleHeight) + "px";
  mainBubble.style.top = bubbleHeight + 20 + "px";
  mainBubble.style.transform = "translateY(0) translateX(-50%)";
  mainBubble.style.height = "200px";
  mainBubble.style.width = "200px";
  mainBubbleInner.style.height = "200px";
  mainBubbleInner.style.width = "200px";
  mainBubbleInner.style.fontSize = "25pt";
  mainBubble.style.borderWidth = "5px";
  mainBubbleInner.style.borderWidth = "5px";
  myName.style.display = "none";
  myNameMobile.style.display = "block";
  myNameMobile.style.top = bubbleHeight + 40 + "px";
  footer.style.backgroundColor = "#fff07ccc";
  footer.style.width = "100%";
  footer.style.textAlign = "center";
  footer.style.zIndex = "200";
}

function mobileHomeClick() {
  homeBubble.addEventListener("click", mobileHomeSetup);
  homeBubble.addEventListener("touchstart", mobileHomeSetup);
}

function mobileHomeSetup() {
  showAllBubbles();
  realignMobileBubbles();
  closeAbout();
  closeProjects();
  closeResume();
  closeContact();
  mobileBubbles();
}