let temp = -9;

if (temp >= 60 && temp <= 90) {
  console.log("Its nice outside");
} else if (temp <= 0 || temp >= 120) {
  console.log("Do not go outside");
} else {
  console.log("Do what ever you want");
}

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Vegan Dish");
} else if (isGuestTwoVegan || isGuestTwoVegan) {
  console.log("Some Vegan Dish Options");
} else {
  console.log("Offer up anything on the menu");
}
