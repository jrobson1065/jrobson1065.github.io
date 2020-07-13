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
        homeBubble.style.left = "150px";
        homeBubble.style.bottom = "560px";
        aboutBubble.style.left = "150px";
        aboutBubble.style.bottom = "380px";
        projectsBubble.style.left = "150px";
        projectsBubble.style.bottom = "200px";
        resumeBubble.style.left = "-200px";
        resumeBubble.style.bottom = "200px";
        resumeBubble.style.display = "none";
        contactBubble.style.left = "150px";
        contactBubble.style.bottom = "20px";
        mainBubble.style.opacity = "0.3";
        setTimeout(() => {
          startRays();
        }, 1000);
      }, 100);
    }, 200);
  });
}
