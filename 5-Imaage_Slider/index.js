const ImageContainer = document.querySelector(".image-container");
const PrevBtn = document.querySelector(".prev");
const NextBtn = document.querySelector(".next");
const h3 = document.querySelector("h3");
const Carousal = document.querySelectorAll(".carousal-item");
const API_URL = `https://picsum.photos/v2/list?page=1&limit=5`;

const fetchResult = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    showImageonDisplay(data);
    // console.log(data);
  } catch (error) {
    console.error(error, "Something went Wrong");
  }
};

console.log(Carousal);
let currentIndex = 0;
const showImageonDisplay = (data) => {
  data.map((data, index) => {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(${data.download_url})`;
    div.classList.add("image");

    if (index === currentIndex) {
      Carousal[currentIndex].classList.add("style");
      div.classList.add("active");
    }
    ImageContainer.appendChild(div);
  });
};

const updateSlider = (currentIndex) => {
  const images = document.querySelectorAll(".image");

  Carousal.forEach((cara, index) => {
    if (currentIndex === index) {
      cara.classList.add("style");
    } else {
      cara.classList.remove("style");
    }
  });

  images.forEach((image, index) => {
    if (currentIndex === index) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
};

PrevBtn.addEventListener("click", () => {
  const images = document.querySelectorAll(".image").length;

  currentIndex = (currentIndex - 1 + images) % images;
  updateSlider(currentIndex);
});

NextBtn.addEventListener("click", () => {
  const images = document.querySelectorAll(".image").length;

  currentIndex = (currentIndex + 1) % images;
  updateSlider(currentIndex);
});

fetchResult();
