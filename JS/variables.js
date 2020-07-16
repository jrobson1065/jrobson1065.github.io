const mainBubble = document.querySelector("main .outer");
const mainBubbleInner = document.querySelector("main .inner");
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
const projectImagesMobile = document.querySelectorAll(".screenshot-mobile");
const contactEmailBox = document.querySelector(".email-text");
const contactLinkedinBox = document.querySelector(".linkedin-text");
const contactGithubBox = document.querySelector(".github-text");
const resumeBox = document.querySelector("iframe");
const resumeArticle = document.querySelector(".resume");
const myName = document.querySelector(".my-name");
const myNameMobile = document.querySelector(".my-name-mobile");
const rayDivs = document.querySelectorAll(".ray");
const footer = document.querySelector("footer");
const blueMobileHeader = document.querySelector(".blue-mobile-header");
const projectsDisclaimer = document.querySelector(".projects-disclaimer");
let bubbleHeight = 0;
let sw = window.innerWidth;
let sh = window.innerHeight;
let raySwitch = "on";
let pageSwitch = "off";

for (let i = 0; i < bubbles.length; i++) {
  let bubble = bubbles[i];
  let bubbleInner = bubblesInner[i];
  if (sw >= 1300) {
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

  if (sw < 1000) {
    bubbleHeight = Math.min(100, sw / 6);
    bubble.style.height = bubbleHeight + "px";
    bubble.style.width = bubbleHeight + "px";
    bubbleInner.style.height = bubbleHeight + "px";
    bubbleInner.style.width = bubbleHeight + "px";
    bubbleInner.style.fontSize = "12pt";
    bubble.style.borderWidth = "3px";
    bubbleInner.style.borderWidth = "3px";
  }

  if (sw < 600) {
    bubbleInner.style.fontSize = "10pt";
  }
  if (sw < 600) bubbleInner.style.fontSize = "8pt";
  if (sw < 400) bubbleInner.style.fontSize = "6pt";
}

for (let i = 0; i < projectImages.length; i++) {
  projectImages[i].style.left = 0.6 * sw + 10 + "px";
}

if (sw > 800) {
  window.addEventListener("resize", () => {
    location.reload();
  });
}
