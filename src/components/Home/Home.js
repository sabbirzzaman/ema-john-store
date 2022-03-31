import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/home.png'
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const toShop = () => {
        navigate('/shop')
    }
    return (
        <div className='hero-container'>
            <div className="hero-content">
                <p><span>Sale up to 70% off</span></p>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button onClick={toShop}>SHOP NOW</button>
            </div>
            <div className="hero-image">
                <img src={image} alt="Hero" />
            </div>
        </div>
    );
};

export default Home;