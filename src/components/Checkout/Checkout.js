import React from 'react';
import gif from '../../images/giphy.gif'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='checkout-container'>
            <img src={gif} alt="Order placed successfully"/>
        </div>
    );
};

export default Checkout;