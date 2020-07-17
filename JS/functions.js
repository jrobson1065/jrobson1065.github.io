function showAllBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.display = "block";
  }
}

function checkGoldenGirls() {
  if (goldenGirlsSwitch === "on") {
    goldenGirlsSwitch = "off";
    removeGoldenGirls();
  }
}

function realignMobileBubbles() {
  setTimeout(() => {
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].style.top = "10px";
      bubbles[i].style.zIndex = "600";
    }
  }, 50);
}

function openAbout() {
  checkGoldenGirls();
  pageSwitch = "on";
  aboutBox.style.display = "block";
  aboutBox2.style.display = "block";

  setTimeout(() => {
    aboutBox.style.left = "15%";
    aboutBox2.style.left = "50%";
  }, 10);

  setTimeout(() => {
    pageSwitch = "off";
  }, 500);
}

function closeAbout() {
  aboutBox.style.left = "-500px";
  aboutBox2.style.left = "120%";

  if (sw < 1000) {
    aboutBox.style.left = "120%";
    aboutBox2.style.left = "120%";
  }

  setTimeout(() => {
    aboutBox.style.display = "none";
    aboutBox2.style.display = "none";
  }, 2000);
}

function imgRotator() {
  let c = 0;
  setInterval(() => {
    if (c === 0) aboutImg.style.backgroundImage = "url(/images/self.jpg)";
    if (c === 1) aboutImg.style.backgroundImage = "url(/images/self2.jpg)";
    if (c === 2) aboutImg.style.backgroundImage = "url(/images/self3.jpg)";
    if (c === 3) aboutImg.style.backgroundImage = "url(/images/self4.jpg)";
    c++;
    if (c === 4) c = 0;
  }, 5000);
}

function openProjects() {
  checkGoldenGirls();
  pageSwitch = "on";
  projectImgBox.style.display = "block";
  projectImgBox.style.bottom = "50px";
  projectJavaBox.style.top = "50px";
  projectHTMLBox.style.left = "60%";
  projectJSBox.style.left = "20%";

  for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.display = "block";
  }

  setTimeout(() => {
    pageSwitch = "off";
  }, 500);
}

function closeProjects() {
  projectImgBox.style.bottom = "-500px";
  projectJavaBox.style.top = "-400px";
  projectHTMLBox.style.left = "120%";
  projectJSBox.style.left = "-450px";
  projectsDisclaimer.style.display = "none";

  for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.display = "none";
  }

  for (let i = 0; i < projectImagesMobile.length; i++) {
    projectImagesMobile[i].style.display = "none";
  }

  setTimeout(() => {
    projectImgBox.style.display = "none";
  }, 800);
}

function openResume() {
  checkGoldenGirls();
  pageSwitch = "on";
  downloadPDFDiv.style.display = "block";
  resumeBox.style.display = "block";
  resumeBox.style.left =
    (sw - bubbleHeight - 100 - 800) / 2 + bubbleHeight + 100 + "px";

  setTimeout(() => {
    resumeBox.style.height = "95vh";
  }, 10);

  setTimeout(() => {
    pageSwitch = "off";
  }, 500);
}

function closeResume() {
  downloadPDFDiv.style.display = "none";
  resumeBox.style.height = "0";
  setTimeout(() => {
    resumeBox.style.display = "none";
  }, 1000);
}

function openContact() {
  checkGoldenGirls();
  pageSwitch = "on";

  contactEmailBox.style.display = "block";
  contactLinkedinBox.style.display = "block";
  contactGithubBox.style.display = "block";

  setTimeout(() => {
    contactEmailBox.style.left = "20%";
    contactLinkedinBox.style.left = "60%";
    contactGithubBox.style.top = "70%";
  }, 100);

  setTimeout(() => {
    pageSwitch = "off";
  }, 500);
}

function closeContact() {
  contactEmailBox.style.left = "-500px";
  contactLinkedinBox.style.left = "120%";
  contactGithubBox.style.top = "120%";

  setTimeout(() => {
    contactEmailBox.style.display = "none";
    contactLinkedinBox.style.display = "none";
    contactGithubBox.style.display = "none";
  }, 100);

  if (sw < 1000) {
    contactEmailBox.style.left = "120%";
    contactLinkedinBox.style.left = "120%";
    contactGithubBox.style.left = "120%";
  }
}

function stopRays() {
  raySwitch = "off";
}

function startRays() {
  if (pageSwitch === "off") raySwitch = "on";
}

