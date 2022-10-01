import React from 'react';

const Product = (props) => {
    const {name, price, image_link, description, category, brand} = props.product; 
    const{addToCart} = props;
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src={image_link} alt="" className='w-full h-44'/></figure>
            <div className="card-body justify-start">
                <h2 className="card-title justify-start">
                Name: {name}
                {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className=''>
                <p><span className='font-bold'>Price:</span> {price}$</p>
                <p><span className='font-bold'>Brand:</span> {brand}</p>
                
                </div>
                <div className="card-actions justify-start">
                    <button onClick={()=>addToCart(props.product)} className="btn btn-outline btn-primary">Add To cart</button>
                    <button className="btn btn-outline btn-secondary">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Product;