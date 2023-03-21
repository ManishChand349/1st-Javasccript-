let costPerDish = 34;
let numberofPerople = 3;

let bill = calculateBillPerperson(costPerDish, numberofPerople)

function calculateBillPerperson(costPerDish , numberofPerople){
     let totalbill = costPerDish * numberofPerople;
     let billPerPerson = totalbill / numberofPerople;
     return{
          totalBill: totalbill,
          billPerPerson: billPerPerson
     } 
}

console.log(bill.totalBill);
console.log(bill.billPerPerson);