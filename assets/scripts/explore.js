// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const voiceSelectElement = document.getElementById('voice-select');
  const textContentElement = document.getElementById('text-to-speak');
  const playButtonElement = document.querySelector('#explore button');
  const faceImageElement = document.querySelector('#explore img');
  const synth = window.speechSynthesis;
  let voices = [];
  const populateVoices = function() {
    voices = synth.getVoices();
    voiceSelectElement.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach(function(voice) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelectElement.appendChild(option);
    });
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  playButtonElement.addEventListener('click', function() {
    const utterThis = new SpeechSynthesisUtterance(textContentElement.value);
    const selectedOption = voiceSelectElement.value;
    if (selectedOption === 'select') {
      alert('Please select a voice first.');
      return;
    }
    if (textContentElement.value === '' || textContentElement.value === null) {
      return;
    }
    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }

    const selectedVoice = voices.find(voice => voice.name === selectedOption);
    if (selectedVoice) {
      utterThis.voice = selectedVoice;
    } else {
      alert('Selected voice not found.');
      return;
    }

    utterThis.onstart = () => {
      faceImageElement.src = 'assets/images/smiling-open.png';
    }

    utterThis.onend = () => {
      faceImageElement.src = 'assets/images/smiling.png';
    }
    utterThis.onerror = (event) => {
      console.error('Error occurred in speech synthesis: ', event.error);
      faceImageElement.src = 'assets/images/smiling.png';
    }

    synth.speak(utterThis);
  });
}