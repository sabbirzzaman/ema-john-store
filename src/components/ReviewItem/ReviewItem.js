import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, removeItemHandle }) => {
    const { img, name, price, quantity, shipping } = product;

    return (
        <div className="review-item">
            <div className='review-item-info'>
                <img src={img} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p><b>Price & Shipping:</b> ${price} + ${shipping}</p>
                    <p><b>Quantity:</b> {quantity}</p>
                </div>
            </div>

            <div onClick={() => removeItemHandle(product)} className="remove-item"><FontAwesomeIcon icon={faTrashAlt} /></div>
        </div>
    );
};

export default ReviewItem;
