let num = 103.941;

console.log(num.toFixed(2));
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 1;
let max = 5;

//Challenge

let guess = function (number) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //For random numbers between 10 to
  console.log(randomNum);
  //return randomNum == number;

  if (randomNum == number) {
    return true;
  } else {
    return false;
  }
};
console.log(guess(3));
