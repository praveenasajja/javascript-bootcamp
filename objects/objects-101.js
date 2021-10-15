let myBook = {
  title: "1987",
  author: "Praveena",
  pageCount: 324,
};

console.log(myBook);
console.log(`Book ${myBook.title} by ${myBook.author}`);
myBook.title = "Animal Farm";
console.log(`Book ${myBook.title} by ${myBook.author}`);

// Challenge area

let aboutMe = {
  name: "Praveena",
  age: 34,
  place: "NJ",
};
console.log(`${aboutMe.name} is ${aboutMe.age} lives in ${aboutMe.place}.`);
aboutMe.age = aboutMe.age + 1;
console.log(`${aboutMe.name} is ${aboutMe.age} lives in ${aboutMe.place}.`);
