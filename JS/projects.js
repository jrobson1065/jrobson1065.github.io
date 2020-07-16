function fullscreenProjectsClick() {
  projectsBubble.addEventListener("click", () => {
    stopRays();
    setTimeout(() => {
      showAllBubbles();
      closeAbout();
      closeContact();
      closeResume();
      openProjects();

      setTimeout(() => {
        homeBubble.style.left = "80px";
        homeBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
        aboutBubble.style.left = "80px";
        aboutBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
        projectsBubble.style.left = "-200px";
        projectsBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
        projectsBubble.style.display = "none";
        resumeBubble.style.left = "80px";
        resumeBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
        contactBubble.style.left = "80px";
        contactBubble.style.bottom = (sh - 4 * bubbleHeight) / 5 + "px";
        mainBubble.style.opacity = "0.3";
      }, 100);
    }, 200);
  });
}

function mobileProjectsClick() {
  projectsBubble.addEventListener("click", mobileProjectsSetup);
  projectsBubble.addEventListener("touchstart", mobileProjectsSetup);
}

function mobileProjectsSetup() {
  closeAbout();
  closeResume();
  closeContact();
  showAllBubbles();
  realignMobileBubbles();
    adjustMobileBubblesProjects();

  for (let i = 0; i < projectImagesMobile.length; i++) {
    projectImagesMobile[i].style.display = "block";
  }

  projectsDisclaimer.style.display = "block";

  projectImgBox.style.display = "block";
  projectImgBox.style.left = "20px";
  projectImgBox.style.top = "20px";
  projectImgBox.style.position = "relative";
  projectImgBox.style.margin = "0 auto 80px auto";

  let i = 0;

  setInterval(() => {
    if (i === 0) {
      projectImagesMobile[projectImagesMobile.length - 1].style.opacity = "0";
    } else {
      projectImagesMobile[i - 1].style.opacity = "0";
    }

    projectImagesMobile[i].style.opacity = "1";

    i++;
    if (i === projectImagesMobile.length) i = 0;
  }, 4000);
}

function adjustMobileBubblesProjects() {
  projectsBubble.style.top = "-200px";
  setTimeout(() => {
    projectsBubble.style.display = "none";
  }, 500);
  homeBubble.style.left = (sw - 4 * bubbleHeight) / 5 + "px";
  aboutBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
  resumeBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
  contactBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
}
