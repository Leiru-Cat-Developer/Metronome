function handleCompass(compass) {
  let compassButton = document.querySelector(`.${compass}-button`);
  compassButton.classList.contains("js-is-toggled")
    ? compassButton.classList.remove("js-is-toggled")
    : (turnOffPreviousCompassButton(),
      compassButton.classList.add("js-is-toggled"));
}

function turnOffPreviousCompassButton() {
  const previous = document.querySelector(".js-is-toggled");
  if (previous) previous.classList.remove("js-is-toggled");
}
