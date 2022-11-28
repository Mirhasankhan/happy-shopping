import React from 'react';
import './Footer.css';
import kitkart from '../../../Pictures/kitkart.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <section>
            <div className="footer-container">
                <div className="d-flex">
                    <div className="foot">
                        <img src={kitkart} alt="" />
                        <p>KiitCart is best online shopping store in Oman that<br /> features 5+ million products at affordable prices.</p>
                        <input className="inputs" type="email" placeholder="Your Email Address" />
                        <button className="subs-button">Subscribe</button>
                    </div>
                    <div className="subscribe">
                        <p style={{ color: 'white', textAlign: 'left' }}>Contact Info</p>
                        <p style={{ color: 'lightgray', textAlign: 'left' }}>Address: <br />Muscat Ruwi, Oman 1010 Muscat, Oman</p>
                        <p style={{ color: 'lightgray', textAlign: 'left' }}>Phone: <br />+01522568106</p>
                        <p style={{ color: 'lightgray', textAlign: 'left' }}>Email Address:<br />malkrf.odkf@gmail.com</p>
                    </div>
                    <div className="subscribe">
                        <p style={{ color: 'white', textAlign: 'left' }}>My Account</p>
                        <div className="account">
                            <a href="/login">Login</a>
                            <a href="/login">Order History</a>
                            <a href="/login">My Wishlist</a>
                            <a href="/track-your-order">Track Order</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div>
                    <p style={{color:'white',textAlign:'left',marginLeft:'70px',marginTop:'25px'}}>Copyright: Kitcart 2022</p>
                </div>
                <div style={{marginLeft:'300px',marginTop:'22px'}}>
                    <div className="fb-icon">
                    <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <InstagramIcon></InstagramIcon>
                    <YouTubeIcon></YouTubeIcon>
                    <LinkedInIcon></LinkedInIcon>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;