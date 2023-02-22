import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer-main-container'>
        <div className='footer-content-container'>

        <address>
            <span>123, Fake Street</span>
            <span>WY</span>
            <a href='tel:123456789'>123-456-789</a>
            <a href='mail:mail@example.com'>mail@example.com</a>
        </address>
        </div>
    </div>
  )
}
