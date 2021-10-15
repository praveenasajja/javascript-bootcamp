
// Global Scope ()
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