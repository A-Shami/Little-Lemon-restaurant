import React, { useState } from "react";
import logo from './logo.png';
import './Nav.css';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Nav() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <NavLink to='/' className="logo">
                <img src={logo} alt='logo' height='80px' />
            </NavLink>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <NavLink to='/' onClick={closeMenu} className={location.pathname === '/' ? 'active-link' : ''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/Menu' onClick={closeMenu} className={location.pathname === '/Menu' ? 'active-link' : ''}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to='/About' onClick={closeMenu} className={location.pathname === '/About' ? 'active-link' : ''}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/Reservation' onClick={closeMenu} className={location.pathname === '/Reservation' ? 'active-link' : ''}>Reservation</NavLink>
                </li>
                <li>
                    <NavLink to='/Order' onClick={closeMenu} className={location.pathname === '/Order' ? 'active-link' : ''}>Order Now</NavLink>
                </li>
                <li>
                    <NavLink to='/Login' onClick={closeMenu} className={location.pathname === '/Login' ? 'active-link' : ''}>Log in</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
