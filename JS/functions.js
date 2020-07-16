function showAllBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.display = "block";
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
