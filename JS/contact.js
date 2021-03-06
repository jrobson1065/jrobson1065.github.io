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
        aboutBubble.style.bottom = "75%";
        projectsBubble.style.bottom = "75%";
        resumeBubble.style.bottom = "75%";
        contactBubble.style.left = (sw / 5) * 4 + "px";
        contactBubble.style.bottom = "75%";
        contactBubble.style.display = "none";
        homeBubble.style.left = (sw - 4 * bubbleHeight) / 5 + "px";
        aboutBubble.style.left =
          ((sw - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
        projectsBubble.style.left =
          ((sw - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
        resumeBubble.style.left =
          ((sw - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
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
  realignMobileBubbles();
  setTimeout(() => {
    adjustMobileBubblesContact();
  }, 100);

  contactEmailBox.style.display = "block";
  contactLinkedinBox.style.display = "block";
  contactGithubBox.style.display = "block";

  setTimeout(() => {
    contactEmailBox.style.position = "relative";
    contactEmailBox.style.left = "5px";
    contactLinkedinBox.style.left = "5px";
    contactLinkedinBox.style.position = "relative";
    contactLinkedinBox.style.margin = "50px 0";
    contactGithubBox.style.left = "5px";
    contactGithubBox.style.position = "relative";
    contactGithubBox.style.marginBottom = "80px";
  }, 100);
}

function adjustMobileBubblesContact() {
  contactBubble.style.top = "-200px";
  setTimeout(() => {
    contactBubble.style.display = "none";
  }, 500);
  homeBubble.style.left = (sw - 4 * bubbleHeight) / 5 + "px";
  aboutBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
  projectsBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
  resumeBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
}
