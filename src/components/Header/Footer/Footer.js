import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="foot">
            <footer>IELTS-Go For Abroad</footer>
            <nav><a href="/about">About IELTS</a><br /><a href="/organisations">Organisations</a><br />
            <a href="/researchers">Researchers</a></nav>
        </div>
    );
};

export default Footer;