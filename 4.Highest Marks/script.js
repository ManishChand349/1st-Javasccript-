const marks = [60, 93, 65, 98, 30];
let highestMark = 0;

for (let i = 0; i < marks.length; i++) {
  highestMark = marks[i] > highestMark ? marks[i] : highestMark;
}

console.log("The highest mark is: " + highestMark);
