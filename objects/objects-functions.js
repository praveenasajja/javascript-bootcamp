let myBook = {
  title: "1987",
  author: "Praveena",
  pageCount: 324,
};

let otherBook = {
  title: "A People History",
  author: "Sajja",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageSummary: `${book.title} page count is ${book.pageCount} pages`,
  };
  //console.log(`${book.title} by ${book.author} and page count is ${book.pageCount}`);
};

let myBookSummary = getSummary(myBook);
console.log(myBookSummary.summary);
console.log(myBookSummary.pageSummary);

let otherBookSummary = getSummary(otherBook);
console.log(otherBookSummary.summary);
console.log(otherBookSummary.pageSummary);

//Challenge area
let converter = function (temp) {
  return {
    fahrenheit: temp,
    celsius: ((temp - 32) * 5) / 9,
    kelvin: ((temp + 459.67) * 5) / 9,
  };
};

let Ftemp = converter(74);
console.log(Ftemp);
console.log(Ftemp.fahrenheit);
console.log(Ftemp.celsius);
console.log(Ftemp.kelvin);
