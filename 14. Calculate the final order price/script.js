const calculateTotalCost = (cart) => {
     let totalCost =0;
     cart.forEach(item => {
          totalCost += item.unitPrice * item.quantity;
          
     });
     return totalCost;
}

let cart = [
     { unitPrice: 9, quantity:2},
     { unitPrice: 3, quantity: 6},
     { unitPrice: 4, quantity: 12},
];
const totalCost = calculateTotalCost(cart);
console.log(totalCost);