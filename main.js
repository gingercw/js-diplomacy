'use strict';

function changeColor() {
  const colors = document.querySelectorAll(".color-change");

  for (const item of colors) {
    item.classList.add('red');
  }
}


function validateInput() {
  const input = document.querySelector("#number-input");
  const formMessage = document.querySelector("#formFeedback");
  if (input < 10) {
    formMessage.innerHTML("You are good to go!")
  } else {
    formMessage.innerHTML("Please enter a smaller number.")
  }
}

document.querySelector(".color-changer").addEventListener("click", changeColor);
document.querySelector(".number-input").addEventListener("click", validateInput);
