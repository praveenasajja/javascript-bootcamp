let name = " Praveena Sajja ";

console.log(name.length); // Lenght property

console.log(name.toUpperCase()); //Uppercase method

console.log(name.toLowerCase()); //Lowercase method

// Includes Method
let password = "abc1234password308";
console.log(password.includes("password"));
console.log(password.includes("cvb"));

//Trim method
console.log(name.trim());

//Challenge Area
let validPassword = function (password) {
  if (password.length > 8 && !password.includes("password")) {
    return true;
  } else {
    return false;
  }
};

console.log(validPassword("password"));
console.log(validPassword("awd"));
console.log(validPassword("123$%&*%YGHKGKHGJ"));
