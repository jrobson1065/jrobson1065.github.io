if (sw >= 1000) {
  fullscreenLoadup();
  fullscreenHomeClick();
  fullscreenAboutClick();
  fullscreenContactClick();
  fullscreenResumeClick();
  fullscreenProjectsClick();
}

if (sw < 1000) {
    document.querySelector(".disabled").style.display = "block";
}

if (sw > 800 && sw < 1300) {

}
