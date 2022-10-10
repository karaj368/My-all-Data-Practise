"use strict";

// selecting elements
// Playar Score
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
// Current Scores
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

// Dice Image
const diceEl = document.querySelector(".dice");

// Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// Rolling Dice Functionlatiy
btnRoll.addEventListener("click", function () {
  // 1. creat a random rolling dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;
    current0El.textContent = currentScore; // change later
  } else {
  }
});
