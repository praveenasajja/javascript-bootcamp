const clacGrade = function (score, posScore) {
  const actScore = (posScore / score) * 100;
  let grade = "";
  if (actScore >= 90 && actScore <= 100) {
    grade = "A";
  } else if (actScore >= 80 && actScore <= 89) {
    grade = "B";
  } else if (actScore >= 70 && actScore <= 79) {
    grade = "C";
  } else if (actScore >= 60 && actScore <= 69) {
    grade = "D";
  } else if (actScore >= 50 && actScore <= 59) {
    grade = "E";
  } else {
    grade = "F";
  }

  return `You got a ${grade} and percenatage is ${actScore}%`;
};

let result = clacGrade(20, 15);
console.log(result);

result = clacGrade(30, 15);
console.log(result);

result = clacGrade(20, 19);
console.log(result);
