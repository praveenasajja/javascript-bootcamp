//Document Object Model
//const p = document.querySelector("p");
//p.remove();

// const ps = document.querySelectorAll("p");
// ps.forEach(function (p) {
//   p.textContent = "*****";
//   console.log(p.textContent);
//   //p.remove();
// });

const todos = [
  {
    text: "order cat food",
    completed: true,
  },
  {
    text: "Clean Kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: false,
  },
  {
    text: "Do work",
    completed: true,
  },
  {
    text: "Do excercise",
    completed: true,
  },
];

// const completeTodos = todos.filter(function (todo) {
//   return !todo.completed;
// });

// const summary = document.createElement("h2");
// summary.textContent = `You have ${completeTodos.length} Todos to complete`;
// document.querySelector("body").appendChild(summary);

// todos.forEach(function (todo) {
//   const p = document.createElement("p");
//   p.textContent = todo.text;
//   document.querySelector("body").appendChild(p);
// });

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The Button Was Clicked";
});

document.querySelector("#remove-all").addEventListener("click", function () {
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
  console.log("Delete All Notes");
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  console.log(e.target.value);
});
