import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? '#ff9900' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <div className={open ? 'header' : 'header'}>
            <nav className="header-container">
                <img
                    className="site-logo"
                    onClick={() => navigate('/')}
                    src={logo}
                    alt="Site logo"
                />

                <div className="navigation">
                    <div className={open ? 'nav-menu' : 'nav-menu hide-nav'}>
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/shop">Shop</CustomLink>
                        {user ? (
                            <button onClick={() => signOut(auth)}>Sign Out</button>
                        ) : (
                            <CustomLink to="/login">Login</CustomLink>
                        )}
                    </div>
                    <FontAwesomeIcon
                        onClick={() => setOpen(!open)}
                        icon={faBars}
                    ></FontAwesomeIcon>
                </div>
            </nav>
        </div>
    );
};

export default Header;
