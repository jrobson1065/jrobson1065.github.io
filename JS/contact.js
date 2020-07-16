function fullscreenContactClick() {
  contactBubble.addEventListener("click", () => {

    stopRays();
    setTimeout(() => {
    showAllBubbles();
    closeAbout();
    closeProjects();
    closeResume();
    openContact();

    setTimeout(() => {
      homeBubble.style.left = sw / 5 + "px";
      homeBubble.style.bottom = "75%";
      aboutBubble.style.left = (sw / 5) * 2 + "px";
      aboutBubble.style.bottom = "75%";
      projectsBubble.style.left = (sw / 5) * 3 + "px";
      projectsBubble.style.bottom = "75%";
      resumeBubble.style.left = (sw / 5) * 4 + "px";
      resumeBubble.style.bottom = "75%";
      contactBubble.style.left = (sw / 5) * 4 + "px";
      contactBubble.style.bottom = "75%";
      contactBubble.style.display = "none";
      mainBubble.style.opacity = "0.3";
      setTimeout(() => {
        startRays();
      }, 1000);
    }, 100);
  }, 200);
  });
}

function mobileContactClick() {
  contactBubble.addEventListener("click", mobileContactSetup);
  contactBubble.addEventListener("touchstart", mobileContactSetup);
}

function mobileContactSetup() {
  closeAbout();
  closeProjects();
  closeResume();
  showAllBubbles();
  adjustMobileBubblesContact();

  contactEmailBox.style.position = "relative";
  contactEmailBox.style.left = "5px";
  contactLinkedinBox.style.left = "5px";
  contactLinkedinBox.style.position = "relative";
  contactLinkedinBox.style.margin = "50px 0";
  contactGithubBox.style.left = "5px";
  contactGithubBox.style.position = "relative";
  contactGithubBox.style.marginBottom = "80px";
}

function adjustMobileBubblesContact() {
  contactBubble.style.display = "none";
  homeBubble.style.left = (sw - 4 * bubbleHeight) / 5 + "px";
  aboutBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
  projectsBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
  resumeBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
}
