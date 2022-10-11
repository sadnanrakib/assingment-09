import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h4>Quiz Center</h4>
            </div>
            <div className='link'>
                <Link to ="/home">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;