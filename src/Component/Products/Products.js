import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const[cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])

    useEffect(()=>{
       const storedCart = getStoredCart();
       const savedCart=[];
       for (const id in storedCart) {
        // console.log(id);
        const addedProduct = products.find((product) => product.id === parseInt(id));
        

        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
        setCart(savedCart);
       }
    },[products])
    

    const addToCart =(selectedProduct) =>{
        // console.log(selectedProduct);
        let newCart =[];
        const exists = cart.find((product) => product.id === parseInt(selectedProduct.id));
        if(!exists){
            selectedProduct.quantity =  1;
            newCart = [...cart, selectedProduct];
        }else{
            const rest = cart.filter(product => product.id !== parseInt(selectedProduct.id));
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold my-8'>Shop Now</h1>
            <div className='flex'>
                <div className='w-3/4 grid grid-cols-3 gap-y-10'>
                    {
                        products.map((product)=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
                    }
                </div>
                <div className='w-1/4 sticky top-0'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;