let donut = document.querySelector("#donut");
let donutCountSpan = document.querySelector(".donut-count");
let buyAutoClickerButton = document.querySelector("#buyAutoClicker");
let buyDonutMultiplierButton = document.querySelector("#buyDonutMultiplier");
let autoClickerPriceSpan = document.querySelector(".auto-clicker-price");
let autoClickerCountSpan = document.querySelector(".auto-clicker-count");
let donutMultiplierCountSpan = document.querySelector(
  ".donut-multiplier-count"
);
let donutMultiplierPriceSpan = document.querySelector(".multiplier-price");
let reset = document.querySelector("#reset");

reset.addEventListener("click", ()=> {
  location.reload();
})

const donutClicker = new Donut(
  donutCountSpan,
  autoClickerPriceSpan,
  autoClickerCountSpan,
  donutMultiplierCountSpan,
  donutMultiplierPriceSpan
);

donut.addEventListener("click", () => {
  donutClicker.addDonut();
});

buyAutoClickerButton.addEventListener("click", ()=> {
  donutClicker.buyAutoClicker();
});

buyDonutMultiplierButton.addEventListener("click",  ()=> {
  donutClicker.buyDonutMultiplier();
});
