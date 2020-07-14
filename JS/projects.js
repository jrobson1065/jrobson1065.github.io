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
        homeBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 4 + (3 * bubbleHeight) + "px";
        aboutBubble.style.left = "80px";
        aboutBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 3 + (2 * bubbleHeight) + "px";
        projectsBubble.style.left = "-200px";
        projectsBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 3 + (2 * bubbleHeight) + "px";
        projectsBubble.style.display = "none";
        resumeBubble.style.left = "80px";
        resumeBubble.style.bottom = ((sh - (4 * bubbleHeight)) / 5) * 2 + bubbleHeight + "px";
        contactBubble.style.left = "80px";
        contactBubble.style.bottom = (sh - (4 * bubbleHeight)) / 5 + "px";
        mainBubble.style.opacity = "0.3";
      }, 100);
    }, 200);
  });
}
