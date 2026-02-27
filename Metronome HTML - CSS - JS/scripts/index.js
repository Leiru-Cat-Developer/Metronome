// SHOW OR HIDE THE WARNING BPM MESSAGE
function startMetronome() {
  // REBOOT THE COMPONENTS EVERY TIME
  const input = document.querySelector(".metronome-bpm-input");
  input.style.border = "2px solid #5500ff";
  const warning = document.querySelector(".warning-bpm-messages");
  warning.innerHTML = "";

  // SAVES THE VALUES FROM BPM
  const selection = document.querySelector(".metronome-bpm-input");
  const bpm_value = Number(selection.value);

  if (bpm_value === 0) {
    // THE VALUE IS EMPTY OR THERE'S A ZERO
    input.style.border = "2px solid #ff0000";
    warning.innerHTML = "Insert a valid number";
    return;
  }
  if (bpm_value < 0 || bpm_value > 240) {
    // THE VALUE IS OUT OF RANGE
    input.style.border = "2px solid #ff0000";
    warning.innerHTML = "Out of range<br/>Range between [1 - 240 BPM]";
    return;
  }
  if (isNaN(bpm_value)) {
    // THERE'S ANOTHER VALUE INSTEAD A NUMBER
    input.style.border = "2px solid #ff0000";
    warning.innerHTML = "You should use numbers instead";
    return;
  }

  // MAKES THE START BUTTON THE STOP BUTTON TOO
  const startValue = document.querySelector(".start-bpm-button");
  startValue.classList.contains("js-bpm-started")
    ? startValue.classList.remove("js-bpm-started")
    : startValue.classList.add("js-bpm-started");

  bpmCalculation(bpm_value, startValue);
}

function bpmCalculation(bpm, button) {
  const interval = 60000 / bpm;
  button.classList.contains("js-bpm-started")
    ? (window.metronomeTimer = setInterval(() => {
        console.log("Tick");
      }, interval))
    : clearInterval(window.metronomeTimer);
}

// TURNS OFF AND TURNS ON THE SELECT COMPASS BUTTONS
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
