const Container = document.querySelector(".container");
const LoadBtn = document.querySelector(".load-btn");

const API_URL = `https://dummyjson.com/products?`;

let newArray = [];
let visible = 5;
let initial = 0;

const fetchData = async () => {
  const data = await fetch(API_URL + `limit=${15}&skip=${0}`);
  const res = await data.json();
  newArray = res.products;
  //   console.log(newArray);
  if (res && res.products) displayProducts(newArray);
};

function displayProducts(products) {
  const visibleProducts = products.slice(initial, visible);

  visibleProducts.map((items) => {
    const div = document.createElement("div");
    // console.log(items);

    div.innerHTML = `
        <div>
        <img src=${items.images[0]} alt=${items.title}>
        </div>
        <span>${items.title}</span>
        <span>${items.price}</span>
        
    `;
    div.classList.add("items");
    Container.appendChild(div);
  });
}

fetchData();

LoadBtn.addEventListener("click", () => {
  if (visible >= newArray.length) {
    LoadBtn.style.display = "none";
  } else {
    LoadBtn.style.display = "block";
  }
  initial += 5;
  visible += 5;
  fetchData();
});
