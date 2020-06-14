var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth + 40;
canvas.height = window.innerHeight + 40;

var c = canvas.getContext("2d");

var mouse = {
  x: undefined,
  y: undefined,
};

var maxZ = 4;
var minZ = 3;

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

function Star(x, y, a, z, size, b) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.a = a;
  this.size = size;
  this.b = b;

  var color = "#eae8ff";

  this.draw = function(color) {
    c.globalAlpha = 0.7;
    c.fillStyle = color;
    c.beginPath();
    c.arc(this.x, this.y, Math.max(this.z, 0), 0, Math.PI * 2, false);
    c.fill();
  };

  this.update = function () {
    if (this.z > this.size) {
      this.a = 0;
    }
    if (this.z < 0) {
      this.a = 1;
    }

    if (this.a == 1) {
      this.z += this.b;
    } else {
      this.z -= this.b;
    }

    if (
      mouse.x - this.x < 40 &&
      mouse.x - this.x > -40 &&
      mouse.y - this.y < 40 &&
      mouse.y - this.y > -40
    ) {
      color = "#b0d7ff";
      if (this.z < maxZ) {
        this.z += 1;
      }
    } else {
      color = "#eae8ff";
      if (this.z > minZ) {
        this.z -= 1;
      }
    }

    this.draw(color);
  };
}

var starArray = [];

for (var i = 0; i < 600; i++) {
  var size = Math.random() * 3;
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var z = Math.random() * size;
  var a = 1;
  var b = Math.random() / 20;
  starArray.push(new Star(x, y, a, z, size, b));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < starArray.length; i++) {
    starArray[i].update();
  }
}

animate();
