
function showAllBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.display = "block";
  }
}

function closeAbout() {
  aboutBox.style.left = "-500px";
  aboutBox2.style.left = "120%";

  setTimeout(() => {
    aboutBox.style.display = "none";
    aboutBox2.style.display = "none";
  }, 2000);
}

function openAbout() {
  aboutBox.style.display = "block";
  aboutBox2.style.display = "block";

  setTimeout(() => {
    aboutBox.style.left = "200px";
    aboutBox2.style.left = "700px";
  }, 10);
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
  projectImgBox.style.bottom = "50px";
  projectJavaBox.style.top = "50px";
  projectHTMLBox.style.left = "850px";
  projectJSBox.style.left = "400px";

  for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.display = "block";
  }
}

function closeProjects() {
  projectImgBox.style.bottom = "-500px";
  projectJavaBox.style.top = "-400px";
  projectHTMLBox.style.left = "120%";
  projectJSBox.style.left = "-450px";

  for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.display = "block";
  }
}

function openContact() {
  contactEmailBox.style.left = "200px";
  contactLinkedinBox.style.left = "800px";
  contactGithubBox.style.top = "500px";
}

function closeContact() {
  contactEmailBox.style.left = "-500px";
  contactLinkedinBox.style.left = "120%";
  contactGithubBox.style.top = "120%";
}

function openResume() {
  resumeBox.style.display = "block";
  setTimeout(() => {
    resumeBox.style.height = "95vh";
  }, 10);
}

function closeResume() {
  resumeBox.style.height = "0";
  setTimeout(() => {
    resumeBox.style.display = "none";
  }, 1000);
}
