import React, { useState } from 'react';
import logo from '../images/logo.svg';
import hamburgericon from '../images/hamburgericon.svg';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className={`navbar ${openMenu ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt="Little Lemon's Logo, featuring a lemon and the name 'Little Lemon'" />
            </a>

            {/* Hamburger Menu for Mobile display */}
            <div className="menu-icon" onClick={toggleMenu} >
                <img src={hamburgericon} alt="Clickable hamburger icon" />
            </div>

            <ul className={`nav-links ${openMenu ? "visible" : ""}`}>
                <li>
                    <a href="/" className="hover-underline-animation">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Reserve a Table</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;