function fullscreenAboutClick() {
  aboutBubble.addEventListener("click", () => {
    stopRays();
    setTimeout(() => {
      showAllBubbles();
      closeProjects();
      closeContact();
      closeResume();
      openAbout();

      mainBubble.style.opacity = "0.3";
      aboutBubble.style.display = "none";

      setTimeout(() => {
        homeBubble.style.left = "80%";
        homeBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
        projectsBubble.style.left = "80%";
        projectsBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
        resumeBubble.style.left = "80%";
        resumeBubble.style.bottom =
          ((sh - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
        contactBubble.style.left = "80%";
        contactBubble.style.bottom = (sh - 4 * bubbleHeight) / 5 + "px";
        setTimeout(() => {
          startRays();
        }, 1000);
      }, 100);
    }, 200);
  });
}

function mobileAboutClick() {
  aboutBubble.addEventListener("touchstart", mobileAboutSetup);
}

function mobileAboutSetup() {
  closeProjects();
  closeResume();
  closeContact();
  showAllBubbles();
  adjustMobileBubblesAbout();
  aboutBox.style.display = "block";
  aboutBox2.style.display = "block";

  setTimeout(() => {
    aboutBox.style.position = "relative";
    aboutBox.style.left = "0";
    aboutBox.style.width = "90%";
    aboutBox.style.marginLeft = "5%";
    aboutBox.style.transform = "translate(0)";
    aboutBox2.style.position = "relative";
    aboutBox2.style.left = "0";
    aboutBox2.style.top = "10px";
    aboutBox2.style.width = "90%";
    aboutBox2.style.marginTop = "200px";
    aboutBox2.style.marginBottom = "80px";
    aboutBox2.style.marginLeft = "5%";
    aboutBox2.style.transform = "translate(0)";
    aboutImg.style.left = "0";
    aboutImg.style.top = "82%";
    aboutImg.style.pointerEvents = "none";
    aboutImg.style.width = "200px";
    aboutImg.style.height = "200px";
    aboutImg.style.margin = "0 auto";
    aboutImg.style.borderRadius = "15px";
    aboutImg.style.transform = "translate(0)";
    aboutBubble.style.display = "none";
    homeBubble.style.display = "block";
  }, 200);
}

function adjustMobileBubblesAbout() {
  aboutBubble.style.display = "none";
  homeBubble.style.left = (sw - 4 * bubbleHeight) / 5 + "px";
  projectsBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 2 + bubbleHeight + "px";
  resumeBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 3 + 2 * bubbleHeight + "px";
  contactBubble.style.left =
    ((sw - 4 * bubbleHeight) / 5) * 4 + 3 * bubbleHeight + "px";
}

imgRotator();
