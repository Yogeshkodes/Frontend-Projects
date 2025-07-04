const Previous = document.querySelector(".Previous");
const Next = document.querySelector(".Next");
const Container = document.querySelector(".container");
const ProgressContainer = document.querySelector(".progress-container");
const IconsContainer = document.querySelector(".icons-container");
const CirclesContainer = document.querySelector(".circles-container");
const ProgressBar = document.querySelector(".progress-bar");
const ActiveBar = document.querySelector(".activebar");
const Names = document.querySelector(".names");
const CompNames = document.querySelectorAll(".comp-names");

let currentStep = 0;

// console.log(Previous);

Previous.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateProgress();
  }
});

Next.addEventListener("click", () => {
  if (currentStep < 3) {
    currentStep++;
    updateProgress();
  }
});

function updateProgress() {
  const totalSteps = 4;
  const percent = (currentStep / (totalSteps - 1)) * 100;
  //   ActiveBar.style.display = none;
  ActiveBar.style.width = percent + "%";
}
