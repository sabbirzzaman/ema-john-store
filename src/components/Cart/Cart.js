import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, btnText, containerClass, clearCart }) => {
    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;

    for(const product of cart) {
        quantity = product.quantity + quantity;

        let price = product.price * product.quantity;
        totalPrice = totalPrice + price;
        
        totalShipping = product.shipping + totalShipping;
    }

    const tax = parseFloat((totalPrice * 5 / 100).toFixed(2));

    const grandTotal = totalPrice + totalShipping + tax;

    const navigate = useNavigate();
    const goReviewOrders = () => {
        navigate('/review-orders')
    }

    return (
        <div className={containerClass}>
            <div>
                <h2>Order Summary</h2>
                <h3>Total Quantity: {quantity}</h3>
                <h3>Total Price: ${totalPrice}</h3>
                <h3>Total Shipping: ${totalShipping}</h3>
                <h3>Tax: ${tax}</h3>
            </div>

            <div>
                <h2>Grand Total: ${grandTotal}</h2>
                <button className="clear-cart" onClick={clearCart}>
                    Clear Cart<FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={goReviewOrders} className="review-cart">
                    {btnText}<FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Cart;
