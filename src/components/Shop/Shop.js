import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const addToCartHandle = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Products product={product} addToCartHandle={addToCartHandle} key={product.id}></Products>
                ))}
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;
