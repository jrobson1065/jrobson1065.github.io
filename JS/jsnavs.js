let nav = document.querySelectorAll("nav");
let ul = document.querySelectorAll("ul");

nav[0].style.backgroundColor = "black";
nav[0].style.margin = "20px 0";
ul[0].style.color = "yellow";
ul[0].style.display = "flex";
ul[0].style.flexDirection = "row";
ul[0].style.justifyContent = "space-around";
let li0 = ul[0].children;
for (let i = 0; i < li0.length; i++) {
    li0[i].style.fontSize = "20pt";
    li0[i].style.cursor = "pointer";
    li0[i].style.lineHeight = "70px";
    li0[i].style.width = "100%";
    li0[i].style.textAlign = "center";
    li0[i].style.transition = "all 1s";
    li0[i].style.borderBottom = "5px solid black";
    li0[i].addEventListener("mouseover",()=>{
        li0[i].style.textTransform = "uppercase";
        li0[i].style.backgroundColor = "rgba(170, 170, 170, 0.2)";
        li0[i].style.borderBottom = "5px solid yellow";
    })
    li0[i].addEventListener("mouseout",()=>{
        li0[i].style.textTransform = "capitalize";
        li0[i].style.backgroundColor = "transparent";
        li0[i].style.borderBottom = "5px solid black";
    })
}



nav[1].style.backgroundColor = "black";
nav[1].style.margin = "50px 0";
nav[1].style.height = "100px";
ul[1].style.color = "red";
ul[1].style.display = "flex";
ul[1].style.flexDirection = "row";
ul[1].style.paddingLeft = "100px";
li1 = ul[1].children;
for (let i = 0; i < li1.length; i++) {
    let span = li1[i].firstElementChild;
    li1[i].style.lineHeight = "50px";
    span.style.display = "inline-block";
    span.style.transform = "rotate(-45deg) translateX(-30px)";
    span.style.webkitTransform = "rotate(-45deg) translateX(-30px)";
    li1[i].style.fontSize = "20pt";
    li1[i].style.cursor = "pointer";
    li1[i].style.marginLeft = "-50px";
    li1[i].style.transition = "all 1s";
    span.style.transition = "all 1s";
    li1[i].style.height = "100px";
    li1[i].style.padding = "0 50px";
    li1[i].addEventListener("mouseover",()=>{
        span.style.fontSize = "30pt";
        span.style.transform = "rotate(0)";
        span.style.webkitTransform = "rotate(0)";
        li1[i].style.textTransform = "uppercase";
        li1[i].style.padding = "15px 200px";
        li1[i].style.borderBottom = "5px solid red";
        li1[i].style.marginLeft = "0";
        li1[i].style.marginRight = "50px";
    })
    li1[i].addEventListener("mouseout",()=>{
        span.style.fontSize = "20pt";
        span.style.transform = "rotate(-45deg) translateX(-30px)";
        span.style.webkitTransform = "rotate(-45deg) translateX(-30px)";
        li1[i].style.textTransform = "capitalize";
        li1[i].style.padding = "0 50px";
        li1[i].style.borderBottom = "0 solid red";
        li1[i].style.marginLeft = "-50px";
        li1[i].style.marginRight = "0";
    })
}

