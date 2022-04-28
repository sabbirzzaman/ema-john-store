import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/productsDb';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);

        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(keys),
        })
            .then((res) => res.json())
            .then((products) => {
                for (const id in storedCart) {
                    const productQuantity = storedCart[id];
                    const storedProduct = products.find((product) => product._id === id);
                    if (storedProduct) {
                        savedCart.push(storedProduct);
                        storedProduct.quantity = productQuantity;
                    }
                }
                setCart(savedCart);
            });
    }, []);

    return [cart, setCart];
};

export default useCart;
