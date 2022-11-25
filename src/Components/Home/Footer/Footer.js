import React from 'react';
import './Footer.css';
import kitkart from '../../../Pictures/kitkart.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="d-flex">
                <div className="foot">
                    <img src={kitkart} alt=""/>
                    <p>KiitCart is best online shopping store in Oman that<br/> features 5+ million products at affordable prices.</p>
                    <input type="email" pattern="Your Email Address"/>
                    <button>Subscribe</button>
                </div>
                <div className="foot"> 
                    <p>Contact Info</p>
                    <p>Address</p>
                    <p>Muscat Ruwi, Oman 1010 Muscat, Oman</p>
                    <p>Phone:</p>
                    <p>+01522568106</p>
                    <p>Email Address:</p>
                    <p>malkrf.odkf@gmail.com</p>
                    
                </div>
                <div>
                    <p>My Account</p>
                    <a href="">Login</a>
                    <a href="">Order History</a>
                    <a href="">My Wishlist</a>
                    <a href="">Track Order</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;