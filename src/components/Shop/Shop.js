import React, { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/productsDb';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for(const id in storedCart) {
            const productQuantity = storedCart[id];

            const storedProduct = products.find(product => product.id === id);

            if(storedProduct) {
                savedCart.push(storedProduct);
                storedProduct.quantity = productQuantity;
            }
        }
        setCart(savedCart);
    }, [products]);

    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const savedCart = [];

    //     for (const id in storedCart) {
    //         const productQuantity = storedCart[id];

    //         const storedProduct = products.find((product) => product.id === id);
    //         if (storedProduct) {
    //             storedProduct.quantity = productQuantity;
    //             savedCart.push(storedProduct);
    //         }
    //     }
    //     setCart(savedCart);

    // }, [products]);

    const addToCartHandle = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Products
                        product={product}
                        addToCartHandle={addToCartHandle}
                        key={product.id}
                    ></Products>
                ))}
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;
