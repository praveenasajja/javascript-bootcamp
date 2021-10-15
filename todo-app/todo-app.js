const ps = document.querySelectorAll("p");
ps.forEach(function (p) {
  if (p.textContent.includes("the")) {
    p.remove();
  }
});

document.querySelector("#add-todo").addEventListener("click", function (e) {
  console.log("Add a new Todo");
});

document
  .querySelector("#new-todo-text")
  .addEventListener("input", function (e) {
    console.log(e.target.value);
  });
