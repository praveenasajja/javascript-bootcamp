let temp = 32;
let isFreezing = temp <= 32;
// ==== is equality operator
// !== is not equal operator

console.log(isFreezing);

let age = 74;
let isChild = age <= 7;
let isSenior = age >= 65;
console.log("Child:" + isChild + ", " + "Senior:" + isSenior);

if (age <= 7) {
  console.log("Child Pricing");
}

if (age >= 65) {
  console.log("Senior Discount");
}
