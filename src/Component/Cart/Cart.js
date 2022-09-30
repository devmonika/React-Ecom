import React from 'react';

const Cart = (props) => {
    const {cart} =props;
    return (
        <div>
            cart:{cart.length}
        </div>
    );
};

export default Cart;