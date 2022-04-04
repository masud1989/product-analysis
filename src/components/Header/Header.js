import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='bg-green-600 p-5'>
                <Link className='text-white mx-10 text-2xl link' to="/">HOME</Link>
                <Link className='text-white mx-10 text-2xl link' to="/shop">REVIEWS</Link>
                <Link className='text-white mx-10 text-2xl link' to="/orders">DASHBOARD</Link>
                <Link className='text-white mx-10 text-2xl link' to="/review">BLOGS</Link>
                <Link className='text-white mx-10 text-2xl link' to="/contact">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;