import React from 'react';

const Cart = (props) => {
    const {cart} =props;
    console.log(cart);
    let total = 0;
    for (const product of cart) {
        total = total + parseFloat(product.price);
        
    }
    return (
        <div>
            <h1>Your Added Products</h1>
             <p>Toatal Product: {cart.length}</p>
             <p>Toatal Price: ${total}</p>
             {/* <p>Toatal Shipping: </p> */}
             <p>Tax: </p>
             <p>Grand Total: </p>00
            
        </div>
    );
};

export default Cart;