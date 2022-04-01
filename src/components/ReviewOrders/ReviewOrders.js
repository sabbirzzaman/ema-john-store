import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { deleteCart, removeFromDb } from '../../utilities/productsDb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ReviewOrders.css';

const ReviewOrders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const removeItemHandle = (product) => {
        const restItem = cart.filter((item) => item.id !== product.id);
        setCart(restItem);
        removeFromDb(product.id);
    };

    const clearCart = () => {
        setCart([]);
        deleteCart();
    };

    return (
        <div className="order-container">
            <div>
                {cart.map((product) => (
                    <ReviewItem
                        key={product.id}
                        removeItemHandle={removeItemHandle}
                        product={product}
                    ></ReviewItem>
                ))}
            </div>
            <Cart cart={cart} containerClass="order-cart" clearCart={clearCart}>
                <Link to='/checkout'>
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
