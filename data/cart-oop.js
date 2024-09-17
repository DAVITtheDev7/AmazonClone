const cart = {
    cartItems: undefined,

    loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) || [];
    },

    saveToStorage(){
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },

    addToCart(productId){
        let matchingItem = this.find(cartItem => cartItem.productId === productId);
    
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
                productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
    
        this.saveToStorage();
    },

    removeFromCart(productId){
        this.cartItems = this.cartItems.filter(cartItem => cartItem.productId !== productId);
        this.saveToStorage();
    },

    updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){  
            matchingItem = cartItem;
        }
        });
    
        matchingItem.deliveryOptionId = deliveryOptionId;
    
        saveToStorage();
    }

};


cart.loadFromStorage();
