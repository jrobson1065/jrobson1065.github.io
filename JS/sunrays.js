class Ray {
  constructor(div) {
    this.div = div;
    this.angle = Math.random() * 90;
    this.direction = "up";
    this.pace = Math.random() * 0.1 + 0.05;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.opacDir = "up";
  }

  update() {
    this.div.style.transform = "rotate(" + this.angle + "deg)";
    this.div.style.height = this.angle + "px";
    if (this.angle > 90) this.angle = 0;
    this.angle += this.pace;
    this.div.style.opacity = this.opacity;
    if (this.opacity > 0.6) this.opacDir = "down";
    if (this.opacity < 0.1) this.opacDir = "up";
    if (this.opacDir === "up") {
      this.opacity += 0.002;
    } else {
      this.opacity -= 0.002;
    }
  }
}

const rays = [...document.querySelectorAll(".ray")].map((div) => new Ray(div));

setInterval(() => {
  for (let i = 0; i < rays.length; i++) {
    if (raySwitch === "on") {
      rays[i].update();
    }
  }
}, 20);
