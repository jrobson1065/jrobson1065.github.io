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
