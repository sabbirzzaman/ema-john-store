import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product }) => {
    const { img, name, price, quantity, shipping } = product;

    return (
        <div className="review-item">
            <div className='review-item-info'>
                <img src={img} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p><b>Price & Shipping:</b> {price} + {shipping}</p>
                    <p><b>Quantity:</b> {quantity}</p>
                </div>
            </div>

            <div className="remove-item"><FontAwesomeIcon icon={faTrash} /></div>
        </div>
    );
};

export default ReviewItem;