for (let i = 0; i < bubbles.length; i++) {
  bubbles[i].addEventListener("mouseover", () => {
    stopRays();
  });

  bubbles[i].addEventListener("mouseout", () => {
    startRays();
  });

  mainBubble.addEventListener("mouseover", () => {
    startRays();
  });
}

myName.addEventListener("click", () => {
  if (goldenGirlsSwitch === "on") {
    goldenGirlsSwitch = "off";
  } else {
    goldenGirlsSwitch = "on";
  }

  if (goldenGirlsSwitch === "off") {
    removeGoldenGirls();
  } else {
    showGoldenGirls();
  }
});

function showGoldenGirls() {
  fullscreenLoadup();

  setTimeout(() => {
    goldenGirlsQuote.style.display = "block";
    mainBubbleSpan.innerText = "The Golden Girls.";
    aboutBubbleSpan.innerText = "Blanche.";
    aboutBubbleSpan.style.top = "80%";
    aboutBubbleSpan.style.fontWeight = "bolder";
    aboutBubbleSpan.style.textShadow =
      "2px 2px 5px aliceblue, -2px -2px 5px aliceblue, 2px 2px 5px aliceblue, -2px -2px 5px aliceblue";
    aboutBubbleInner.style.backgroundImage = "url(/images/blanche.jpg)";
    aboutBubbleInner.style.backgroundSize = "cover";
    projectsBubbleSpan.innerText = "Dorothy.";
    projectsBubbleSpan.style.top = "80%";
    projectsBubbleSpan.style.fontWeight = "bolder";
    projectsBubbleSpan.style.textShadow =
      "2px 2px 5px aliceblue, -2px -2px 5px aliceblue, 2px 2px 5px aliceblue, -2px -2px 5px aliceblue";
    projectsBubbleInner.style.backgroundImage = "url(/images/dorothy.jpg)";
    projectsBubbleInner.style.backgroundSize = "cover";
    projectsBubbleInner.style.backgroundPositionX = "-20px";
    resumeBubbleSpan.innerText = "Rose.";
    resumeBubbleSpan.style.top = "80%";
    resumeBubbleSpan.style.fontWeight = "bolder";
    resumeBubbleSpan.style.textShadow =
      "2px 2px 5px aliceblue, -2px -2px 5px aliceblue, 2px 2px 5px aliceblue, -2px -2px 5px aliceblue";
    resumeBubbleInner.style.backgroundImage = "url(/images/rose.jpg)";
    resumeBubbleInner.style.backgroundSize = "cover";
    resumeBubbleInner.style.backgroundPositionX = "-20px";
    contactBubbleSpan.innerText = "Sophia.";
    contactBubbleSpan.style.top = "80%";
    contactBubbleSpan.style.fontWeight = "bolder";
    contactBubbleSpan.style.textShadow =
      "2px 2px 5px aliceblue, -2px -2px 5px aliceblue, 2px 2px 5px aliceblue, -2px -2px 5px aliceblue";
    contactBubbleInner.style.backgroundImage = "url(/images/sophia.jpg)";
    contactBubbleInner.style.backgroundSize = "cover";
    contactBubbleInner.style.backgroundPositionX = "-50px";
  }, 1000);
}

function removeGoldenGirls() {
  goldenGirlsQuote.style.display = "none";
  mainBubbleSpan.innerText = "Coding with a smile.";
  aboutBubbleSpan.innerText = "About.";
  aboutBubbleSpan.style.top = "";
  aboutBubbleSpan.style.fontWeight = "";
  aboutBubbleSpan.style.textShadow = "";
  aboutBubbleInner.style.backgroundImage = "";
  projectsBubbleSpan.innerText = "Projects.";
  projectsBubbleSpan.style.top = "";
  projectsBubbleSpan.style.fontWeight = "";
  projectsBubbleSpan.style.textShadow = "";
  projectsBubbleInner.style.backgroundImage = "";
  resumeBubbleSpan.innerText = "Resume.";
  resumeBubbleSpan.style.top = "";
  resumeBubbleSpan.style.fontWeight = "";
  resumeBubbleSpan.style.textShadow = "";
  resumeBubbleInner.style.backgroundImage = "";
  contactBubbleSpan.innerText = "Contact.";
  contactBubbleSpan.style.top = "";
  contactBubbleSpan.style.fontWeight = "";
  contactBubbleSpan.style.textShadow = "";
  contactBubbleInner.style.backgroundImage = "";
}
