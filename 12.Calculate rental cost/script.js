let carType = prompt("Enter your car type");
let numDays = prompt("Enter Day");

function calculateRentalCost(numDays, carType) {
  let rentalCost = 0;
  if (carType === "Economy") {
    rentalCost = 4000;
  } else if (carType === "Midsizq") {
    rentalCost = 10000;
  } else if (carType === "Luxury") {
    rentalCost = 20000;
  }
  console.log( rentalCost * numDays)
}
calculateRentalCost(numDays , carType)