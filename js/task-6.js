'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startSizeBox = 30;

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxArea = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  boxArea.innerHTML = '';
  const quantity = parseInt(document.querySelector('[type="number"]').value);
  const boxsMarkup = [];

  if (0 < quantity && quantity < 101) {
    for (let index = 0; index < quantity; index++) {
      const size = startSizeBox + index * 10;
      boxsMarkup.push(
        `<div style="width: ${size}px; 
        height: ${size}px; 
        background-color: ${getRandomHexColor()};"></div>`
      );
    }

    boxArea.innerHTML = boxsMarkup.join('');
  }
});

btnDestroy.addEventListener('click', () => {
  boxArea.innerHTML = '';
});
