import React, { useState } from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);

    const { id, img, name, price, seller, ratings } = props.product;

    return (
        <div className="product">
            <div className='product-top'>
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <h3>Price: ${price}</h3>
            </div>
            <div className="product-bottom">
                <p><b>Manufacturer:</b> {seller}</p>
                <p><b>Rating:</b> {ratings} Stars</p>
                <button className='add-to-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
