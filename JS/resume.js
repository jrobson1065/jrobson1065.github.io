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
        homeBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 4 + (3 * bubbleHeight) + "px";
        aboutBubble.style.left = "80px";
        aboutBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 3 + (2 * bubbleHeight) + "px";
        projectsBubble.style.left = "80px";
        projectsBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 2 + bubbleHeight + "px";
        resumeBubble.style.left = "-200px";
        resumeBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 2 + bubbleHeight + "px";
        resumeBubble.style.display = "none";
        contactBubble.style.left = "80px";
        contactBubble.style.bottom = (sh - (4 * bubbleHeight)) / 5 + "px";
        mainBubble.style.opacity = "0.3";
        setTimeout(() => {
          startRays();
        }, 1000);
      }, 100);
    }, 200);
  });
}
