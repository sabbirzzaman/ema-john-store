import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/productsDb';

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const productQuantity = storedCart[id];

            const storedProduct = products.find((product) => product.id === id);

            if (storedProduct) {
                savedCart.push(storedProduct);
                storedProduct.quantity = productQuantity;
            }
        }
        setCart(savedCart);
    }, [products]);

    return [cart,setCart];
};

export default useCart;

