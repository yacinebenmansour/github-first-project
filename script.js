"use strict";

const screen = document.querySelector(".screen");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

let counter = 0;
function color(number) {
  if (number > 0) screen.style.color = "green";
  else if (number === 0) screen.style.color = "white";
  else if (number < 0) screen.style.color = "red";
}
minus.addEventListener("click", function () {
  counter--;
  screen.textContent = `${counter}`;
  color(counter);
});
reset.addEventListener("click", function () {
  counter = 0;
  screen.textContent = `${counter}`;
  color(counter);
});
add.addEventListener("click", function () {
  counter++;
  screen.textContent = `${counter}`;
  color(counter);
});
