import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
    const addToCart =(product) =>{
        // console.log(product);
        const newCart =[...cart, product];
        setCart(newCart);
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
                <div className='w-1/4'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;