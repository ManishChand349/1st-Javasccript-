let items = [1,3,5,6,7,8,9,9,]
function doubleCartQuantities(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i] *= 2;
  }
  console.log(cart)
}
doubleCartQuantities(items)