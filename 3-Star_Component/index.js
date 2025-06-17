const Stars = document.querySelectorAll(".fa-solid");
const Text = document.querySelector(".text");

let clickedStars = -1;

function mouseEnter(index, event) {
  const hoveredElem = +event.target.dataset.index;

  const currentRating = hoveredElem;

  handleStars(currentRating);
}

function handleStars(getStars) {
  for (let i = 0; i < 5; i++) {
    if (i < getStars) {
      Stars[i].classList.add("active");
    } else {
      Stars[i].classList.remove("active");
    }
  }
}

function handleClick(index, event) {
  const currentRating = parseInt(event.target.dataset.index);

  clickedStars = currentRating;

  handleStars(clickedStars);
  Text.textContent = `You rated: ${currentRating} stars`;
}

function mouseLeave(index, event) {
  handleStars(clickedStars);
}

Stars.forEach((star, index) => {
  star.addEventListener("mouseenter", (e) => mouseEnter(index, e));
  star.addEventListener("click", (e) => handleClick(index, e));
  star.addEventListener("mouseleave", (e) => mouseLeave(index, e));
});
