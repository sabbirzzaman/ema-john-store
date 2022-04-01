import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import './ReviewOrders.css';

const ReviewOrders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className="order-container">
            <div>

            </div>
            <Cart cart={cart} btnText='Proceed Checkout' containerClass='order-cart'></Cart>
        </div>
    );
};

export default ReviewOrders;
