// const notes = ["note1", "note2", "note3"];

// // notes.pop(); //to remove last item in the array list
// // notes.push("My New Note"); //to add new item at last in the array list

// // console.log(notes.length);
// // console.log(notes); // to print all the array elements
// // console.log(notes[notes.length - 1]); //to find last item of array

// // notes.shift(); // to remove 1st item from the array list
// // notes.unshift("My first note"); // to add item as first item in the array list

// //notes.splice(1, 1); //to remove middlw items of array. here it is deleting 2nd item
// //notes.splice(1, 0, "Add New Note"); // to add new item in middle without deleting any item, here new item is adding at position 1 (as 2nd item)
// //notes.splice(1, 1, "Add New Note");  // to add new item in middle by deleting item

// notes[2] = "Add another new item"; // another way to replace new item at given position

// notes.forEach(function (item, index) {
//   console.log(`${item} is at position ${index}`);
// });

// console.log(notes.length);
// console.log(notes);

// //to print array elements with for statement
// for (let count = 0; count < notes.length; count++) {
//   console.log(`${notes[count]} is at index ${count}`);
// }

// //to print in revrese order
// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(`${notes[count]} is at index ${count}`);
// }

// //To find index of given element in array
// console.log(notes.indexOf("note2"));

//Array of objects
const notesArray = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Exercise. Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

const sortNotes = function (notes) {
  return notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};
console.log(sortNotes(notesArray));

// const findNotes = function (notes, query) {
//   return notes.filter(function (item, index) {
//     const isTitleMatch = item.title.toLowerCase().includes(query.toLowerCase());
//     const isBodyMatch = item.body.toLowerCase().includes(query.toLowerCase());
//     return isTitleMatch || isBodyMatch;
//   });
// };

// console.log(findNotes(notesArray, "to"));

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };
// const note = findNote(notesArray, "Daily all Work");
// console.log(note);

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const note = findNote(notesArray, "Vacation Travel");
// console.log(note);

// console.log(notesArray.length);
// console.log(notesArray);

// const indexVal = notesArray.findIndex(function (note, index) {
//   console.log(note);
//   return note.title.toLowerCase() === "Vacation Travel".toLowerCase();
// });
// console.log(indexVal);
