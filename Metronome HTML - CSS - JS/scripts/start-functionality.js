function callMetronome() {
  // ! Initialize the functionality
  const warningElement = document.querySelector(".warning-bpm-messages");
  warningElement.innerHTML = "";

  // * Check if the tempo is valid before starting the metronome
  if (!checkMetronomeTempo()) {
    document.querySelector(".warning-bpm-messages").innerHTML =
      "Please enter a valid tempo";
    return;
  }

  // * Start the metronome after checking the tempo values
}

function checkMetronomeTempo() {
  // * Get the tempo value from the input field
  const tempoInput = Number(
    document.querySelector(".metronome-bpm-input").value,
  );

  return validateTempo(tempoInput);
}

function validateTempo(tempo) {
  // * Validate that the tempo is a number between 1 and 240
  if (isNaN(tempo) || tempo < 1 || tempo > 240) {
    return false;
  }
  return true;
}

// ! Events listeners
document.querySelector(".js-start-bpm-button").addEventListener("click", () => {
  callMetronome();
});
