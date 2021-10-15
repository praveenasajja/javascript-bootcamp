//Multiple arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

//Default arguments
let getScoreText = function (name = "Anonymous", score = 0) {
  console.log(name);
  console.log(score);
  return "Name: " + name + " - Score: " + score;
};

let scoreText = getScoreText(); //function call without argument values
console.log(scoreText);

scoreText = getScoreText("Praveena", 100); //function call with argument values
console.log(scoreText);

scoreText = getScoreText(undefined, 99); //function call with 2nd argument valid value and 1st as undefined
console.log(scoreText);

//getScoreText("Sajja", 100); //function call with argument values

let calc = function (total = 100, tip = 0.2) {
  let tipAmt = total * tip;
  let tipPer = tip * 100;
  return `A ${tipPer}% tip on $${total} would be $${tipAmt}`;
  //return `A ${tip * 100}% tip on $${total} would be $${total * tip}`;
};

let callTip = calc(200, 0.15);
console.log(callTip);

callTip = calc();
console.log(callTip);

callTip = calc(200, 0.25);
console.log(callTip);

let name = "Praveena";
let age = 34;
console.log(`My name is ${name}, and my age is ${age}`);
