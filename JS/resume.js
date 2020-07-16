function fullscreenResumeClick() {
  resumeBubble.addEventListener("click", () => {
    stopRays();
    setTimeout(() => {
      showAllBubbles();
      closeAbout();
      closeProjects();
      closeContact();
      openResume();

      setTimeout(() => {
        homeBubble.style.left = "80px";
        homeBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
        aboutBubble.style.left = "80px";
        aboutBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
        projectsBubble.style.left = "80px";
        projectsBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
        resumeBubble.style.left = "-200px";
        resumeBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
        resumeBubble.style.display = "none";
        contactBubble.style.left = "80px";
        contactBubble.style.bottom = (sh - 4 * bubbleHeight) / 5 + "px";
        mainBubble.style.opacity = "0.3";
        setTimeout(() => {
          startRays();
        }, 1000);
      }, 100);
    }, 200);
  });
}

function mobileResumeClick() {
  resumeBubble.addEventListener("click", mobileResumeSetup);
  resumeBubble.addEventListener("touchstart", mobileResumeSetup);
}

function mobileResumeSetup() {
  closeAbout();
  closeProjects();
  closeContact();
  showAllBubbles();
  realignMobileBubbles();
  setTimeout(() => {
    adjustMobileBubblesResume();
  }, 100);

  downloadPDFDiv.style.display = "block";
  downloadPDFDiv.style.left = "0";
  downloadPDFDiv.style.marginLeft = "0";
  downloadPDFDiv.style.top = "200px";
  downloadPDFDiv.style.height = "50px";
  downloadPDFDiv.style.lineHeight = "50px";

}

function adjustMobileBubblesResume() {
  resumeBubble.style.top = "-200px";
  setTimeout(() => {
    resumeBubble.style.display = "none";
  }, 500);
  homeBubble.style.left = (sw - 4 * bubbleHeight) / 5 + "px";
  aboutBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
  projectsBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
  contactBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
}
