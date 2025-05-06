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

function init() {
  // TODO
  const hornSelectingElement = document.getElementById('horn-select');

  hornSelectingElement.addEventListener('change', handleHornSelected);
}