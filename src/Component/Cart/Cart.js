import React from 'react';

const Cart = (props) => {
    const {cart} =props;
    console.log(cart);
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity+product.quantity;
        total = total + parseFloat(product.price*product.quantity);
    }
    return (
        <div>
            <h1>Your Added Products</h1>
             <p>Toatal Product: {quantity}</p>
             <p>Toatal Price: ${total}</p>
             {/* <p>Toatal Shipping: </p> */}
             <p>Tax: </p>
             <p>Grand Total: ${total}</p>
            
        </div>
    );
};

export default Cart;