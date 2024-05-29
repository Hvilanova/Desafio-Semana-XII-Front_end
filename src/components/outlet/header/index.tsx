
import React from 'react';
import './style.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1><img src="https://compasshenrique.s3.amazonaws.com/Logo.svg" alt="" /></h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Getting Taxi</a></li>
            <li><a href="#services">Mobile App</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><img src="https://compasshenrique.s3.amazonaws.com/bell-icon.svg"></img></li>
            <li><img src="https://compasshenrique.s3.amazonaws.com/user-avatar.svg"></img></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

