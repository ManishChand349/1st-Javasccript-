const originalPrice = 1000;
const discountedPrice = 65;

const calculateDiscountPercentage = (originalPrice , discountedPrice) => {
     let discountAmount = originalPrice - discountedPrice;
     let discountPercentage = (discountAmount / originalPrice) * 100;
     return discountPercentage.toFixed(2);
} 




const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

console.log(discountPercentage + "%");