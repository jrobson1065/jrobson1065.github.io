const outputContainer = document.querySelector(".results");
const aprInput = document.querySelector("#apr");
const amountInput = document.querySelector("#amount");
const paymentInput = document.querySelector("#payment");
const calculateButton = document.querySelector(".calculate");

calculateButton.addEventListener("click", () => {
  let amount = parseInt(amountInput.value);
  let apr = aprInput.value / 100 / 12;
  let payment = paymentInput.value;
  let month = 0;
  let lastPayment = 0;

  const p = document.createElement("p");
  p.innerHTML = `<span class="indent0">Month</span>
  <span class="indent1">Payment</span>
  <span class="indent2">Principal</span>
  <span class="indent3">Interest</span>
  <span class="indent4">Principal %</span>
  <span class="indent5">Interest %</span>
  <span class="indent6">Balance</span>
  `
  outputContainer.appendChild(p);

  while (amount > 0) {
    let principal = payment - amount * apr;
    let interest = amount * apr;
    const p = document.createElement("p");
    p.innerHTML = `<span class="indent0">${month}</span>
    <span class="indent1">$${payment}</span>
    <span class="indent2">$${Math.round(principal * 100) / 100}</span>
    <span class="indent3">$${Math.round(interest * 100) / 100}</span>
    <span class="indent4">${Math.round(principal / payment * 10000) / 100}%</span>
    <span class="indent5">${Math.round(interest / payment * 10000) / 100}%</span>
    <span class="indent6">$${Math.round(amount * 100) / 100}</span>
    `;
    outputContainer.appendChild(p);
    if (amount < payment) {
        lastPayment = amount;
        payment = amount;
        apr = 0;
    }
    amount = amount - payment + amount * apr;
    month++;
  }

  const endP = document.createElement("p");
  endP.innerHTML = `<span class="indent0">${month}</span>
  <span class="indent1">$${Math.round(lastPayment * 100) / 100}</span>
  <span class="indent2">--</span>
  <span class="indent3">--</span>
  <span class="indent4">--</span>
  <span class="indent5">--</span>
  <span class="indent6">$0</span>
  `;
  outputContainer.appendChild(endP);
});
