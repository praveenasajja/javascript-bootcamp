// const todos = [
//   "Hello world",
//   "Cat food",
//   "Do work",
//   "Clean Kitchen",
//   "Do excercise",
// ];

// console.log(`You have ${todos.length} todos`);

// todos.forEach(function (item, index) {
//   const num = index + 1;
//   console.log(`${num}. ${item}`);
//   //console.log(`${index + 1}. ${item}`);
// });

// console.log(`Todo 1 is: ${todos[0]}`);
// //console.log(`Todo 2 is: ${todos[todos.length - 4]}`);
// //console.log(`Todo 3 is: ${todos[todos.length - 2]}`);
// console.log(`Todo 4 is: ${todos[todos.length - 3]}`);
// //console.log(`Todo 5 is: ${todos[todos.length - 1]}`);

// todos.splice(2, 1);
// console.log(todos);
// todos.push("New Item at End");
// console.log(todos);
// todos.shift();
// console.log(todos);

// for (let count = 0; count < todos.length; count++) {
//   console.log(`${count + 1}. ${todos[count]}`);
// }

//Challenge
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

const sortTodos = function (todos) {
  return todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
console.log(sortTodos(todos));

// const deleteTodo = function (todo, deleteText) {
//   const index = todo.findIndex(function (item, pos) {
//     return item.text.toLowerCase() === deleteText.toLowerCase();
//   });
//   if (index > -1) {
//     return todo.splice(index, 1);
//   }
// };
// deleteTodo(todos, "buy all food");
// console.log(todos);

// const findFalseItems = function (item) {
//   return item.filter(function (note) {
//     return !note.completed;
//   });
// };

// console.log(findFalseItems(todos));
