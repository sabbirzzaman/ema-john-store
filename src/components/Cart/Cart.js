import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;

    for(const product of cart) {
        totalPrice = product.price + totalPrice;
        totalShipping = product.shipping + totalShipping;
    }

    const totalAmount = totalPrice + totalShipping;

    const tax = (totalAmount * 5 / 100).toFixed(2);

    return (
        <div className="cart">
            <div>
                <h2>Order Summary</h2>
                <h3>Selected Items: {cart.length}</h3>
                <h3>Total Price: ${totalPrice}</h3>
                <h3>Total Shipping Charge: ${totalShipping}</h3>
                <h3>Tax: ${tax}</h3>
            </div>

            <div>
                <h2>Grand Total: ${totalPrice + totalShipping + parseFloat(tax)}</h2>
                <button className="clear-cart">
                    Clear Cart <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="review-cart">
                    Review Order <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Cart;
