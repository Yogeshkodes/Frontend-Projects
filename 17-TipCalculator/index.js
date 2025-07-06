const billAmount = document.querySelector("#billAmount");

const discountPercentage = document.querySelector("#discount");
const tipsPercentage = document.querySelector("#tips");
const noofCustomers = document.querySelector("#noofCustomers");

const btn = document.querySelector(".btn");
const data = document.querySelector(".data");
const discountSpan = discountPercentage.previousElementSibling;
const tipsSpan = tipsPercentage.previousElementSibling;
const customersSpan = noofCustomers.previousElementSibling;

discountPercentage.addEventListener("input", () => {
  discountSpan.textContent = discountPercentage.value;
});
tipsPercentage.addEventListener("input", () => {
  tipsSpan.textContent = tipsPercentage.value;
});
noofCustomers.addEventListener("input", () => {
  customersSpan.textContent = noofCustomers.value;
});

btn.addEventListener("click", (e) => {
  const BillAmont = +billAmount.value;

  const discount = +discountPercentage.value;

  const tips = +tipsPercentage.value;
  const customer = +noofCustomers.value;

  console.log(BillAmont, discount, tips, customer);
  console.log(typeof BillAmont, typeof discount, typeof tips, typeof customer);

  handleTips(BillAmont, discount, tips, customer);
});

function handleTips(BillAmont, discount, tips, customer) {
  const tipTotal = (tips / 100) * BillAmont;

  const discountedPrice = (discount / 100) * BillAmont;
  const TotalAmount = BillAmont + tipTotal - discountedPrice;

  const payperCustomer = TotalAmount / customer;

  console.log(tipTotal, discountedPrice, TotalAmount);

  data.innerHTML = `
    
          <p>Total tip paid : ${tipTotal}</p>
      <p>Total Amount to be paid :${TotalAmount}</p>
      <p>Each customer to pay :${payperCustomer}</p>

    `;
}
