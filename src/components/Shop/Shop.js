import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Products product={product}></Products>
                ))}
            </div>
            <Cart></Cart>
        </div>
    );
};

export default Shop;
