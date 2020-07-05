class Donut {
  constructor(
    donutCountSpan,
    autoClickerPriceSpan,
    autoClickerCountSpan,
    donutMultiplierCountSpan,
    donutMultiplierPriceSpan
  ) {
    this.donutCountSpan = donutCountSpan;
    this.autoClickerPriceSpan = autoClickerPriceSpan;
    this.autoClickerCountSpan = autoClickerCountSpan;
    this.donutMultiplierCountSpan = donutMultiplierCountSpan;
    this.donutMultiplierPriceSpan = donutMultiplierPriceSpan;
    this.donutCount = 0;
    this.donutMultiplierCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerPrice = 100;
    this.donutMultiplierCount = 0;
    this.donutMultiplierPrice = 10;
  }

  addDonut() {
    this.donutCount += Math.pow(1.2, this.donutMultiplierCount);
    this.donutCountSpan.innerText = Math.round(this.donutCount);
  }

  activateAutoClickers() {
    setInterval(() => {
      this.donutCount +=
        this.autoClickerCount * Math.pow(1.2, this.donutMultiplierCount);
      this.donutCountSpan.innerText = Math.round(this.donutCount);
    }, 1000);
  }

  buyAutoClicker() {
    if (this.donutCount >= this.autoClickerPrice) {
      this.donutCount -= this.autoClickerPrice;
      this.autoClickerCount += 1;
      this.autoClickerPrice = Math.round(this.autoClickerPrice * 1.1);
      this.donutCountSpan.innerText = Math.round(this.donutCount);
      this.autoClickerPriceSpan.innerText = this.autoClickerPrice;
      this.autoClickerCountSpan.innerText = this.autoClickerCount;
      if (this.autoClickerCount <= 1) {
        this.activateAutoClickers();
      }
    }
  }

  buyDonutMultiplier() {
    if (this.donutCount >= this.donutMultiplierPrice) {
      this.donutCount -= this.donutMultiplierPrice;
      this.donutMultiplierCount += 1;
      this.donutMultiplierPrice = Math.round(this.donutMultiplierPrice * 1.1);
      this.donutMultiplierCountSpan.innerText = this.donutMultiplierCount;
      this.donutMultiplierPriceSpan.innerText = this.donutMultiplierPrice;
      this.donutCountSpan.innerText = Math.round(this.donutCount);
    }
  }
}
