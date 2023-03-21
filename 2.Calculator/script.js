let num1 = prompt("Enter First Number" )
let operator = prompt("Enter operator" )
let num2 = prompt("Enter second Number" )

function calculator(num1, num2, operator) {
     let result;
   
     switch (operator) {
       case "+":
         result = Number(num1) + Number(num2);
         break;
       case "-":
         result =Number(num1) - Number(num2);
         break;
       case "*":
         result = Number(num1) * Number(num2);
         break;
       case "/":
         result = Number(num1) / Number(num2)
       default:
         console.log("Invalid operator");
         return;
     }
   
     console.log(`${num1} ${operator} ${num2} = ${result}`);
   }
   
   calculator(num1, num2, operator); 
  
   