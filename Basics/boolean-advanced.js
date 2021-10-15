let isAccountLocked = false;
let user = "Admin";

if (isAccountLocked) {
  console.log("Account is Locked");
} else if (user === "Admin") {
  console.log("Welcome Admin");
} else {
  console.log("Welcome");
}

let temp = 45;
if (temp <= 32) {
  console.log("Its Freezing Outside");
} else if (temp >= 110) {
  console.log("Its Hot outside");
} else {
  console.log("Its ok, you can go outside");
}
