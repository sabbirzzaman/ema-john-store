import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { addToDb, deleteCart } from '../../utilities/productsDb';
import Cart from '../Cart/Cart';
import Products from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [pagination, setPagination] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [quantity, setQuantity] = useState(12);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&quantity=${quantity}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [currentPage, quantity]);

    useEffect(() => {
        fetch(`http://localhost:5000/productsCount`)
            .then((res) => res.json())
            .then((data) => {
                const totalProducts = data.productsCount;
                const pages = Math.ceil(totalProducts / 12);
                setPagination(pages);
            });
    }, []);

    const addToCartHandle = (product) => {
        const existItem = cart.find((item) => item._id === product._id);

        let newCart = [];

        if (existItem) {
            const restItem = cart.filter((item) => item._id !== product._id);
            existItem.quantity = existItem.quantity + 1;
            newCart = [...restItem, existItem];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDb(product._id);
    };

    const clearCart = () => {
        setCart([]);
        deleteCart();
    };

    return (
        <div className="shop-container">
            <div>
                <div className="filter-container">
                    <h3>Products Per Page</h3>
                    <div className="filter">
                        <select onChange={e => setQuantity(e.target.value)}>
                            <option value='6'>Show 6 products</option>
                            <option value='12' selected>Show 12 products</option>
                            <option value='24'>Show 24 products</option>
                            <option value='308'>Show 30 products</option>
                        </select>
                    </div>
                </div>
                <div className="products-container">
                    {products.map((product) => (
                        <Products
                            product={product}
                            addToCartHandle={addToCartHandle}
                            key={product._id}
                        ></Products>
                    ))}
                </div>
                <div className="pagination">
                    {[...Array(pagination).keys()].map((page) => (
                        <button
                            className={page === currentPage ? 'selected' : ''}
                            key={page}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page + 1}
                        </button>
                    ))}
                </div>
            </div>
            <Cart cart={cart} clearCart={clearCart} containerClass="cart">
                <Link to="/review-orders">
                    <button className="review-cart">
                        Review Order
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </Link>
            </Cart>
        </div>
    );
};

export default Shop;
