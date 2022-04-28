import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { deleteCart, removeFromDb } from '../../utilities/productsDb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ReviewOrders.css';

const ReviewOrders = () => {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();
    
    const removeItemHandle = (product) => {
        const restItem = cart.filter((item) => item._id !== product._id);
        setCart(restItem);
        removeFromDb(product._id);
    };

    const clearCart = () => {
        setCart([]);
        deleteCart();
    };


    return (
        <div className="order-container">
            <div>
                {cart.length === 0 && (
                    <div className="empty-cart">
                        <h2>There is no item in this cart!</h2>
                        <button onClick={() => navigate('/shop')}>Continue Shopping</button>
                    </div>
                )}

                {cart.map((product) => (
                    <ReviewItem
                        key={product._id}
                        removeItemHandle={removeItemHandle}
                        product={product}
                    ></ReviewItem>
                ))}
            </div>
            <Cart cart={cart} containerClass="order-cart" clearCart={clearCart}>
                <Link to="/checkout">
                    <button onClick={clearCart} className="review-cart">
                        Proceed Checkout
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </Link>
            </Cart>
        </div>
    );
};

export default ReviewOrders;
