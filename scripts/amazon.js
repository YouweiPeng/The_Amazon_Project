let productHtml = '';
products.forEach((product) =>{
    const html=`
        <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars*10}.png">
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary 
        js-add-to-cart-button" data-product-id="${product.id}" data-product-price="${product.priceCents}" data-product-name="${product.name}" data-product-image="${product.image}" >
        Add to Cart
        </button>
    </div>
    `
    productHtml += html;
})
document.querySelector('.js-products-grid').innerHTML = productHtml;

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const productPrice = button.dataset.productPrice;
        const productName = button.dataset.productName;
        const productImage = button.dataset.productImage;
        matchItem = '';

        cart.forEach((item) => {
            if(item.productId === productId){
                item.quantity++;
                matchItem=item.productId;
            };
        });

        console.log(matchItem);

        if (matchItem === ''){
            cart.push({
                productId: productId,
                quantity: 1,
                price:productPrice,
                name:productName,
                image:productImage
            });
        }
        let cartQuantity = getCartQuantity();

        console.log(cart)
        console.log(cartQuantity)
        localStorage.setItem('cart', JSON.stringify(cart));

        });
    
});

document.querySelector('.js-clear-cart-button').addEventListener('click', () => {
    cart=[];
    localStorage.removeItem('cart');
    cartQuantity=getCartQuantity();
    console.log(cart)
    console.log(cartQuantity)
});
getCartQuantity();
function getCartQuantity(){
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    return cartQuantity;
}