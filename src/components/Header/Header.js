import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return (
        <div className={open ? 'header' : 'header'}>
            <nav className="header-container">
                <img
                    className="site-logo"
                    onClick={() => navigate('/')}
                    src={logo}
                    alt="Site logo"
                />

                <div>
                    <div className={open ? 'nav-menu hide-nav' : 'nav-menu'}>
                        <Link to="/home">Home</Link>
                        <Link to="/shop">Shop</Link>
                    </div>
                    <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faBars}></FontAwesomeIcon>
                </div>
            </nav>
        </div>
    );
};

export default Header;
