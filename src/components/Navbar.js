import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/logo.jpg';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <nav>
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className={`navigation ${drawerOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="drawer-icon" onClick={toggleDrawer}>
                    <div className={`bar ${drawerOpen ? 'open' : ''}`} />
                    <div className={`bar ${drawerOpen ? 'open' : ''}`} />
                    <div className={`bar ${drawerOpen ? 'open' : ''}`} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
