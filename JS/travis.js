var c = document.createElement("canvas");
var ctx = canvas.getContext("2d");
c.width = 1200;
c.height = 800;
document.body.appendChild(c);

var perm = [];
while (perm.length < 255) {
    while(perm.includes(val = Math.floor(Math.random * 255)));
    perm.push(val);
}

var lerp = (a,b,t) => a + (b-a) * (1-Math.cos(t*Math.PI))/2;
var noise = x=>{
    x = x * 0.01 % 255;
    return lerp(perm[Math.floor(x)],perm[Math.ceil(x)], x - Math.floor(x));
}

var player = new function() {
    this.x = c.width/2;
    this.y = 0;
    this.rot = 0;

    this.img = new Image();
    this.draw = function(){
        ctx.drawImage
    }
}

var t = 20;
function loop() {
    t += 1;
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,c.width, c.height);

    ctx.fillStyle = "black";
    ctx.beginPath(0, c.height);

    ctx.moveTo
    for (let i = 0; i < c.width; i++)
        ctx.lineTo(i, c.height - noise(i) * 0.25);

    ctx.lineTo(c.width, c.height);
    ctx.fill();
    requestAnimationFrame(loop);
}

loop();