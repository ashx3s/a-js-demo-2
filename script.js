"use strict";

const timeOfDay = " Morning";
const greetMsgEl = document.querySelector("#greeting-message-field");
const sanitizedTime = (time) => time.toLowerCase().trim();

if (sanitizedTime(timeOfDay) === "morning") {
  greetMsgEl.textContent = "Good Morning!";
} else if (sanitizedTime(timeOfDay) === "afternoon") {
  greetMsgEl.textContent = "Good Afternoon!";
} else if (sanitizedTime(timeOfDay) === "evening") {
  greetMsgEl.textContent = "Good Evening!";
} else {
  greetMsgEl.textContent = "The time of day is unknown!";
}
