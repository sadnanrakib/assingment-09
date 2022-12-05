import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h2>Quiz Center</h2>
            </div>
            <div className='link'>
                <Link to ="/home">Home</Link>
                
                <Link to ="/about">Statistics</Link>
                <Link to ='/blog'>Blog</Link>
                
            </div>
        </nav>
    );
};

export default Header;