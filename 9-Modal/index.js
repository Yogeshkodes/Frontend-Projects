const Open = document.querySelector(".open-modal");
const ModalContainer = document.querySelector(".modal-container");
const ModalOverlay = document.querySelector(".modal-overlay");
const Close = document.querySelector(".close-modal");
const Closebtn = document.querySelector(".close");

Open.addEventListener("click", () => {
  ModalContainer.classList.add("show");
  ModalOverlay.classList.add("show");
});

Close.addEventListener("click", () => {
  ModalContainer.classList.remove("show");
  ModalOverlay.classList.remove("show");
});

Closebtn.addEventListener("click", () => {
  ModalContainer.classList.remove("show");
  ModalOverlay.classList.remove("show");
});

ModalOverlay.addEventListener("click", (e) => {
  ModalContainer.classList.remove("show");
  ModalOverlay.classList.remove("show");
});
