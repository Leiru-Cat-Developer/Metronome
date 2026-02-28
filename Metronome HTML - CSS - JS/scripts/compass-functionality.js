// ALLOWS THE SELECTION FROM COMPASS BUTTONS
function handleToggleClass(selector) {
  const button = document.querySelector(`.${selector}-button`);
  !button.classList.contains("js-is-toggled")
    ? (turnOffPreviousSetTempo(), button.classList.add("js-is-toggled"))
    : button.classList.remove("js-is-toggled");
}

// TURNS OFF THE PREVIOUS COMPASS BUTTON SELECTED (IF THERE'S)
function turnOffPreviousSetTempo() {
  const previous = document.querySelector(".js-is-toggled");
  if (previous) previous.classList.remove("js-is-toggled");
}
