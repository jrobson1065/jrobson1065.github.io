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
      homeBubble.style.left = "200px";
      homeBubble.style.bottom = "75%";
      aboutBubble.style.left = "500px";
      aboutBubble.style.bottom = "75%";
      resumeBubble.style.left = "800px";
      resumeBubble.style.bottom = "75%";
      projectsBubble.style.left = "1100px";
      projectsBubble.style.bottom = "75%";
      contactBubble.style.left = "150px";
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
