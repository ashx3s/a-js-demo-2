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

// 2. Ternary Operator + Dom Manipulation

// login status true/false
// let isLoggedIn = false;

const user = {
  name: "Fayne",
  isLoggedIn: true,
};
// find appropriate dom element
const loginStatusEl = document.getElementById("login-status");
// use ternary operator in the textContent return to conditionally print a message

loginStatusEl.textContent = user.isLoggedIn
  ? `Welcome Back, ${user.name}`
  : "Please log in to continue";
