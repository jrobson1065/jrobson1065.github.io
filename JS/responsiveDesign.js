if (sw >= 1000) {
  fullscreenLoadup();
  fullscreenHomeClick();
  fullscreenAboutClick();
  fullscreenProjectsClick();
  fullscreenResumeClick();
  fullscreenContactClick();
}

if (sw < 1000) {
  for (let i = 0; i < rayDivs.length; i++) {
    rayDivs[i].parentNode.removeChild(rayDivs[i]);
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.top = "10px";
    bubbles[i].style.zIndex = "600";
  }

  blueMobileHeader.style.display = "block";
  blueMobileHeader.style.height = bubbleHeight + 20 + "px";
  mainBubble.style.zIndex = -1;
  myNameMobile.style.zIndex = -1;
  aboutBox.style.display = "none";

  closeAbout();
  closeProjects();
  closeResume();
  closeContact();

  mobileBubbles();
  mobileHomeClick();
  mobileAboutClick();
  mobileProjectsClick();
  mobileResumeClick();
  mobileContactClick();
}
