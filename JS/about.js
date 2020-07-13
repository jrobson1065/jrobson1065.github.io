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
        homeBubble.style.bottom = "560px";
        projectsBubble.style.left = "80%";
        projectsBubble.style.bottom = "380px";
        resumeBubble.style.left = "80%";
        resumeBubble.style.bottom = "200px";
        contactBubble.style.left = "80%";
        contactBubble.style.bottom = "20px";
        setTimeout(() => {
          startRays();
        }, 1000);
      }, 100);
    }, 200);
  });
}

imgRotator();
