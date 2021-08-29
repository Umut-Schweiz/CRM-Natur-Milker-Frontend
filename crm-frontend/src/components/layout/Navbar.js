import React, { useState } from 'react';
import  SignUpButtom  from './SignUpButtom';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';



const Navbar = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };



    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img className="logo-image" src="../images/Natur Milker Logo.png" alt="natur-milker" ></img>                    
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/clients'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            My Account
                        </Link>
                    </li>                  
                  
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/contact-us'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Contact Us <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <SignUpButtom className="signup-btn"/>
            </nav>
        </>
    )
}

export default Navbar
