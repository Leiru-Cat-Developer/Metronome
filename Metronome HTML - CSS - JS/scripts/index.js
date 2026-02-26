function handleToggleClass(selector) {
  const button = document.querySelector(`.${selector}-button`);
  !button.classList.contains("js-is-toggled")
    ? (turnOffPreviousSetTempo(), button.classList.add("js-is-toggled"))
    : button.classList.remove("js-is-toggled");
}

function turnOffPreviousSetTempo() {
  const previous = document.querySelector(".js-is-toggled");
  if (previous) previous.classList.remove("js-is-toggled");
}
