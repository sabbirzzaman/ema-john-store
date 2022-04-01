import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <nav className="header-container">
            <img className='site-logo' onClick={() => navigate('/')} src={logo} alt="Site logo" />

            <div>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
        </nav>
        </div>
    );
};

export default Header;
