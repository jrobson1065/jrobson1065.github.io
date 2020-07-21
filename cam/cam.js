const quotes = document.querySelectorAll(".quote");

let n = 0;

setInterval(()=> {
    for (let i = 0; i < quotes.length; i++) quotes[i].style.opacity = "0";
    quotes[n].style.opacity = "1";
    n++;
    if (n === 4) n = 0;
}, 6000)