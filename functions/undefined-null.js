let name; //undefined for variable

if (name === undefined) {
  console.log("Please provide name");
} else {
  console.log("Name:" + name);
}

//undefined for function arguments
//undefined as funtion
let square = function (num) {
  //undefined argument
  console.log(num);
};
square(); //Functiona call without argument value

let result = square(); //undefined as value to result
console.log(result);

// null as assigned value
let age = 27;
age = null;
console.log(age);
