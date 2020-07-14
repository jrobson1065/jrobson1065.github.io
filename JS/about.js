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
        homeBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 4 + (3 * bubbleHeight) + "px";
        projectsBubble.style.left = "80%";
        projectsBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 3 + (2 * bubbleHeight) + "px";
        resumeBubble.style.left = "80%";
        resumeBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 2 + bubbleHeight + "px";
        contactBubble.style.left = "80%";
        contactBubble.style.bottom = (sh - (4 * bubbleHeight)) / 5 + "px";
        setTimeout(() => {
          startRays();
        }, 1000);
      }, 100);
    }, 200);
  });
}

imgRotator();
