import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { addToDb } from '../../utilities/productsDb';
import Cart from '../Cart/Cart';
import Products from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const addToCartHandle = (product) => {
        const existItem = cart.find((item) => item.id === product.id);

        let newCart = [];

        if (existItem) {
            const restItem = cart.filter((item) => item.id !== product.id);
            existItem.quantity = existItem.quantity + 1;
            newCart = [...restItem, existItem];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

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
            <Cart cart={cart} btnText='Review Order' containerClass='cart'></Cart>
        </div>
    );
};

export default Shop;
