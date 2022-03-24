import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props;

    console.log(cart);

    return (
        <div className="cart">
            <div>
                <h2>Order Summary</h2>
                <h3>Selected Items: {cart.length}</h3>
                <h3>Total Price: {cart.length}</h3>
                <h3>Total Shipping Charge: ${cart.length}</h3>
                <h3>Tax: ${cart.length}</h3>
            </div>

            <div>
                <h2>Grand Total: ${cart.length}</h2>
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
