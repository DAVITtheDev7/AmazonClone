export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem = cart.find(cartItem => cartItem.productId === productId);

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
    }

    saveToStorage();
}

export function removeFromCart(productId){
    cart = cart.filter(cartItem => cartItem.productId !== productId);
    saveToStorage();
}
