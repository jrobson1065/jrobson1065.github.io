function showAllBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.display = "block";
  }
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

  setTimeout(() => {
    aboutBox.style.display = "none";
    aboutBox2.style.display = "none";
  }, 2000);
}

let c = 0;
function imgRotator() {
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

  for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.display = "none";
  }
}

function openContact() {
  pageSwitch = "on";
  contactEmailBox.style.left = "20%";
  contactLinkedinBox.style.left = "60%";
  contactGithubBox.style.top = "70%";

  setTimeout(() => {
    pageSwitch = "off";
  }, 500);
}

function closeContact() {
  contactEmailBox.style.left = "-500px";
  contactLinkedinBox.style.left = "120%";
  contactGithubBox.style.top = "120%";
}

function openResume() {
  pageSwitch = "on";
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
  resumeBox.style.height = "0";
  setTimeout(() => {
    resumeBox.style.display = "none";
  }, 1000);
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