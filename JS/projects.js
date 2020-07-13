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
        homeBubble.style.left = "150px";
        homeBubble.style.bottom = "560px";
        aboutBubble.style.left = "150px";
        aboutBubble.style.bottom = "380px";
        projectsBubble.style.left = "-200px";
        projectsBubble.style.bottom = "200px";
        projectsBubble.style.display = "none";
        resumeBubble.style.left = "150px";
        resumeBubble.style.bottom = "200px";
        contactBubble.style.left = "150px";
        contactBubble.style.bottom = "20px";
        mainBubble.style.opacity = "0.3";
      }, 100);
    }, 200);
  });
}
