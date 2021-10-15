//let name = "Praveena";

if (true) {
  //let name = "Sajja";
  if (true) {
    name = "PS"; //Leaked Variable - assigning value without declaring anywhere
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
