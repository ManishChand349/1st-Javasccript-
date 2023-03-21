let celsius = 25;

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

let fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit);
