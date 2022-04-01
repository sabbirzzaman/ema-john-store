import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ReviewOrders.css';

const ReviewOrders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const removeItemHandle = (product) => {
        const restItem = cart.filter(item => item.id !== product.id);
        
        setCart(restItem)
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
            <Cart
                cart={cart}
                btnText="Proceed Checkout"
                containerClass="order-cart"
            ></Cart>
        </div>
    );
};

export default ReviewOrders;
