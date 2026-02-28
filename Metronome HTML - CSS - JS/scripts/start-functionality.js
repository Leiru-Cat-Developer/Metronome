// START A CHECK ALGORITHM, AFTER PASSED, IT STARTS
function startMetronome() {
  // REBOOT THE COMPONENTS EVERY TIME
  const input = document.querySelector(".metronome-bpm-input");
  const warning = document.querySelector(".warning-bpm-messages");

  input.style.border = "2px solid #5500ff"; // OKAY STYLE FOR BPM-INPUT
  warning.innerHTML = ""; // DISPLAYS WARNING TEXT DOWN THE BPM-INPUT

  // SAVES THE VALUES FROM BPM
  const bpm_input = document.querySelector(".metronome-bpm-input");
  const bpm = Number(bpm_input.value);

  if (bpm === 0) {
    // IF VALUE IT'S EMPTY OR ZERO
    input.style.border = "2px solid #ff0000"; // WARNING STYLE FOR BPM-INPUT
    warning.innerHTML = "Insert a valid number";
    return; // EARLY RETURN
  }
  if (bpm < 0 || bpm > 240) {
    // THE VALUE IS OUT OF RANGE
    input.style.border = "2px solid #ff0000"; // WARNING STYLE FOR BPM-INPUT
    warning.innerHTML = "Range allowed [1 - 240 BPM]";
    return; // EARLY RETURN
  }
  if (isNaN(bpm)) {
    // ANOTHER VALUE INSTEAD A NUMBER
    input.style.border = "2px solid #ff0000"; // WARNING STYLE FOR BPM-INPUT
    warning.innerHTML = "Use numbers instead";
    return; // EARLY RETURN
  }

  // ADD NEW CLASS TO START - REMOVES NEW CLASS TO STOP
  const start_class = document.querySelector(".start-bpm-button");
  start_class.classList.contains("js-bpm-started")
    ? start_class.classList.remove("js-bpm-started")
    : start_class.classList.add("js-bpm-started");

  // STARTS THE METRONOME
  bpmCalculation(bpm, start_class);
}

function bpmCalculation(bpm_tempo, button_class) {
  const interval = 60000 / bpm_tempo; // CALCULATES TEMPO
  button_class.classList.contains("js-bpm-started")
    ? (window.metronomeTimer = setInterval(() => {
        // EXECUTES EVERY INTERVAL CALCULATED
        console.log("Tick");
      }, interval))
    : clearInterval(window.metronomeTimer); // CLEAR CALCULATED INTERVAL
}
