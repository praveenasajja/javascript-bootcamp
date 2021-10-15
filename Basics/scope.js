let varOne = "varOne"; //Global Variable

if (true) {
  console.log(varOne);
  let varTwo = "varTwo"; //Local Variable
  console.log(varTwo);

  if (true) {
    console.log(varTwo);
    let varThree = "varThree"; //Local Variable
  }
}

if (true) {
  let varFour = "varFour"; //Local Variable
}

console.log(varTwo);
