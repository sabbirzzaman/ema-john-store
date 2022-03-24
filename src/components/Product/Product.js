import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addToCartHandle }) => {
    const { img, name, price, seller, ratings } = product;

    return (
        <div className="product">
            <div className="product-top">
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <h3>Price: ${price}</h3>
            </div>
            <div className="product-bottom">
                <p>
                    <b>Manufacturer:</b> {seller}
                </p>
                <p>
                    <b>Rating:</b> {ratings} Stars
                </p>
                <button className="add-to-cart" onClick={() => addToCartHandle(product)}>
                    Add to Cart
                    {' '}
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;
