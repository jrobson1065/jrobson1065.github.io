const mainBubble = document.querySelector("main .outer");
const homeBubble = document.querySelector(".home-bubble");
const aboutBubble = document.querySelector(".about-bubble");
const projectsBubble = document.querySelector(".projects-bubble");
const resumeBubble = document.querySelector(".resume-bubble");
const contactBubble = document.querySelector(".contact-bubble");
const bubbles = document.querySelectorAll(".bubble-outer");
const bubblesInner = document.querySelectorAll(".bubble-inner");
const aboutBox = document.querySelector(".about-text");
const aboutBox2 = document.querySelector(".about-text2");
const aboutImg = document.querySelector(".about-img");
const projectImgBox = document.querySelector(".project-img");
const projectJavaBox = document.querySelector(".java-text");
const projectHTMLBox = document.querySelector(".html-text");
const projectJSBox = document.querySelector(".js-text");
const projectImages = document.querySelectorAll(".screenshot");
const contactEmailBox = document.querySelector(".email-text");
const contactLinkedinBox = document.querySelector(".linkedin-text");
const contactGithubBox = document.querySelector(".github-text");
const resumeBox = document.querySelector("embed");
const myName = document.querySelector(".my-name");
let bubbleHeight = 0;
let sw = window.innerWidth;
let sh = window.innerHeight;
let raySwitch = "on";

for (let i = 0; i < bubbles.length; i++) {
  let bubble = bubbles[i];
  let bubbleInner = bubblesInner[i];
  if (sw > 1300) {
    bubble.style.height = "150px";
    bubble.style.width = "150px";
    bubbleInner.style.height = "150px";
    bubbleInner.style.width = "150px";
    bubbleInner.style.fontSize = "20pt";
    bubbleHeight = 150;
  }

  if (sw < 1300) {
    bubble.style.height = "100px";
    bubble.style.width = "100px";
    bubbleInner.style.height = "100px";
    bubbleInner.style.width = "100px";
    bubbleInner.style.fontSize = "13pt";
    bubbleHeight = 100;
  }
}


for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.left = 0.6 * sw + 10 + "px";
}

window.addEventListener("resize", () => {
  location.reload();
});
