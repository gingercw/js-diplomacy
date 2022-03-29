'use strict';

function changeColor() {
  const colors = document.querySelectorAll(".color-change");

  for (const item of colors) {
    item.classList.add('red');
  }
}

