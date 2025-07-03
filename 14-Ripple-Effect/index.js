const Button = document.querySelectorAll(".btn");

// console.log(Button);
Button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    // console.log(x, y);

    let rippleElement = document.createElement("span");
    rippleElement.style.left = `${x}px`;
    rippleElement.style.top = `${y}px`;
    btn.appendChild(rippleElement);

    window.setTimeout(() => {
      rippleElement.remove();
    }, 500);
  });
});
