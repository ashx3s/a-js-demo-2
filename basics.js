"use strict";

/* for loop
for (let i = 1; i <= 10; i++) {
  console.log(i)
}
*/

const arr = [2, 3, 5, 7, 11, 13, 17];

// for loop using an array
// useful when you need to manipulate and work with the iterator specifically
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// useful when you need to wrap a lot of logic in a loop and don't need to work with the iterator
for (const num of arr) {
  console.log("Number ", num);
}

// forEach: this is an array method built into the Array object
// template literals: `` the super powered string
arr.forEach((x) =>
  console.log(`forEach example: ${x < 5 ? "less than 5" : x}`),
);

// ternary operator example

const x = 20;

if (x > 20) {
  console.log("doesn't meet the threshold");
} else {
  console.log(x);
}

// ? means if and : means else

console.log(x < 20 ? "doesn't meet threshold" : `${x} meets the threshold`);

// function declaration
function validateThreshold(x) {
  return x < 20 ? `${x} doesn't meet threshold` : `${x} meets the threshold`;
}

const validationMsg = validateThreshold(2);

// function execution inside a console.log()
console.log(validateThreshold(2));

console.log(validationMsg.toUpperCase());

// fat arrow function

const logMsg = (msg) => console.log("MSG: ", msg);

logMsg("Hello world");
