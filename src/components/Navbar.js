import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    let [button, setButton] = useState(true);

    const menuClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="logo">
                        {/* <img src={logo} alt="Logo" /> */}
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={menuClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact-us" className='nav-links' onClick={closeMobileMenu}>ContactUs</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn-outline">Contact Us</Button>}
                </div>
            </nav>
        </>
    );
};
export default Navbar;
