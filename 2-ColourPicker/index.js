const HexColourButton = document.getElementById("hexColourButton");
const HexContainer = document.querySelector(".hexContainer");
const HexText = document.querySelector(".hexText");
const CopyButton = document.querySelectorAll(".Copy");

// Hex Colour
const createHexColour = () => {
  const charSet = "0123456789abcdef";

  let result = "#";
  for (let index = 0; index < 6; index++) {
    result += charSet[Math.floor(Math.random() * 16)];
  }

  HexText.textContent = `${result}`;
  HexContainer.style.backgroundColor = `${result}`;
};

HexColourButton.addEventListener("click", createHexColour);

// RGB Colour
const RgbContainer = document.querySelector(".rgbContainer");
const RgbColorButton = document.getElementById("rgbColorButton");
const Red = document.getElementById("Red");
const Green = document.getElementById("Green");
const Blue = document.getElementById("Blue");
const RGBText = document.querySelector(".rgbText");

const createRGBColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  Red.value = red;
  Green.value = green;
  Blue.value = blue;

  RgbContainer.style.backgroundColor = `rgb(${red}, ${green} , ${blue})`;
  RGBText.textContent = `rgb(${red},${green},${blue})`;
};

RgbColorButton.addEventListener("click", createRGBColor);

// Copy Button

async function copyColor(event) {
  const parentElement = event.target.parentElement;
  //   console.log(parentElement);

  const textElement = parentElement.querySelector(".rgbText, .hexText");

  try {
    await navigator.clipboard.writeText(textElement.textContent);
    alert(`${textElement.textContent} copied to clipboard`);
    // Optionally display a success message to the user
  } catch (err) {
    alert("Failed to copy text: ", err);
    // Optionally display an error message to the user
  }
}

CopyButton.forEach((btn) => {
  btn.addEventListener("click", copyColor);
});
