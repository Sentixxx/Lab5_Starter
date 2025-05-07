// expose.js
window.addEventListener('DOMContentLoaded', init);

function handleHornSelected(event) {
  const selectedValue = event.target.value;
  const soundImageElement = document.querySelector('#expose img');
  const soundFileElement = document.querySelector('#expose audio');

  switch (selectedValue) {
    case 'air-horn':
      soundImageElement.src = 'assets/images/air-horn.svg';
      soundImageElement.alt = 'Air Horn';
      soundFileElement.src = 'assets/audio/air-horn.mp3';
      break;
    case 'car-horn':
      soundImageElement.src = 'assets/images/car-horn.svg';
      soundImageElement.alt = 'Car Horn';
      soundFileElement.src = 'assets/audio/car-horn.mp3';
      break;
    case 'party-horn':
      soundImageElement.src = 'assets/images/party-horn.svg';
      soundImageElement.alt = 'Party Horn';
      soundFileElement.src = 'assets/audio/party-horn.mp3';
      break;
    default:
      soundImageElement.src = 'assets/images/no-image.png';
      soundImageElement.alt = 'No Image selected';
      soundFileElement.src = '';
  }
}

function handleVolumeInput(event) {
  const volumeValue = event.target.value;
  const volumeImageElement = document.querySelector('#volume-controls img');

  if (volumeValue == 0) {
    volumeImageElement.src = 'assets/icons/volume-level-0.svg';
    volumeImageElement.alt = 'Volume level 0';
  } else if (volumeValue < 33) {
    volumeImageElement.src = 'assets/icons/volume-level-1.svg';
    volumeImageElement.alt = 'Volume level 1';
  } else if (volumeValue < 67) {
    volumeImageElement.src = 'assets/icons/volume-level-2.svg';
    volumeImageElement.alt = 'Volume level 2';
  } else {
    volumeImageElement.src = 'assets/icons/volume-level-3.svg';
    volumeImageElement.alt = 'Volume level 3';
  }

  const soundFileElement = document.querySelector('#expose audio');
  soundFileElement.volume = volumeValue / 100;
}

function init() {
  // TODO
  const hornSelectingElement = document.getElementById('horn-select');
  const volumeControlElement = document.getElementById('volume-controls');
  const playButtonElement = document.querySelector('#expose button');


  let canvas = document.querySelector('body canvas');

  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.style.position = 'fixed';
    canvas.style.zIndex = '9999';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    canvas.style.pointerEvents = 'none';
    const bodySection = document.querySelector('body');
    bodySection.appendChild(canvas);
  }

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  });

  const jsConfetti = new JSConfetti({canvas});

  hornSelectingElement.addEventListener('change', handleHornSelected);
  volumeControlElement.addEventListener('input', handleVolumeInput);
  playButtonElement.addEventListener('click', () => {
    const volumeValue = document.getElementById('volume').value;
    const soundFileElement = document.querySelector('#expose audio');

    if(hornSelectingElement.value === 'select') {
      alert('Please select a sound first.');
      return;
    }

    if(volumeValue != soundFileElement.volume * 100) {
      soundFileElement.volume = volumeValue / 100;
    }
    setTimeout(() => {
      if (hornSelectingElement.value === 'party-horn') {
        jsConfetti.addConfetti({
          emojis: ['🎉', '🎊'],
          emojiSize: 100,
          confettiNumber: 200,
        });
      }

      soundFileElement.play();
    }
    , 0);
  });

}