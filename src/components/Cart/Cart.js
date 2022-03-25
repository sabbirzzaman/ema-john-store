import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { deleteCart } from '../../utilities/productsDb';

const Cart = ({ cart }) => {
    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;

    for(const product of cart) {
        quantity = product.quantity + quantity;
        totalPrice = product.price + totalPrice * product.quantity;
        totalShipping = product.shipping + totalShipping * quantity;
    }

    const totalAmount = totalPrice + totalShipping;

    const tax = parseFloat((totalAmount * 5 / 100).toFixed(2));

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <div>
                <h2>Order Summary</h2>
                <h3>Selected Items: {quantity}</h3>
                <h3>Total Price: ${totalPrice}</h3>
                <h3>Total Shipping Charge: ${totalShipping}</h3>
                <h3>Tax: ${tax}</h3>
            </div>

            <div>
                <h2>Grand Total: ${grandTotal}</h2>
                <button className="clear-cart" onClick={deleteCart}>
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
