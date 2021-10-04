import React from 'react';
import './Header.css';
import logo from '../../images/mainlogo.svg';
import { Card, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


const Header = () => {
    return (
        <div className="header">
           <img className="logo" src={logo} alt="" /> 
          <nav><a href="/about">About IELTS</a><a href="/test">For Test Takers</a><a href="/organisations">For Organisations</a><a href="/researchers">For Researchers</a><a href="/services">Services</a></nav>
          
         
        </div>
    );
};

export default Header;