const container = document.querySelector(".qrcode-container");
const qrcode = document.querySelector(".qrcode");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const error = document.querySelector(".error");

btn.addEventListener("click", generate);

function generate() {
  if (input.value.trim().length > 0) {
    generateQrcode();
    input.value = "";
    error.textContent = "";
  } else {
    error.textContent = `Enter text or URL to generate QR code`;
  }
}

function generateQrcode() {
  qrcode.innerHTML = "";

  new QRCode(qrcode, {
    text: input.value,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
}
