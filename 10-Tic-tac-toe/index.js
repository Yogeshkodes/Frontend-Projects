const TicContainer = document.querySelector(".tic-tac-container");

const btn = document.querySelector(".btn");

const span = document.querySelector("span");
// const btn = document.querySelector(".btn");

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

let currentPlayer = "X";

function createBox() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");

    div.classList.add("tic-tac-box");

    TicContainer.appendChild(div);
  }
}

createBox();

const ticTacBox = document.querySelectorAll(".tic-tac-box");

function checkWinner() {
  winCombinations.forEach((combo) => {
    // console.log(combo);
    const [a, b, c] = combo;

    const valueA = ticTacBox[a].textContent;
    const valueB = ticTacBox[b].textContent;
    const valueC = ticTacBox[c].textContent;

    if (valueA && valueA === valueB && valueB === valueC) {
      span.textContent = `${valueA} wins!`;
      ticTacBox.forEach((box) => (box.style.pointerEvents = "none"));
    }
  });
}

ticTacBox.forEach((box, index) => {
  box.addEventListener("click", () => {
    box.textContent = `${currentPlayer}`;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

btn.addEventListener("click", () => {
  ticTacBox.forEach((box) => {
    box.textContent = "";
    box.style.pointerEvents = "auto";
  });
});
