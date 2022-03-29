'use strict';

function changeColor() {
  const colors = document.querySelectorAll(".color-change");

  for (const item of colors) {
    item.classList.add('red');
  }
}


function validateInput() {
  const input = document.querySelector("#number-input");
  const inputValue = Number(input.value);
  const formMessage = document.querySelector("#formFeedback");
  if (inputValue < 10) {
    formMessage.innerHTML("You are good to go!")
  } else {
    formMessage.innerHTML("Please enter a smaller number.")
  }
}

document.querySelector(".color-changer").addEventListener("click", changeColor);
document.querySelector(".number-form").addEventListener("submit", validateInput);
