// localStorage.getItem('cart');
let cart=JSON.parse(localStorage.getItem('cart')) || [];
let cartQuantity = 0;
cart.forEach((item) => {
    cartQuantity += item.quantity;
})
console.log(cart);

