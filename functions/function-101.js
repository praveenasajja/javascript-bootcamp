let greetUser = function () {
  console.log("Welcome User!");
};

greetUser();
greetUser();
greetUser();

let square = function (num) {
  let result = num * num;
  console.log(result);

  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

//convert FahrenheitToCelsius
let converter = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  //let kelvin = ((fahrenheit + 459.67) * 5) / 9;
  return celsius;
};

let tempVal = converter(32);
let tempVal1 = converter(68);
console.log(tempVal);
console.log(tempVal1);
