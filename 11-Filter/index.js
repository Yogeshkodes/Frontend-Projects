const data = [
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 2",
  },
  {
    id: "Men",
    label: "Men Shirt 3",
  },
  {
    id: "Men",
    label: "Men Shirt 4",
  },
  {
    id: "Women",
    label: "Women Shirt 1",
  },
  {
    id: "Women",
    label: "Women Shirt 2",
  },
  {
    id: "Women",
    label: "Women Shirt 3",
  },
  {
    id: "Women",
    label: "Women Shirt 4",
  },
  {
    id: "Kids",
    label: "Kids Shirt 1",
  },
  {
    id: "Kids",
    label: "Kids Shirt 2",
  },
  {
    id: "Kids",
    label: "Kids Shirt 3",
  },
  {
    id: "Kids",
    label: "Kids Shirt 4",
  },
];

const container = document.querySelector(".container");

function displayAllCards(datas) {
  datas.map((card) => {
    const span = document.createElement("span");
    span.textContent = `${card.label}`;
    container.appendChild(span);
  });
}

displayAllCards(data);

function filterCards(category) {
  document.querySelectorAll("span").forEach((card) => {
    card.remove();
  });
  if (category === "All") {
    displayAllCards(data);
  }

  const categories = data.filter((card) => card.id === category);
  displayAllCards(categories);
}
