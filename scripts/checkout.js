document.querySelector('.js-quantity-count').innerHTML = cartQuantity;
const date = new Date();

const options = { timeZone: 'America/Edmonton' };
const weekday = date.toLocaleString('en-US', { weekday: 'long', ...options });
const month = date.toLocaleString('en-US', { month: 'long', ...options });
const day = date.toLocaleString('en-US', { day: 'numeric', ...options });
let checkoutHTML = '';
let i=1;
cart.forEach((item) => {
    orderSummary=document.querySelector('.order-summary')
    checkoutHTML += `
        <div class="cart-item-container">
        <div class="delivery-date">
        Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
        <img class="product-image"
            src="${item.image}">

        <div class="cart-item-details">
            <div class="product-name">
            ${item.name}
            </div>
            <div class="product-price">
            $${item.price/100}
            </div>
            <div class="product-quantity">
            <span>
                Quantity: <span class="quantity-label">${item.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
                Update
            </span>
            <span class="delete-quantity-link link-primary">
                Delete
            </span>
            </div>
        </div>

        <div class="delivery-options">
            <div class="delivery-options-title">
            Choose a delivery option:
            </div>
            <div class="delivery-option">
            <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${i}">
            <div>
                <div class="delivery-option-date">
                Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                FREE Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${i}">
            <div>
                <div class="delivery-option-date">
                Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                $4.99 - Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${i}">
            <div>
                <div class="delivery-option-date">
                Monday, June 13
                </div>
                <div class="delivery-option-price">
                $9.99 - Shipping
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
`
    console.log(checkoutHTML);
    orderSummary.innerHTML = checkoutHTML;
    i++;
});

console.log(weekday); 
console.log(month);   
console.log(day);     