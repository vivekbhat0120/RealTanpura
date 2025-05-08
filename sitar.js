// Get the audio element
let audio;

// Get the pitch select element
const pitchSelect = document.getElementById('pitch');

// Get the play button element
const playButton = document.getElementById('play-button');

// Get the volume and speed input elements
const volumeInput = document.getElementById('volume');
const speedInput = document.getElementById('speed');

// Get the volume and speed display elements
const volumeDisplay = document.getElementById('volume-display');
const speedDisplay = document.getElementById('speed-display');

// Initialize volume and speed values
let volume = 5;
let speed = 5;

// Add event listeners to the pitch select element
pitchSelect.addEventListener('change', function() {
  const selectedOption = this.options[this.selectedIndex];
  const audioSrc = selectedOption.getAttribute('data-audio');
  audio.src = audioSrc; // Update the audio source
});

// Add event listeners to the play button element
playButton.addEventListener('click', function() {
  const playButton = this;
  const pitchSelect = document.getElementById('pitch');
  const selectedOption = pitchSelect.options[pitchSelect.selectedIndex];
  const audioSrc = selectedOption.getAttribute('data-audio');
  
  console.log('Selected pitch:', selectedOption.value); // Log selected pitch
  console.log('Audio source:', audioSrc); // Log audio source

  if (!audio || audio.src !== audioSrc) {
    if (audio) {
      audio.pause(); // Pause any currently playing audio
      audio.currentTime = 0; // Reset to start
    }
    audio = new Audio(audioSrc);
  }

  if (playButton.textContent === 'Play') {
    audio.play();
    playButton.textContent = 'Stop';
  } else {
    audio.pause();
    audio.currentTime = 0; // Reset audio to start
    playButton.textContent = 'Play';
  }
});

// Volume function
function setVolume() {
  volume = parseInt(volumeInput.value);
  audio.volume = volume / 10;
  volumeDisplay.textContent = `Volume: ${volume}`;
}

// Speed function
function setSpeed() {
  speed = parseInt(speedInput.value);
  audio.playbackRate = speed / 5;
  speedDisplay.textContent = `Speed: ${speed}`;
}

// Add event listeners to the volume and speed input elements
volumeInput.addEventListener('input', setVolume);
speedInput.addEventListener('input', setSpeed);