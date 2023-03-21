let color1 = prompt("Enter first Color");
let color2 = prompt("Enter Second Color");

function mixColors(color1, color2) {
  switch (color1.toLowerCase() + "-" + color2.toLowerCase()) {
    case "red-blue":
    case "blue-red":
      console.log("purple");
      break;
    case "red-yellow":
    case "yellow-red":
      console.log("orange");
      break;
    case "blue-yellow":
    case "yellow-blue":
      console.log("green");
      break;
    default:
      console.log("Invalid color combination");
  }
}
mixColors(color1, color2);
