import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
     <h1>Smart Watch World Header</h1>
        <nav>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>

        </nav>
        </div>
    );
};

export default Header;