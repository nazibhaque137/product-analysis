import React from 'react';
import {Link} from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div>
        <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>

        </nav>
        </div>
    );
};

export default Header;